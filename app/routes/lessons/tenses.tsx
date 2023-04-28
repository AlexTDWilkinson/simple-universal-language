import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { Container } from "~/components/Container";
import {
  convertLanguageToSul,
  getDictionary,
  Language,
} from "~/utils/utils.server";
import { speakInSul } from "~/utils/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
  const data: any = {};

  // <td className="px-4 py-2 whitespace-nowrap font-bold">English</td>
  // <td className="px-4 py-2 whitespace-nowrap font-bold">SUL</td>
  // <td className="px-4 py-2 whitespace-nowrap font-bold">
  //   Romanization
  // </td>
  // <td className="px-4 py-2 whitespace-nowrap font-bold">
  //   SUL writing
  // </td>

  data.example_tense = [
    {
      tense: "Present",
      sentence_english: "I eat food",
      sentence_english_sul: "me food eat",
    },
    {
      tense: "Past",
      sentence_english: "I ate food",
      sentence_english_sul: "meXpast food eat",
    },
    {
      tense: "Future",
      sentence_english: "I will eat food",
      sentence_english_sul: "meXfuture food eat",
    },
  ];

  data.example_modal = [
    {
      tense: "Should",
      sentence_english: "I should eat food",
      sentence_english_sul: "meXshould food eat",
    },
    {
      tense: "Able",
      sentence_english: "I am able to eat",
      sentence_english_sul: "meXable food eat",
    },
  ];

  data.example_order = [
    {
      type: "Explicit type",
      order: "First before word",
      sentence_english: "To run",
      sentence_english_sul: "verbXrun",
    },
    {
      type: "Quantity",
      order: "Before word",
      sentence_english: "2 boys",
      sentence_english_sul: "2xboy",
    },
    {
      type: "Ownership",
      order: "First after word",
      sentence_english: "My parent",
      sentence_english_sul: "parentXme",
    },
    {
      type: "Time",
      order: "Second after word",
      sentence_english: "I ate",
      sentence_english_sul: "meXpast",
    },
    {
      type: "Continuous",
      order: "After word",
      sentence_english: "Running",
      sentence_english_sul: "runXcontinuous",
    },
    {
      type: "Possession",
      order: "After word",
      sentence_english: "My book",
      sentence_english_sul: "bookXme",
    },
    {
      type: "Plural",
      order: "After word",
      sentence_english: "Cats",
      sentence_english_sul: "catXplural",
    },
    {
      type: "Conditional",
      order: "After word",
      sentence_english: "I would go (if...)",
      sentence_english_sul: "meXwould go",
    },
    {
      type: "Ordinal",
      order: "After word",
      sentence_english: "The fifth pony",
      sentence_english_sul: "ponyX5",
    },
    {
      type: "Question",
      order: "Last after all",
      sentence_english: "Did you arrive at school quickly?",
      sentence_english_sul: "youXpast school arriveXfastXquestion",
    },
  ];

  const dictionary = await getDictionary();

  data.example_tense = data.example_tense.map(async (example: any) => {
    example.sentence_sul = await convertLanguageToSul({
      dictionary,
      sentence: example.sentence_english_sul,
      language: Language.English,
    });

    return example;
  });

  data.example_modal = data.example_modal.map(async (example: any) => {
    example.sentence_sul = await convertLanguageToSul({
      dictionary,
      sentence: example.sentence_english_sul,
      language: Language.English,
    });

    return example;
  });

  data.example_order = data.example_order.map(async (example: any) => {
    example.sentence_sul = await convertLanguageToSul({
      dictionary,
      sentence: example.sentence_english_sul,
      language: Language.English,
    });

    return example;
  });

  data.example_tense = await Promise.all(data.example_tense);

  data.example_modal = await Promise.all(data.example_modal);

  data.example_order = await Promise.all(data.example_order);

  return json(data, {
    status: 200,
    headers: {
      "Cache-Control": "public, max-age=30, s-maxage=86400",
    },
  });
};

