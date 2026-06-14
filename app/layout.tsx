import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ProtocolHeader } from "@/components/protocol-header";
import { ProtocolFooter } from "@/components/protocol-footer";
import { siteConfig } from "@/site.config";
import "./instance-only.css";
import "./photo-fixes.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-code", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ProtocolHeader />
        <main id="main-content">{children}</main>
        <ProtocolFooter />
      </body>
    </html>
  );
}
