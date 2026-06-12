import Link from "next/link";
import { siteConfig } from "@/site.config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">
          {siteConfig.name}
          {" "}
          <span className="footer-dot" aria-hidden="true">•</span>
        </p>
        <p className="footer-statement">
          A personal notebook about software, interface design, games, and photography.
        </p>
      </div>
      <div className="footer-meta">
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/notes">Writing</Link>
          <Link href="/about">About</Link>
        </nav>
        <span className="footer-copyright">
          ©
          {new Date().getFullYear()}
          {" "}
          Deep Chadamiya
        </span>
      </div>
    </footer>
  );
}
