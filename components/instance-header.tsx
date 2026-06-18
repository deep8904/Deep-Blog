"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";

type InstanceHeaderProps = {
  writingCount: number;
};

export function InstanceHeader({ writingCount }: InstanceHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const count = String(writingCount).padStart(2, "0");

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label={`${siteConfig.name} home`}>
          <span className="wordmark-mark" aria-hidden="true">
            <span>L</span><span>T</span>
            <i />
          </span>
          <span>LOOSE</span><b aria-hidden="true">/</b><span>THREAD</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}>
              {item.label}
              {item.href === "/notes" ? <span>{count}</span> : null}
            </Link>
          ))}
        </nav>

        <div className="header-state" aria-label="Site status">
          <span className="status-dot" aria-hidden="true" />
          <span>Writing</span>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <i aria-hidden="true" />
        </button>
      </header>

      <nav
        className={open ? "mobile-menu-open" : "mobile-menu"}
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {siteConfig.navigation.map((item) => (
          <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}>
            {item.label}
            {item.href === "/notes" ? <span>{count}</span> : null}
          </Link>
        ))}
      </nav>
    </>
  );
}
