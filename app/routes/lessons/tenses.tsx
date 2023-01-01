import { Link } from "@remix-run/react";
import React from "react";
import { Container } from "~/components/Container";

const IntroductionToSul: React.FC = () => (
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
        In this lesson, we will look at how to express tenses in Sul, including
        the present, past, and future tenses. We will also discuss how to use
        time phrases and modal words.
      </p>

      <h2 className="mt-8 font-bold text-xl text-slate-800">Time phrases </h2>

      <p className="mt-4">
        Time phrases are words or phrases that indicate when an action takes
        place. In Sul, you can use time phrases to specify the tense of a verb.
        For example, "meXtomorrow food eat" means "I will eat food tomorrow".
      </p>

      <h2 className="mt-6 font-bold text-xl text-slate-800">Present Tense</h2>
      <p className="mt-4">
        To form the present tense in Sul, simply use the base form of the verb.
        For example, "eat" is the base form of the verb "to eat", so to express
        that someone is eating food in the present tense, you would simply say
        "I food eat".
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
            <td className="px-4 py-2 ">Me food eat</td>
            <td className="px-4 py-2 whitespace-nowrap">ki fit ata</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              ki fit ata
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="mt-8 font-bold text-xl text-slate-800">Past Tense</h2>
      <p className="mt-4">
        To form the past tense in Sul, you can use the past tense marker "Xpast"
        before the verb. For example, "meXpast food eat" means "I ate food".
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
            <td className="px-4 py-2 ">I ate food</td>
            <td className="px-4 py-2 ">MeXpast food eat</td>
            <td className="px-4 py-2 whitespace-nowrap">kira fit ata</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              kira fit ata
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="mt-8 font-bold text-xl text-slate-800">Future Tense</h2>
      <p className="mt-4">
        To express the future tense in Sul, you can use the future tense marker
        "Xfuture" before the verb. For example, "meXfuture food eat" means "I
        will eat food".
      </p>
      <table className="mt-8 border-collapse">
        <tbody>
          <tr className="border border-b">
            <td className="px-4 py-2 font-bold">English</td>
            <td className="px-4 py-2 font-bold">SUL</td>
            <td className="px-4 py-2 font-bold">Romanization</td>
            <td className="px-4 py-2 font-bold">SUL writing</td>
          </tr>
          <tr className="border border-b">
            <td className="px-4 py-2 ">I ate food</td>
            <td className="px-4 py-2 ">MeXfuture food eat</td>
            <td className="px-4 py-2 whitespace-nowrap">kire fit ata</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              kire fit ata
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="mt-8 font-bold text-3xl text-slate-800">
        Other tenses and modes
      </h2>

      <h2 className="mt-8 font-bold text-xl text-slate-800"> Modal words</h2>
      <p className="mt-4">
        Modal words are auxiliary words that express necessity, possibility, or
        ability. Some examples of modal verbs in English include "can", "could",
        "may", "might", "must", "should", and "would".
      </p>
      <p className="mt-4">
        Note SUL has no distinction between nouns, verbs, etc, which is why
        they're "modal words" in SUL instead of "modal verbs".
      </p>
      <p className="mt-4">
        In Sul, you can use modal words to indicate the mood of a word. For
        example, "meXcan food eat" means "I can eat food".
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
            <td className="px-4 py-2 ">I'm eating the food</td>
            <td className="px-4 py-2 ">MeXpastXpresent food eat</td>
            <td className="px-4 py-2 whitespace-nowrap">kirari fit ata</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              kirari fit ata
            </td>
          </tr>
          <tr className="border border-b">
            <td className="px-4 py-2 ">I will eat food tomorrow</td>
            <td className="px-4 py-2 ">MeXtomorrow food eat</td>
            <td className="px-4 py-2 whitespace-nowrap">kireta fit ata</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              kireta fit ata
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2 ">I can eat</td>
            <td className="px-4 py-2 ">MeXable food eat</td>
            <td className="px-4 py-2 whitespace-nowrap">kirako fit ata</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              kireta fit ata
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2 ">I should eat</td>
            <td className="px-4 py-2 ">MeXshould food eat</td>
            <td className="px-4 py-2 whitespace-nowrap">kirese fit ata</td>
            <td className="px-4 py-2 text-3xl sul-condensed whitespace-nowrap">
              kirese fit ata
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="mt-8 font-bold text-xl text-slate-800">
        Order of tenses and modifiers
      </h2>
      <table className="mt-4 border-collapse">
        <tbody>
          <tr className="border border-b">
            <td className="px-4 py-2 font-bold">Tense/modifer type</td>
            <td className="px-4 py-2 font-bold">Order</td>
            <td className="px-4 py-2 font-bold">Example</td>
            <td className="px-4 py-2 font-bold">Example in SUL</td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2 ">Quantity</td>
            <td className="px-4 py-2 ">Before word</td>
            <td className="px-4 py-2 whitespace-nowrap">2-boys</td>
            <td className="px-4 py-2 whitespace-nowrap sul-condensed text-3xl">
              itebjof
            </td>
          </tr>
          <tr className="border border-b">
            <td className="px-4 py-2 ">Time tense</td>
            <td className="px-4 py-2 ">First after word</td>
            <td className="px-4 py-2 whitespace-nowrap">MeXpast</td>
            <td className="px-4 py-2 whitespace-nowrap sul-condensed text-3xl">
              kira
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2">Continuous aspect</td>
            <td className="px-4 py-2">After word</td>
            <td className="px-4 py-2 whitespace-nowrap">runXing</td>
            <td className="px-4 py-2 whitespace-nowrap sul-condensed text-3xl">
              bjo+kirad
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2">Possession</td>
            <td className="px-4 py-2">After word</td>
            <td className="px-4 py-2 whitespace-nowrap">bookXmy</td>
            <td className="px-4 py-2 whitespace-nowrap sul-condensed text-3xl">
              mjo+pjo
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2">Plural</td>
            <td className="px-4 py-2">After word</td>
            <td className="px-4 py-2 whitespace-nowrap">catXplural</td>
            <td className="px-4 py-2 whitespace-nowrap sul-condensed text-3xl">
              tjom
            </td>
          </tr>

          <tr className="border border-b">
            <td className="px-4 py-2">Conditional mood</td>
            <td className="px-4 py-2">After word</td>
            <td className="px-4 py-2 whitespace-nowrap">meXwould go</td>
            <td className="px-4 py-2 whitespace-nowrap sul-condensed text-3xl">
              bjof
            </td>
          </tr>
          <tr className="border border-b">
            <td className="px-4 py-2">Ordinal number</td>
            <td className="px-4 py-2">After word</td>
            <td className="px-4 py-2 whitespace-nowrap">
              ponyX5 ('the fifth pony')
            </td>
            <td className="px-4 py-2 whitespace-nowrap sul-condensed text-3xl">
              bjof
            </td>
          </tr>
          <tr className="border border-b">
            <td className="px-4 py-2 ">Question</td>
            <td className="px-4 py-2 ">Last after all</td>
            <td className="px-4 py-2 whitespace-nowrap">
              youXpast school arriveXfastXquestion? ('did you get to school
              quickly?')
            </td>
            <td className="px-4 py-2 whitespace-nowrap sul-condensed text-3xl">
              itebjof
            </td>
          </tr>
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

export default IntroductionToSul;
