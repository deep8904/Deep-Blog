import Link from "next/link";

export function IdentityHero({ latestHref, publishedCount }: { latestHref?: string; publishedCount: number }) {
  return (
    <section className="identity-hero">
      <h1>Ideas become clearer when I write them down.</h1>
      <p>{publishedCount} published</p>
      {latestHref ? <Link href={latestHref}>Open latest note</Link> : null}
    </section>
  );
}
