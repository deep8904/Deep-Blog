import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/site.config";
import "@fontsource-variable/geist";
import "@fontsource-variable/newsreader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-stage">
          <div className="site-frame">
            <a className="skip-link" href="#main-content">Skip to content</a>
            <SiteHeader />
            <main id="main-content">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
