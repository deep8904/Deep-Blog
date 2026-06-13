import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import { siteConfig } from "@/site.config";

const GROUP_PHOTO = "data:image/webp;base64,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";

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
        <Link className="article-back-link" href="/notes">Back to Writing</Link>
        <p className="kicker">{note.topics[0] ?? "Writing"}</p>
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
      </header>

      {showGameCampPhoto ? (
        <figure className="article-event-photo">
          <img src={GROUP_PHOTO} alt="Xbox Game Camp Arizona participants and organizers gathered for a group photograph" />
          <figcaption>The Xbox Game Camp Arizona community after three days of building, testing, and learning together.</figcaption>
        </figure>
      ) : null}

      <div className="prose" dangerouslySetInnerHTML={{ __html: note.html }} />

      <footer className="article-footer-nav" aria-label="Article navigation">
        <Link className="text-link" href="/notes">Back to all writing</Link>
        <Link className="text-link" href="/about">About Deep</Link>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
