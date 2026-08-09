import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { siteConfig } from "@/site.config";

describe("sitemap", () => {
  it("keeps article routes without exposing a standalone blog index", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).not.toContain(`${siteConfig.url}/blog`);
    expect(urls).toContain(
      "https://deep-blog-rhqvwjjmy-deepkumar-s-projects.vercel.app/blog/github-copilot-usage-metrics-agent-app-activity",
    );
  });
});
