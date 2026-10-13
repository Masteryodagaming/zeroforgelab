"use client";

import { FormEvent, useRef, useState } from "react";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  REQUEST_EMAIL,
  TIMELINES,
  buildRequestEmail,
  emptyRequest,
  submitProductRequest,
  validateRequest,
  type ProductRequest,
  type RequestErrors,
} from "@/lib/productRequest";

const inputClass =
  "focus-ring w-full rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition focus:border-ice/50";
const errorInputClass = "border-ember/70";

function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 flex items-baseline gap-2 text-sm font-medium text-foreground"
    >
      {children}
      {optional ? (
        <span className="text-xs font-normal text-muted">(optional)</span>
      ) : (
        <span className="text-ember" aria-hidden>
          *
        </span>
      )}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-ember" role="alert">
      {message}
    </p>
  );
}

export default function RequestForm() {
  const [data, setData] = useState<ProductRequest>(emptyRequest);
  const [errors, setErrors] = useState<RequestErrors>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [method, setMethod] = useState<"mailto" | "endpoint">("mailto");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function update<K extends keyof ProductRequest>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateRequest(data);
    setErrors(found);
    const firstKey = Object.keys(found)[0];
    if (firstKey) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstKey}"]`)
        ?.focus();
      return;
    }
    try {
      const how = await submitProductRequest(data);
      setMethod(how);
      setStatus("sent");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  async function copyRequest() {
    const { subject, body } = buildRequestEmail(data);
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (status === "sent") {
    return (
      <div className="glass-panel rounded-2xl p-6 sm:p-8" role="status">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ice">
          Almost there
        </p>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Thanks, {data.name.trim().split(" ")[0]}.
        </h2>
        {method === "mailto" ? (
          <>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Your email app should have opened with your request already
              written up and addressed to us.{" "}
              <strong className="font-semibold text-foreground">
                Hit Send
              </strong>{" "}
              to get it to us. We&apos;ll review your idea and reply with a
              price and timeframe.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Didn&apos;t open? Email us directly at{" "}
              <a
                href={`mailto:${REQUEST_EMAIL}`}
                className="focus-ring text-ice underline-offset-4 hover:underline"
              >
                {REQUEST_EMAIL}
              </a>{" "}
              — you can copy your request below and paste it in.
            </p>
          </>
        ) : (
          <p className="mt-4 text-base leading-relaxed text-muted">
            Your request is in. We&apos;ll review your idea and reply to{" "}
            {data.email.trim()} with a price and timeframe.
          </p>
        )}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {method === "mailto" && (
            <button
              type="button"
              onClick={copyRequest}
              className="focus-ring inline-flex justify-center rounded-xl border border-ice/40 bg-ice/10 px-5 py-3 text-sm font-semibold text-ice transition hover:border-ice/60 hover:bg-ice/15"
            >
              {copied ? "Copied to clipboard" : "Copy my request"}
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setCopied(false);
            }}
            className="focus-ring inline-flex justify-center rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted transition hover:border-ice/40 hover:text-ice"
          >
            Edit my request
          </button>
        </div>
      </div>
    );
  }

  const err = (k: keyof ProductRequest) =>
    errors[k] ? `${inputClass} ${errorInputClass}` : inputClass;
  const described = (k: keyof ProductRequest) =>
    errors[k] ? `${k}-error` : undefined;

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="glass-panel space-y-6 rounded-2xl p-6 [color-scheme:dark] sm:p-8"
      aria-label="Product request"
    >
      <fieldset className="space-y-5">
        <legend className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ice">
          About you
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={described("name")}
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              className={err("name")}
            />
            <FieldError id="name-error" message={errors.name} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={described("email")}
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              className={err("email")}
            />
            <FieldError id="email-error" message={errors.email} />
          </div>
          <div>
            <Label htmlFor="phone" optional>
              Phone
            </Label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <Label htmlFor="organisation" optional>
              Organisation or business
            </Label>
            <input
              id="organisation"
              name="organisation"
              type="text"
              autoComplete="organization"
              value={data.organisation}
              onChange={(e) => update("organisation", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </fieldset>

      <div className="h-px bg-border" aria-hidden />

      <fieldset className="space-y-5">
        <legend className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
          Your idea
        </legend>
        <div>
          <Label htmlFor="projectType">Project type</Label>
          <select
            id="projectType"
            name="projectType"
            required
            aria-invalid={!!errors.projectType}
            aria-describedby={described("projectType")}
            value={data.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            className={err("projectType")}
          >
            <option value="" disabled>
              Choose one…
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <FieldError id="projectType-error" message={errors.projectType} />
        </div>
        <div>
          <Label htmlFor="idea">Describe your idea</Label>
          <textarea
            id="idea"
            name="idea"
            rows={6}
            required
            aria-invalid={!!errors.idea}
            aria-describedby={described("idea") ?? "idea-hint"}
            placeholder="What are you hoping to build, who is it for, and what problem does it solve?"
            value={data.idea}
            onChange={(e) => update("idea", e.target.value)}
            className={`${err("idea")} resize-y`}
          />
          {errors.idea ? (
            <FieldError id="idea-error" message={errors.idea} />
          ) : (
            <p id="idea-hint" className="mt-1.5 text-xs text-muted">
              Rough is fine. A few sentences is plenty to get started.
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="features" optional>
            Main features or must-haves
          </Label>
          <textarea
            id="features"
            name="features"
            rows={4}
            placeholder="For example: online booking, user accounts, a staff schedule, push notifications…"
            value={data.features}
            onChange={(e) => update("features", e.target.value)}
            className={`${inputClass} resize-y`}
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="budget" optional>
              Budget range
            </Label>
            <select
              id="budget"
              name="budget"
              value={data.budget}
              onChange={(e) => update("budget", e.target.value)}
              className={inputClass}
            >
              {BUDGET_RANGES.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="timeline" optional>
              Ideal timeline
            </Label>
            <select
              id="timeline"
              name="timeline"
              value={data.timeline}
              onChange={(e) => update("timeline", e.target.value)}
              className={inputClass}
            >
              <option value="">No preference</option>
              {TIMELINES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <Label htmlFor="referral" optional>
            How did you hear about us?
          </Label>
          <input
            id="referral"
            name="referral"
            type="text"
            value={data.referral}
            onChange={(e) => update("referral", e.target.value)}
            className={inputClass}
          />
        </div>
      </fieldset>

      {Object.values(errors).some(Boolean) && (
        <p
          className="rounded-xl border border-ember/40 bg-ember/10 px-4 py-3 text-sm text-ember"
          role="alert"
        >
          A few required fields still need filling in.
        </p>
      )}
      {status === "error" && (
        <p
          className="rounded-xl border border-ember/40 bg-ember/10 px-4 py-3 text-sm text-ember"
          role="alert"
        >
          Something went wrong sending your request. Please try again, or
          email us at {REQUEST_EMAIL}.
        </p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted">
          <span className="text-ember">*</span> Required. Your request
          comes straight to our team, and we reply by email.
        </p>
        <button
          type="submit"
          className="focus-ring inline-flex shrink-0 justify-center rounded-xl bg-ice px-6 py-3 text-sm font-semibold text-background transition hover:bg-ice-bright"
        >
          Submit request
        </button>
      </div>
    </form>
  );
}
