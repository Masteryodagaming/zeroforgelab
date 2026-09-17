export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden />
      <div
        className="glow-orb animate-pulse-soft pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-accent uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          Software studio · Canada
        </div>

        <h1
          id="hero-heading"
          className="animate-fade-up-delay-1 font-display mt-7 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Digital products,{" "}
          <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
            forged
          </span>{" "}
          with precision.
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          ZeroForge designs and builds modern web apps, brand experiences, and
          digital tools that feel sharp, fast, and ready for the real world.
          From first sketch to shipped product — we craft what lasts.
        </p>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background shadow-[0_0_32px_var(--accent-glow)] transition hover:bg-accent/90"
          >
            Contact us
          </a>
          <a
            href="#about"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent/30 hover:bg-surface-elevated"
          >
            Learn more
          </a>
        </div>

        <dl className="animate-fade-up-delay-3 mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
          {[
            { label: "Focus", value: "Web & product" },
            { label: "Approach", value: "Craft-first" },
            { label: "Delivery", value: "Ship-ready" },
          ].map((item) => (
            <div key={item.label}>
              <dt className="text-xs tracking-wider text-muted uppercase">{item.label}</dt>
              <dd className="mt-1 font-display text-lg font-medium text-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
