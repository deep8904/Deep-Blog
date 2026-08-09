import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { getAllBlogArticles, getBlogArticleBySlug } from "@/lib/blog";
import { getAllNotes } from "@/lib/notes";

const temporaryRoots: string[] = [];

function createRoot() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "deep-blog-test-"));
  temporaryRoots.push(root);
  return root;
}

function artifact(
  slug: string,
  canonicalUrl?: string,
  publishedAt = "2026-08-09T19:32:19.822Z",
) {
  return `---
title: "A production article title"
slug: "${slug}"
description: "A complete generated article description for renderer coverage."
publishedAt: "${publishedAt}"
updatedAt: "${publishedAt}"
status: "published"
category: "Development"
tags: ["AI agents","Developer tools"]
author: "Deep"
heroImage: null
heroAlt: "An abstract editorial diagram"
${canonicalUrl ? `canonicalUrl: "${canonicalUrl}"` : ""}
sources: ["https://example.com/source-one","https://example.com/source-two"]
draft: false
articleType: "technical_explainer"
readingTime: 8
sourceDisclosure: "Sources are listed as numbered references."
---

Standard **Markdown** with \`inline code\` and a citation. [^1]

The same source can be cited again without creating a chain of backlinks. [^1]

| Field | Value |
| --- | --- |
| Safe | Yes |

<script>alert("unsafe")</script>

[^1]: [Primary source](https://example.com/source-one).
`;
}

function writeArticle(root: string, year: string, slug: string, contents: string) {
  const directory = path.join(root, year);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, `${slug}.mdx`), contents);
}

afterEach(() => {
  for (const root of temporaryRoots.splice(0)) fs.rmSync(root, { recursive: true });
});

describe("blog article loading", () => {
  it("discovers articles in nested year directories and parses pipeline frontmatter", () => {
    const root = createRoot();
    writeArticle(root, "2025", "older-article", artifact("older-article"));
    writeArticle(root, "2026", "newer-article", artifact("newer-article"));

    const articles = getAllBlogArticles({ root, siteOrigin: "https://site.example" });

    expect(articles.map((article) => article.slug)).toEqual(["older-article", "newer-article"]);
    expect(articles[0]).toMatchObject({
      category: "Development",
      tags: ["AI agents", "Developer tools"],
      sources: ["https://example.com/source-one", "https://example.com/source-two"],
      articleType: "technical_explainer",
      readingTime: 8,
      draft: false,
      status: "published",
      canonicalUrl: "https://site.example/blog/older-article",
    });
  });

  it("sorts published articles newest first", () => {
    const root = createRoot();
    writeArticle(root, "2025", "older-article", artifact(
      "older-article",
      undefined,
      "2025-04-10T12:00:00.000Z",
    ));
    writeArticle(root, "2026", "newer-article", artifact(
      "newer-article",
      undefined,
      "2026-07-12T12:00:00.000Z",
    ));

    expect(getAllBlogArticles({ root }).map((article) => article.slug)).toEqual([
      "newer-article",
      "older-article",
    ]);
  });

  it("renders footnotes and GFM while removing raw executable HTML", async () => {
    const root = createRoot();
    writeArticle(root, "2026", "safe-markdown", artifact("safe-markdown"));

    const article = await getBlogArticleBySlug("safe-markdown", { root });

    expect(article?.html).toContain("data-footnote-ref");
    expect(article?.html).toContain("<table>");
    expect(article?.html).toContain("<strong>Markdown</strong>");
    expect(article?.html).not.toContain("<script");
    expect(article?.html).not.toContain("alert(");
    expect(article?.html).toContain(">References</h2>");
    expect(article?.html?.match(/data-footnote-backref=""/g)).toHaveLength(1);
    expect(article?.html).not.toContain("↩<sup>2</sup>");
  });

  it("uses canonical frontmatter and exposes the final file hash fingerprint", async () => {
    const root = createRoot();
    const raw = artifact("canonical-article", "https://blog.example/blog/canonical-article");
    writeArticle(root, "2026", "canonical-article", raw);

    const article = await getBlogArticleBySlug("canonical-article", { root });

    expect(article?.canonicalUrl).toBe("https://blog.example/blog/canonical-article");
    expect(article?.verificationFingerprint).toBe(
      createHash("sha256").update(raw).digest("hex").slice(0, 16),
    );
  });

  it("returns null for a missing or unsafe slug", async () => {
    const root = createRoot();
    expect(await getBlogArticleBySlug("missing-article", { root })).toBeNull();
    expect(await getBlogArticleBySlug("../unsafe", { root })).toBeNull();
  });

  it("coexists with the existing notes loader", () => {
    expect(getAllNotes().map((note) => note.slug)).toContain(
      "three-days-one-castle-next-wave",
    );
  });
});
