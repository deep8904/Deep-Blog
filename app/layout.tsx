import type { Metadata, Viewport } from "next";
import { InstanceHeader } from "@/components/instance-header";
import { InstanceFooter } from "@/components/instance-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { getAllNotes } from "@/lib/notes";
import { siteConfig } from "@/site.config";
import "@fontsource-variable/geist";
import "./instance-live.css";
import "./image-paths.css";
import "./identity-hero.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s / ${siteConfig.name}` },
  description: siteConfig.description,
};

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const writingCount = getAllNotes().length;

  return (
    <html lang="en" className="js">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ScrollProgress />
        <div className="site-frame" id="top">
          <InstanceHeader writingCount={writingCount} />
          <main id="main-content">{children}</main>
          <InstanceFooter />
        </div>
      </body>
    </html>
  );
}
