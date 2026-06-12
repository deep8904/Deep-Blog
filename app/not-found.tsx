import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="kicker">oops...</p>
      <h1 aria-label="404">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <p>This page is not in the notebook.</p>
      <Link className="button-link" href="/">
        Back home <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
