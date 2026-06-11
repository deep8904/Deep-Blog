import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="kicker">Draft State</p>
        <p className="footer-statement">
          A personal blog about making things and paying attention.
        </p>
      </div>
      <div className="footer-meta">
        <div>
          <Link href="/notes">Notes</Link>
          <Link href="/about">About</Link>
        </div>
        <span>© {new Date().getFullYear()} Deep Chadamiya</span>
      </div>
    </footer>
  );
}
