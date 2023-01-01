import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { convertEnglishToSul } from "~/utils/db.server";
import { speakInSul } from "~/utils/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
  const data: any = {};

  data.examples = [
    {
      sentence_structure: "[SOV] because [SOV]",
      sentence_english: "I feel good because I go to the gym",
      sentence_english_sul: "me feelXgood because me gym go",
    },
    {
      sentence_structure: "if[SOV][SOV] + else if, etc",
      sentence_english: " If I do my homework, my parents will buy me a pony",
      sentence_english_sul: "if me homework do parentXfutureXme me buyXpony",
    },
    {
      sentence_structure: "[1 does 2 to 3][give]",
      sentence_english: "My mom gives a pony to me",
      sentence_english_sul: "momXfuture pony me give",
    },
  ];

  data.examples = data.examples.map(async (example: any) => {
    example.sentence_sul = await convertEnglishToSul({
      sentence: example.sentence_english_sul,
    });

    return example;
  });

  data.examples = await Promise.all(data.examples);

  return json(data, { status: 200 });
};

const IntroductionToSul = () => {
  const data = useLoaderData();

  return (
    <div
      id="introduction"
      aria-label="Introduction"
      className="p-4 max-w-7xl mx-auto"
    >
      <p className="font-display text-4xl font-bold  text-slate-900">
        Sul Advanced Sentence Structure
      </p>
      <p className="mt-4">
        In this lesson, we will introduce you to some advanced vocabulary and
        grammar in Sul. By the end of this lesson, you will be able to construct
        more complex sentences.
      </p>

      <table className="mt-4 border-collapse">
        <tbody>
          <tr className="border border-b">
            <td className="px-4 py-2 whitespace-nowrap font-bold">Structure</td>
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
            <tr className="border border-b" key={example.sentence_structure}>
              <td className="px-4 py-2 whitespace-nowrap ">
                {example.sentence_structure}
              </td>
              <td className="px-4 py-2 ">{example.sentence_english}</td>
              <td className="px-4 py-2 ">{example.sentence_english_sul}</td>
              <td className="px-4 py-2 ">
                {example.sentence_sul.replace(/j/gim, "y")}
              </td>
              <td className="px-4 py-2 whitespace-nowrap sul-condensed">
                {example.sentence_sul}
              </td>
              <td className="px-4 py-2 ">
                <button
                  className="ml-2 mt-4 inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold  shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
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

          {/* <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap ">if[SOV][SOV] + else if, etc</td>
              <td className="px-4 py-2 whitespace-nowrap ">
                if me homework do parentXfutureXme me buyXpony
              </td>
              <td className="px-4 py-2 whitespace-nowrap ">????</td>
              <td className="px-4 py-2 whitespace-nowrap ">
                If I do my homework, my parents will buy me a pony
              </td>
            </tr>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap ">[SOV]cause[SOV]</td>
              <td className="px-4 py-2 whitespace-nowrap ">me feelXgood cause me gym go</td>
              <td className="px-4 py-2 whitespace-nowrap ">
                "I feel good because I go to the gym",
              </td>
              <td className="px-4 py-2 whitespace-nowrap ">
                I feel good because I go to the gym
              </td>
            </tr>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap ">[SOV]equal[SOV]</td>
              <td className="px-4 py-2 whitespace-nowrap ">pizzaXeat equal pastaXeat</td>
              <td className="px-4 py-2 whitespace-nowrap ">????</td>
              <td className="px-4 py-2 whitespace-nowrap ">
                Eating pizza is the same as eating pasta.
              </td>
            </tr>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap ">[SOV]while[SOV]</td>
              <td className="px-4 py-2 whitespace-nowrap ">???</td>
              <td className="px-4 py-2 whitespace-nowrap ">????</td>
              <td className="px-4 py-2 whitespace-nowrap ">I eat pizza while watching TV.</td>
            </tr>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap ">[SOV]before[SOV]</td>
              <td className="px-4 py-2 whitespace-nowrap ">???</td>
              <td className="px-4 py-2 whitespace-nowrap ">????</td>
              <td className="px-4 py-2 whitespace-nowrap ">I eat pizza while watching TV.</td>
            </tr>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap ">[SOV]or[SOV]</td>
              <td className="px-4 py-2 whitespace-nowrap ">???</td>
              <td className="px-4 py-2 whitespace-nowrap ">????</td>
              <td className="px-4 py-2 whitespace-nowrap ">I eat pizza while watching TV.</td>
            </tr>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap ">[SOV]and[SOV]</td>
              <td className="px-4 py-2 whitespace-nowrap ">???</td>
              <td className="px-4 py-2 whitespace-nowrap ">????</td>
              <td className="px-4 py-2 whitespace-nowrap ">I eat pizza while watching TV.</td>
            </tr>

            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap ">
                [Mover] [Thing] [Move] [Source Location] [Destination Location]
              </td>
              <td className="px-4 py-2 whitespace-nowrap ">Me table move living room bedroom</td>
              <td className="px-4 py-2 whitespace-nowrap ">????</td>
              <td className="px-4 py-2 whitespace-nowrap ">
                I move the table from the living room to the bedroom.
              </td>
            </tr>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap ">[SOV]FROM[S?O?V?]</td>
              <td className="px-4 py-2 whitespace-nowrap ">
                MeXpast carXnew buy from dealership
              </td>
              <td className="px-4 py-2 whitespace-nowrap ">????</td>
              <td className="px-4 py-2 whitespace-nowrap ">
                I bought a new car from the dealership.
              </td>
            </tr>
            <tr className="border border-b">
              <td className="px-4 py-2 whitespace-nowrap ">[S?O?V]COMPARE[S?O?V?]</td>
              <td className="px-4 py-2 whitespace-nowrap ">me big compare you</td>
              <td className="px-4 py-2 whitespace-nowrap ">????</td>
              <td className="px-4 py-2 whitespace-nowrap ">I am bigger than you</td>
            </tr> */}
        </tbody>
      </table>

      <h2 className="mt-8 font-bold text-xl text-slate-800">Next steps</h2>

      <p className="mt-4">
        In the next lesson, we'll teach you a how to take these sentences and{" "}
        <Link to="/lessons/tenses/" className="underline font-bold">
          turn them into different tenses
        </Link>{" "}
        - for example, how to say "I went to school" or "I will go to school".
      </p>
    </div>
  );
};

export default IntroductionToSul;
