import type { Metadata } from "next";
import Link from "next/link";

const PLAY_URL = "https://supercrib241-baba2.web.app";

const description =
  "SuperCrib is a free-to-play, phone-first, two-player cribbage variant from ZeroForge. Race to 241, Spade ×2 starter rule, the StinkHole at 240. Play the AI, play friends online with voice chat, join tournaments and leagues, or learn the rules step by step.";

export const metadata: Metadata = {
  title: "SuperCrib — Cribbage to 241, free to play",
  description,
  keywords: [
    "SuperCrib",
    "cribbage",
    "cribbage online",
    "cribbage app",
    "two-player cribbage",
    "cribbage to 241",
    "ZeroForge",
    "Canada",
  ],
  alternates: { canonical: "/supercrib/" },
  openGraph: {
    title: "SuperCrib · Cribbage to 241, free to play",
    description:
      "A phone-first, two-player cribbage variant: race to 241, Spade ×2 starter rule, the StinkHole at 240. Play now in your browser.",
    url: "https://zeroforgelab.com/supercrib/",
    images: [
      {
        url: "/supercrib/og-supercrib.png",
        width: 1200,
        height: 630,
        alt: "SuperCrib",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperCrib · Cribbage to 241, free to play",
    description:
      "Race to 241, Spade ×2 starter rule, the StinkHole at 240. Play now in your browser.",
    images: ["/supercrib/og-supercrib.png"],
  },
};

const rules: { tag: string; title: string; body: string }[] = [
  {
    tag: "241",
    title: "Race to 241",
    body: "Each track has 240 scoring holes plus a finish hole. A long race, with plenty of room for comebacks.",
  },
  {
    tag: "×2",
    title: "Spade ×2 starter rule",
    body: "Hands and crib are counted, then doubled — unless the starter is a Spade, in which case the show counts as is. Pegging is never doubled, and His Heels gives the dealer +2.",
  },
  {
    tag: "240",
    title: "The StinkHole",
    body: "Sitting on 240 is a trap. The only way out is playing the last card for exactly 31.",
  },
  {
    tag: "8 / 7",
    title: "Bigger deal, bigger crib",
    body: "The dealer gets 8 cards and the other player gets 7. Both keep 5, so the crib is a full 5 cards.",
  },
  {
    tag: "0",
    title: "Zero hands hurt",
    body: "A zero hand means a redeal. A zero crib costs the dealer 30 points.",
  },
  {
    tag: "180",
    title: "Skunks at 180",
    body: "In tournament and league scoring, finishing at 180 or less is a skunk. Below 122 is a double skunk.",
  },
];

const groups: { tag: string; title: string; items: string[] }[] = [
  {
    tag: "Play modes",
    title: "Play your way",
    items: [
      "Play the AI on Easy, Normal, or Hard",
      "Create an online table and share a short room code or link — works as a guest, no account needed",
      "Add friends by player code and send table invites that arrive as notifications",
    ],
  },
  {
    tag: "Compete",
    title: "Tournaments and leagues",
    items: [
      "Tournament brackets with best-of-three playoffs and live events",
      "Leagues with standings, weekly matches, and playoffs",
      "League stats, including skunks given and received",
      "Competitive scoring online: count your own hands, with Muggins",
    ],
  },
  {
    tag: "Learn",
    title: "New to SuperCrib? Start here",
    items: [
      "8 short lessons on the SuperCrib rules",
      "A practice hand against the Easy AI, with hints",
      "A 10-hand scoring quiz",
      "Practice never counts toward stats, coins, or leagues",
    ],
  },
  {
    tag: "Make it yours",
    title: "Your table, your style",
    items: [
      "Avatars and emoji reactions from the cosmetic Store",
      "Boards and felts on display, with more on the way",
      "Career stats vs the AI and online, plus tournament and league records",
      "Play as a guest, or sign in to sync your profile, friends, and stats across devices",
    ],
  },
];

type Screenshot = { src: string; alt: string; caption: string };

/*
 * SCREENSHOTS — from the SuperCrib press kit, guest profile only.
 * Reviewed: no player names, emails, debug text, or store pricing.
 */
const screenshots: Screenshot[] = [
  {
    src: "/supercrib/shot-home.webp",
    alt: "SuperCrib home screen with Find Match, Store, Rules, Settings, and Friends",
    caption: "Home",
  },
  {
    src: "/supercrib/shot-find-match.webp",
    alt: "Find Match menu with Play online, Play AI, and Learn to play",
    caption: "Find a match",
  },
  {
    src: "/supercrib/shot-vs-ai-pegging.webp",
    alt: "A game against the AI during pegging, with the 241 board and the count at 11",
    caption: "Pegging against the AI",
  },
  {
    src: "/supercrib/shot-learn-to-play.webp",
    alt: "Learn to play menu with Lessons, Practice hand, and Scoring quiz",
    caption: "Learn to play",
  },
  {
    src: "/supercrib/shot-scoring-quiz.webp",
    alt: "Scoring quiz asking for the raw count of a hand before the ×2",
    caption: "Scoring quiz",
  },
];

function Eyebrow({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "ice" | "ember";
}) {
  const colour =
    tone === "gold" ? "text-gold" : tone === "ice" ? "text-ice" : "text-ember";
  return (
    <p
      className={`mb-4 font-mono text-[11px] uppercase tracking-[0.18em] ${colour}`}
    >
      {children}
    </p>
  );
}

function PlayButton({ label = "Play now" }: { label?: string }) {
  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-background shadow-[0_0_24px_rgba(230,184,79,0.25)] transition hover:bg-gold-bright sm:w-auto"
    >
      {label}
      <span aria-hidden>↗</span>
    </a>
  );
}

export default function SuperCribPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      {/* Hero */}
      <section className="relative mx-auto max-w-3xl text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-24 -z-10 h-64 w-[min(90vw,640px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(230,184,79,0.16),transparent_70%)] blur-2xl"
          aria-hidden
        />
        <div className="animate-fade-up flex flex-wrap items-center justify-center gap-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ice">
            A ZeroForge game
          </p>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(230,184,79,0.6)]"
              aria-hidden
            />
            Free to play
          </p>
        </div>

        <h1 className="animate-fade-up-delay-1 mx-auto mt-8 w-full max-w-2xl px-2">
          <span className="sr-only">SuperCrib</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/supercrib/supercrib-logo.webp"
            alt=""
            width={1200}
            height={254}
            className="h-auto w-full drop-shadow-[0_8px_30px_rgba(230,184,79,0.22)]"
            fetchPriority="high"
            decoding="async"
          />
        </h1>

        <p className="animate-fade-up-delay-2 mt-8 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-[1.75rem]">
          Cribbage, raced to 241.
          <span className="text-metal"> Built for your phone.</span>
        </p>

        <p className="animate-fade-up-delay-3 mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          SuperCrib is a two-player version of cribbage with its own house
          rules: a race to 241, show points doubled unless the starter is a
          Spade, and the StinkHole at 240. Play the AI, play a friend online
          with voice chat, or learn the rules with lessons, a practice hand,
          and a scoring quiz.
        </p>

        <div className="animate-fade-up-delay-4 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PlayButton />
          <a
            href="#rules"
            className="focus-ring inline-flex w-full justify-center rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted transition hover:border-gold/40 hover:text-gold sm:w-auto"
          >
            What makes it different
          </a>
        </div>

        <p className="animate-fade-up-delay-4 mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Plays in your browser · iPhone app · Coming soon to the App Store
        </p>
      </section>

      {/* Rules */}
      <section
        id="rules"
        className="mt-20 scroll-mt-24 sm:mt-24"
        aria-labelledby="rules-heading"
      >
        <Eyebrow>What makes it different</Eyebrow>
        <h2
          id="rules-heading"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Cribbage you know, rules you don&apos;t.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          SuperCrib keeps the heart of cribbage and turns up the stakes. Low
          card deals at the start of every match, and Ace is low.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((r) => (
            <article
              key={r.title}
              className="glass-panel rounded-2xl p-6 transition hover:border-gold/35"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-gold">
                {r.tag}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {r.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mt-20 sm:mt-24" aria-labelledby="features">
        <Eyebrow tone="ice">Features</Eyebrow>
        <h2
          id="features"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Everything you need for a good game.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {groups.map((g, i) => {
            const ice = i % 2 === 0;
            return (
              <article
                key={g.tag}
                className={`glass-panel rounded-2xl p-6 transition sm:p-7 ${
                  ice ? "hover:border-ice/35" : "hover:border-gold/35"
                }`}
              >
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                    ice ? "text-ice" : "text-gold"
                  }`}
                >
                  {g.tag}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {g.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]"
                    >
                      <span
                        className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                          ice
                            ? "bg-ice shadow-[0_0_8px_2px_rgba(94,196,255,0.45)]"
                            : "bg-gold shadow-[0_0_8px_2px_rgba(230,184,79,0.45)]"
                        }`}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Voice chat highlight */}
      <section className="mt-20 sm:mt-24" aria-labelledby="voice">
        <div className="glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-10">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(94,196,255,0.18),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(230,184,79,0.14),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <div className="relative grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <Eyebrow tone="ice">Live voice chat</Eyebrow>
              <h2
                id="voice"
                className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Talk trash like you&apos;re at the kitchen table.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Online games come with live voice chat. Tap &ldquo;Connect
                voice&rdquo; in the lobby and you&apos;re talking. Voice
                detection picks up when you speak, there&apos;s a mute toggle
                right at the table, and the connection status is always clear.
              </p>
            </div>
            <ul className="grid gap-3">
              {[
                ["Connect voice", "One tap in the lobby"],
                ["Voice detection", "Picks up when you speak"],
                ["Mute toggle", "Right at the table"],
              ].map(([title, body]) => (
                <li
                  key={title}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-4"
                >
                  <span
                    className="inline-block h-2 w-2 shrink-0 rounded-full bg-ice shadow-[0_0_10px_3px_rgba(94,196,255,0.5)]"
                    aria-hidden
                  />
                  <div>
                    <p className="font-display text-base font-semibold text-foreground">
                      {title}
                    </p>
                    <p className="text-sm text-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mt-20 sm:mt-24" aria-labelledby="gallery-heading">
        <Eyebrow>A look inside</Eyebrow>
        <h2
          id="gallery-heading"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Made for one hand and a long game.
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {screenshots.map((shot) => (
            <figure key={shot.src} className="mx-auto w-full max-w-[260px]">
              <div className="glass-panel overflow-hidden rounded-[1.5rem] p-1.5">
                <div className="aspect-[9/19.5] overflow-hidden rounded-[1.15rem] bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={640}
                    height={1387}
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
      </section>

      {/* Free to play */}
      <section className="mt-20 sm:mt-24" aria-labelledby="free">
        <div className="flex flex-col gap-4 rounded-2xl border border-gold/30 bg-gold/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2
              id="free"
              className="font-display text-xl font-semibold text-foreground sm:text-2xl"
            >
              Free to play.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              No account needed to start. Cosmetics are unlocked with Super
              Coins, an in-game currency that&apos;s never sold for real money.
            </p>
          </div>
          <PlayButton />
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="mx-auto mt-20 max-w-2xl text-center sm:mt-24"
        aria-labelledby="play"
      >
        <Eyebrow>Deal me in</Eyebrow>
        <h2
          id="play"
          className="text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Fifteen-two, fifteen-four… and a long way to 241.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Jump into a game in your browser right now. The iPhone app is coming
          soon to the App Store.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PlayButton />
          <a
            href="mailto:contact@zeroforgelab.com?subject=SuperCrib"
            className="focus-ring text-sm text-muted transition hover:text-gold"
          >
            Feedback? contact@zeroforgelab.com
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
