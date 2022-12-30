import { Author } from "~/components/Author";
import { Footer } from "~/components/Footer";
import { FreeChapters } from "~/components/FreeChapters";
import { Hero } from "~/components/Hero";
import { Introduction } from "~/components/Introduction";
import { Lessons } from "~/components/Lessons";
import { NavBar } from "~/components/NavBar";
import { Resources } from "~/components/Resources";
import { Testimonial } from "~/components/Testimonial";
import { Testimonials } from "~/components/Testimonials";
import { Videos } from "~/components/Videos";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>
          Everything Starts as a Square - Get lost in the world of icon design
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head> */}
      <Hero />
      <Introduction />
      <NavBar />
      <Lessons />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: "Tommy Stroman",
          role: "Front-end developer",
          image: "/images/avatars/avatar-1.png",
        }}
      >
        <p>
          “It's been incredible talking to people from so many different
          countries and cultures. I've learned so much about the world, because
          of SUL.”
        </p>
      </Testimonial>
      <Videos />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: "Gerardo Stark",
          role: "Creator of Pandemicons",
          image: "/images/avatars/avatar-2.png",
        }}
      >
        <p>
          “I only spoke my native language before learning SUL. Now I&apos;m
          fluent in 3 different languages, but SUL is still my favourite.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />

      <Testimonials />
      <Author />
      <Footer />
    </>
  );
}
