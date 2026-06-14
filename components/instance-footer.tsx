import Link from "next/link";
import { siteConfig } from "@/site.config";

export function InstanceFooter() {
  return (
    <footer className="ip-footer">
      <div className="ip-footer__signal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="ip-footer__grid">
        <div className="ip-footer__identity">
          <span className="ip-label">Draft State / Personal journal</span>
          <strong>{siteConfig.name}</strong>
          <p>Deep Chadamiya / Phoenix, Arizona</p>
        </div>
        <p className="ip-footer__statement">
          Essays about software, interface design, games, photography, and the details that are easy to lose after the work ends.
        </p>
        <nav aria-label="Footer navigation">
          {siteConfig.navigation.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="ip-footer__meta">
        <span>Connected node / Online</span>
        <span>Version 1.0.5</span>
        <span>2026 / Draft State</span>
      </div>
    </footer>
  );
}
