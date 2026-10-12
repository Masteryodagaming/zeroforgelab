import Logo from "@/components/Logo";
import NotifyForm from "@/components/NotifyForm";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-24">
        <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ice">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-ice shadow-[0_0_8px_2px_rgba(94,196,255,0.6)]"
            aria-hidden
          />
          Coming soon
        </p>

        <div className="animate-fade-up-delay-1 w-full max-w-xl px-2 sm:max-w-2xl">
          <Logo priority className="w-full" />
        </div>

        <h1 className="animate-fade-up-delay-2 mt-8 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          Ice-cold precision.
          <span className="block text-metal">Forged for the real world.</span>
        </h1>

        <p className="animate-fade-up-delay-3 mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          ZeroForge is a Canadian software and digital product studio. Our full
          site is in the works — leave your email and we&apos;ll let you know
          when we open the doors.
        </p>

        <div className="animate-fade-up-delay-4 mt-10 w-full max-w-md">
          <NotifyForm />
        </div>

        <div className="animate-fade-up-delay-4 mt-10 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
          <Link
            href="/rinkrat/"
            className="glass-panel focus-ring group flex w-full items-center gap-3 rounded-2xl py-3 pl-3 pr-4 text-left transition hover:border-ice/40"
          >
            {/* Icon has its black background keyed out to transparency. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/rinkrat/rinkrat-icon.webp"
              alt=""
              width={320}
              height={292}
              className="h-14 w-auto shrink-0"
              decoding="async"
            />
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ember">
                <span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_8px_2px_rgba(255,138,61,0.6)]"
                  aria-hidden
                />
                Live at our first arena
              </p>
              <p className="mt-1 font-display text-lg font-semibold tracking-tight text-foreground">
                Rink<span className="text-ice">Rat</span>
              </p>
              <p className="mt-0.5 text-sm text-muted">
                Low-cost arena management for any rink.
              </p>
            </div>
            <span
              className="shrink-0 text-xl text-ice transition group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </Link>

          <Link
            href="/supercrib/"
            className="glass-panel focus-ring group flex w-full items-center gap-3 rounded-2xl py-3 pl-3 pr-4 text-left transition hover:border-gold/40"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/supercrib/supercrib-icon.webp"
              alt=""
              width={256}
              height={256}
              className="h-14 w-14 shrink-0 rounded-[0.9rem] border border-gold/30 shadow-[0_0_16px_rgba(230,184,79,0.18)]"
              decoding="async"
            />
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
                <span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(230,184,79,0.6)]"
                  aria-hidden
                />
                Free to play
              </p>
              <p className="mt-1 font-display text-lg font-semibold tracking-tight text-foreground">
                Super<span className="text-gold">Crib</span>
              </p>
              <p className="mt-0.5 text-sm text-muted">
                Two-player cribbage to 241.
              </p>
            </div>
            <span
              className="shrink-0 text-xl text-gold transition group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </Link>
        </div>

        <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          <Link
            href="/about/"
            className="focus-ring text-muted transition hover:text-ice"
          >
            About ZeroForge
          </Link>
          <span className="hidden text-border sm:inline" aria-hidden>
            ·
          </span>
          <Link
            href="/contact/"
            className="focus-ring text-muted transition hover:text-ember"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
