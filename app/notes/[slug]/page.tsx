import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import { siteConfig } from "@/site.config";

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
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
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: note.title,
      description: note.description,
      type: "article",
      url: canonicalUrl,
      publishedTime: note.publishedAt,
      modifiedTime: note.updatedAt ?? note.publishedAt,
      authors: [author],
      tags: note.topics,
      images: note.heroImage
        ? [
            {
              url: note.heroImage,
              alt: note.heroImageAlt ?? note.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: note.heroImage ? "summary_large_image" : "summary",
      title: note.title,
      description: note.description,
      images: note.heroImage ? [note.heroImage] : undefined,
    },
  };
}

export default async function NotePage({
  params,
}: {
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
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished: note.publishedAt,
    dateModified: note.updatedAt ?? note.publishedAt,
    mainEntityOfPage: canonicalUrl,
    keywords: note.topics,
    ...(note.heroImage ? { image: `${siteConfig.url}${note.heroImage}` } : {}),
  };

  return (
    <article className="article-page">
      <header className="article-header">
        <Link className="article-back-link" href="/notes">
          Back to Writing
        </Link>
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
            {note.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        ) : null}
      </header>

      {note.heroImage ? (
        <figure className="article-hero-image">
          <Image
            src={note.heroImage}
            alt={note.heroImageAlt ?? ""}
            fill
            priority
            sizes="(max-width: 960px) 100vw, 960px"
          />
          {note.heroImageCaption ? <figcaption>{note.heroImageCaption}</figcaption> : null}
        </figure>
      ) : null}

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: note.html }}
      />
      <footer className="article-footer-nav" aria-label="Article navigation">
        <Link className="text-link" href="/notes">
          Back to all writing
        </Link>
        <Link className="text-link" href="/about">
          About Deep
        </Link>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
