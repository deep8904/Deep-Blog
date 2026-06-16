import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { InstanceHeader } from "@/components/instance-header";
import { InstanceFooter } from "@/components/instance-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { getAllNotes } from "@/lib/notes";
import { siteConfig } from "@/site.config";
import "./instance-live.css";
import "./refinements-v2.css";
import "./image-paths.css";
import "./hero-v5.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s / ${siteConfig.name}` },
  description: siteConfig.description,
};

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const archiveCount = getAllNotes().length;

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} js`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ScrollProgress />
        <div className="site-frame" id="top">
          <InstanceHeader archiveCount={archiveCount} />
          <main id="main-content">{children}</main>
          <InstanceFooter />
        </div>
      </body>
    </html>
  );
}