const IntroductionToSul = () => {
  const data = useLoaderData();

  return (
    <section
      id="tenses"
      aria-label="Tenses in Sul"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg text-slate-700">
        <p className="font-display text-4xl font-bold text-slate-900">
          Expressing Tenses in Sul
        </p>
        <p className="mt-4">
          In this lesson, we will look at how to express tenses in Sul,
          including the present, past, and future tenses. We will also discuss
          how to use time phrases and modal words.
        </p>

        <h2 className="mt-8 font-bold text-xl text-slate-800">Time phrases </h2>

        <p className="mt-4">
          Time phrases are words or phrases that indicate when an action takes
          place. In Sul, you can use time phrases to specify the tense of a
          verb. For example, "meXtomorrow food eat" means "I will eat food
          tomorrow".
        </p>

        <h2 className="mt-6 font-bold text-xl text-slate-800">Present Tense</h2>
        <p className="mt-4">
          To form the present tense in Sul, simply use the base form of the
          verb. For example, "eat" is the base form of the verb "to eat", so to
          express that someone is eating food in the present tense, you would
          simply say "I food eat".
        </p>
        <table className="mt-4 border-collapse">
          <tbody>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap font-bold">English</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">SUL</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">
                Romanization
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">
                SUL writing
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">Hear</td>
            </tr>
            {data.example_tense.slice(0, 1).map((example: any) => (
              <tr className="border border-b" key={example.sentence_english}>
                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_english}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_english_sul}
                </td>

                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_sul.replace(/j/gim, "y")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap sul-condensed">
                  {example.sentence_sul}
                </td>
                <td className="px-4 py-2 ">
                  <button
                    className=" inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold  shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
                    onClick={() => {
                      speakInSul({
                        sentence: example.sentence_sul,
                      });
                    }}
                  >
                    Hear
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="mt-8 font-bold text-xl text-slate-800">Past Tense</h2>
        <p className="mt-4">
          To form the past tense in Sul, you can use the past tense marker
          "Xpast" before the verb. For example, "meXpast food eat" means "I ate
          food".
        </p>
        <table className="mt-4 border-collapse">
          <tbody>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap font-bold">English</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">SUL</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">
                Romanization
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">
                SUL writing
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">Hear</td>
            </tr>
            {data.example_tense.slice(1, 2).map((example: any) => (
              <tr className="border border-b" key={example.sentence_english}>
                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_english}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_english_sul}
                </td>

                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_sul.replace(/j/gim, "y")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap sul-condensed">
                  {example.sentence_sul}
                </td>
                <td className="px-4 py-2 ">
                  <button
                    className=" inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold  shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
                    onClick={() => {
                      speakInSul({
                        sentence: example.sentence_sul,
                      });
                    }}
                  >
                    Hear
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="mt-8 font-bold text-xl text-slate-800">Future Tense</h2>
        <p className="mt-4">
          To express the future tense in Sul, you can use the future tense
          marker "Xfuture" before the verb. For example, "meXfuture food eat"
          means "I will eat food".
        </p>
        <table className="mt-4 border-collapse">
          <tbody>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap font-bold">English</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">SUL</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">
                Romanization
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">
                SUL writing
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">Hear</td>
            </tr>
            {data.example_tense.slice(2, 3).map((example: any) => (
              <tr className="border border-b" key={example.sentence_english}>
                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_english}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_english_sul}
                </td>

                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_sul.replace(/j/gim, "y")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap sul-condensed">
                  {example.sentence_sul}
                </td>
                <td className="px-4 py-2 ">
                  <button
                    className=" inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold  shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
                    onClick={() => {
                      speakInSul({
                        sentence: example.sentence_sul,
                      });
                    }}
                  >
                    Hear
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="mt-8 font-bold text-3xl text-slate-800">
          Other tenses and modes
        </h2>

        <h2 className="mt-8 font-bold text-xl text-slate-800"> Modal words</h2>
        <p className="mt-4">
          Modal words are auxiliary words that express necessity, possibility,
          or ability. Some examples of modal verbs in English include "can",
          "could", "may", "might", "must", "should", and "would".
        </p>
        <p className="mt-4">
          Note SUL has no distinction between nouns, verbs, etc, which is why
          they're called "modal words" in SUL instead of "modal verbs".
        </p>
        <p className="mt-4">
          In Sul, you can use modal words to indicate the mood of a word. For
          example, "meXcan food eat" means "I can eat food".
        </p>

        <table className="mt-4 border-collapse">
          <tbody>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap font-bold">English</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">SUL</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">
                Romanization
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">
                SUL writing
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">Hear</td>
            </tr>
            {data.example_modal.map((example: any) => (
              <tr className="border border-b" key={example.sentence_english}>
                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_english}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_english_sul}
                </td>

                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_sul.replace(/j/gim, "y")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap sul-condensed">
                  {example.sentence_sul}
                </td>
                <td className="px-4 py-2 ">
                  <button
                    className=" inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold  shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
                    onClick={() => {
                      speakInSul({
                        sentence: example.sentence_sul,
                      });
                    }}
                  >
                    Hear
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="mt-8 font-bold text-xl text-slate-800">
          Order of tenses and modifiers
        </h2>
        <table className="mt-4 border-collapse">
          <tbody>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap font-bold">Type</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">Order</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">English</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">SUL</td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">
                Romanization
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-bold ">
                SUL writing
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-bold">Hear</td>
            </tr>
            {data.example_order.map((example: any) => (
              <tr className="border border-b" key={example.sentence_english}>
                <td className="px-4 py-2 whitespace-nowrap">{example.type}</td>
                <td className="px-4 py-2 whitespace-nowrap">{example.order}</td>

                <td className="px-4 py-2 ">{example.sentence_english}</td>
                <td className="px-4 py-2 ">{example.sentence_english_sul}</td>

                <td className="px-4 py-2 whitespace-nowrap">
                  {example.sentence_sul.replace(/j/gim, "y")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap sul-condensed">
                  {example.sentence_sul}
                </td>
                <td className="px-4 py-2 ">
                  <button
                    className=" inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold  shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
                    onClick={() => {
                      speakInSul({
                        sentence: example.sentence_sul,
                      });
                    }}
                  >
                    Hear
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="mt-8 font-bold text-xl text-slate-800">Next steps</h2>
        <p className="mt-4">
          In the next lesson, we'll teach you a how to{" "}
          <Link
            to="/lessons/advanced-sentence-structure/"
            className="underline font-bold"
          >
            make more advanced sentences
          </Link>{" "}
          - for example, how to say "I went to school to learn".
        </p>
      </Container>
    </section>
  );
};

export default IntroductionToSul;
