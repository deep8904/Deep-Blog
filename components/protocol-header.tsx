"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";

export function ProtocolHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="protocol-header">
      <Link className="protocol-brand" href="/" aria-label="Draft State home">
        <span>{siteConfig.name}</span>
        <sup>TM</sup>
      </Link>

      <nav className="protocol-nav" aria-label="Primary navigation">
        {siteConfig.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="protocol-status">
        <span aria-hidden="true" />
        Archive online
      </div>

      <button
        className="protocol-menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="protocol-mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div className="protocol-mobile-nav" id="protocol-mobile-nav">
          <p><span aria-hidden="true" /> Draft State / Archive online</p>
          <nav aria-label="Mobile navigation">
            {siteConfig.navigation.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <small>0{index + 1}</small>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
