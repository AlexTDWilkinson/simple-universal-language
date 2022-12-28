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
                    e.target.value = e.target.value.replace(
                      /[^aeioumtfskrjv]/gim,
                      ""
                    );
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
                className="underline block mt-12"
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
