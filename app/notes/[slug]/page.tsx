import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import { siteConfig } from "@/site.config";

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) return {};
  const canonicalUrl = `${siteConfig.url}/notes/${note.slug}`;
  const author = note.author ?? siteConfig.author;
  return {
    title: note.title,
    description: note.description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title: note.title, description: note.description, type: "article", url: canonicalUrl, publishedTime: note.publishedAt, modifiedTime: note.updatedAt ?? note.publishedAt, authors: [author], tags: note.topics },
    twitter: { card: "summary", title: note.title, description: note.description },
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) notFound();

  const author = note.author ?? siteConfig.author;
  const canonicalUrl = `${siteConfig.url}/notes/${note.slug}`;
  const date = new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(note.publishedAt));
  const fallbackImage = note.slug === "three-days-one-castle-next-wave" ? "/images/notes/xbox-game-camp/article-hero.jpg" : undefined;
  const heroImage = note.heroImage ?? fallbackImage;
  const heroStyle = heroImage ? ({ "--ip-article-image": `url("${heroImage}")` } as CSSProperties) : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: note.title,
    description: note.description,
    author: { "@type": "Person", name: author },
    datePublished: note.publishedAt,
    dateModified: note.updatedAt ?? note.publishedAt,
    mainEntityOfPage: canonicalUrl,
    keywords: note.topics,
  };

  return (
    <article className="ip-article">
      <header className="ip-article-header">
        <div className="ip-shell">
          <div className="ip-article-header__topline">
            <Link href="/notes">Back to archive</Link>
            <span className="ip-node-status"><i />Published entry</span>
          </div>
          <div className="ip-article-header__grid">
            <div><span className="ip-label">Entry / {note.topics[0] ?? "Writing"}</span><h1>{note.title}</h1><p>{note.description}</p></div>
            <aside className="ip-article-card" aria-label="Article metadata">
              <span className="ip-label">Transmission data</span>
              <dl>
                <div><dt>Author</dt><dd>{author}</dd></div>
                <div><dt>Published</dt><dd><time dateTime={note.publishedAt}>{date}</time></dd></div>
                <div><dt>Reading time</dt><dd>{note.readingTime} minutes</dd></div>
              </dl>
              <ul>{note.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
            </aside>
          </div>
        </div>
      </header>

      <figure className={`ip-article-media${heroImage ? " has-image" : ""}`} style={heroStyle}>
        <div className="ip-article-media__field" aria-hidden="true"><span /><span /><span /><strong>001</strong></div>
        <figcaption>{note.heroImageCaption ?? (heroImage ? "Entry image / Archive media" : "Media node / awaiting image")}</figcaption>
      </figure>

      <div className="ip-prose" dangerouslySetInnerHTML={{ __html: note.html }} />
      <footer className="ip-article-footer"><Link className="ip-button ip-button--secondary" href="/notes">All writing</Link><Link className="ip-button" href="/about">About</Link></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
