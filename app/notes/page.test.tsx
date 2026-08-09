import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import NotesPage from "@/app/notes/page";

describe("Writing listing", () => {
  it("renders legacy notes and pipeline articles with one consistent listing treatment", () => {
    const html = renderToStaticMarkup(<NotesPage />);
    const pipelineTitle = "GitHub Copilot Usage Metrics Now Separate Agent App Activity";
    const legacyTitle = "Three Days, One Castle, and a Team Called Next Wave";

    expect(html).toContain("PUBLISHED WRITING");
    expect(html).toContain(
      'href="/blog/github-copilot-usage-metrics-agent-app-activity"',
    );
    expect(html).toContain('href="/notes/three-days-one-castle-next-wave"');
    expect(html).toContain('href="/notes/why-gta-rps-best-screens-are-a-design-masterclass"');
    expect(html.indexOf(pipelineTitle)).toBeLessThan(html.indexOf(legacyTitle));
  });
});
