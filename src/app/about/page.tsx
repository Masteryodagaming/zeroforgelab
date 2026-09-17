import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "ZeroForge is a Canadian software and digital product studio. Our full story is still being forged — here’s a first look.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About · ZeroForge",
    description:
      "A Canadian software and digital product studio. Full site coming soon.",
    url: "https://zeroforgelab.com/about/",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ice">
        About
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Built where ice meets iron.
      </h1>
      <div className="glass-panel mt-8 space-y-5 rounded-2xl p-6 text-base leading-relaxed text-muted sm:p-8 sm:text-lg">
        <p>
          ZeroForge is a Canadian software and digital product studio. We design
          and build modern web apps, brand sites, and digital tools that feel
          sharp, fast, and ready for the real world.
        </p>
        <p>
          The name is the brief: cool clarity where it counts, industrial grit
          where it matters. We&apos;re finishing the full company site now —
          this page is a temporary placeholder while that work continues.
        </p>
        <p>
          Based in Canada. Shipping for clients who care about craft as much as
          ship dates.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/"
          className="focus-ring rounded-full border border-border px-4 py-2 text-muted transition hover:border-ice/40 hover:text-ice"
        >
          ← Back home
        </Link>
        <Link
          href="/contact/"
          className="focus-ring rounded-full border border-ice/40 bg-ice/10 px-4 py-2 font-semibold text-ice transition hover:bg-ice/15"
        >
          Contact us
        </Link>
      </div>
    </main>
  );
}
