import Link from "next/link";
import { siteConfig } from "@/site.config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__identity">
        <span className="status-light" aria-hidden="true" />
        <div>
          <strong>{siteConfig.name}</strong>
          <span>Archive active - personal writing</span>
        </div>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/">Home</Link>
        <Link href="/notes">Writing</Link>
        <Link href="/about">About</Link>
      </nav>
      <p>Copyright {new Date().getFullYear()} Deep Chadamiya</p>
    </footer>
  );
}
