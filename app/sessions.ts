import { createCookieSessionStorage } from "@remix-run/node"; // or cloudflare/deno

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "sul_session",
      secrets: [process.env.SESSION_SECRET!],
    },
  });

export { getSession, commitSession, destroySession };
