import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ZeroForge at contact@zeroforgelab.com. We’d love to hear about your project.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact · ZeroForge",
    description: "Email contact@zeroforgelab.com — we’d love to hear from you.",
    url: "https://zeroforgelab.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
        Contact
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Say hello.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        Whether you have a project in mind or just want a heads-up when we
        launch, drop us a line. We read every message.
      </p>

      <div className="glass-panel mt-10 rounded-2xl p-6 sm:p-8">
        <p className="text-sm font-medium text-foreground">Email</p>
        <a
          href="mailto:contact@zeroforgelab.com"
          className="focus-ring mt-2 inline-block font-display text-xl font-semibold text-ice transition hover:text-ice-bright sm:text-2xl"
        >
          contact@zeroforgelab.com
        </a>
        <p className="mt-4 text-sm text-muted">
          Prefer a ready-made draft? Use the button below — it opens your mail
          client with our address filled in.
        </p>
        <a
          href="mailto:contact@zeroforgelab.com?subject=Hello%20ZeroForge"
          className="focus-ring mt-6 inline-flex rounded-xl bg-ice px-5 py-3 text-sm font-semibold text-background transition hover:bg-ice-bright"
        >
          Open email draft
        </a>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="focus-ring text-sm text-muted transition hover:text-foreground"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}
