import { Link } from "@remix-run/react";
import React from "react";
import { Container } from "~/components/Container";
import { speakInSul } from "~/utils/utils";

const IntroductionToSul: React.FC = () => {
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
              <td className="p-2">j</td>
              <td className="p-2">as in "yawn"</td>
              <td className="p-2">
                <button
                  className="bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    speakInSul({ sentence: "j" });
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
          Next, let's go over the basic word order in Sul. Sul is a
          Subject-Object-Verb (SOV) language, which means that the subject of a
          sentence comes before the object, and the verb comes last.
        </p>
        <p className="mt-4">
          For example, in the sentence "I go to the store", the subject is "I",
          the object is "store", and the verb is "go". In Sul, this sentence
          would be written as "me store go".
        </p>
        <h2 className="mt-8 text-4xl ">Determiners</h2>
        <p className="mt-4">
          Another important aspect of Sul is that it does not use determiners
          such as "the" or "a". Instead, the meaning of a noun is determined by
          its position in the sentence and the context in which it is used. For
          example, in the sentence "I go to the store", the word "store" is
          modified by the determiner "the" to specify which store is being
          referred to. In Sul, we use the word order and "chaining" to convey
          this meaning without the use of a determiner word.
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
          using the SOV word order and the X and + symbols.
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
