import type { MetadataRoute } from "next";
import { getAllNotes } from "@/lib/notes";
import { siteConfig } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/notes", "/about", "/photography"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const noteRoutes = getAllNotes().map((note) => ({
    url: `${siteConfig.url}/notes/${note.slug}`,
    lastModified: new Date(note.updatedAt ?? note.publishedAt),
  }));

  return [...staticRoutes, ...noteRoutes];
}
