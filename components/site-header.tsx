import Link from "next/link";
import { siteConfig } from "@/site.config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__identity">
        <Link className="wordmark" href="/" aria-label={`${siteConfig.name} home`}>
          <span className="wordmark__mark">DS</span>
          <span>{siteConfig.name}</span>
        </Link>
        <span className="header-note">Personal blog of Deep Chadamiya</span>
      </div>

      <nav aria-label="Primary navigation">
        {siteConfig.navigation.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}
