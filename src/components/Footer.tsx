import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border/80 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-ice/30 bg-ice/10 font-mono text-[10px] font-bold text-ice">
            ZF
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              ZeroForge
            </p>
            <p className="text-xs text-muted">Coming soon · zeroforgelab.com</p>
          </div>
        </div>
        <nav
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"
          aria-label="Footer"
        >
          <Link href="/" className="focus-ring rounded-md hover:text-foreground">
            Home
          </Link>
          <Link
            href="/about/"
            className="focus-ring rounded-md hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/contact/"
            className="focus-ring rounded-md hover:text-foreground"
          >
            Contact
          </Link>
          <a
            href="mailto:contact@zeroforgelab.com"
            className="focus-ring rounded-md hover:text-foreground"
          >
            contact@zeroforgelab.com
          </a>
        </nav>
        <p className="text-xs text-muted">© {year} ZeroForge. All rights reserved.</p>
      </div>
    </footer>
  );
}
