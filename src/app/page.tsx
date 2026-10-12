import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: { absolute: "ZeroForge — We turn ideas into reality" },
  description:
    "ZeroForge is a Canadian digital product studio. Bring us an idea and we’ll design, build, and launch it: mobile and web apps, management tools, games, and custom tools for local businesses.",
  alternates: { canonical: "/" },
};

const services: {
  tag: string;
  title: string;
  body: string;
  accent: "ice" | "ember";
}[] = [
  {
    tag: "Apps",
    title: "Mobile and web apps",
    body: "Apps for phones and the browser, designed to be simple to use and built to hold up in the real world.",
    accent: "ice",
  },
  {
    tag: "Operations",
    title: "Management tools for organisations",
    body: "Scheduling, bookings, staff, and day-to-day admin for places like arenas, clubs, and community organisations.",
    accent: "ember",
  },
  {
    tag: "Games",
    title: "Games",
    body: "Casual and competitive games for phones and the web, from house rules to online play with friends.",
    accent: "ice",
  },
  {
    tag: "Local business",
    title: "Custom tools for local businesses",
    body: "Booking pages, internal tools, and websites for local businesses and services that don’t fit an off-the-shelf product.",
    accent: "ember",
  },
];

const steps = [
  {
    title: "Submit your idea",
    body: "Fill in a short product request. Rough ideas are welcome.",
  },
  {
    title: "We review it",
    body: "We read it closely and follow up if we have questions.",
  },
  {
    title: "Get a price and timeframe",
    body: "You get a clear price and timeframe. No cost or commitment to ask.",
  },
  {
    title: "We build and launch",
    body: "If it’s a go, we design, build, and launch it with you.",
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

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col">
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 pb-10 pt-14 text-center sm:px-8 sm:pb-16 sm:pt-20">
        <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ice">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-ice shadow-[0_0_8px_2px_rgba(94,196,255,0.6)]"
            aria-hidden
          />
          Digital product studio · Canada
        </p>

        <div className="animate-fade-up-delay-1 w-full max-w-xl px-2 sm:max-w-2xl">
          <Logo priority className="w-full" />
        </div>

        <h1 className="animate-fade-up-delay-2 mt-8 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-[3.25rem]">
          We turn ideas <span className="text-ice">into reality.</span>
        </h1>

        <p className="animate-fade-up-delay-3 mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          ZeroForge is a digital product studio. Bring us an idea, and
          we&apos;ll design, build, and launch it.
        </p>

        <div className="animate-fade-up-delay-4 mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/request/"
            className="focus-ring inline-flex w-full justify-center rounded-xl bg-ice px-6 py-3 text-sm font-semibold text-background shadow-[0_0_24px_rgba(94,196,255,0.25)] transition hover:bg-ice-bright sm:w-auto"
          >
            Submit a product request
          </Link>
          <a
            href="#work"
            className="focus-ring inline-flex w-full justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-muted transition hover:border-ember/40 hover:text-ember sm:w-auto"
          >
            See our work
          </a>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-5 pb-20 sm:px-8">
        {/* What we build */}
        <section className="mt-12 sm:mt-16" aria-labelledby="build">
          <Eyebrow>What we build</Eyebrow>
          <h2
            id="build"
            className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Software shaped around the job.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            ZeroForge builds custom apps and tools for people and businesses.
            If it lives on a screen and makes something easier, we&apos;d like
            to hear about it.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className={`glass-panel rounded-2xl p-6 transition sm:p-7 ${
                  s.accent === "ice"
                    ? "hover:border-ice/35"
                    : "hover:border-ember/35"
                }`}
              >
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                    s.accent === "ice" ? "text-ice" : "text-ember"
                  }`}
                >
                  {s.tag}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Our work */}
        <section
          id="work"
          className="mt-20 scroll-mt-24 sm:mt-24"
          aria-labelledby="work-heading"
        >
          <Eyebrow tone="ember">Our work</Eyebrow>
          <h2
            id="work-heading"
            className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Built by ZeroForge.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Two products we&apos;ve designed, built, and launched ourselves.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Link
              href="/rinkrat/"
              className="glass-panel focus-ring group flex flex-col overflow-hidden rounded-2xl transition hover:border-ice/40"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-[radial-gradient(ellipse_at_50%_40%,rgba(94,196,255,0.14),transparent_70%)] px-6 sm:h-52">
                {/* Wordmark has its black background keyed out to transparency. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/rinkrat/rinkrat-wordmark.webp"
                  alt="RinkRat"
                  width={1200}
                  height={436}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full max-w-sm transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
                  <span
                    className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_8px_2px_rgba(255,138,61,0.6)]"
                    aria-hidden
                  />
                  Live at Chief Young Eagle Recreation Center
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
                  Rink<span className="text-ice">Rat</span>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  Low-cost arena management for any rink: ice scheduling,
                  booking requests, staff shifts, invoices, and the TVs in the
                  lobby, all in one tool.
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ice">
                  Explore RinkRat
                  <span
                    className="transition group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </p>
              </div>
            </Link>

            <Link
              href="/supercrib/"
              className="glass-panel focus-ring group flex flex-col overflow-hidden rounded-2xl transition hover:border-gold/40"
            >
              <div className="relative flex h-44 items-center justify-center gap-5 overflow-hidden border-b border-border bg-[radial-gradient(ellipse_at_50%_40%,rgba(230,184,79,0.14),transparent_70%)] px-6 sm:h-52">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/supercrib/supercrib-icon.webp"
                  alt=""
                  width={256}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  className="h-16 w-16 shrink-0 rounded-2xl border border-gold/30 shadow-[0_0_20px_rgba(230,184,79,0.2)] transition duration-500 group-hover:scale-[1.04] sm:h-20 sm:w-20"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/supercrib/supercrib-logo.webp"
                  alt="SuperCrib"
                  width={1200}
                  height={254}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full max-w-[15rem] drop-shadow-[0_6px_20px_rgba(230,184,79,0.2)] transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                  <span
                    className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(230,184,79,0.6)]"
                    aria-hidden
                  />
                  Free to play
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
                  Super<span className="text-gold">Crib</span>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  A phone-first, two-player cribbage variant raced to 241. Play
                  the AI, play friends online with voice chat, or learn the
                  rules step by step.
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Explore SuperCrib
                  <span
                    className="transition group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-20 sm:mt-24" aria-labelledby="how">
          <Eyebrow>How it works</Eyebrow>
          <h2
            id="how"
            className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            From idea to launch in four steps.
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="glass-panel rounded-2xl p-6">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border font-mono text-sm font-semibold ${
                    i === steps.length - 1
                      ? "border-ember/45 bg-ember/10 text-ember"
                      : "border-ice/40 bg-ice/10 text-ice"
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Closing CTA */}
        <section className="mt-20 sm:mt-24" aria-labelledby="cta">
          <div className="glass-panel relative overflow-hidden rounded-2xl px-6 py-12 text-center sm:px-10 sm:py-16">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(94,196,255,0.2),transparent_70%)] blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.18),transparent_70%)] blur-2xl"
              aria-hidden
            />
            <div className="relative">
              <Eyebrow tone="ember">Got an idea?</Eyebrow>
              <h2
                id="cta"
                className="mx-auto max-w-2xl text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Let&apos;s forge it.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Tell us what you have in mind. We&apos;ll come back with a price
                and timeframe, with no cost or commitment to ask.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/request/"
                  className="focus-ring inline-flex w-full justify-center rounded-xl bg-ice px-6 py-3 text-sm font-semibold text-background shadow-[0_0_24px_rgba(94,196,255,0.25)] transition hover:bg-ice-bright sm:w-auto"
                >
                  Submit a product request
                </Link>
                <Link
                  href="/contact/"
                  className="focus-ring text-sm text-muted transition hover:text-ice"
                >
                  Or just say hello
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
