import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const notesDirectory = path.join(process.cwd(), "content", "notes");

export type NoteMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  topics: string[];
  draft: boolean;
  readingTime: number;
  heroImage?: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
};

export type Note = NoteMeta & {
  html: string;
};

const articleImageSlots: Record<string, Record<string, string>> = {
  "three-days-one-castle-next-wave": {
    "01-mix-center-exterior": "![Xbox Game Camp Arizona displayed outside the ASU MIX Center](/images/xbox-game-camp/exterior.webp)\n\n*Xbox Game Camp Arizona at Arizona State University’s MIX Center.*",
    "02-next-wave-team-formation": "![Participants gathering around a game demonstration during Xbox Game Camp Arizona](/images/xbox-game-camp/playtest.webp)\n\n*Teams learning, testing, and building throughout the weekend.*",
    "04-endstar-build": "![A game-development session shown on a large screen during Xbox Game Camp Arizona](/images/xbox-game-camp/session.webp)\n\n*Work moved constantly between the engine, the room, and feedback from other participants.*",
    "05-mentor-corner": "![Mentors seated with laptops during Xbox Game Camp Arizona](/images/xbox-game-camp/mentors.webp)\n\n*Mentors made unfinished questions feel normal and useful.*",
    "06-group-photo": "![Participants and organizers gathered for the Xbox Game Camp Arizona group photograph](/images/xbox-game-camp/group.webp)\n\n*The community that formed around three days of making games together.*",
    "07-final-build-presentation": "![Speakers discussing game development on stage during Xbox Game Camp Arizona](/images/xbox-game-camp/talk.webp)\n\n*Presentations and conversations connected the weekend build to the wider game industry.*",
  },
};

function noteFiles(): string[] {
  if (!fs.existsSync(notesDirectory)) return [];

  return fs
    .readdirSync(notesDirectory)
    .filter(
      (file) =>
        file.endsWith(".md") &&
        !file.startsWith("_") &&
        file.toLowerCase() !== "readme.md",
    );
}

function parseMeta(fileName: string): NoteMeta | null {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(notesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (data.draft === true) return null;

  const required = ["title", "description", "publishedAt"] as const;
  for (const key of required) {
    if (!data[key]) {
      throw new Error(`Missing required frontmatter field "${key}" in ${fileName}`);
    }
  }

  const configuredHero = resolveHeroImage(data);

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    publishedAt: String(data.publishedAt),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    author: data.author ? String(data.author) : undefined,
    topics: Array.isArray(data.topics) ? data.topics.map(String) : [],
    draft: false,
    readingTime: calculateReadingTime(content),
    ...(Object.keys(configuredHero).length > 0 ? configuredHero : fallbackHeroImage(slug)),
  };
}

export function getAllNotes(): NoteMeta[] {
  return noteFiles()
    .map(parseMeta)
    .filter((note): note is NoteMeta => note !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, "");
  const fullPath = path.join(notesDirectory, `${safeSlug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (data.draft === true) return null;

  const preparedContent = injectArticleImages(safeSlug, content);
  const processed = await remark().use(html, { sanitize: true }).process(preparedContent);
  const configuredHero = resolveHeroImage(data);

  return {
    slug: safeSlug,
    title: String(data.title),
    description: String(data.description),
    publishedAt: String(data.publishedAt),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    author: data.author ? String(data.author) : undefined,
    topics: Array.isArray(data.topics) ? data.topics.map(String) : [],
    draft: false,
    readingTime: calculateReadingTime(content),
    ...(Object.keys(configuredHero).length > 0 ? configuredHero : fallbackHeroImage(safeSlug)),
    html: processed.toString(),
  };
}

function injectArticleImages(slug: string, content: string): string {
  const slots = articleImageSlots[slug];
  if (!slots) return content;

  return content.replace(/<!-- IMAGE_SLOT: ([a-z0-9-]+) -->/gi, (_, slot: string) => slots[slot] ?? "");
}

function fallbackHeroImage(slug: string) {
  if (slug !== "three-days-one-castle-next-wave") return {};

  return {
    heroImage: "/images/xbox-game-camp/exterior.webp",
    heroImageAlt: "Xbox Game Camp Arizona displayed outside the ASU MIX Center",
    heroImageCaption: "Xbox Game Camp Arizona at Arizona State University’s MIX Center.",
  };
}

function calculateReadingTime(content: string): number {
  const withoutComments = content.replace(/<!--[\s\S]*?-->/g, " ");
  const plainText = withoutComments
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .replace(/[#>*_\-[\]()]/g, " ");
  const wordCount = plainText.match(/\b[\w'’-]+\b/g)?.length ?? 0;

  return Math.max(1, Math.ceil(wordCount / 220));
}

function resolveHeroImage(data: Record<string, unknown>) {
  if (!data.heroImage || typeof data.heroImage !== "string") return {};
  if (!data.heroImage.startsWith("/")) return {};

  const publicPath = path.join(process.cwd(), "public", data.heroImage.slice(1));
  if (!fs.existsSync(publicPath)) return {};

  return {
    heroImage: data.heroImage,
    heroImageAlt: data.heroImageAlt ? String(data.heroImageAlt) : "",
    heroImageCaption: data.heroImageCaption ? String(data.heroImageCaption) : undefined,
  };
}
