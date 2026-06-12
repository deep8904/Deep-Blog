"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/site.config";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const closeMenu = (returnFocus = false) => {
    setMenuOpen(false);
    if (returnFocus) {
      requestAnimationFrame(() => buttonRef.current?.focus());
    }
  };

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    focusable?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu(true);
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Motion transitions adjusted dynamically for reduced motion
  const lineTransition = prefersReducedMotion
    ? { duration: 0.05 }
    : { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const };

  const fadeTransition = (delay: number) =>
    prefersReducedMotion
      ? { duration: 0.05 }
      : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <header className="site-header">
      {/* Structural bottom rule drawn via motion */}
      <motion.div
        className="site-header__rule"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        style={{ originX: 0 }}
        transition={lineTransition}
      />

      <motion.div
        className="site-header__identity"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={fadeTransition(0.12)}
      >
        <Link className="wordmark" href="/" aria-label="Deep Chadamiya home">
          <span className="wordmark__mark">.deep</span>
          <span className="wordmark__text">
            <strong>Deep Chadamiya</strong>
            <span>personal notebook</span>
          </span>
        </Link>
      </motion.div>

      <motion.nav
        className="site-header__nav"
        aria-label="Primary navigation"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={fadeTransition(0.22)}
      >
        {siteConfig.navigation.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </motion.nav>

      <motion.button
        className="menu-button"
        type="button"
        ref={buttonRef}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={fadeTransition(0.28)}
      >
        {menuOpen ? "close" : "menu"}
      </motion.button>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mobile-menu"
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { y: "-100%", opacity: 0.95 }}
            animate={{ y: 0, opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0.1 }
                : { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }
            }
          >
            <nav aria-label="Mobile navigation">
              {siteConfig.navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  style={{ "--item-index": index } as CSSProperties & Record<"--item-index", number>}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button type="button" onClick={() => closeMenu(true)}>
              close menu
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
