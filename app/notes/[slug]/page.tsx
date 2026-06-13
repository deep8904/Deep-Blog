import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import { siteConfig } from "@/site.config";

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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
    twitter: {
      card: "summary",
      title: note.title,
      description: note.description,
    },
  };
}

export default async function NotePage({ params }: {
  params: Promise<{ slug: string }>;
}) {
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
  const showGameCampPhoto = note.slug === "three-days-one-castle-next-wave";

  return (
    <article className="article-page">
      <header className="article-header">
        <div className="protocol-rail" aria-hidden="true" />
        <div className="article-header__topline">
          <Link className="article-back-link" href="/notes">Back to writing</Link>
          <span className="protocol-label">Entry / {note.topics[0] ?? "Writing"}</span>
        </div>
        <h1>{note.title}</h1>
        <p className="article-description">{note.description}</p>
        <div className="article-meta">
          <span>By {author}</span>
          <time dateTime={note.publishedAt}>{date}</time>
          <span>{note.readingTime} min read</span>
        </div>
        {note.topics.length > 0 ? (
          <ul className="article-topics" aria-label="Article topics">
            {note.topics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
        ) : null}
        <div className="protocol-rail" aria-hidden="true" />
      </header>

      {showGameCampPhoto ? (
        <figure className="article-event-photo">
          <div className="article-event-photo__image" role="img" aria-label="Xbox Game Camp Arizona participants and organizers" />
          <figcaption>Xbox Game Camp Arizona / Replace this image in GitHub using the documented filename.</figcaption>
        </figure>
      ) : null}

      <div className="prose" dangerouslySetInnerHTML={{ __html: note.html }} />

      <footer className="article-footer-nav" aria-label="Article navigation">
        <Link className="protocol-button protocol-button--ghost" href="/notes">All writing</Link>
        <Link className="protocol-button" href="/about">About Deep</Link>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
