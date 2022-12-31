import { Link } from "@remix-run/react";
import { Container } from "~/components/Container";
import { SectionHeading } from "~/components/SectionHeading";

const LessonsList = {
  "Getting started": [
    {
      title: "Introduction to SUL",
      number: 1,
      link: "/lessons/intro",
    },
    {
      title: "Basic vocabulary and grammar",
      number: 2,
      link: "/lessons/basic-vocabulary-and-grammar",
    },
    { title: "Tenses", number: 3, link: "/lessons/tenses" },
  ],
};

export function Lessons() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
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
                {pages.map((page) => (
                  <li
                    key={page?.title}
                    className="flex justify-between py-3"
                    aria-label={`${page?.title} on page ${page?.number}`}
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
                      {page?.number}
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
