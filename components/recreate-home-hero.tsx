import Link from "next/link";

export function RecreateHomeHero({ publishedCount }: { publishedCount: number }) {
  return (
    <section className="simple-hero" aria-labelledby="home-title">
      <div className="simple-hero__copy">
        <span className="section-code">Personal journal / Phoenix, Arizona</span>
        <h1 id="home-title">Notes on building, designing, and paying attention.</h1>
        <p>
          I write about software, interface design, games, photography, and the lessons that are easy to lose after a project ends.
        </p>
        <div className="simple-hero__actions">
          <Link className="primary-button" href="/notes">Read the writing</Link>
          <Link className="text-button" href="/about">About Deep</Link>
        </div>
      </div>

      <aside className="simple-hero__mark" aria-label={`${publishedCount} published article${publishedCount === 1 ? "" : "s"}`}>
        <span>Draft State</span>
        <strong>DS</strong>
        <small>{String(publishedCount).padStart(2, "0")} published</small>
      </aside>
    </section>
  );
}
