import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";

import {
  getDictionaryRows,
  getSulWord,
  updateSulDictionaryRow,
} from "~/utils/db.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const data: any = {};
  data.editValues = {};

  const wordToEdit = params?.["*"];

  if (wordToEdit) {
    data.editValues = await getSulWord({ word: wordToEdit });
  }

  data.dictionary = await getDictionaryRows();

  return json(data, { status: 200 });
};

export const action: ActionFunction = async ({ request, params }) => {
  const body = new URLSearchParams(await request.text());

  const bodyObject = Object.fromEntries(body.entries());

  if (Object.values(bodyObject).every((value) => !value)) {
    return json({}, { status: 200 });
  }

  await updateSulDictionaryRow(bodyObject);

  return json({}, { status: 200 });
};

export default function Dictionary() {
  const data = useLoaderData();

  const transition = useTransition();
  const loading = transition?.state !== "idle";

  return (
    <div className="p-4 ">
      {Object.keys(data?.editValues)?.length > 0 && (
        <Form method="post" className=" ">
          <input
            defaultValue={data?.editValues?.word_sul}
            type="hidden"
            name="word_sul"
            id="word_sul"
            className="border border-black p-2"
          />
          <div className="flex flex-col gap-4 max-w-[1200px]">
            <h1 className="text-xl font-bold">Edit</h1>
            <div className="flex flex-col">
              <label htmlFor="word_english" className="font-bold">
                English word
              </label>
              <input
                defaultValue={data?.editValues?.word_english}
                type="text"
                name="word_english"
                id="word_english"
                className="border border-black p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="definition_english" className="font-bold">
                English definition
              </label>
              <input
                defaultValue={data?.editValues?.definition_english}
                type="text"
                name="definition_english"
                id="definition_english"
                className="border border-black p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="word_japanese" className="font-bold">
                Japanese word
              </label>
              <input
                defaultValue={data?.editValues?.word_japanese}
                type="text"
                name="word_japanese"
                id="word_japanese"
                className="border border-black p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="definition_japanese" className="font-bold">
                Japanese definition
              </label>
              <input
                defaultValue={data?.editValues?.definition_japanese}
                type="text"
                name="definition_japanese"
                id="definition_japanese"
                className="border border-black p-2"
              />
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="mt-4 inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
          >
            Save
          </button>
        </Form>
      )}

      <table className="border border-black p-2 mt-12 ">
        <thead>
          <tr>
            <th className="border border-black p-2 text-left">Sul</th>
            <th className="border border-black p-2 text-left ">Edit</th>
            <th className="border border-black p-2 text-left">English</th>
            <th className="border border-black p-2 text-left">
              English definition
            </th>
            <th className="border border-black p-2 text-left">Japanese</th>
            <th className="border border-black p-2 text-left">
              Japanese definition
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.dictionary?.map((word: any) => (
            <tr key={word.id}>
              <td className="border border-black p-2 font-bold">
                {word.word_sul}
              </td>
              <td className="border border-black p-2">
                <a href={`/dictionary/${word.word_sul}`} className="underline ">
                  Edit
                </a>
              </td>
              <td className="border border-black p-2">{word.word_english}</td>
              <td className="border border-black p-2">
                {word.definition_english}
              </td>
              <td className="border border-black p-2">{word.word_japanese}</td>
              <td className="border border-black p-2">
                {word.definition_japanese}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
