import Header from "~/components/Header/Header";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />

      <div className="sul p-2">yaye yum omok-ya</div>
      <div className="sul-condensed p-2">yaye yum omok-ya</div>

      <div className="mx-8 ">
        <h1 className="text-[2em] mt-6 ">
          Why learn to speak and write SUL (Simple Universal Language)
        </h1>

        <div className="flex flex-col mt-4 gap-4">
          <div className="">• Only 5 vowels and 5 consenants.</div>

          {reasonsToLearn
            .sort((a, b) => a.length - b.length)
            .map((reason) => (
              <div className="" key={reason}>
                • {reason}
              </div>
            ))}

          <button className="bg-red-500 rounded-md max-w-fit mt-4 mb-16 p-4 text-white font-bold">
            Learn SUL now
          </button>
        </div>
      </div>
    </div>
  );
}

const reasonsToLearn = [
  "Easy to learn. You can start talking in SUL in under an hour.",
  "Very easy to pronounce language. No L or R sounds.",
  "No synonyms in the 'core' SUL dictionary. For example, there is only 1 word that means 'good', instead of multiple words like 'good' and 'well'.",
  "No homonyms in the 'core' SUL dictionary. For example, no misunderstandings caused by not knowing if someone means walking 'past' the car or something that happened in the 'past'.",
  "No two words are spelled or pronounced the same way.",
  "Very likely the fastest spoken/written language to ever exist in terms of information conveyed per second. This is likely easily provable, and we'll look into it.",
  "No upper case and lower case letters.",
  "Almost no punctuation.",
  "Properly supports references to people with non-binary genders.",
  "Virtually no grammar or syntax exceptions in the entire language.",
  "Excellent accessability for people visually or audibly handicapped. The standard SUL letters are easy to see from a distance because the characters are mono spaced and visually unique. For the hearing impaired, all characters can easily be transcribed into braille. SUL letters also easily and naturally collapse into symbols when visual space is at a premium (text messaging, etc).",
  "Extended dictionary of more than 80 thousand words is available for transcribing the meaning of artforms like poetry perfectly across all other languages.",
  "SUL is versioned and refactored similar to programming languages. The language continues to improve and become even more useful over time.",
  "The first 'strongly typed' verbal language. Vagueness in the language is not allowed. There are no words like 'it' or 'that'. This is similar to fixing the 'null' issue with programming languages.",
  "Perfectly transcribable. It's extremely easy to automatically transcribe SUL into other languages, while being certain that meaning of the words has not been altered. You could write subtitles for your movie once, and have the meaning transcribed perfectly to every other language.",
  "Excellent for machine learning purposes due to simplicity of language. A perfect translation between SUL and all spoken/written languages would be fairly trivial.",
  "You only need to learn a fraction of the words as compared to other langauges.",
  "Simple Universal Language was created by software developers. Who knows knows better than programmers how to communicate quickly and clearly? :)",
  "SUL is almost completely deterministic. When you hear or read SUL the meaning can virtually not be mistaken.",
  "If everyone learned SUL, everyone would be able to understand everyone else on the planet with ease. This would greatly reduce the amount of international conflict.",
  "Easy to 'romanize' SUL into almost all languages. Makes it easy to understand the pronounciation of SUL words, no matter which language you 'come from'.",
];
