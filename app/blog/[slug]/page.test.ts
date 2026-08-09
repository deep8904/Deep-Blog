import { describe, expect, it } from "vitest";
import BlogArticlePage, { buildBlogMetadata } from "@/app/blog/[slug]/page";
import type { BlogArticle } from "@/lib/blog";

describe("blog page metadata", () => {
  it("publishes canonical and verification metadata", () => {
    const article = {
      slug: "metadata-article",
      title: "Metadata article",
      description: "Metadata description",
      publishedAt: "2026-08-09T19:32:19.822Z",
      updatedAt: "2026-08-09T19:32:19.822Z",
      status: "published",
      category: "Development",
      tags: ["Testing"],
      author: "Deep",
      heroAlt: "Abstract illustration",
      canonicalUrl: "https://blog.example/blog/metadata-article",
      sources: ["https://example.com/source"],
      draft: false,
      articleType: "technical_explainer",
      readingTime: 4,
      sourceDisclosure: "Sources are listed as numbered references.",
      verificationFingerprint: "0123456789abcdef",
      year: "2026",
      html: "<p>Body</p>",
    } satisfies BlogArticle;

    const metadata = buildBlogMetadata(article);

    expect(metadata.alternates).toEqual({ canonical: article.canonicalUrl });
    expect(metadata.other).toEqual({
      "publication-verification": article.verificationFingerprint,
    });
    expect(metadata.openGraph).toMatchObject({ url: article.canonicalUrl });
  });

  it("returns the Next.js 404 response for a missing slug", async () => {
    await expect(
      BlogArticlePage({ params: Promise.resolve({ slug: "missing-article" }) }),
    ).rejects.toThrow("NEXT_HTTP_ERROR_FALLBACK;404");
  });
});
