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
        Writing in Sul
      </p>
      <p className="mt-4">
        This is for every exception that exists in the language. Mostly just the
        "I" written character needing the line over it when written solo so it
        sspans full horizontal like all other letters.
      </p>
    </Container>
  </section>
);

export default IntroductionToSul;
