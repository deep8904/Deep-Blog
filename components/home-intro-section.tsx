import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function HomeIntroSection() {
  return (
    <section className="simple-about" aria-labelledby="intro-title">
      <Reveal>
        <span className="section-code">About this journal</span>
        <h2 id="intro-title">A quiet place to keep the useful parts of unfinished work.</h2>
      </Reveal>

      <Reveal className="simple-about__copy" delay={100}>
        <p>
          Draft State is where I document what I learned while making software, studying interfaces, building game ideas, working with other people, and observing the world through a camera.
        </p>
        <Link className="text-button" href="/about">More about me</Link>
      </Reveal>
    </section>
  );
}
