import { FeaturedArticleBand } from "@/components/featured-article-band";
import { Reveal } from "@/components/reveal";
import type { NoteMeta } from "@/lib/notes";

export function HomeFeaturedSection({ note }: { note: NoteMeta }) {
  return (
    <section className="featured-work" aria-labelledby="featured-title">
      <Reveal className="section-heading">
        <div>
          <span className="section-code">02 / Featured writing</span>
          <h2 id="featured-title">Latest from the archive</h2>
        </div>
        <span className="section-arrow" aria-hidden="true">down-right</span>
      </Reveal>
      <Reveal delay={120}><FeaturedArticleBand note={note} /></Reveal>
    </section>
  );
}
