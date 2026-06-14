import Link from "next/link";
import { siteConfig } from "@/site.config";

export function InstanceFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-headline">
        <p>LOOSE THREAD</p>
        <h2>Keep the question open long enough to learn from it.</h2>
      </div>
      <div className="footer-links" aria-label="Footer navigation">
        {siteConfig.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </div>
      <div className="footer-meta">
        <span>Personal field notes by Deep Chadamiya</span>
        <span>© 2026</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
