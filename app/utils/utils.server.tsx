import fetch from "isomorphic-fetch";
import csvtojson from "csvtojson";
import { google } from "googleapis";

const sulSpreadsheetId = "1glSLnn2be7C-eS3CHJv_IWRmFpEWavt6ah41MJcMqZo";
const apiKey = process.env.GOOGLE_API_KEY;
const sheets = google.sheets({ version: "v4", auth: apiKey });

const fetchGoogleSheetData = async (range: string) => {
  const url = `https://docs.google.com/spreadsheets/d/${sulSpreadsheetId}/gviz/tq?tqx=out:csv&range=${encodeURIComponent(
    range
  )}`;

  //   console.log(url);

  const response = await fetch(url);
  const csvData = await response.text();

  //   console.log("csvData", csvData);

  const jsonData = await csvtojson().fromString(csvData);

  console.log("jsonData", jsonData.slice(0, 10));

  return jsonData;
};

const getDictionary = async () => {
  return await fetchGoogleSheetData("dictionary!A1:Z1000");
};

const getChatRows = async () => {
  const chatData = await fetchGoogleSheetData("chat!A1:C1000");
  return chatData.map(({ author, message, createdAt }) => ({
    author,
    message,
    createdAt,
  }));
};

const addChatRow = async ({
  author,
  message,
}: {
  author: string;
  message: string;
}) => {
  if (!apiKey)
    throw new Error("No API key found. Talk to Alex if you need this.");
  if (!author) return;
  if (!message) return;
  const newRow = [author, message, new Date().toISOString()];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sulSpreadsheetId,
    range: "chat!A1:C1",
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [newRow],
    },
  });
};

enum Language {
  English = "english",
  Mandarin = "mandarin",
}

const convertLanguageToSul = async ({
  dictionary,
  sentence,
  language,
}: {
  dictionary: any;
  sentence: string;
  language: Language;
}) => {
  const sentenceArray = sentence.split(/(\s+|X|\+)/gm);

  //   console.log(dictionary);

  const sulArray = sentenceArray.map((word) => {
    if (word === " ") return " ";
    if (word === "X") return "r";
    if (word === "+") return "m";

    console.log("word", word);

    const sulWord = dictionary.find(
      (row: any) => row?.[`word_${language}`] === word
    );

    return sulWord ? sulWord.word_sul : "???";
  });

  return sulArray.join("");
};

export {
  getDictionary,
  convertLanguageToSul,
  addChatRow,
  getChatRows,
  Language,
};
