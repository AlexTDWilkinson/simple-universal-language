import { getChainLetter } from "./utils";

const { Pool } = require("pg");

const db = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

const createSqlUpdateString = ({ updates }: { updates: any }) => {
  const updateString = Object.entries(updates)
    .map(([key, value]) => {
      key = key.replace(/[^a-zA-Z_]/gim, "");
      if (value === null || value === undefined || value === "") {
        return `${key} = NULL`;
      }
      if (value && typeof value === "string") {
        value = value?.toLowerCase().replace(/[^\p{L}\p{N}\s+]/gimu, "");
        return `${key} = '${value}'`;
      }
      if (value && typeof value === "number") {
        return `${key} = ${value}`;
      }
    })
    .join(", ");

  return updateString;
};

const createSqlInsertString = ({ inserts }: { inserts: any }) => {
  const insertStringColumns =
    Object.keys(inserts).length > 0
      ? `(${Object.keys(inserts)
          .map((k) => k.replace(/[^a-zA-Z_]/gim, ""))
          .join(", ")})`
      : "";

  const insertStringValues =
    Object.keys(inserts).length > 0
      ? `VALUES (${Object.values(inserts)
          .map((value) => {
            if (value === null || value === undefined || value === "") {
              return "NULL";
            }
            if (value && typeof value === "string") {
              value = value?.toLowerCase().replace(/[^\p{L}\p{N}\s+]/gimu, "");
              return `'${value}'`;
            }
            if (value && typeof value === "number") {
              return value;
            }
          })
          .join(", ")})`
      : "";

  return { insertStringColumns, insertStringValues };
};

const getDictionaryRows = async () => {
  const result = await db.query(`SELECT * FROM "SUL" ORDER BY ID LIMIT 500;`);

  let resultConjoined = await db.query(`SELECT * FROM "SUL_CONJOINED";`);

  const finalResult: any = [];

  // insert conjoined rows into result by adding it wherever the word is found
  result?.rows.forEach((word: any, i: number) => {
    finalResult.push(word);

    resultConjoined.rows.forEach((conjoinedWord: any) => {
      let conjoinedWordStart = "";

      const chainingLetter = getChainLetter({ word: conjoinedWord?.word_sul });

      if (chainingLetter) {
        conjoinedWordStart = conjoinedWord.word_sul.split(chainingLetter)[0];
      }

      if (conjoinedWordStart && word.word_sul === conjoinedWordStart) {
        conjoinedWord.id = null;
        finalResult.push(conjoinedWord);
      }
    });
  });

  return finalResult;
};

const getChatRows = async () => {
  let result = await db.query(
    `SELECT * FROM "SUL_CHAT" ORDER BY CREATED_AT DESC LIMIT 10;`
  );

  if (result.rows) {
    return result?.rows;
  }
};

const addChatRow = async ({
  author,
  message,
}: {
  author: string;
  message: string;
}) => {
  author = author.replace(/[^\p{L}\p{N}\s+]/gimu, "");
  message =
    message
      .replace(/[^\p{L}\p{N}\s+.()<>]/gimu, "")
      .replace(/[^aeioumtfskrjv\s.()<>]/gim, "")
      .trim() || "";

  if (author && message) {
    await db.query(
      `INSERT INTO "SUL_CHAT" (AUTHOR, MESSAGE) VALUES ($1, $2);`,
      [author, message]
    );
  }
};

const updateSulDictionaryRow = async ({
  word_sul,
  word_english,
  definition_english,
  word_japanese,
  definition_japanese,
}: {
  word_sul?: string;
  word_english?: string;
  definition_english?: string;
  word_japanese?: string;
  definition_japanese?: string;
}) => {
  const updateString = createSqlUpdateString({
    updates: {
      word_english,
      definition_english,
      word_japanese,
      definition_japanese,
    },
  });

  try {
    await db.query(`UPDATE "SUL" SET ${updateString} WHERE WORD_SUL = $1;`, [
      word_sul,
    ]);
  } catch (error) {
    console.log(error);
  }
};

