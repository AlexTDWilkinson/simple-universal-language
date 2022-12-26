const { Pool } = require("pg");

const db = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

const createSqlUpdateString = ({ updates }: { updates: any }) => {
  const updateString = Object.entries(updates)
    .map(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        return `${key} = NULL`;
      }
      if (value && typeof value === "string") {
        value = value?.toLowerCase().replace(/[^\p{L}\p{N}\s]/gimu, "");
        return `${key} = '${value}'`;
      }

      return `${key} = ${value}`;
    })
    .join(", ");

  return updateString;
};

const getDictionaryRows = async () => {
  const result = await db.query(
    `SELECT * FROM "SUL" ORDER BY LENGTH(WORD_SUL) ASC, WORD_SUL ASC LIMIT 200;`
  );

  return result?.rows;
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
    await db.query(
      `UPDATE "SUL" SET ${updateString} WHERE WORD_SUL = '${word_sul}';`
    );
  } catch (error) {
    console.log(error);
  }
};

const moveWordUp = async ({ word_sul }: { word_sul?: string }) => {
  try {
    await db.query("BEGIN");

    let word = await db.query(
      `SELECT * FROM "SUL" WHERE WORD_SUL = '${word_sul}' LIMIT 1;`
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
    AND ID < ${word?.id} ORDER BY ID DESC LIMIT 1;`
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
    WHERE ID = ${word?.id};`
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
      `SELECT * FROM "SUL" WHERE WORD_SUL = '${word_sul}' LIMIT 1;`
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
    AND ID > ${word?.id} ORDER BY ID ASC LIMIT 1;`
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
    WHERE ID = ${word?.id};`
    );

    await db.query("COMMIT");
  } catch (error) {
    await db.query("ROLLBACK");
    throw error;
  }
};

const getSulWord = async ({ word }: { word: string }) => {
  const result = await db.query(
    `SELECT * FROM "SUL" WHERE WORD_SUL = '${word}' LIMIT 1;`
  );

  return result?.rows?.[0];
};

export {
  moveWordDown,
  moveWordUp,
  updateSulDictionaryRow,
  getDictionaryRows,
  getSulWord,
};
