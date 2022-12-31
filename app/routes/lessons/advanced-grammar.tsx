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
        Advanced SUL Grammar
      </p>
      <p className="mt-4">
        In this lesson, we will introduce you to some basic vocabulary and
        grammar in Sul. By the end of this lesson, you will be able to construct
        simple sentences and understand the meaning of common words and phrases
        in Sul.
      </p>
      <h2 className="mt-6 font-bold text-xl text-slate-800">Vocabulary</h2>
      <p>
        Sul has a small set of basic vocabulary words that are easy to learn and
        use. Here are a few examples from the{" "}
        <Link to="/dictionary" className="underline font-bold">
          dictionary
        </Link>
        .
      </p>
      <table className="mt-4  border-collapse">
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Me</td>
            <td className="px-4 py-2">ki</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">You</td>
            <td className="px-4 py-2">you</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">He</td>
            <td className="px-4 py-2">he</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">She</td>
            <td className="px-4 py-2">she</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">We</td>
            <td className="px-4 py-2">we</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">They</td>
            <td className="px-4 py-2">they</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Person</td>
            <td className="px-4 py-2">person</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Food</td>
            <td className="px-4 py-2">food</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Sleep</td>
            <td className="px-4 py-2">isu</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-8 font-display text-4xl font-bold  text-slate-900">
        Constructing simple sentences in SUL
      </p>
      <p className="mt-4">
        Now that you have learned the basic principles of the SUL language,
        including the sounds of its vowels and consonants, and its
        subject-object-verb (SOV) word order, let's practice constructing simple
        sentences in SUL.
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold  text-slate-900">
        Most basic sentence structure
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
        that can be used without an object.
      </p>
      <p className="mt-4">
        Intransitive verbs are verbs that are used without an object. For
        example, you can't really "sleep" to school or something, the way you
        can with other verbs. "Go" to school, "run" to school, etc.
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
      <h2 className="mt-4 font-display text-3xl font-bold  text-slate-900">
        Basic sentence structure
      </h2>
      <p className="mt-4">
        In SUL, most sentences are comprised of the following structure:{" "}
        <b>[subject][object][verb]</b>.
      </p>
      <p className="mt-4">
        <b>
          By understanding this structure, you can literally get most of your
          every day talking done, and you can understand most of what other
          people say to you.
        </b>
      </p>
      <p className="mt-4">
        If you are a new speaker to SUL, more advanced speakers will identify
        that and speak in this simple structure so you can understand them.
      </p>
      <p className="mt-4">
        This is where we diverge from SVO (<b>[subject][verb][object]</b>)
        languages, like English.
      </p>
      <p className="mt-4">
        SUL is SOV (<b>[subject][object][verb]</b>) structure because the
        majority of languages in the world are.
      </p>
      <p className="mt-4">
        <b>Lets look at some examples of SOV vs SVO</b>:{" "}
      </p>

      <p className="mt-4">
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
            <td className="px-4 py-2 ">I food eat (lit: me food eat)</td>
            <td className="px-4 py-2 whitespace-nowrap">ki fit ata</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              ki fit ata
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2 ">I go to school</td>
            <td className="px-4 py-2 ">I school go (lit: me school move)</td>
            <td className="px-4 py-2 whitespace-nowrap">ki aset of</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              ki aset of
            </td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4">
        <b>
          With this basic amount of knowledge you can likely already get by
          speaking SUL!
        </b>
      </p>

      <p className="mt-4">
        In the next lesson, we'll teach you a how to take these sentences and{" "}
        <Link to="/lessons/tenses/" className="underline font-bold">
          turn them into different tenses
        </Link>{" "}
        - for example, how to say "I went to school" or "I will go to school".
      </p>
    </Container>
  </section>
);

export default IntroductionToSul;
