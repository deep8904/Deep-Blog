import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p>Not found</p>
      <Link href="/">Back home</Link>
    </section>
  );
}
