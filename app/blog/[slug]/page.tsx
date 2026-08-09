import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllBlogArticles,
  getBlogArticleBySlug,
  type BlogArticle,
} from "@/lib/blog";

type BlogPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogArticles().map((article) => ({ slug: article.slug }));
}

export function buildBlogMetadata(article: BlogArticle): Metadata {
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: article.canonicalUrl },
    other: { "publication-verification": article.verificationFingerprint },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: article.canonicalUrl,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.description,
    },
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogArticleBySlug(slug);
  return article ? buildBlogMetadata(article) : {};
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = await getBlogArticleBySlug(slug);
  if (!article) notFound();

  const date = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(article.publishedAt));
  const heroStyle = article.heroImage
    ? ({ backgroundImage: `url("${article.heroImage}")` } as CSSProperties)
    : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    author: { "@type": "Person", name: article.author },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: article.canonicalUrl,
    articleSection: article.category,
    keywords: article.tags,
    citation: article.sources,
  };
  const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <article
      className="article-page blog-article-page"
      data-publication-fingerprint={article.verificationFingerprint}
    >
      <header className="article-header">
        <div className="article-topline">
          <Link href="/notes">← Back to writing</Link>
          <span><i className="status-dot" aria-hidden="true" /> Published writing</span>
        </div>
        <div className="article-heading-grid">
          <div>
            <p className="article-kicker">[ ARTICLE / {article.category} ]</p>
            <h1>{article.title}</h1>
            <p className="article-dek">{article.description}</p>
          </div>
          <aside className="article-meta" aria-label="Article metadata">
            <p>PUBLICATION DATA</p>
            <dl>
              <div><dt>Author</dt><dd>{article.author}</dd></div>
              <div><dt>Published</dt><dd><time dateTime={article.publishedAt}>{date}</time></dd></div>
              <div><dt>Reading time</dt><dd>{article.readingTime} minutes</dd></div>
              <div><dt>Disclosure</dt><dd>{article.sourceDisclosure}</dd></div>
            </dl>
            <ul>{article.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </aside>
        </div>
      </header>

      {article.heroImage ? (
        <figure className="article-media">
          <div
            className="article-media-image"
            style={heroStyle}
            role="img"
            aria-label={article.heroAlt}
          />
        </figure>
      ) : null}

      <div className="article-prose" dangerouslySetInnerHTML={{ __html: article.html }} />
      <footer className="article-footer">
        <Link className="secondary-button" href="/notes">All published writing</Link>
        <Link className="primary-button" href="/about"><span>About the writer</span><span aria-hidden="true">→</span></Link>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd }} />
    </article>
  );
}
