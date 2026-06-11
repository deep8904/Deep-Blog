function resolveSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000";

  return configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`;
}

export const siteConfig = {
  name: "Draft State",
  wordmark: "Draft State",
  description:
    "A personal blog by Deep Chadamiya about software, interface design, games, photography, and the lessons found while making things.",
  author: "Deep Chadamiya",
  url: resolveSiteUrl(),
  navigation: [
    { label: "Home", href: "/" },
    { label: "Notes", href: "/notes" },
    { label: "About", href: "/about" },
  ],
} as const;
