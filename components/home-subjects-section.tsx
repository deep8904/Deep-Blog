import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SubjectRows } from "@/components/subject-rows";

export function HomeSubjectsSection() {
  return (
    <section className="subject-section" aria-labelledby="subjects-title">
      <Reveal className="section-heading">
        <div><span className="section-code">03 / Channels</span><h2 id="subjects-title">What tends to show up here</h2></div>
        <Link className="text-button" href="/about">Read more about Deep</Link>
      </Reveal>
      <SubjectRows />
    </section>
  );
}
