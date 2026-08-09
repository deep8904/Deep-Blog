import type { MetadataRoute } from "next";
import { getAllBlogArticles } from "@/lib/blog";
import { getAllNotes } from "@/lib/notes";
import { siteConfig } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/notes", "/blog", "/about"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const noteRoutes = getAllNotes().map((note) => ({
    url: `${siteConfig.url}/notes/${note.slug}`,
    lastModified: new Date(note.updatedAt ?? note.publishedAt),
  }));

  const blogRoutes = getAllBlogArticles().map((article) => ({
    url: article.canonicalUrl,
    lastModified: new Date(article.updatedAt),
  }));

  return [...staticRoutes, ...noteRoutes, ...blogRoutes];
}
