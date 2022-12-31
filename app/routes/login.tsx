import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import { Form, useLoaderData } from "@remix-run/react";

import { commitSession, destroySession, getSession } from "~/sessions";
import { validateCredentials } from "~/utils/db.server";

export async function loader({ request }: { request: Request }) {
  const session = await getSession(request.headers.get("Cookie"));

  // if (session.has("userId")) {
  //   // Redirect to the home page if they are already signed in.
  //   return redirect("/");
  // }

  const data: any = {};

  data.error = session.get("error");

  data.loggedIn = session.has("userId");

  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function action({ request }: { request: Request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const form = await request.formData();

  const action = form.get("action");
  const username = form.get("username");
  const password = form.get("password");

  if (action === "login") {
    const userId = await validateCredentials({
      username,
      password,
    });

    if (userId === null) {
      session.flash("error", "Invalid username/password");

      // Redirect back to the login page with errors.
      return redirect("/login", {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    }

    session.set("userId", userId);

    return redirect("/dictionary", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }
  if (action === "logout") {
    const session = await getSession(request.headers.get("Cookie"));

    return redirect("/login", {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }
}

export default function Login() {
  let data = useLoaderData();

  return (
    <>
      {data?.loggedIn && (
        <div className="bg-green-500 text-white p-2 font-bold">
          <p>You are signed in</p>
        </div>
      )}

      {!data?.loggedIn && (
        <div className="bg-red-500 text-white  p-2 font-bold">
          <p>You are logged out</p>
        </div>
      )}
      <div className="p-8">
        {!data?.loggedIn && (
          <Form method="post" className="flex flex-col gap-8 max-w-fit">
            <label>
              Username:{" "}
              <input
                type="text"
                name="username"
                className="block border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </label>
            <label>
              Password:{" "}
              <input
                type="password"
                name="password"
                className="block border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </label>
            <button
              type="submit"
              name="action"
              value="login"
              className="block bg-green-500 text-white p-4 rounded-md"
            >
              Sign in
            </button>
          </Form>
        )}

        {data?.loggedIn && (
          <Form method="post" className="flex flex-col gap-8  max-w-fit mt-8">
            <div>
              <button
                type="submit"
                name="action"
                value="logout"
                className="block bg-red-500 text-white p-4 rounded-md"
              >
                Logout
              </button>
            </div>
          </Form>
        )}
      </div>
    </>
  );
}
