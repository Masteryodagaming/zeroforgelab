import type { Metadata } from "next";
import Link from "next/link";

const earlyAccessHref =
  "mailto:contact@zeroforgelab.com?subject=RinkRat%20early%20access&body=Hi%20ZeroForge%2C%0A%0AI%E2%80%99d%20like%20to%20hear%20more%20about%20RinkRat%20for%20our%20arena.%0A%0AArena%20name%3A%0ALocation%3A%0AWhat%20we%E2%80%99d%20like%20help%20with%3A%0A";

const description =
  "RinkRat is a low-cost arena management tool for any rink: ice scheduling, booking requests, staff shifts, invoices, and in-arena TV screens. Yearly subscription with customizable tiers. Live today at Chief Young Eagle Recreation Center.";

export const metadata: Metadata = {
  title: "RinkRat — Arena management for any rink",
  description,
  keywords: [
    "RinkRat",
    "arena management software",
    "ice rink scheduling",
    "ice time booking",
    "rink management",
    "arena staff scheduling",
    "ZeroForge",
    "Canada",
  ],
  alternates: { canonical: "/rinkrat/" },
  openGraph: {
    title: "RinkRat · Arena management for any rink",
    description:
      "Ice scheduling, booking requests, staff shifts, and arena TV screens in one low-cost yearly plan. Live at Chief Young Eagle Recreation Center.",
    url: "https://zeroforgelab.com/rinkrat/",
    images: [
      {
        url: "/rinkrat/rinkrat-wordmark.webp",
        width: 1200,
        height: 436,
        alt: "RinkRat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RinkRat · Arena management for any rink",
    description:
      "Ice scheduling, booking requests, staff shifts, and arena TV screens. Live at our first arena, still growing.",
    images: ["/rinkrat/rinkrat-wordmark.webp"],
  },
};

type Accent = "ice" | "ember";

const audiences: {
  tag: string;
  title: string;
  accent: Accent;
  items: string[];
}[] = [
  {
    tag: "Public & customers",
    title: "For teams, coaches, and families",
    accent: "ice",
    items: [
      "A weekly ice schedule that shows what’s open and what’s booked",
      "Request ice time by picking a day and a start time",
      "Track every request as pending, approved, or declined",
      "Support chat with arena staff",
      "One account with saved details, so repeat requests are quick",
    ],
  },
  {
    tag: "Managers",
    title: "For the people running the building",
    accent: "ember",
    items: [
      "A rink schedule week grid with drag-to-book",
      "Approve or decline requests right from the notification bell",
      "Monthly invoices with rates you can edit",
      "Bookkeeping for ice revenue and staff hours, with an 8-week view",
      "Customer accounts in one place",
      "Staff scheduling with colour-coded shifts and shift requests",
    ],
  },
  {
    tag: "Employees",
    title: "For arena staff",
    accent: "ice",
    items: [
      "See upcoming shifts at a glance",
      "Request shift changes for a manager to approve",
      "Answer customer support chat",
    ],
  },
  {
    tag: "In-arena TV screens",
    title: "For the lobby and dressing rooms",
    accent: "ember",
    items: [
      "The day’s ice schedule on the lobby TV",
      "Now and next on the ice",
      "Dressing-room displays with a live stream and game details",
      "A sponsor slideshow",
      "Every screen managed from the app",
    ],
  },
];

const pushNotifications = [
  {
    who: "Customers",
    what: "when their ice is approved or declined, and when staff reply in chat",
  },
  {
    who: "Managers",
    what: "on new ice requests and shift-change requests",
  },
  {
    who: "Employees",
    what: "when their shifts change",
  },
];

/*
 * SCREENSHOTS — real captures from the live CYERC Arena deployment.
 * Every image was reviewed: no personal names, emails, customer data,
 * invoice details, or prices/rates. Keep it that way when adding more.
 */
type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

const phoneShots: Screenshot[] = [
  {
    src: "/rinkrat/shot-landing-phone.webp",
    alt: "Chief Young Eagle Recreation Center home page on a phone, with a photo of the arena and the Elsipogtog Hawks logo",
    caption: "The arena’s public home page",
    width: 640,
    height: 1090,
  },
  {
    src: "/rinkrat/shot-request-phone.webp",
    alt: "Ice request screen on a phone: pick a day, then pick an available start time",
    caption: "Requesting ice: pick a day, then a start time",
    width: 640,
    height: 1090,
  },
  {
    src: "/rinkrat/shot-iphone-notifications.webp",
    alt: "The CYERC Arena iPhone app asking permission to send notifications on the manager sign-in screen",
    caption: "iPhone app asking to turn on push notifications",
    width: 640,
    height: 1391,
  },
];

const screenShots: Screenshot[] = [
  {
    src: "/rinkrat/shot-tv-now-next.webp",
    alt: "Lobby TV screen showing what is on the ice now and what is next",
    caption: "Lobby TV: now and next on the ice",
    width: 1280,
    height: 800,
  },
  {
    src: "/rinkrat/shot-tv-day-schedule.webp",
    alt: "Lobby TV screen showing the day’s ice schedule with a welcome banner",
    caption: "Lobby TV: the day’s ice schedule",
    width: 1280,
    height: 720,
  },
];

/*
 * APP STORE BADGE — hidden until the App Store listing is live.
 * Set this to the real App Store URL to show the badge in the hero, and
 * save Apple's official "Download on the App Store" artwork as
 * /public/rinkrat/app-store-badge.svg first
 * (https://developer.apple.com/app-store/marketing/guidelines/).
 * Until then the hero shows "Coming soon to the App Store" as plain text.
 */
const APP_STORE_URL: string | null = null;

const planPoints = [
  {
    title: "Yearly subscription",
    body: "One straightforward annual plan per arena, with no surprise monthly bills.",
  },
  {
    title: "Tiered",
    body: "Start with what you need and step up only if your arena needs more.",
  },
  {
    title: "Customizable",
    body: "Tiers are shaped around how your arena actually runs, not the other way around.",
  },
  {
    title: "Low cost",
    body: "Built to stay within reach of community arenas and smaller operators.",
  },
];

function Eyebrow({
  children,
  accent = "ice",
}: {
  children: React.ReactNode;
  accent?: Accent;
}) {
  return (
    <p
      className={`mb-4 font-mono text-[11px] uppercase tracking-[0.18em] ${
        accent === "ice" ? "text-ice" : "text-ember"
      }`}
    >
      {children}
    </p>
  );
}

export default function RinkRatPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-3xl text-center">
        <div className="animate-fade-up flex flex-wrap items-center justify-center gap-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ice">
            A ZeroForge product
          </p>
          <p className="inline-flex items-center gap-2 rounded-full border border-ember/35 bg-ember/10 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ember sm:text-[11px] sm:tracking-[0.18em]">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_2px_rgba(255,138,61,0.6)]"
              aria-hidden
            />
            Live at our first arena · still growing
          </p>
        </div>

        <h1 className="animate-fade-up-delay-1 mx-auto mt-6 w-full max-w-2xl">
          <span className="sr-only">RinkRat</span>
          {/* Wordmark has its black background keyed out to transparency. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rinkrat/rinkrat-wordmark.webp"
            alt=""
            width={1200}
            height={436}
            className="h-auto w-full drop-shadow-[0_0_32px_rgba(94,196,255,0.18)]"
            fetchPriority="high"
            decoding="async"
          />
        </h1>

        <p className="animate-fade-up-delay-2 mt-4 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-[1.75rem]">
          Arena management for any rink,
          <span className="text-metal"> without the overhead.</span>
        </p>

        <p className="animate-fade-up-delay-3 mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          RinkRat puts the ice schedule, booking requests, staff shifts,
          invoices, and the TVs in your lobby into one simple tool. It&apos;s
          sold as a low-cost yearly subscription with tiers you can shape around
          your arena, and it&apos;s already running at our first rink.
        </p>

        <div className="animate-fade-up-delay-4 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={earlyAccessHref}
            className="focus-ring inline-flex w-full justify-center rounded-xl bg-ice px-5 py-3 text-sm font-semibold text-background transition hover:bg-ice-bright sm:w-auto"
          >
            Bring RinkRat to your arena
          </a>
          <a
            href="#plans"
            className="focus-ring inline-flex w-full justify-center rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted transition hover:border-ice/40 hover:text-ice sm:w-auto"
          >
            How plans work
          </a>
        </div>

        {APP_STORE_URL ? (
          <div className="mt-6 flex justify-center">
            <a
              href={APP_STORE_URL}
              className="focus-ring inline-flex rounded-lg transition hover:opacity-90"
              aria-label="Download RinkRat on the App Store"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/rinkrat/app-store-badge.svg"
                alt="Download on the App Store"
                width={160}
                height={53}
                className="h-12 w-auto"
              />
            </a>
          </div>
        ) : (
          <p className="animate-fade-up-delay-4 mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            iPhone app · Coming soon to the App Store
          </p>
        )}
      </section>

      {/* In use today */}
      <section className="mt-16 sm:mt-20" aria-labelledby="in-use">
        <div className="glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-8">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.16),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <Eyebrow accent="ember">In use today</Eyebrow>
              <h2
                id="in-use"
                className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Running at Chief Young Eagle Recreation Center.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                RinkRat&apos;s first live deployment is CYERC Arena, home of
                the Elsipogtog Hawks in Elsipogtog First Nation, New Brunswick.
                The public books ice there, managers run the schedule and staff,
                and the lobby and dressing-room TVs run on it every day.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="https://elsipogtogarena.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ice/40 bg-ice/10 px-5 py-3 text-sm font-semibold text-ice transition hover:border-ice/60 hover:bg-ice/15 md:w-auto"
              >
                Visit elsipogtogarena.com
                <span aria-hidden>↗</span>
              </a>
              <p className="text-xs text-muted md:text-right">
                CYERC Arena · Elsipogtog First Nation, NB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features by audience */}
      <section className="mt-20 sm:mt-24" aria-labelledby="features">
        <Eyebrow>What it does</Eyebrow>
        <h2
          id="features"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          One tool for everyone in the building.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          Customers, managers, staff, and the screens on the wall all work from
          the same schedule, so nobody is chasing the latest version.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {audiences.map((a) => (
            <article
              key={a.tag}
              className={`glass-panel rounded-2xl p-6 transition sm:p-7 ${
                a.accent === "ice"
                  ? "hover:border-ice/35"
                  : "hover:border-ember/35"
              }`}
            >
              <p
                className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                  a.accent === "ice" ? "text-ice" : "text-ember"
                }`}
              >
                {a.tag}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {a.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {a.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]"
                  >
                    <span
                      className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                        a.accent === "ice"
                          ? "bg-ice shadow-[0_0_8px_2px_rgba(94,196,255,0.45)]"
                          : "bg-ember shadow-[0_0_8px_2px_rgba(255,138,61,0.45)]"
                      }`}
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Push notifications */}
        <div className="glass-panel mt-4 rounded-2xl p-6 sm:p-7">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ice">
              iPhone push notifications
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              App Store release coming soon
            </p>
          </div>
          <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            The right heads-up for the right person.
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {pushNotifications.map((n) => (
              <li
                key={n.who}
                className="rounded-xl border border-border bg-surface/50 p-4"
              >
                <p className="font-display text-base font-semibold text-foreground">
                  {n.who}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Get notified {n.what}.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Screenshot gallery */}
      <section className="mt-20 sm:mt-24" aria-labelledby="gallery-heading">
        <Eyebrow>A look inside</Eyebrow>
        <h2
          id="gallery-heading"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          From the phone to the lobby TV.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          Real screens from RinkRat at CYERC Arena. Each arena gets its own
          name, colours, and logo.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
          {phoneShots.map((shot) => (
            <figure key={shot.src} className="mx-auto w-full max-w-[300px]">
              <div className="glass-panel overflow-hidden rounded-[1.75rem] p-2">
                <div className="aspect-[9/16] overflow-hidden rounded-[1.35rem] bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5">
          {screenShots.map((shot) => (
            <figure key={shot.src}>
              <div className="glass-panel overflow-hidden rounded-2xl p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video h-auto w-full rounded-xl object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section
        id="plans"
        className="mt-20 scroll-mt-24 sm:mt-24"
        aria-labelledby="plans-heading"
      >
        <div className="glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-10">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(94,196,255,0.18),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.14),transparent_70%)] blur-2xl"
            aria-hidden
          />

          <div className="relative">
            <Eyebrow accent="ember">How plans work</Eyebrow>
            <h2
              id="plans-heading"
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              One arena, one plan that fits.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Every arena runs a little differently, so RinkRat plans flex
              around you.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {planPoints.map((p) => (
                <li
                  key={p.title}
                  className="rounded-xl border border-border bg-surface/50 p-5"
                >
                  <p className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full bg-ice shadow-[0_0_8px_2px_rgba(94,196,255,0.5)]"
                      aria-hidden
                    />
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 rounded-xl border border-ember/30 bg-ember/5 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  Pricing coming soon.
                </p>
                <p className="mt-1 text-sm text-muted">
                  We&apos;re still finalizing plans. Get in touch and
                  we&apos;ll walk you through what would fit your arena.
                </p>
              </div>
              <a
                href={earlyAccessHref}
                className="focus-ring inline-flex shrink-0 justify-center rounded-xl border border-ember/45 bg-ember/10 px-5 py-3 text-sm font-semibold text-ember transition hover:border-ember/70 hover:bg-ember/15"
              >
                Ask about plans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Early access CTA */}
      <section
        className="mx-auto mt-20 max-w-2xl text-center sm:mt-24"
        aria-labelledby="early-access"
      >
        <Eyebrow>Early access</Eyebrow>
        <h2
          id="early-access"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Run an arena? Let&apos;s talk.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          We&apos;re bringing RinkRat to more rinks and shaping it with the
          people who use it. Tell us about your arena and we&apos;ll be in
          touch.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={earlyAccessHref}
            className="focus-ring inline-flex w-full justify-center rounded-xl bg-ice px-5 py-3 text-sm font-semibold text-background transition hover:bg-ice-bright sm:w-auto"
          >
            Request early access
          </a>
          <a
            href="mailto:contact@zeroforgelab.com"
            className="focus-ring text-sm text-muted transition hover:text-ice"
          >
            contact@zeroforgelab.com
          </a>
        </div>
        <div className="mt-12">
          <Link
            href="/"
            className="focus-ring text-sm text-muted transition hover:text-foreground"
          >
            ← Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
