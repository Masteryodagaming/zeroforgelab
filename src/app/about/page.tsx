import type { Metadata } from "next";
import Link from "next/link";

const description =
  "ZeroForge is a digital product studio founded by Josh Milliea in Elsipogtog, New Brunswick. Our goal is to make technology and everyday life fit together, so it’s easy and anyone can use it.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About ZeroForge · Making technology fit everyday life",
    description,
    url: "https://zeroforgelab.com/about/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ZeroForge — We turn ideas into reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ZeroForge · Making technology fit everyday life",
    description,
    images: ["/og.png"],
  },
};

const values: {
  title: string;
  body: string;
  accent: "ice" | "ember";
}[] = [
  {
    title: "Simple for anyone",
    body: "Technology should fit into your day, not get in the way of it. We design so anyone can pick it up and use it, no manual needed.",
    accent: "ice",
  },
  {
    title: "Built to last",
    body: "We strive to succeed in what we build. That means software that keeps working every day it’s needed, not just on launch day.",
    accent: "ember",
  },
  {
    title: "Always learning",
    body: "Every project teaches us something new, and we bring it into the next one. Learning is half the fun of building.",
    accent: "ice",
  },
];

function Eyebrow({
  children,
  tone = "ice",
}: {
  children: React.ReactNode;
  tone?: "ice" | "ember";
}) {
  return (
    <p
      className={`mb-4 font-mono text-[11px] uppercase tracking-[0.18em] ${
        tone === "ice" ? "text-ice" : "text-ember"
      }`}
    >
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
      {/* Hero */}
      <section className="mx-auto max-w-3xl text-center">
        <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ice">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-ice shadow-[0_0_8px_2px_rgba(94,196,255,0.6)]"
            aria-hidden
          />
          About ZeroForge
        </p>
        <h1 className="animate-fade-up-delay-1 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Making technology fit <span className="text-ice">everyday life.</span>
        </h1>
        <p className="animate-fade-up-delay-2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          ZeroForge is a digital product studio founded by Josh Milliea in
          Elsipogtog, New Brunswick, Canada.
        </p>
      </section>

      {/* Founder note */}
      <section
        className="animate-fade-up-delay-3 mx-auto mt-14 max-w-3xl sm:mt-16"
        aria-labelledby="story"
      >
        <div className="glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.16),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <div className="relative">
            <Eyebrow tone="ember">The story</Eyebrow>
            <h2
              id="story"
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              A note from Josh
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                <span className="text-foreground">
                  I just love to build and learn.
                </span>{" "}
                From a young age, computers interested me, and I&apos;ve been
                building and learning ever since.
              </p>
              <p>
                That&apos;s what ZeroForge is about. We strive to succeed in
                what we do, and our goal is to make technology and everyday
                life coincide, where it&apos;s easy and anyone can use it.
              </p>
              <p>If you have an idea, I&apos;d love to hear it.</p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ice/40 bg-ice/10 font-display text-sm font-semibold text-ice"
                aria-hidden
              >
                JM
              </span>
              <div>
                <p className="font-display text-base font-semibold text-foreground">
                  Josh (Joshua Milliea)
                </p>
                <p className="text-sm text-muted">
                  Founder, ZeroForge · Elsipogtog, New Brunswick
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + values */}
      <section className="mt-20 sm:mt-24" aria-labelledby="mission">
        <Eyebrow>What we believe</Eyebrow>
        <h2
          id="mission"
          className="max-w-3xl text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Technology and everyday life should fit together.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          Good software should feel easy enough for anyone to use. That&apos;s
          the bar we hold ourselves to, and we strive to meet it in everything
          we build.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="glass-panel rounded-2xl p-6 sm:p-7">
              <span
                className={`block h-1 w-10 rounded-full ${
                  v.accent === "ice"
                    ? "bg-ice shadow-[0_0_12px_rgba(94,196,255,0.5)]"
                    : "bg-ember shadow-[0_0_12px_rgba(255,138,61,0.5)]"
                }`}
                aria-hidden
              />
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* What we've built */}
      <section className="mt-20 sm:mt-24" aria-labelledby="built">
        <Eyebrow tone="ember">What we&apos;ve built</Eyebrow>
        <h2
          id="built"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Our work so far.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/rinkrat/"
            className="glass-panel focus-ring group flex items-center gap-4 rounded-2xl p-4 pr-5 transition hover:border-ice/40 sm:p-5"
          >
            {/* Icon has its black background keyed out to transparency. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/rinkrat/rinkrat-icon.webp"
              alt=""
              width={320}
              height={292}
              loading="lazy"
              decoding="async"
              className="h-16 w-auto shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                Rink<span className="text-ice">Rat</span>
              </p>
              <p className="mt-0.5 text-sm text-muted">
                Arena management, live at Chief Young Eagle Recreation Center.
              </p>
            </div>
            <span
              className="shrink-0 text-ice transition group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </Link>
          <Link
            href="/supercrib/"
            className="glass-panel focus-ring group flex items-center gap-4 rounded-2xl p-4 pr-5 transition hover:border-gold/40 sm:p-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/supercrib/supercrib-icon.webp"
              alt=""
              width={256}
              height={256}
              loading="lazy"
              decoding="async"
              className="h-14 w-14 shrink-0 rounded-xl border border-gold/30"
            />
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                Super<span className="text-gold">Crib</span>
              </p>
              <p className="mt-0.5 text-sm text-muted">
                Cribbage raced to 241. Free to play.
              </p>
            </div>
            <span
              className="shrink-0 text-gold transition group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 sm:mt-24" aria-labelledby="cta">
        <div className="glass-panel relative overflow-hidden rounded-2xl px-6 py-12 text-center sm:px-10 sm:py-14">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(94,196,255,0.2),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <div className="relative">
            <h2
              id="cta"
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Got an idea?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Tell us about it. We&apos;ll review it and reply with a price and
              timeframe, with no cost or commitment to ask.
            </p>
            <Link
              href="/request/"
              className="focus-ring mt-8 inline-flex w-full justify-center rounded-xl bg-ice px-6 py-3 text-sm font-semibold text-background shadow-[0_0_24px_rgba(94,196,255,0.25)] transition hover:bg-ice-bright sm:w-auto"
            >
              Submit a product request
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
