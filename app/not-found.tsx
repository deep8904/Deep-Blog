import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__coordinates" aria-hidden="true">
        <span>PAGE / MISSING</span>
        <span>ARCHIVE / NOT FOUND</span>
      </div>
      <p className="journal-label">Oops...</p>
      <h1 aria-label="404"><span>4</span><span>0</span><span>4</span></h1>
      <p>This page is not part of the archive.</p>
      <Link className="journal-button" href="/">
        <span>Back to homepage</span>
        <span aria-hidden="true">-&gt;</span>
      </Link>
    </section>
  );
}
