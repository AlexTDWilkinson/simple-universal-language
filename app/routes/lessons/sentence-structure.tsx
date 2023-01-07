import { Link } from "@remix-run/react";
import React from "react";
import { Container } from "~/components/Container";

const IntroductionToSul: React.FC = () => (
  <section
    id="introduction"
    aria-label="Introduction"
    className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
  >
    <Container className="text-lg  text-slate-700">
      <p className="font-display text-4xl font-bold  text-slate-900">
        Sul Sentence Structure
      </p>
      <p className="mt-4">
        Now that you have learned the basic principles of the SUL language,
        including the sounds of its vowels and consonants, and its
        subject-object-verb (SVO) word order, let's practice constructing simple
        sentences in SUL.
      </p>

      <p className="mt-8 font-display text-4xl font-bold  text-slate-900">
        Constructing simple sentences in SUL
      </p>

      <h2 className="mt-8 font-display text-3xl font-bold  text-slate-900">
        Simplest sentence structure
      </h2>
      <p className="mt-4">
        In SUL, the structure of a basic sentence structure possible is{" "}
        <b>[subject][verb]</b>.
      </p>
      <p className="mt-4">
        <b>For example</b>: "I sleep" in SUL is also simply "I sleep" - "ki isu"
        (lit: me sleep).
      </p>
      <p className="mt-4">
        This works because "sleep" is an intransitive verb, meaning it's a verb
        that can be used without a target subject.
      </p>
      <p className="mt-4">
        For example, you can't really "sleep to school", the way you can with
        other verbs - "go" to school, "run" to school, etc.
      </p>
      <p className="mt-4">
        Note that SUL does not actually make any sort of determination as to
        which words are nouns or verbs or anything at all in that regard.
      </p>
      <p className="mt-4">You can feel free to use any word as anything.</p>
      <p className="mt-4">
        <b>
          Remember, the only real rule in SUL is that as long as the other
          person understands your meaning, you're good! :D
        </b>
      </p>
      <h2 className="mt-8 font-display text-3xl font-bold  text-slate-900">
        Regular sentence structure
      </h2>
      <p className="mt-4">
        In SUL, most sentences are comprised of the following structure:{" "}
        <b>[subject][verb][object]</b>.
      </p>
      <p className="mt-4">
        <b>
          By understanding this structure, you can do most of your every day
          communication and understand what people say to you.
        </b>
      </p>

      <p className="mt-4">
        SUL uses the SVO (<b>[subject][verb][object]</b>) structure because the
        majority of population of the world speaks languages that do - though
        there are more SOV languages in the world.
      </p>

      <p className="mt-8">
        <b>Lets look at some examples of SVO vs SVO word order</b>:{" "}
      </p>

      <table className="mt-4 border-collapse">
        <tbody>
          <tr className="border border-b">
            <td className="px-4 py-2 font-bold">SVO (Like English)</td>
            <td className="px-4 py-2 font-bold">SVO</td>
          </tr>
          <tr className="border border-b">
            <td className="px-4 py-2 ">I eat food</td>
            <td className="px-4 py-2 ">I food eat </td>
          </tr>
          <tr className="border border-b">
            <td className="px-4 py-2 ">I go to school</td>
            <td className="px-4 py-2 ">I school go to</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-8">
        <b>Lets look at some examples of English vs SUL</b>:{" "}
      </p>

      <table className="mt-4 border-collapse">
        <tbody>
          <tr className="border border-b">
            <td className="px-4 py-2 font-bold">English</td>
            <td className="px-4 py-2 font-bold">SUL</td>
            <td className="px-4 py-2 font-bold">Romanization</td>
            <td className="px-4 py-2 font-bold">SUL writing</td>
          </tr>
          <tr className="border border-b">
            <td className="px-4 py-2 ">I eat food</td>
            <td className="px-4 py-2 ">
              eatXfood ('me' is assumed by default)
            </td>
            <td className="px-4 py-2 whitespace-nowrap">???</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              ???
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2 ">You eat food</td>
            <td className="px-4 py-2 ">eatXfoodXyou</td>
            <td className="px-4 py-2 whitespace-nowrap">???</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              ???
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2 ">You are big and eat food</td>
            <td className="px-4 py-2 ">eatXfoodXyou+big</td>
            <td className="px-4 py-2 whitespace-nowrap">???</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              ???
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2 ">You angrily eat small food quickly</td>
            <td className="px-4 py-2 ">
              eat+quicklyXfood+smallXyou+angry (this is a pretty long word!)
            </td>
            <td className="px-4 py-2 whitespace-nowrap">???</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              ???
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2 ">You angrily eat small food quickly</td>
            <td className="px-4 py-2 ">
              youXangry eatXquickly foodXsmall (phew, that's better!)
            </td>
            <td className="px-4 py-2 whitespace-nowrap">???</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              ???
            </td>
          </tr>
        </tbody>
      </table>

      <p className="mt-8">
        <b>
          With this basic amount of knowledge you can likely already get by
          speaking SUL!
        </b>{" "}
        - though you'd need to keep the SUL dictionary handy!
      </p>

      <h2 className="mt-8 font-bold text-xl text-slate-800">Next steps</h2>

      <p className="mt-4">
        In the next lesson, you'll learn about{" "}
        <Link
          to="/lessons/advanced-sentence-structure/"
          className="underline font-bold"
        >
          more advanced sentence structures
        </Link>{" "}
        - for example, how to say "If I get good grades, my parents will buy me
        a pony".
      </p>
    </Container>
  </section>
);

export default IntroductionToSul;
