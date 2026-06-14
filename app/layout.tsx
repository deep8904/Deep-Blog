import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { InstanceHeader } from "@/components/instance-header";
import { InstanceFooter } from "@/components/instance-footer";
import { siteConfig } from "@/site.config";
import "./instance-live.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s / ${siteConfig.name}` },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a className="ip-skip-link" href="#main-content">Skip to content</a>
        <InstanceHeader />
        <main id="main-content">{children}</main>
        <InstanceFooter />
      </body>
    </html>
  );
}
