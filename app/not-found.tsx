import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="article-topline"><span>Page / Missing</span><span>No note lives here</span></div>
      <div className="not-found-page__body">
        <p className="article-kicker">[ 404 ]</p>
        <h1 id="not-found-title">I could not find that page.</h1>
        <p>The link may be old, mistyped, or pointing at a note that is still private until it is ready.</p>
        <div className="not-found-page__actions">
          <Link className="primary-button" href="/notes"><span>Read the writing</span><span aria-hidden="true">→</span></Link>
          <Link className="secondary-button" href="/">Return home</Link>
        </div>
      </div>
    </section>
  );
}
