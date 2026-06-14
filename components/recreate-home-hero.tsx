import Link from "next/link";

const metrics = [
  { label: "Published entries", value: "01", status: "Validated" },
  { label: "Primary node", value: "PHX", status: "Online" },
  { label: "Protocol state", value: "LIVE", status: "Ongoing" },
] as const;

export function RecreateHomeHero({ publishedCount }: { publishedCount: number }) {
  const count = String(publishedCount).padStart(2, "0");

  return (
    <section className="identity-hero" aria-labelledby="home-title">
      <div className="identity-hero__ambient" aria-hidden="true" />

      <div className="identity-hero__shell">
        <div className="identity-hero__topline">
          <span className="identity-node">
            <i aria-hidden="true" /> Connected node / online ver. 1.0.5
          </span>
          <span className="protocol-label">Instance / Draft State</span>
        </div>

        <div className="identity-hero__content">
          <div className="identity-hero__copy">
            <span className="protocol-label">Identity protocol / personal publishing journal</span>
            <h1 id="home-title">
              <span>Deploy your</span>
              <strong>thinking.</strong>
            </h1>
            <p>
              Draft State is a living record of software, interface design,
              games, photography, and the decisions that stay useful after the
              work is finished.
            </p>

            <div className="identity-hero__actions">
              <Link className="protocol-button" href="/notes">
                Initialize reading
              </Link>
              <Link className="protocol-button protocol-button--ghost" href="/about">
                View identity
              </Link>
            </div>
          </div>

          <div className="identity-card" aria-label="Draft State identity credential">
            <div className="identity-card__header">
              <span className="protocol-label">Instance identity</span>
              <span className="identity-card__version">V1.0.5</span>
            </div>

            <div className="identity-card__signal" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="identity-card__monogram" aria-hidden="true">DS</div>

            <div className="identity-card__footer">
              <div>
                <span className="protocol-label">Credential owner</span>
                <strong>Deep Chadamiya</strong>
              </div>
              <span className="identity-card__status">
                <i aria-hidden="true" /> Validated
              </span>
            </div>
          </div>
        </div>

        <div className="identity-hero__metrics" aria-label="Journal status">
          {metrics.map((metric, index) => (
            <article key={metric.label}>
              <span className="identity-metric__index">0{index + 1}</span>
              <div>
                <span className="protocol-label">{metric.label}</span>
                <strong>{index === 0 ? count : metric.value}</strong>
              </div>
              <small>{metric.status}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
