"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__identity">
        <Link className="wordmark" href="/" aria-label="Deep Chadamiya home">
          <span className="wordmark__mark">.deep</span>
          <span className="wordmark__text">
            <strong>Deep Chadamiya</strong>
            <span>personal notebook</span>
          </span>
        </Link>
      </div>

      <nav aria-label="Primary navigation">
        {siteConfig.navigation.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
