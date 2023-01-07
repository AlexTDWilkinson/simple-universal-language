import { Link } from "@remix-run/react";
import { Container } from "~/components/Container";
import { SectionHeading } from "~/components/SectionHeading";

const LessonsList = {
  "Getting started": [
    {
      title: "Introduction to SUL",

      link: "/lessons/intro",
    },
    {
      title: "Basic vocabulary and grammar",

      link: "/lessons/basic-vocabulary-and-grammar",
    },
    { title: "Tenses", link: "/lessons/tenses" },
    {
      title: "Word chaining",

      link: "/lessons/agglutination",
    },
    {
      title: "Sentence structure",

      link: "/lessons/sentence-structure",
    },
    {
      title: "Advanced sentence structure",

      link: "/lessons/advanced-sentence-structure",
    },
    {
      title: "The written language",

      link: "/lessons/written-language",
    },
    {
      title: "Pronouns",

      link: "/lessons/pronouns",
    },
    {
      title: "Numbers",

      link: "/lessons/numbers",
    },
    {
      title: "Sign language",

      link: "/lessons/sign-language",
    },
    {
      title: "Braille",

      link: "/lessons/sul-in-the-wild",
    },
    {
      title: "Time and dates",

      link: "/lessons/dates",
    },
    {
      title: "Measurements",

      link: "/lessons/measurements",
    },
    {
      title: "Exceptions",

      link: "/lessons/exceptions",
    },
    {
      title: "Fun slang",

      link: "/lessons/slang",
    },
    {
      title: "SUL social norms",

      link: "/lessons/social-norms",
    },
  ],
};

export function Lessons() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container className={undefined}>
        <SectionHeading
          number="1"
          id="table-of-contents-title"
          className={undefined}
        >
          Lessons
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold  text-slate-900">
          Start learning SUL now!
        </p>
        <p className="mt-4 text-lg  text-slate-700">
          This is a list of lessons that will have you speaking fluent SUL in no
          time.
        </p>

        <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
          {Object.entries(LessonsList).map(([title, pages]) => (
            <li key={title}>
              <h3 className="font-display text-3xl font-bold  text-slate-900">
                {title}
              </h3>
              <ol className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base  sm:py-7 sm:px-8">
                {pages.map((page, index) => (
                  <li
                    key={page?.title}
                    className="flex justify-between py-3"
                    aria-label={`${page?.title} on page ${index + 1}`}
                  >
                    <span
                      className="font-medium text-slate-900"
                      aria-hidden="true"
                    >
                      <Link to={page?.link} className="text-lg underline">
                        {page?.title}
                      </Link>
                    </span>
                    <span
                      className="font-mono text-slate-400"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
