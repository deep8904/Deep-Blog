import { describe, expect, it } from "vitest";
import { siteConfig } from "@/site.config";

describe("site navigation", () => {
  it("keeps Writing as the only user-facing publication section", () => {
    expect(siteConfig.navigation).toContainEqual({ label: "Writing", href: "/notes" });
    expect(siteConfig.navigation).not.toContainEqual({ label: "Blog", href: "/blog" });
  });
});
