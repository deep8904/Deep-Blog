import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import BlogPage from "@/app/blog/page";

describe("blog listing page", () => {
  it("lists the published Copilot article with its metadata and route", () => {
    const html = renderToStaticMarkup(<BlogPage />);

    expect(html).toContain("GitHub Copilot Usage Metrics Now Separate Agent App Activity");
    expect(html).toContain(
      'href="/blog/github-copilot-usage-metrics-agent-app-activity"',
    );
    expect(html).toContain("Development");
    expect(html).toContain("GitHub Copilot");
    expect(html).toContain("Aug 9, 2026");
  });
});
