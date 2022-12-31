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
        modal verbs and time phrases to indicate tenses.
      </p>
      <h2 className="mt-6 font-bold text-xl text-slate-800">Present Tense</h2>
      <p>
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
      <p>
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
      <p>
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

      <h2 className="mt-8 font-bold text-xl text-slate-800">
        Other tenses and modes
      </h2>

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
    </Container>
  </section>
);

export default IntroductionToSul;
