import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="kicker">404 / Not found</p>
      <h1>This page is not in the notebook.</h1>
      <Link className="text-link" href="/">
        Return home <span aria-hidden="true">↙</span>
      </Link>
    </section>
  );
}
