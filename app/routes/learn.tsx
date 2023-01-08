import { useState } from "react";
import Header from "~/components/Header/Header";
import { speakInSul } from "~/utils/utils";

export default function Learn() {
  const [lessonIndex, setLessonIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [mistakeCounter, setMistakeCounter] = useState(0);
  const [totalMistakeCounter, setTotalMistakeCounter] = useState(0);
  const [success, setSuccess] = useState(false);
  const [letterMistake, setLetterMistake] = useState("");
  const [letterSuccess, setLetterSuccess] = useState("");

  const sentence = lessons[lessonIndex]?.sentence_sul;
  const sentenceHidden = lessons[lessonIndex]?.sentence_sul.replace(
    /[^-. ]/g,
    "_"
  );

  const clickLetter = (letter: string) => {
    speakInSul({ sentence: letter });

    if (letter === sentence[letterIndex]) {
      setLetterSuccess(letter);
      setLetterMistake("");
      setLetterIndex(letterIndex + 1);
    } else {
      setLetterMistake(letter);
      setMistakeCounter(mistakeCounter + 1);
      setTotalMistakeCounter(totalMistakeCounter + 1);
    }

    if (
      letter === sentence[letterIndex] &&
      letterIndex === sentence.length - 1
    ) {
      setSuccess(true);
      setLetterSuccess("");
      setLetterMistake("");
      setTimeout(() => {
        speakInSul({ sentence });
      }, 500);
    }

    if (
      letter === sentence[letterIndex] &&
      (sentence[letterIndex + 1] === "-" || sentence[letterIndex + 1] === " ")
    ) {
      setLetterSuccess("");
      setLetterIndex(letterIndex + 2);
    }
  };

  const nextWord = () => {
    setLetterIndex(0);
    setMistakeCounter(0);
    setLetterSuccess("");
    setLetterMistake("");
    setSuccess(false);
    setLessonIndex(lessonIndex + 1);
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />

      <div className="mx-8 ">
        <h1 className="text-[2em] mt-6 ">
          Learn SUL (Simple Universal Language)
        </h1>

        <div className="text-lg mt-8">How to say:</div>

        <div className="text-[2em]">
          {lessons[lessonIndex]?.sentence_english}
        </div>

        <button
          onClick={() => speakInSul({ sentence })}
          className="bg-orange-600 rounded-md max-w-fit p-4 mt-2 text-white font-bold"
        >
          Hear it spoken in SUL
        </button>

        <div className="text-[3em] sul mt-12">
          {sentence.slice(0, letterIndex)}
          {sentenceHidden.slice(letterIndex)}
        </div>
        <div className="mt-3 font-bold">Literal English translation:</div>
        <div className="text-[2em] -mt-1 mb-12">
          {lessons[lessonIndex]?.sentence_literal_english}
        </div>

        <div>
          <div
            className={
              success
                ? "flex flex-col gap-4 pointer-events-none opacity-50"
                : "flex flex-col gap-4"
            }
          >
            <div className="flex gap-4">
              <button
                onClick={() => clickLetter("a")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "a" && "bg-red-400"
                } ${letterSuccess === "a" && "bg-green-400"}  `}
              >
                a
              </button>
              <button
                onClick={() => clickLetter("e")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "e" ? "bg-red-400" : ""
                } ${letterSuccess === "e" ? "bg-green-400" : ""}`}
              >
                e
              </button>

              <button
                onClick={() => clickLetter("i")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "i" ? "bg-red-400" : ""
                } ${letterSuccess === "i" ? "bg-green-400" : ""}`}
              >
                i
              </button>

              <button
                onClick={() => clickLetter("o")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "o" ? "bg-red-400" : ""
                } ${letterSuccess === "o" ? "bg-green-400" : ""}`}
              >
                o
              </button>

              <button
                onClick={() => clickLetter("u")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "u" ? "bg-red-400" : ""
                } ${letterSuccess === "u" ? "bg-green-400" : ""}`}
              >
                u
              </button>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => clickLetter("t")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "t" ? "bg-red-400" : ""
                } ${letterSuccess === "t" ? "bg-green-400" : ""}`}
              >
                t
              </button>
              <button
                onClick={() => clickLetter("f")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "f" ? "bg-red-400" : ""
                } ${letterSuccess === "f" ? "bg-green-400" : ""}`}
              >
                f
              </button>

              <button
                onClick={() => clickLetter("s")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "s" ? "bg-red-400" : ""
                } ${letterSuccess === "s" ? "bg-green-400" : ""}`}
              >
                s
              </button>

              <button
                onClick={() => clickLetter("k")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "k" ? "bg-red-400" : ""
                } ${letterSuccess === "k" ? "bg-green-400" : ""}`}
              >
                k
              </button>

              <button
                onClick={() => clickLetter("y")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "g" ? "bg-red-400" : ""
                } ${letterSuccess === "g" ? "bg-green-400" : ""}`}
              >
                j
              </button>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => clickLetter("t")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "r" ? "bg-red-400" : ""
                } ${letterSuccess === "r" ? "bg-green-400" : ""}`}
              >
                r
              </button>
              <button
                onClick={() => clickLetter("m")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "m" ? "bg-red-400" : ""
                } ${letterSuccess === "m" ? "bg-green-400" : ""}`}
              >
                m
              </button>

              {/* <button
                onClick={() => clickLetter("s")}
                className={`sul  border-2 border-black rounded-md max-w-fit  py-4 px-8 text-black font-bold text-[1.7em] ${
                  letterMistake === "b" ? "bg-red-400" : ""
                } ${letterSuccess === "b" ? "bg-green-400" : ""}`}
              >
                b
              </button> */}
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-6">
            <div>Mistakes: {mistakeCounter}</div>
            <div>Total mistakes: {totalMistakeCounter}</div>

            <div>
              How to write it in SUL (condensed):{" "}
              <div className="sul-condensed text-[2em]">
                {sentence.slice(0, letterIndex)}
              </div>
            </div>

            {success && (
              <button
                onClick={() => nextWord()}
                className="max-w-fit text-lg bg-green-700 text-white py-4 px-6 rounded-md shadow-lg"
              >
                Success! Go to next sentence
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const lessons = [
  {
    sentence_english: "Hello",
    sentence_literal_english: "",
    sentence_sul: "esa",
  },
  {
    sentence_english: "Goodbye",
    sentence_literal_english: "",
    sentence_sul: "eto",
  },
  {
    sentence_english: "I go",
    sentence_literal_english: "me go",
    sentence_sul: "af of",
  },
  {
    sentence_english: "I'm going",
    sentence_literal_english: "me-past-present move",
    sentence_sul: "afrari of",
  },
  {
    sentence_english: "I'm going to school",
    sentence_literal_english: "me-past-present school move",
    sentence_sul: "afrari aset of",
  },
  {
    sentence_english: "I was at school",
    sentence_literal_english: "me-past locationXschool",
    sentence_sul: "afra uraset",
  },
  {
    sentence_english: "Let's go get a drink",
    sentence_literal_english: "we drink go",
    sentence_sul: "oya oko of",
  },
  {
    sentence_english: "Let's go get a drink later",
    sentence_literal_english: "we-future drink go",
    sentence_sul: "oyare oko of",
  },
  {
    sentence_english: "Let's go get a drink tomorrow",
    sentence_literal_english: "we-tomorrow drink go",
    sentence_sul: "oyareta oko of",
  },
  {
    sentence_english: "Should we to get a drink tomorrow?",
    sentence_literal_english: "we-tomorrow drink go-question",
    sentence_sul: "oyareta oko ofro",
  },
];
