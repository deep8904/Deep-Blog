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
    "Personal field notes by Deep Chadamiya on making things, studying games, photography, and ideas that are still becoming clear.",
  author: "Deep Chadamiya",
  url: resolveSiteUrl(),
  navigation: [
    { label: "About", href: "/about" },
    { label: "Photography", href: "/photography" },
    { label: "Writing", href: "/notes" },
  ],
} as const;
