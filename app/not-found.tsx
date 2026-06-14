import Link from "next/link";

export default function NotFound() {
  return (
    <section className="ip-not-found">
      <div className="ip-not-found__topline"><span>Page / Missing</span><span>Archive / Not found</span></div>
      <span className="ip-label">Protocol error</span>
      <h1 aria-label="404"><span>4</span><span>0</span><span>4</span></h1>
      <p>This page is not part of the archive.</p>
      <Link className="ip-button" href="/">Return to homepage</Link>
    </section>
  );
}
