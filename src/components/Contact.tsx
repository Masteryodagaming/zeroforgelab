"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Project enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:contact@zeroforgelab.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-surface/40 py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium tracking-widest text-accent uppercase">Contact</p>
          <h2
            id="contact-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Let&apos;s build something solid.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Tell us about your product, timeline, and goals. We typically reply
            within one to two business days.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-surface-elevated p-5">
            <p className="text-xs tracking-wider text-muted uppercase">Email</p>
            <a
              href="mailto:contact@zeroforgelab.com"
              className="focus-ring mt-1 inline-block rounded-md font-medium text-accent transition hover:text-accent/85"
            >
              contact@zeroforgelab.com
            </a>
            <p className="mt-4 text-sm text-muted">
              Prefer email? Reach us directly — the form below opens your mail
              client with a draft ready to send.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-sm font-medium text-foreground">Name</span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="focus-ring w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted/70"
                  placeholder="Your name"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-sm font-medium text-foreground">Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="focus-ring w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted/70"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-foreground">
                  Project details
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="focus-ring w-full resize-y rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted/70"
                  placeholder="What are you building? Timeline, budget range, and any links help."
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent/90"
              >
                Send message
              </button>
              {status === "sent" && (
                <p className="text-sm text-accent" role="status">
                  Opening your email client…
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
