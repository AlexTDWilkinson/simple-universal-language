import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { convertLanguageToSul, Language } from "~/utils/utils.server";
import { speakInSul } from "~/utils/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
  const data: any = {};

  data.examples = [
    {
      sentence_english: "I am speaking SUL",
      sentence_english_sul: "speakXsimple+languageXme",
    },
    {
      sentence_english: "I want to eat ice cream",
      sentence_english_sul: "wantXicecreamXme",
    },
    {
      sentence_english: "I have 3 dogs",
      sentence_english_sul: "dogX3Xme",
    },
    {
      sentence_english: "The cat is sleeping on the couch",
      sentence_english_sul: "catXsleepXcouch",
    },
    {
      sentence_english: "She is not coming because she is busy",
      sentence_english_sul: "xheXbusyXnot+come",
    },
    {
      sentence_english: "She is coming because she is not busy",
      sentence_english_sul: "xheXbusy+notXcome",
    },
    {
      sentence_english: "I will go to the store tomorrow",
      sentence_english_sul: "goXtomorrowXstoreXme",
    },
    {
      sentence_english: "I am going to the store",
      sentence_english_sul: "meXgo+store",
    },
    {
      sentence_english: "I went to the store",
      sentence_english_sul: "meXpastXgo+store",
    },
    {
      sentence_english: "I am not hungry",
      sentence_english_sul: "hungryXnotXme",
    },
    {
      sentence_english: "I want to eat a sandwich",
      sentence_english_sul: "eatXsandwichXwant",
    },
    {
      sentence_english: "You want to eat a sandwich",
      sentence_english_sul: "eatXsandwichXyouXwant",
    },
    {
      sentence_english: "You want to eat a sandwich?",
      sentence_english_sul: "eatXsandwichXyouXwantXquestion",
    },
    {
      sentence_english: "You don't want to eat a sandwich?",
      sentence_english_sul: "eatXsandwichXnotXyouXwantXquestion",
    },
    {
      sentence_english: "You don't want to eat 3 sandwiches?",
      sentence_english_sul: "eatXsandwich+3XnotXyouXwantXquestion",
    },
    {
      sentence_english: "Why don't you want to eat 3 sandwiches?",
      sentence_english_sul: "eatXsandwich+3XnotXyouXwantXwhy",
    },
    {
      sentence_english: "I want to eat a sandwich because I am hungry",
      sentence_english_sul: "eatXsandwichXhungryXbecauseXwant",
    },
    {
      sentence_english: "I want to eat two delicious, big sandwiches",
      sentence_english_sul: "eatXsandwich+2+big+deliciousXwant",
    },
    {
      sentence_english: "Do you want to eat a sandwich with me",
      sentence_english_sul: "eatXwith+meXsandwichXyouXwant",
    },
  ];

  data.morphemes = [
    {
      morpheme: "Root word",
      description: "The base form of the word",
      example: "icecream",
    },
    {
      morpheme: "Additional descriptive chained words",
      description:
        "Words added to provide more detail, following the same order if they use the + symbol",
      example: "icecreamXcold",
    },
    {
      morpheme: "Quantity/ordinality",
      description:
        "A number morpheme indicating the quantity or amount of something. The word 'ordinal' can be attached to say 'the third' thing.",
      example: "icecreamX3 or icecreamX3+ordinal",
    },
    {
      morpheme: "Negation",
      description: "A morpheme indicating negation or the absence of something",
      example: "icecreamXnot",
    },

    {
      morpheme: "Structural syntax words",
      description: `Words such as "if" or "because" that indicate the structure or reason for a statement`,
      example: "icecreamXif+cold",
    },
    {
      morpheme: "Plurality",
      description: "A morpheme indicating the plurality or number of something",
      example: "icecreamXplural",
    },
    {
      morpheme: "Tense",
      description:
        "A morpheme indicating the time frame in which an action takes place",
      example: "icecreamXpast",
    },
    {
      morpheme: "Agreement/ownership",
      description: "A morpheme indicating who the subject of the word is",
      example: "icecreamXyou",
    },
    {
      morpheme: "Mood",
      description:
        "A morpheme indicating the mood of the word, for example a question command or desire",
      example: "icecreamXwant",
    },
  ];

  data.examples = data.examples.map(async (example: any) => {
    example.sentence_sul = await convertLanguageToSul({
      sentence: example.sentence_english_sul,
      language: Language.English,
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

const IntroductionToSul = () => {
  const data = useLoaderData();

  return (
    <section id="tenses" aria-label="Tenses in Sul" className="p-8">
      <p className="max-w-[60ch] font-display text-4xl font-bold text-slate-900">
        Word chaining in SUL
      </p>
      <p className="max-w-[60ch] mt-4">
        "Word chaining" (in linguistics it's called "agglutination") is a way
        that some languages build words by adding small parts called morphemes
        together.
      </p>
      <p className="max-w-[60ch] mt-4">
        For example, in Japanese, the word "tabetai" is made up of the root word
        "tabe," meaning "to eat," and the suffix "tai," meaning "want to." When
        we put these two parts together, it creates the meaning "to want to
        eat."{" "}
      </p>
      <p className="max-w-[60ch] mt-4">
        Word chaining is a special way that some languages build and express
        words. It helps us communicate complex ideas using simple words.
      </p>
      <p className="max-w-[60ch] mt-4">
        In SUL, we can use nested chaining to add even more complexity and
        nuance to our communication. For example, the word "icecream" can be
        chained with the nested word "cold+very" creating the word
        "icecreamXcold+very" (esirutikmoso), meaning "icecream that is very
        cold.".
      </p>
      <p className="max-w-[60ch] mt-4">
        In this way, SUL's word chaining and nested chaining mechanisms provide
        a rich and expressive language, in amazingly few words and syllables.
      </p>
      <p className="max-w-[60ch] mt-4">
        Additionally, SUL has has a sign language sign for every word, so these
        morphemes can be particularly beneficial for sign language. By using
        word chaining, sign language speakers can express the exact same complex
        ideas and nuances in meaning as verbal SUL speakers can.
      </p>
      <p className="max-w-[60ch] mt-4">
        SUL sign language speakers can fully participate in SUL conversations
        and express themselves using the same language as verbal SUL speakers.
        This can help to reduce misunderstandings and improve the overall
        clarity of communication between sign language and verbal SUL speakers.
      </p>
      <p className="max-w-[60ch] mt-4">
        Another advantage over conventional sign languages is conventional
        signlanguges neccessitate the use of the face and body language to
        convey meaning. SUL does not.
      </p>
      <p className="max-w-[60ch] mt-4">
        Conventional sign languages, such as American Sign Language (ASL) and
        British Sign Language (BSL), rely on a combination of hand shapes,
        movements, and facial expressions to convey meaning. These non-manual
        markers, as they are called, play a crucial role in the expression of
        language in these systems.
      </p>
      <p className="max-w-[60ch] mt-4">
        In contrast, Simple Universal Language (SUL) does not require the use of
        non-manual markers to convey meaning. Instead, SUL relies on a fixed set
        of hand shapes and movements to represent specific words and concepts.
        This means that SUL speakers can communicate using only their hands,
        without the need for facial expressions or body language.
      </p>
      <p className="max-w-[60ch] mt-4">
        One advantage of this is that SUL can be easier to learn and use for
        people who are deaf or hard of hearing. Another advantage is this can
        make it easier for these individuals to communicate with others and
        participate in a variety of social and professional settings.
      </p>
      <p className="max-w-[60ch] mt-4">
        Additionally, the lack of non-manual markers in SUL can also make it
        easier for people who do not know sign language to understand and
        communicate with sign language speakers.
      </p>

      <table className="mt-4 border-collapse">
        <thead>
          <tr className="border border-b">
            <th className="text-left px-4 py-2 whitespace-nowrap font-bold">
              Order
            </th>
            <th className="text-left px-4 py-2 whitespace-nowrap font-bold">
              Morpheme
            </th>
            <th className="text-left px-4 py-2 whitespace-nowrap font-bold">
              Description
            </th>
            <th className="text-left px-4 py-2 whitespace-nowrap font-bold">
              Example
            </th>
          </tr>
        </thead>
        <tbody>
          {data.morphemes.map((morpheme: any, index: number) => (
            <tr className="border border-b" key={morpheme.morpheme}>
              <td className="px-4 py-2 ">{index + 1}</td>
              <td className="px-4 py-2 ">{morpheme.morpheme}</td>
              <td className="px-4 py-2 ">{morpheme.description}</td>
              <td className="px-4 py-2 ">{morpheme.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="mt-4 border-collapse">
        <tbody>
          <tr className="border border-b">
            <td className="px-4 py-2 whitespace-nowrap font-bold">English</td>
            <td className="px-4 py-2 whitespace-nowrap font-bold">
              SUL in English
            </td>
            <td className="px-4 py-2 whitespace-nowrap font-bold">
              SUL romanization
            </td>
            <td className="px-4 py-2 whitespace-nowrap font-bold">SUL</td>
            <td className="px-4 py-2 whitespace-nowrap font-bold">SUL Hear</td>
          </tr>

          {data.examples.map((example: any) => (
            <tr className="border border-b" key={example.sentence_english}>
              <td className="px-4 py-2 ">{example.sentence_english}</td>
              <td className="px-4 py-2 ">{example.sentence_english_sul}</td>
              <td className="px-4 py-2 ">{example.sentence_sul}</td>
              <td className="px-4 py-2 sul-condensed text-[1.3em]">
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
        </tbody>
      </table>
      {/* <h2 className="mt-8 font-bold text-xl text-slate-800">Next steps</h2>
      <p className="max-w-[60ch] mt-4">
        In the next lesson, we'll teach you a how to{" "}
        <Link
          to="/lessons/advanced-sentence-structure/"
          className="underline font-bold"
        >
          make more advanced sentences
        </Link>{" "}
        - for example, how to say "I went to school to learn".
      </p> */}
    </section>
  );
};

export default IntroductionToSul;
