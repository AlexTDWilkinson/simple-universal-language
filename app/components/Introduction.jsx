import { CheckIcon } from "~/components/CheckIcon";
import { Container } from "~/components/Container";

export function Introduction() {
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
          Learning Simpulse Universal Language is good for you, for people with
          different accessability needs, for international business and
          cooperation, and for the world.
        </p>

        <ul role="list" className="mt-8 space-y-3">
          {[
            "Simple Universal Language is a tool for connection and understanding that is accessible to everyone, regardless of their ability to speak, see or hear.",
            "Equal access to communication should be a basic human right. Simple Universal Language makes this a reality for blind and deaf individuals with braille and sign language variations.",
            "Make a positive impact on the world by learning the Simple Universal Language and promoting understanding and unity among different cultures",
            "Experience new cultures and make connections with people from all over the world through the power of the Simple Universal Language",
            "Unlock a world of opportunity with the Simple Universal Language. being multilingual opens up doors in education, business, and more.",
            "Improve your memory and focus by learning Simple Universal Language. Studies show that learning a second language can have lasting benefits for cognitive health.",
            "Efficient communication is key to successful international business and politics. the Simple Universal Language makes it possible.",
            "Travel with confidence and ease with the Simple Universal Language. No more relying on translation apps or struggling to communicate in a foreign country",
            "Help end the proliferation of confusing and antiquated systems such as time-zones, the imperial measurement system, and the 12-hour clock",
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        {/* <p className="mt-8">
          By the end of the book, you'll have all the confidence you need to dig
          in and start creating beautiful icons that can hold their own against
          any of the sets you can find online.
        </p>
        <p className="mt-10">
          <a
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get two free chapters straight to your inbox{" "}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p> */}
      </Container>
    </section>
  );
}
