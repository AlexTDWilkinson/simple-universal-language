import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import { Container } from "~/components/Container";
import { convertEnglishToSul } from "~/utils/db.server";
import { speakInSul } from "~/utils/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
  const data: any = {};

  data.examples = [
    {
      sentence_english: "I go to the store",
      sentence_english_sul: "me go store",
    },
    {
      sentence_english: "I'm eating the food",
      sentence_english_sul: "meXcontinuous food eat",
    },
    {
      sentence_english: "I will eat food tomorrow",
      sentence_english_sul: "meXtomorrow food eat",
    },
    {
      sentence_english: "I can eat",
      sentence_english_sul: "meXable food eat",
    },
    {
      sentence_english: "I should eat",
      sentence_english_sul: "meXshould food eat",
    },
  ];

  data.examples = data.examples.map(async (example: any) => {
    example.sentence_sul = await convertEnglishToSul({
      sentence: example.sentence_english_sul,
    });

    return example;
  });

  data.examples = await Promise.all(data.examples);

  return json(data, {
    status: 200,
    headers: {
      "Cache-Control": "public, max-age=30, s-maxage=86400",
    },
  });
};

const IntroductionToSul: React.FC = () => {
  const data = useLoaderData();
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg  text-slate-700">
        <p className="font-display text-4xl font-bold  text-slate-900">
          Why learn Simple Universal Language?
        </p>
        <p className="mt-4">
          Welcome to Lesson 1 of our course on learning to speak SUL!
        </p>
        <p className="mt-4">
          In this lesson, we will introduce you to the basic principles of the
          language, including its written and verbal form and it's unique use of
          adjective and adverb "chaining" to derive complex meanings while
          keeping the language very simple.
        </p>
        <p className="font-display mt-8 text-3xl font-bold  text-slate-900">
          Some SUL example sentences
        </p>
        {data.examples.map((example: any) => (
          <tr className="border border-b" key={example.sentence_structure}>
            <td className="px-4 py-2 whitespace-nowrap ">
              {example.sentence_structure}
            </td>
            <td className="px-4 py-2 ">{example.sentence_english}</td>
            <td className="px-4 py-2 ">{example.sentence_english_sul}</td>
            <td className="px-4 py-2 ">
              {example.sentence_sul.replace(/j/gim, "y")}
            </td>
            <td className="px-4 py-2 whitespace-nowrap sul-condensed text-[1.4em]">
              {example.sentence_sul}
            </td>
            <td className="px-4 py-2 ">
              <button
                className="inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold  shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
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
        <p className="mt-8 font-display text-3xl font-bold  text-slate-900">
          Vowels and consonants
        </p>
        <p className="mt-4">
          First, let's go over the IPA phonetic sounds for the five vowels and
          eight consonants in Sul:
        </p>
        <table className="mt-4 space-y-3">
          <thead>
            <tr>
              <th className="p-2 text-left">Sul letter</th>
              <th className="p-2 text-left">Vowel</th>
              <th className="p-2 text-left">Example</th>
              <th className="p-2 text-left">Hear</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">a</td>
              <td className="p-2">a</td>
              <td className="p-2">as in "tah"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "a" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">e</td>
              <td className="p-2">e</td>
              <td className="p-2">as in "eh"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "e" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">i</td>
              <td className="p-2">i</td>
              <td className="p-2">"ee"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "i" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">o</td>
              <td className="p-2">o</td>
              <td className="p-2">as in "doh"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "o" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">u</td>
              <td className="p-2">u</td>
              <td className="p-2">as in "beaut"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "u" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="mt-8 space-y-3">
          <thead>
            <tr>
              <th className="p-2 text-left">Sul letter</th>
              <th className="p-2 text-left">Consonant</th>
              <th className="p-2 text-left">Example</th>
              <th className="p-2 text-left">Hear</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">t</td>
              <td className="p-2">t</td>
              <td className="p-2">as in "tea"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "t" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">f</td>
              <td className="p-2">f</td>
              <td className="p-2">as in "fee"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "f" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">s</td>
              <td className="p-2">s</td>
              <td className="p-2">as in "sea"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "s" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">k</td>
              <td className="p-2">k</td>
              <td className="p-2">as in "key"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "k" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">j</td>
              <td className="p-2">g</td>
              <td className="p-2">as in "gap"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "g" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">b</td>
              <td className="p-2">b</td>
              <td className="p-2">as in "bay"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "b" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">r</td>
              <td className="p-2">r (flexible)</td>
              <td className="p-2">as in "ray"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "r" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">m</td>

              <td className="p-2">m (flexible)</td>
              <td className="p-2">as in "may"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "m" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-8 font-display text-2xl font-bold  text-slate-900">
          Clicks
        </p>
        <p className="mt-8">
          Sul also has a "click" sound. It is a "whatever" click sound, so you
          can make any sound you want (generally with your mouth) as long as
          it's identifiable as a click. The creator of SUL uses finger snaps for
          this purpose.
        </p>
        <p className="mt-8">
          It is used to specify "quotations" verbally, when you want to be
          extremely explicit as to what you're referring to.
        </p>
        <p className="mt-8">
          It is also used as a language escape, to indicate you are switching
          out of SUL and into another language. These are the symbols that look
          like a slash with a veritcal line through it. This is more typically
          done in written form, but it can be useful if you're at a restaurant
          and want to order something using it's name in it's originating
          language.
        </p>
        <p className="mt-8">
          Or if you want to convey a very specific meaning by saying something
          like "deja vu". Or for example, when a SUL word and another word
          overlap and there is confusion. For example, meme in SUL does not mean
          the same thing as meme in other languages. So you may want to clarify
          by adding clicks that you're not referring to the SUL word "meme", but
          some other meaning.
        </p>
        <table className="mt-4 space-y-3">
          <thead>
            <tr>
              <th className="p-2 text-left">Sul letter</th>
              <th className="p-2 text-left">Hear</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">{`)`}</td>

              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: ")" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">{`(`}</td>

              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "(" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">&gt;</td>

              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: ">" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 sul-condensed text-3xl ">&lt;</td>

              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "<" });
                  }}
                >
                  Play
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="mt-8 text-4xl ">Word order</h2>
        <p className="mt-4">
          In Sul, the word order of a sentence is flexible and can vary.
          However, the default word order and the examples provided for Sul tend
          to follow a Subject-Verb-Object (SOV) structure, where the subject
          comes before the verb and the object comes last.{" "}
        </p>{" "}
        <p className="mt-4">
          For example, in the sentence "I go to the store" the subject is "I"
          the verb is "go" and the object is "store." This is a typical SVO
          sentence.
        </p>
        <p className="mt-4">
          The reason SUL favours the SVO word order is because although there
          are more SOV than SVO languages in the world, there are more speakers
          of SVO languages by population.
        </p>
        <h2 className="mt-8 text-4xl ">Next steps</h2>
        <p className="mt-4">
          Now that you know the basic principles of Sul, we're ready to move on
          to learning some{" "}
          <Link
            to="/lessons/basic-vocabulary-and-grammar/"
            className="underline font-bold"
          >
            basic vocabulary and grammar
          </Link>
          .
        </p>{" "}
        <p className="mt-4">
          In the next lesson, we'll start by teaching you a few basic words and
          phrases in Sul, and then we'll practice constructing basic sentences
          using the X and + symbols.
        </p>
        <p className="mt-4  ">
          We hope you're excited to start learning Sul! In the coming lessons,
          you'll get more practice speaking and listening to the language, and
          you'll also learn how to read and write in Sul. With some practice and
          dedication, you'll be well on your way to becoming a proficient
          speaker of this unique and intuitive language.
        </p>
      </Container>
    </section>
  );
};

export default IntroductionToSul;
