"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => buttonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="site-header__side site-header__side--left" aria-label="Writing navigation">
        <Link href="/notes" aria-current={isActive("/notes") ? "page" : undefined}>
          Writing
        </Link>
      </nav>

      <Link className="site-wordmark" href="/" aria-label="Draft State home">
        <span className="site-wordmark__glyph" aria-hidden="true">DS</span>
        <span>
          <strong>{siteConfig.name}</strong>
          <small>Personal publishing journal</small>
        </span>
      </Link>

      <nav className="site-header__side site-header__side--right" aria-label="About navigation">
        <Link href="/about" aria-current={isActive("/about") ? "page" : undefined}>
          About
        </Link>
      </nav>

      <button
        className="menu-button"
        type="button"
        ref={buttonRef}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      {menuOpen ? (
        <div
          className="mobile-navigation"
          id="mobile-navigation"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="mobile-navigation__status">
            <span className="status-light" aria-hidden="true" />
            Archive active
          </div>
          <nav aria-label="Mobile navigation">
            {siteConfig.navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                style={{ "--menu-index": index } as CSSProperties}
              >
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              requestAnimationFrame(() => buttonRef.current?.focus());
            }}
          >
            Close menu
          </button>
        </div>
      ) : null}
    </header>
  );
}
