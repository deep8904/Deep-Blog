import Link from "next/link";

const panels = [
  {
    index: "01-A",
    className: "triptych-panel--one",
    label: "Build / test / learn",
    copy: "Notes from software projects and the systems behind them.",
  },
  {
    index: "02-B",
    className: "triptych-panel--two",
    label: "Interfaces / decisions",
    copy: "How design choices make complicated technology feel clear.",
  },
  {
    index: "03-C",
    className: "triptych-panel--three",
    label: "Play / observe / document",
    copy: "Games, photography, and creative work while it is still in motion.",
  },
] as const;

export function RecreateHomeHero({ publishedCount }: { publishedCount: number }) {
  return (
    <section className="triptych-hero" aria-labelledby="home-title">
      <div className="triptych-hero__shell">
        <div className="triptych-rule" aria-hidden="true" />

        <div className="triptych-hero__meta">
          <span>Draft State / Personal publishing journal</span>
          <span>Phoenix, Arizona / Est. 2026</span>
        </div>

        <div className="triptych-hero__panels">
          <h1 id="home-title" className="triptych-hero__title">
            <span>Draft</span>
            <span>State</span>
            <sup>™</sup>
          </h1>

          {panels.map((panel) => (
            <article className={`triptych-panel ${panel.className}`} key={panel.index}>
              <span className="triptych-panel__index">{panel.index}</span>
              <span className="triptych-panel__label">{panel.label}</span>
              <p>{panel.copy}</p>
            </article>
          ))}
        </div>

        <div className="triptych-hero__footer">
          <p>
            Essays about software, interface design, games, photography, and the lessons that remain after the work ends.
          </p>
          <div className="triptych-hero__actions">
            <span>{String(publishedCount).padStart(2, "0")} published</span>
            <Link href="/notes">Read the writing</Link>
            <Link href="/about">About Deep</Link>
          </div>
        </div>

        <div className="triptych-rule" aria-hidden="true" />
      </div>
    </section>
  );
}
