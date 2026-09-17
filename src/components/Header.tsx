"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-2.5 rounded-md"
          aria-label="ZeroForge home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-ice/35 bg-ice/10 font-mono text-xs font-bold tracking-tight text-ice transition group-hover:border-ice/55 group-hover:bg-ice/15">
            ZF
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            ZeroForge
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md px-3.5 py-2 text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="focus-ring ml-2 rounded-full border border-ice/40 bg-ice/10 px-4 py-2 text-sm font-semibold text-ice transition hover:border-ice/60 hover:bg-ice/15"
          >
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav
            className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-4"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-md px-3 py-3 text-base text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="focus-ring mt-2 rounded-full border border-ice/40 bg-ice/10 px-4 py-3 text-center text-sm font-semibold text-ice"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
