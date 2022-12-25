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
        value = value?.toLowerCase().replace(/[^a-zA-Z0-9\s一-龯]/gim, "");
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

  // console.log(updateString);

  try {
    await db.query(
      `UPDATE "SUL" SET ${updateString} WHERE WORD_SUL = '${word_sul}';`
    );
  } catch (error) {
    console.log(error);
  }
};

const getSulWord = async ({ word }: { word: string }) => {
  const result = await db.query(
    `SELECT * FROM "SUL" WHERE WORD_SUL = '${word}' LIMIT 1;`
  );

  return result?.rows?.[0];
};

export { updateSulDictionaryRow, getDictionaryRows, getSulWord };