const updateSulConjoinedRow = async ({
  word_sul,
  word_english,
  definition_english,
  word_japanese,
  definition_japanese,
}: {
  word_sul?: string;
  word_english?: string;
  definition_english?: string;
  word_japanese?: string;
  definition_japanese?: string;
}) => {
  if (!word_sul) {
    return;
  }

  word_sul = word_sul?.toLowerCase().replace(/[^a-z+]/gim, "");

  let wordSulArray: any = [];

  const chainingLetter = getChainLetter({ word: word_sul });

  if (chainingLetter) {
    wordSulArray = word_sul?.split(chainingLetter) || [];
  }

  if (wordSulArray?.length < 2) {
    return;
  }

  const wordSulArrayString = wordSulArray
    .map((word: any) => `'${word.trim()}'`)
    .join(", ");

  let result = await db.query(
    `SELECT * FROM "SUL" WHERE WORD_SUL IN (${wordSulArrayString});`
  );

  const wordSulArrayFromDb = result?.rows || [];

  if (wordSulArrayFromDb?.length !== wordSulArray.length) {
    return;
  }

  // check if this word is already in the conjoined table

  result = await db.query(
    `SELECT * FROM "SUL_CONJOINED" WHERE WORD_SUL = $1;`,
    [word_sul]
  );

  const wordSulConjoinedFromDb = result?.rows?.[0];

  if (
    !word_english &&
    !definition_english &&
    !word_japanese &&
    !definition_japanese
  ) {
    // delete the row
    return await db.query(`DELETE FROM "SUL_CONJOINED" WHERE WORD_SUL = $1;`, [
      word_sul,
    ]);
  } else if (wordSulConjoinedFromDb?.id) {
    // update the row

    const updateString = createSqlUpdateString({
      updates: {
        word_english,
        definition_english,
        word_japanese,
        definition_japanese,
      },
    });

    return await db.query(
      `UPDATE "SUL_CONJOINED" SET ${updateString} WHERE WORD_SUL = $1;`,
      [word_sul]
    );
  } else {
    const insert = createSqlInsertString({
      inserts: {
        word_sul,
        word_english,
        definition_english,
        word_japanese,
        definition_japanese,
      },
    });

    await db.query(
      `INSERT INTO "SUL_CONJOINED" ${insert.insertStringColumns} ${insert.insertStringValues};`
    );
  }
};

const moveWordUp = async ({ word_sul }: { word_sul?: string }) => {
  try {
    await db.query("BEGIN");

    let word = await db.query(
      `SELECT * FROM "SUL" WHERE WORD_SUL = $1 LIMIT 1;`,
      [word_sul]
    );

    word = word?.rows?.[0];

    if (!word?.id) {
      return;
    }

    const result = await db.query(
      `SELECT * FROM "SUL" 
    WHERE WORD_ENGLISH IS NULL
    AND DEFINITION_ENGLISH IS NULL
    AND WORD_JAPANESE IS NULL
    AND DEFINITION_JAPANESE IS NULL
    AND ID < $1 ORDER BY ID DESC LIMIT 1;`,
      [word?.id]
    );

    const wordToMoveTo = result?.rows?.[0];

    if (!wordToMoveTo?.id) {
      return;
    }

    await db.query(
      `UPDATE "SUL" SET 
    WORD_ENGLISH = ${word?.word_english ? `'${word?.word_english}'` : "NULL"},
    DEFINITION_ENGLISH = ${
      word?.definition_english ? `'${word?.definition_english}'` : "NULL"
    },
    WORD_JAPANESE = 
    ${word?.word_japanese ? `'${word?.word_japanese}'` : "NULL"},
    DEFINITION_JAPANESE = 
    ${word?.definition_japanese ? `'${word?.definition_japanese}'` : "NULL"}
    WHERE ID = ${wordToMoveTo?.id};`
    );

    await db.query(
      `UPDATE "SUL" SET
    WORD_ENGLISH = NULL,
    DEFINITION_ENGLISH = NULL,
    WORD_JAPANESE = NULL,
    DEFINITION_JAPANESE = NULL
    WHERE ID = $1;`,
      [word?.id]
    );

    await db.query("COMMIT");
  } catch (error) {
    await db.query("ROLLBACK");
    throw error;
  }
};

