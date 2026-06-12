import Link from "next/link";

export function IdentityHero({ latestHref, publishedCount }: { latestHref?: string; publishedCount: number }) {
  return (
    <section className="identity-hero" aria-labelledby="hero-title">
      <div className="lanyard" aria-hidden="true">
        <span className="lanyard__strap" />
        <span className="lanyard__loop" />
        <span className="lanyard__connector" />
      </div>
      <div className="identity-badge">
        <span className="identity-badge__cutout identity-badge__cutout--top" aria-hidden="true" />
        <span className="identity-badge__cutout identity-badge__cutout--bottom" aria-hidden="true" />
        <div className="identity-screen">
          <div className="identity-screen__bar">
            <span className="journal-dots" aria-hidden="true"><i className="status-light" /><i /><i /></span>
            <span>Archive active</span>
          </div>
          <div className="particle-field" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
          </div>
          <div className="identity-screen__message">
            <small>Personal archive / 2026</small>
            <strong>Build.<br />Notice.<br />Write.</strong>
          </div>
          <div className="identity-screen__footer">
            <span>Journal open</span>
            <span>{String(publishedCount).padStart(2, "0")} published</span>
          </div>
        </div>
        <div className="identity-badge__rail">
          <span className="chip-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span className="vertical-wordmark">DRAFT.STATE</span>
          <span className="technical-mark" aria-hidden="true"><i /><b /></span>
        </div>
      </div>
      <div className="identity-hero__copy">
        <p className="journal-label"><span className="journal-icon" aria-hidden="true"><i /></span>Personal publishing journal</p>
        <h1 id="hero-title" className="identity-hero__title">
          <span className="reveal-mask"><span className="reveal-text reveal-text--one">Ideas become clearer</span></span>
          <span className="reveal-mask"><span className="reveal-text reveal-text--two">when I write them down.</span></span>
        </h1>
        <p className="identity-hero__lede fade-up-load">Notes from software, interface design, games, photography, and the projects that changed how I think.</p>
        <div className="identity-hero__meta fade-up-load"><span><i className="status-light" aria-hidden="true" />Phoenix, Arizona</span><span>{String(publishedCount).padStart(2, "0")} published</span></div>
        <div className="identity-hero__actions fade-up-load">
          {latestHref ? <Link className="journal-button" href={latestHref}>Open latest note</Link> : null}
          <Link className="journal-link" href="/about">About Deep</Link>
        </div>
      </div>
    </section>
  );
}
