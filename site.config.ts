export const siteConfig = {
  name: "Draft State",
  wordmark: "Draft State",
  description:
    "A personal blog by Deep Chadamiya about software, interface design, games, photography, and the lessons found while making things.",
  author: "Deep Chadamiya",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Notes", href: "/notes" },
    { label: "About", href: "/about" },
  ],
} as const;
