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
        Defaults in Sul
      </p>
      <p className="mt-4">
        Every assumed default goes here. IE 1 if not specified plural. No need
        for plural if exact number specified. No need to chain "me" as
        agglutination ownership, it's assumed. No need to say the action between
        the verb and the object, the obvious is assumed ("me go to school" = "me
        go school")
      </p>
    </Container>
  </section>
);

export default IntroductionToSul;
