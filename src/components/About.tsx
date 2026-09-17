export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium tracking-widest text-accent uppercase">About</p>
          <h2
            id="about-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Built for teams who care how things feel.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-7 sm:text-lg">
          <p>
            ZeroForge is a small software and digital product studio. We help
            founders and growing teams turn clear ideas into polished interfaces,
            reliable applications, and brands that hold up under real use.
          </p>
          <p>
            Our name is intentional: start from zero, then forge something
            solid — through thoughtful design, careful engineering, and an
            obsession with the details users notice. We favour clarity over
            clutter, speed without fragility, and Canadian-made craftsmanship
            with a global outlook.
          </p>
          <p>
            Whether you need a marketing site that converts, a product MVP, or
            a design system that scales, we work side-by-side with you from
            discovery through launch — and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
