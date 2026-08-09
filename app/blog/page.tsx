import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { getAllBlogArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Published articles by Deep Chadamiya about technology, developer tools, and the systems around them.",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default function BlogPage() {
  const articles = getAllBlogArticles();
  const count = String(articles.length).padStart(2, "0");

  return (
    <div className="inner-page writing-page blog-index-page">
      <section className="page-hero writing-hero" aria-labelledby="blog-title">
        <div className="section-label writing-label"><span>BL</span><p>PUBLISHED ARTICLES</p></div>
        <div className="writing-title-row">
          <h1 id="blog-title">
            <span className="line"><span>{articles.length ? "Articles with" : "No articles"}</span></span>
            <span className="line"><span>{articles.length ? "room for detail." : "published yet."}</span></span>
          </h1>
          <div className="writing-total"><span>PUBLISHED</span><strong>{count}</strong></div>
        </div>
        <p className="page-intro">
          {articles.length
            ? "Longer, researched pieces about technology, developer tools, and the systems taking shape around them."
            : "This page stays empty until a researched article is ready to publish."}
        </p>
      </section>

      {articles.length ? (
        <section className="writing-list-section" aria-labelledby="article-list-title">
          <Reveal>
            <div className="writing-list-heading">
              <p id="article-list-title">[ LATEST ARTICLES ]</p>
              <span>{count} TOTAL</span>
            </div>
            <ol className="writing-list">
              {articles.map((article, index) => (
                <li key={article.slug}>
                  <Link href={`/blog/${article.slug}`}>
                    <span className="writing-entry-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="writing-entry-copy">
                      <span className="latest-meta">
                        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                        <span>{article.category}</span>
                        <span>{article.readingTime} min read</span>
                      </span>
                      <strong>{article.title}</strong>
                      <p>{article.description}</p>
                      <span className="blog-entry-tags" aria-label="Article tags">
                        {article.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </span>
                    </span>
                    <span className="writing-entry-arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>
      ) : (
        <section className="writing-console" aria-labelledby="blog-empty-title">
          <Reveal>
            <div className="console-header"><span>BLOG</span><span>LOCAL</span></div>
            <div className="console-body">
              <div className="console-zero" aria-hidden="true">00</div>
              <div className="console-message">
                <p className="panel-label">RESULT</p>
                <h2 id="blog-empty-title">Nothing to display.</h2>
                <p>The first article will appear here after it is ready to publish.</p>
              </div>
            </div>
          </Reveal>
        </section>
      )}
    </div>
  );
}
