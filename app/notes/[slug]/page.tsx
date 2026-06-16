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
    openGraph: {
      title: note.title,
      description: note.description,
      type: "article",
      url: canonicalUrl,
      publishedTime: note.publishedAt,
      modifiedTime: note.updatedAt ?? note.publishedAt,
      authors: [author],
      tags: note.topics,
    },
    twitter: { card: "summary", title: note.title, description: note.description },
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) notFound();

  const author = note.author ?? siteConfig.author;
  const canonicalUrl = `${siteConfig.url}/notes/${note.slug}`;
  const date = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(note.publishedAt));
  const heroImage = note.heroImage;
  const heroStyle = heroImage
    ? ({ backgroundImage: `url("${heroImage}")` } as CSSProperties)
    : undefined;
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
    <article className="article-page">
      <header className="article-header">
        <div className="article-topline">
          <Link href="/notes">← Back to writing</Link>
          <span><i className="status-dot" aria-hidden="true" /> Published entry</span>
        </div>
        <div className="article-heading-grid">
          <div>
            <p className="article-kicker">[ ENTRY / {note.topics[0] ?? "WRITING"} ]</p>
            <h1>{note.title}</h1>
            <p className="article-dek">{note.description}</p>
          </div>
          <aside className="article-meta" aria-label="Article metadata">
            <p>PUBLICATION DATA</p>
            <dl>
              <div><dt>Author</dt><dd>{author}</dd></div>
              <div><dt>Published</dt><dd><time dateTime={note.publishedAt}>{date}</time></dd></div>
              <div><dt>Reading time</dt><dd>{note.readingTime} minutes</dd></div>
            </dl>
            <ul>{note.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
          </aside>
        </div>
      </header>

      {heroImage ? (
        <figure className="article-media">
          <div
            className="article-media-image"
            style={heroStyle}
            role="img"
            aria-label={note.heroImageAlt || note.title}
          />
          {note.heroImageCaption ? <figcaption>{note.heroImageCaption}</figcaption> : null}
        </figure>
      ) : null}

      <div className="article-prose" dangerouslySetInnerHTML={{ __html: note.html }} />
      <footer className="article-footer">
        <Link className="secondary-button" href="/notes">All published writing</Link>
        <Link className="primary-button" href="/about"><span>About the writer</span><span aria-hidden="true">→</span></Link>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
