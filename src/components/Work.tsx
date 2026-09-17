const projects = [
  {
    name: "Northline Commerce",
    tag: "E-commerce · Next.js",
    summary:
      "A conversion-focused storefront and admin experience for a Canadian retail brand — fast checkout, calm UI.",
    status: "Case study soon",
  },
  {
    name: "Pulseboard",
    tag: "SaaS · Dashboard",
    summary:
      "Real-time ops dashboard with dense-but-readable data views, keyboard-friendly workflows, and dark-first UI.",
    status: "Case study soon",
  },
  {
    name: "Harbour Studio",
    tag: "Brand · Marketing",
    summary:
      "Identity refresh and marketing site for a creative studio — distinctive type, motion, and a clear service story.",
    status: "Case study soon",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-border py-20 sm:py-28"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest text-accent uppercase">Work</p>
            <h2
              id="work-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Selected projects.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              A few examples of the kind of work we take on. Full case studies
              are on the way — reach out if you want a walkthrough.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li
              key={project.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div
                className="relative flex h-40 items-end overflow-hidden border-b border-border p-5"
                style={{
                  background: `linear-gradient(135deg, rgba(61,255,138,${0.08 + index * 0.04}) 0%, rgba(13,18,16,1) 55%, rgba(29,185,84,${0.06 + index * 0.03}) 100%)`,
                }}
              >
                <div className="grid-fade absolute inset-0 opacity-60" aria-hidden />
                <span className="relative font-mono text-xs tracking-wider text-accent uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium tracking-wide text-muted uppercase">
                  {project.tag}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <p className="mt-5 text-xs font-medium text-accent">{project.status}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
