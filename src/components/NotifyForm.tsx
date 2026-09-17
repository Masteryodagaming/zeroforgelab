"use client";

import { FormEvent, useState } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "thanks">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    const subject = encodeURIComponent("Notify me — ZeroForge launch");
    const body = encodeURIComponent(
      `Please notify me when ZeroForge launches.\n\nEmail: ${trimmed}\n`,
    );
    window.location.href = `mailto:contact@zeroforgelab.com?subject=${subject}&body=${body}`;
    setStatus("thanks");
  }

  if (status === "thanks") {
    return (
      <div
        className="glass-panel rounded-2xl px-5 py-4 text-center sm:px-6"
        role="status"
      >
        <p className="font-display text-base font-semibold text-foreground">
          You&apos;re on the list.
        </p>
        <p className="mt-1 text-sm text-muted">
          Thanks — we&apos;ll be in touch when the forge fires up. If your mail
          client opened, hit send to confirm.
        </p>
        <button
          type="button"
          className="focus-ring mt-3 text-sm text-ice hover:text-ice-bright"
          onClick={() => {
            setStatus("idle");
            setEmail("");
          }}
        >
          Use another email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass-panel flex w-full flex-col gap-3 rounded-2xl p-2 sm:flex-row sm:items-center sm:gap-2 sm:p-2"
      noValidate
    >
      <label htmlFor="notify-email" className="sr-only">
        Email address
      </label>
      <input
        id="notify-email"
        type="email"
        name="email"
        autoComplete="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="focus-ring min-w-0 flex-1 rounded-xl border border-transparent bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted/70"
      />
      <button
        type="submit"
        className="focus-ring shrink-0 rounded-xl bg-ice px-5 py-3 text-sm font-semibold text-background transition hover:bg-ice-bright"
      >
        Notify me
      </button>
    </form>
  );
}
