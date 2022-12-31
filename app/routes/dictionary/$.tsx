import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { useState } from "react";
import { getSession } from "~/sessions";

import {
  getDictionaryRows,
  getSulConjoinedWord,
  getSulWord,
  moveWordDown,
  moveWordUp,
  updateSulConjoinedRow,
  updateSulDictionaryRow,
  validateUserId,
} from "~/utils/db.server";
import { getChainLetter, speakInSul } from "~/utils/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = request.url;
  const urlParams = new URLSearchParams(url.split("?")[1]);
  const session = await getSession(request.headers.get("Cookie"));

  const data: any = {};

  data.loggedIn = session.has("userId");

  data.editValues = {};

  if (urlParams.get("add_sul_conjoined_word") === "true") {
    data.showAddConjoinedButton = false;
    data.add_sul_conjoined_word = true;
    data.editValues = {
      word_sul: "New conjoined word",
    };
  } else {
    data.showAddConjoinedButton = true;
    data.add_sul_conjoined_word = false;
  }

  const wordToEdit = params?.["*"];

  if (wordToEdit) {
    if (getChainLetter({ word: wordToEdit })) {
      data.editValues = await getSulConjoinedWord({ word: wordToEdit });
    } else {
      data.editValues = await getSulWord({ word: wordToEdit });
    }
  }

  data.dictionary = await getDictionaryRows();

  return json(data, { status: 200 });
};

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const form = await request.formData();

  const action = form.get("action");

  if (!session.has("userId")) {
    return redirect("/login");
  }

  const validUserId = await validateUserId({
    id: session.get("userId"),
  });

  if (!validUserId) {
    return redirect("/login");
  }

  const formObject: any = {};

  for (const entry of form.entries()) {
    formObject[entry[0]] = entry[1];
  }

  if (action === "update") {
    if (getChainLetter({ word: formObject?.word_sul })) {
      await updateSulConjoinedRow(formObject);
    } else {
      await updateSulDictionaryRow(formObject);
    }
  }

  if (action === "move_word_up") {
    await moveWordUp(formObject);
  }

  if (action === "move_word_down") {
    await moveWordDown(formObject);
  }

  return json({}, { status: 200 });
};

const getWordUsabilityRating = (wordNumber: number) => {
  if (!wordNumber) return null;

  let wordRating = Math.round((1 - wordNumber / 1000000) * 100);

  wordRating = Math.max(Math.round((wordRating * (500 - wordNumber)) / 500), 0);

  return `${wordRating}%`;
};

export default function Dictionary() {
  const data = useLoaderData();

  const transition = useTransition();
  const loading = transition?.state !== "idle";

  const [sulPreview, setSulPreview] = useState("");

  return (
    <div className="p-4 ">
      {data.editValues?.word_sul && (
        <Form method="post" className=" " action="">
          <div className="flex flex-col gap-4 max-w-[1200px]">
            <h1 className="text-xl font-bold">Edit</h1>

            {!data?.add_sul_conjoined_word && (
              <>
                <div className="font-bold">Editing word: </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl sul-condensed">
                    {data?.editValues?.word_sul}
                  </span>{" "}
                  -<span className="text-lg">{data?.editValues?.word_sul}</span>
                </div>
                <input
                  type="hidden"
                  value={data?.editValues?.word_sul}
                  name="word_sul"
                />
              </>
            )}
            {data?.add_sul_conjoined_word && (
              <div className="flex flex-col">
                <label htmlFor="word_sul" className="font-bold">
                  SUL conjoined words
                </label>
                <input
                  defaultValue={"You can chain words with m r or v."}
                  type="text"
                  name="word_sul"
                  onChange={(e) => setSulPreview(e.target.value)}
                  id="word_sul"
                  className="border border-black p-2"
                />

                <div className="text-3xl sul-condensed">{sulPreview}</div>
              </div>
            )}

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
            name="action"
            value="update"
            className="mt-4 inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold  shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
          >
            Save
          </button>
        </Form>
      )}

      {data.loggedIn && data?.showAddConjoinedButton && (
        <Form>
          <input type="hidden" name="add_sul_conjoined_word" value="true" />

          <button
            disabled={loading}
            type="submit"
            className="mt-4 inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold  shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
          >
            Add SUL conjoined word
          </button>
        </Form>
      )}

      <table className="border border-black p-2 mt-12 ">
        <thead>
          <tr>
            <th className="border border-black p-2 text-left whitespace-nowrap">
              Simplicity
            </th>
            <th className="border border-black p-2 text-left whitespace-nowrap">
              SUL
            </th>
            <th className="border border-black p-2 text-left whitespace-nowrap">
              Hear
            </th>
            <th className="border border-black p-2 text-left whitespace-nowrap">
              Feel
            </th>
            <th className="border border-black p-2 text-left whitespace-nowrap">
              See
            </th>
            <th className="border border-black p-2 text-left whitespace-nowrap">
              SUL (romanized)
            </th>

            {data?.loggedIn && (
              <>
                <th className="border border-black p-2 text-left ">Edit</th>
                <th className="border border-black p-2 text-left">Move</th>
              </>
            )}
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
              <td className="border border-black p-2 font-bold 	">
                {getWordUsabilityRating(word?.id)}
              </td>
              <td className="border border-black p-2 sul-condensed text-3xl	">
                {word.word_sul}
              </td>
              <td className="border border-black p-2 ">
                <button
                  type="button"
                  disabled={loading}
                  className="inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold  shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
                  onClick={() => {
                    speakInSul({
                      sentence: word.word_sul.replace(/\+/gim, "b"),
                    });
                  }}
                >
                  play
                </button>
              </td>

              <td className="border border-black p-2 font-bold sul-braille text-3xl ">
                {word.word_sul}
              </td>
              <td className="border border-black p-2 underline  ">
                <a href={`/resource/sign?word=${word.word_sul}`}>sign</a>
              </td>
              <td className="border border-black p-2 font-bold  ">
                {word.word_sul.replace(/j/gim, "y")}
              </td>

              {data?.loggedIn && (
                <>
                  <td className="border border-black p-2">
                    <a
                      href={`/dictionary/${word.word_sul}`}
                      className="underline "
                    >
                      Edit
                    </a>
                  </td>
                  <td className="border border-black p-2 font-bold ">
                    {!getChainLetter({ word: word?.word_sul }) && (
                      <div className="flex gap-6">
                        <Form method="post">
                          <input
                            type="hidden"
                            name="word_sul"
                            id="word_sul"
                            value={word.word_sul}
                          />
                          <button
                            disabled={loading}
                            type="submit"
                            name="action"
                            value="move_word_up"
                            className=" hover:text-green-500 "
                          >
                            ↑
                          </button>
                        </Form>
                        <Form method="post">
                          <input
                            type="hidden"
                            name="word_sul"
                            id="word_sul"
                            value={word.word_sul}
                          />
                          <button
                            disabled={loading}
                            type="submit"
                            name="action"
                            value="move_word_down"
                            className="hover:text-red-500"
                          >
                            ↓
                          </button>
                        </Form>
                      </div>
                    )}
                  </td>
                </>
              )}

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
