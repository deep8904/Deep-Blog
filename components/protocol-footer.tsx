import Link from "next/link";
import { siteConfig } from "@/site.config";

export function ProtocolFooter() {
  return (
    <footer className="protocol-footer">
      <div className="protocol-rail" aria-hidden="true" />
      <div className="protocol-footer__grid">
        <div>
          <span className="protocol-label">Draft State / Personal journal</span>
          <strong>{siteConfig.name}<sup>TM</sup></strong>
        </div>

        <p>
          Essays about software, interface design, games, photography, and the details that are easy to lose after the work ends.
        </p>

        <nav aria-label="Footer navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <small>Deep Chadamiya / Phoenix, Arizona / {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