const moveWordDown = async ({ word_sul }: { word_sul?: string }) => {
  try {
    await db.query("BEGIN");

    let word = await db.query(
      `SELECT * FROM "SUL" WHERE WORD_SUL = $1 LIMIT 1;`,
      [word_sul]
    );

    word = word?.rows?.[0];

    if (!word?.id) {
      return;
    }

    const result = await db.query(
      `SELECT * FROM "SUL" 
    WHERE WORD_ENGLISH IS NULL
    AND DEFINITION_ENGLISH IS NULL
    AND WORD_JAPANESE IS NULL
    AND DEFINITION_JAPANESE IS NULL
    AND ID > $1 ORDER BY ID ASC LIMIT 1;`,
      [word?.id]
    );

    const wordToMoveTo = result?.rows?.[0];

    if (!wordToMoveTo?.id) {
      return;
    }

    await db.query(
      `UPDATE "SUL" SET 
    WORD_ENGLISH = ${word?.word_english ? `'${word?.word_english}'` : "NULL"},
    DEFINITION_ENGLISH = ${
      word?.definition_english ? `'${word?.definition_english}'` : "NULL"
    },
    WORD_JAPANESE = 
    ${word?.word_japanese ? `'${word?.word_japanese}'` : "NULL"},
    DEFINITION_JAPANESE = 
    ${word?.definition_japanese ? `'${word?.definition_japanese}'` : "NULL"}
    WHERE ID = ${wordToMoveTo?.id};`
    );

    await db.query(
      `UPDATE "SUL" SET
    WORD_ENGLISH = NULL,
    DEFINITION_ENGLISH = NULL,
    WORD_JAPANESE = NULL,
    DEFINITION_JAPANESE = NULL
    WHERE ID = $1;`,
      [word?.id]
    );

    await db.query("COMMIT");
  } catch (error) {
    await db.query("ROLLBACK");
    throw error;
  }
};

const getSulWord = async ({ word }: { word: string }) => {
  const result = await db.query(
    `SELECT * FROM "SUL" WHERE WORD_SUL = $1 LIMIT 1;`,
    [word]
  );

  return result?.rows?.[0];
};

const getSulConjoinedWord = async ({ word }: { word: string }) => {
  let result = await db.query(
    `SELECT * FROM "SUL_CONJOINED" WHERE WORD_SUL = $1 LIMIT 1;`,
    [word]
  );

  return result?.rows?.[0];
};

const validateCredentials = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  username = username?.replace(/[^\p{L}\p{N}]/gimu, "");
  password = password?.replace(/[^\p{L}\p{N}-]/gimu, "");
  const result = await db.query(
    `SELECT ID FROM "USER" 
    WHERE USERNAME = $1
    AND PASSWORD = $2`,
    [username, password]
  );

  if (!result?.rows?.[0]?.id) {
    return null;
  }

  return result?.rows?.[0]?.id;
};

const validateUserId = async ({ id }: { id: string }) => {
  id = id?.replace(/[^A-Za-z0-9-]/gim, "");

  const result = await db.query(`SELECT ID FROM "USER" WHERE ID = $1`, [id]);

  return result?.rows?.[0]?.id ? true : false;
};

const convertEnglishToSul = async ({ sentence }: { sentence: string }) => {
  sentence = sentence?.toLowerCase();
  const sentenceArray = sentence?.split(/(\s+|x|X|\+)/gim);

  const result = await db.query(
    `SELECT * FROM "SUL"   WHERE WORD_ENGLISH = ANY($1::text[]) ORDER BY ID`,
    [sentenceArray]
  );

  const sulArray = sentenceArray?.map((word) => {
    if (word === " ") return " ";
    if (word === "X" || word === "x") return "r";
    if (word === "+") return "m";
    if (word === "b") return "b";

    const sulWord = result?.rows?.find(
      (row: any) => row?.word_english === word
    );
    return sulWord?.word_sul || "???";
  });

  return sulArray?.join("");
};

export {
  convertEnglishToSul,
  validateUserId,
  validateCredentials,
  addChatRow,
  getChatRows,
  getSulConjoinedWord,
  updateSulConjoinedRow,
  moveWordDown,
  moveWordUp,
  updateSulDictionaryRow,
  getDictionaryRows,
  getSulWord,
};
