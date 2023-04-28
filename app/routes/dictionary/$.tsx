import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { speakInSul } from "~/utils/utils";
import { getDictionary } from "~/utils/utils.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const data: any = {};
  data.dictionary = await getDictionary();

  return json(data, {
    status: 200,
    headers: {
      "Cache-Control": "public, max-age=30, s-maxage=86400",
    },
  });
};

export default function Dictionary() {
  const data = useLoaderData();

  const handleSpeak = (sentence: string) => {
    speakInSul({ sentence });
  };

  return (
    <div className="p-4 ">
      <table className="border border-black p-2 mt-12 ">
        <thead>
          <tr>
            <th className="border border-black p-2 text-left whitespace-nowrap">
              Word
            </th>
            <th className="border border-black p-2 text-left whitespace-nowrap">
              SUL
            </th>
            <th className="border border-black p-2 text-left whitespace-nowrap">
              Definition
            </th>
            <th className="border border-black p-2 text-left whitespace-nowrap">
              Speak
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.dictionary?.map((word: any) => (
            <tr key={word.id}>
              <td className="border border-black p-2">{word.word_english}</td>
              <td className="border border-black p-2 sul-condensed">
                {word.word_sul}
              </td>
              <td className="border border-black p-2">{word.definition}</td>
              <td className="border border-black p-2">
                <button onClick={() => handleSpeak(word.word_sul)}>
                  Speak
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
