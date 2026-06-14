"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";

export function InstanceHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="ip-header">
      <Link className="ip-brand" href="/" aria-label="Draft State home">
        <span className="ip-brand__mark" aria-hidden="true">DS</span>
        <span className="ip-brand__copy">
          <strong>{siteConfig.name}</strong>
          <small>Identity archive / 01</small>
        </span>
      </Link>

      <nav className="ip-nav" aria-label="Primary navigation">
        {siteConfig.navigation.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active(item.href) ? "page" : undefined}
          >
            <span>0{index + 1}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="ip-header__status" aria-label="Archive online">
        <i aria-hidden="true" />
        <span>Connected node</span>
      </div>

      <button
        className="ip-menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="ip-mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div className="ip-mobile-nav" id="ip-mobile-nav">
          <div className="ip-mobile-nav__top">
            <span>Draft State / Online</span>
            <button type="button" onClick={() => setOpen(false)}>Close</button>
          </div>
          <nav aria-label="Mobile navigation">
            {siteConfig.navigation.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <small>0{index + 1}</small>
                <span>{item.label}</span>
                <i aria-hidden="true">-&gt;</i>
              </Link>
            ))}
          </nav>
          <p>Personal publishing protocol / Phoenix, Arizona</p>
        </div>
      ) : null}
    </header>
  );
}
