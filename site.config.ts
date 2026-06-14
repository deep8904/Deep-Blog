function resolveSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000";

  return configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`;
}

export const siteConfig = {
  name: "Loose Thread",
  wordmark: "Loose Thread",
  description:
    "Personal field notes by Deep Chadamiya on software, product design, games, photography, and unfinished ideas.",
  author: "Deep Chadamiya",
  url: resolveSiteUrl(),
  navigation: [
    { label: "Index", href: "/" },
    { label: "About", href: "/about" },
    { label: "Archive", href: "/notes" },
  ],
} as const;
