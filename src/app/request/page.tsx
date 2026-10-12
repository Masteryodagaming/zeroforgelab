import type { Metadata } from "next";
import RequestForm from "@/components/RequestForm";
import { REQUEST_EMAIL } from "@/lib/productRequest";

export const metadata: Metadata = {
  title: "Submit a product request",
  description:
    "Have an idea for an app, website, game, or custom tool? Share it with ZeroForge. We’ll review it and reply with a price and timeframe — no cost or commitment to ask.",
  alternates: { canonical: "/request/" },
  openGraph: {
    title: "Submit a product request · ZeroForge",
    description:
      "Share your idea and ZeroForge will reply with a price and timeframe. No cost or commitment to ask.",
    url: "https://zeroforgelab.com/request/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ZeroForge — We turn ideas into reality",
      },
    ],
  },
};

const steps = [
  "Tell us your idea below",
  "We review it",
  "You get a price and timeframe",
];

export default function RequestPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="animate-fade-up mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ice">
        Start a project
      </p>
      <h1 className="animate-fade-up-delay-1 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        Submit a product request.
      </h1>
      <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        Share your idea, big or small. We&apos;ll review it and reply with a
        price and timeframe. There&apos;s no cost or commitment to ask.
      </p>

      <ol className="animate-fade-up-delay-3 mt-8 grid gap-3 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li
            key={s}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ice/40 bg-ice/10 font-mono text-xs font-semibold text-ice">
              {i + 1}
            </span>
            <span className="text-sm text-foreground">{s}</span>
          </li>
        ))}
      </ol>

      <div className="animate-fade-up-delay-4 mt-10">
        <RequestForm />
      </div>

      <p className="mt-8 text-center text-sm text-muted">
        Prefer plain email? Write to{" "}
        <a
          href={`mailto:${REQUEST_EMAIL}`}
          className="focus-ring text-ice underline-offset-4 hover:underline"
        >
          {REQUEST_EMAIL}
        </a>
        .
      </p>
    </main>
  );
}
