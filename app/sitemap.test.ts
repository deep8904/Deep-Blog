import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { siteConfig } from "@/site.config";

describe("sitemap", () => {
  it("includes the blog index and published blog articles", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain(`${siteConfig.url}/blog`);
    expect(urls).toContain(
      "https://deep-blog-rhqvwjjmy-deepkumar-s-projects.vercel.app/blog/github-copilot-usage-metrics-agent-app-activity",
    );
  });
});
