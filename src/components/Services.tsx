const services = [
  {
    title: "Product & web apps",
    description:
      "End-to-end builds for SaaS, dashboards, and customer-facing platforms — typed, tested, and ready to grow.",
    icon: (
      <path
        d="M4 7h16v12H4V7zm0 0l8-4 8 4M8 11h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Brand & marketing sites",
    description:
      "High-impact landing pages and brand sites with distinctive typography, motion, and conversion-minded structure.",
    icon: (
      <path
        d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 6v9m0-9L4.5 7.5M12 9l7.5-1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Design systems",
    description:
      "Reusable UI foundations — tokens, components, and documentation — so your product stays consistent as it scales.",
    icon: (
      <path
        d="M4 6h7v7H4V6zm9 0h7v4h-7V6zm0 6h7v6h-7v-6zM4 15h7v3H4v-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Advisory & polish",
    description:
      "UX audits, performance passes, accessibility fixes, and launch support when you need a sharp second pair of eyes.",
    icon: (
      <path
        d="M12 3l2.1 4.3L19 8l-3.5 3.4.8 4.8L12 14.3 7.7 16.2l.8-4.8L5 8l4.9-.7L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-border bg-surface/40 py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest text-accent uppercase">Services</p>
          <h2
            id="services-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            What we forge.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            From concept to code, we ship work that looks intentional and holds
            up in production.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className="group rounded-2xl border border-border bg-surface-elevated/80 p-6 transition hover:border-accent/35 hover:shadow-[0_0_40px_rgba(61,255,138,0.06)] sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition group-hover:bg-accent/15">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {service.icon}
                </svg>
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
