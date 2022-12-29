// createa  resource route that returns an image or a placeholder image

import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = request.url;

  const urlParams = new URLSearchParams(url.split("?")[1]);

  const word = urlParams.get("word");

  if (!word) return json({ error: "No word provided" }, 404);

  // fetch the image from /images/$word.gif

  const production = process.env.NODE_ENV === "production";

  const image = await fetch(
    production
      ? `https://simple-universal-language.vercel.app/images/sign/${word}.gif`
      : `http://localhost:3000/images/sign/${word}.gif`
  );

  if (image.status === 200) {
    return image;
  } else {
    const image = await fetch(
      production
        ? `https://simple-universal-language.vercel.app/images/no_sign.gif`
        : `http://localhost:3000/images/sign/no_sign.gif`
    );
    return image;
  }
};
