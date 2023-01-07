import { createCookieSessionStorage } from "@remix-run/node"; // or cloudflare/deno

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "sul_session",
      secrets: [process.env.SESSION_SECRET! || "D3vS3ssionS3cr3tzzz431"],
    },
  });

export { getSession, commitSession, destroySession };
