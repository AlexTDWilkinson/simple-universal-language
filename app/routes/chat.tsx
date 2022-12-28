import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { Form, Link, useLoaderData, useTransition } from "@remix-run/react";

import { addChatRow, getChatRows } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = request.url;
  const urlParams = new URLSearchParams(url.split("?")[1]);

  const data: any = {};

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

  data.author = urlParams.get("author");

  data.chat = await getChatRows();

  return json(data, { status: 200 });
};

export const action: ActionFunction = async ({ request, params }) => {
  const body = new URLSearchParams(await request.text());
  const action = body.get("action");
  const author = body.get("author");
  const message = body.get("message");

  if (action && action === "send_chat_message") {
    if (author && message) {
      addChatRow({ author, message });
    }
  }

  return json({ success: true }, { status: 200 });
};

export default function SulChat() {
  const transition = useTransition();
  const loading = transition?.state !== "idle";

  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="mx-8 ">
        <h1 className="text-[2em] mt-6 ">SUL Chat</h1>

        <table>
          <thead>
            <tr>
              <td className="text-2xl p-2 border border-black">SUL letter</td>
              <td className="text-2xl p-2 border border-black">IPA letter</td>
              <td className="text-2xl p-2 border border-black">Type</td>
              <td className="text-2xl p-2 border border-black">Key</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                a
              </td>
              <td className="text-2xl p-2 border border-black">a</td>
              <td className="text-2xl p-2 border border-black">vowel</td>
              <td className="text-2xl p-2 border border-black">a</td>
            </tr>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                e
              </td>

              <td className="text-2xl p-2 border border-black">e</td>
              <td className="text-2xl p-2 border border-black">vowel</td>
              <td className="text-2xl p-2 border border-black">e</td>
            </tr>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                i
              </td>
              <td className="text-2xl p-2 border border-black">i</td>
              <td className="text-2xl p-2 border border-black">vowel</td>

              <td className="text-2xl p-2 border border-black">i</td>
            </tr>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                o
              </td>
              <td className="text-2xl p-2 border border-black">o</td>
              <td className="text-2xl p-2 border border-black">vowel</td>
              <td className="text-2xl p-2 border border-black">o</td>
            </tr>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                u
              </td>
              <td className="text-2xl p-2 border border-black">u</td>
              <td className="text-2xl p-2 border border-black">vowel</td>
              <td className="text-2xl p-2 border border-black">u</td>
            </tr>

            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                t
              </td>
              <td className="text-2xl p-2 border border-black">t</td>
              <td className="text-2xl p-2 border border-black">consonant</td>
              <td className="text-2xl p-2 border border-black">t</td>
            </tr>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                f
              </td>
              <td className="text-2xl p-2 border border-black">f</td>
              <td className="text-2xl p-2 border border-black">consonant</td>
              <td className="text-2xl p-2 border border-black">f</td>
            </tr>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                s
              </td>
              <td className="text-2xl p-2 border border-black">s</td>
              <td className="text-2xl p-2 border border-black">consonant</td>
              <td className="text-2xl p-2 border border-black">s</td>
            </tr>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                k
              </td>
              <td className="text-2xl p-2 border border-black">k</td>
              <td className="text-2xl p-2 border border-black">consonant</td>
              <td className="text-2xl p-2 border border-black">k</td>
            </tr>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                j
              </td>
              <td className="text-2xl p-2 border border-black">j</td>
              <td className="text-2xl p-2 border border-black">consonant</td>
              <td className="text-2xl p-2 border border-black">j</td>
            </tr>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                r
              </td>
              <td className="text-2xl p-2 border border-black">r</td>
              <td className="text-2xl p-2 border border-black">
                consonant (chain)
              </td>
              <td className="text-2xl p-2 border border-black">r</td>
            </tr>
            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                m
              </td>
              <td className="text-2xl p-2 border border-black">m</td>
              <td className="text-2xl p-2 border border-black">
                consonant (chain)
              </td>
              <td className="text-2xl p-2 border border-black">m</td>
            </tr>

            <tr>
              <td className="text-2xl p-2 border border-black sul-condensed">
                v
              </td>
              <td className="text-2xl p-2 border border-black">v</td>
              <td className="text-2xl p-2 border border-black">
                consonant (chain)
              </td>
              <td className="text-2xl p-2 border border-black">v</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4">
          <div>Author name:</div>
          <Form action="/chat/">
            <input
              className="
          border-2 border-gray-300
          rounded-md
          px-4 py-2
        
         
          focus:outline-none
          focus:border-gray-500
          focus:ring-1
          focus:ring-gray-500
            
          "
              type="text"
              defaultValue={data?.author}
              placeholder="Type your name or alias"
              name="author"
            />
            <button
              disabled={loading}
              type="submit"
              className="ml-2 mt-4 inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
            >
              Save
            </button>
          </Form>
        </div>
        <div className="mt-8">
          {data.chat.map((chatRow: any) => {
            return (
              <div className="mt-4" key={chatRow.id}>
                <div className="flex gap-4 items-center">
                  <div className="text-lg font-bold">{chatRow.author}</div>
                  <div className="font-sm opacity-50">
                    {new Date(chatRow.created_at).toLocaleString()}
                  </div>
                </div>
                <div className="sul-condensed text-4xl">{chatRow.message}</div>
                <div className="text-sm text-gray-500"></div>
              </div>
            );
          })}

          <div className="mt-8">
            <div className="text-lg font-bold">Add a new message</div>

            <div className="mt-4">
              <Form method="post">
                <input type="hidden" name="author" value={data.author} />

                <textarea
                  className="block w-full max-w-[40ch]
          border-2 border-gray-300
          rounded-md
          px-4 py-2

          focus:outline-none
          focus:border-gray-500
          sul-condensed
          text-4xl
          "
                  onChange={(e) => {
                    e.target.value = e.target.value
                      .toLowerCase()
                      .replace(/[^aeioumtfskrjv\s]/gim, "");
                  }}
                  name="message"
                  placeholder=""
                  rows={4}
                />

                <button
                  disabled={loading || !data.author}
                  type="submit"
                  name="action"
                  value="send_chat_message"
                  className="mt-4 inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
                >
                  Send
                </button>
              </Form>

              <Link
                to="/dictionary"
                className="underline block mt-12 max-w-fit"
                target="_blank"
              >
                Open dictionary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
