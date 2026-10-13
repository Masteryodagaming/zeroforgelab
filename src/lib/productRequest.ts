/*
 * Product request config + submission.
 *
 * The site is a static export with no backend, so requests are sent by
 * opening a pre-filled email (mailto). To switch to a real form service
 * later (Formspree, a Cloudflare Worker, etc.), change SUBMIT_METHOD and
 * fill in submitViaEndpoint — the page and form component don't need to
 * change.
 */

/** Where product requests go. Also used for the "email us directly" fallback on /request. */
export const REQUEST_EMAIL = "founder@zeroforgelab.com";

/** "mailto" opens the visitor's email app. "endpoint" POSTs JSON to REQUEST_ENDPOINT. */
export const SUBMIT_METHOD: "mailto" | "endpoint" = "endpoint";
export const REQUEST_ENDPOINT = "/api/request";

export const PROJECT_TYPES = [
  "Mobile app",
  "Web app",
  "Website",
  "Management tool",
  "Game",
  "Other",
] as const;

export const BUDGET_RANGES = [
  { value: "Not sure yet", label: "Not sure yet" },
  { value: "Small", label: "Small — a focused tool or simple site" },
  { value: "Medium", label: "Medium — an app with a handful of core features" },
  { value: "Large", label: "Large — a full platform or multi-part product" },
] as const;

export const TIMELINES = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "Flexible",
] as const;

export type ProductRequest = {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  projectType: string;
  idea: string;
  features: string;
  budget: string;
  timeline: string;
  referral: string;
};

export const emptyRequest: ProductRequest = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  projectType: "",
  idea: "",
  features: "",
  budget: "Not sure yet",
  timeline: "",
  referral: "",
};

export type RequestErrors = Partial<Record<keyof ProductRequest, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRequest(r: ProductRequest): RequestErrors {
  const errors: RequestErrors = {};
  if (!r.name.trim()) errors.name = "Please enter your name.";
  if (!r.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(r.email.trim()))
    errors.email = "That email doesn’t look quite right.";
  if (!r.projectType) errors.projectType = "Please choose a project type.";
  if (!r.idea.trim()) errors.idea = "Please tell us a little about your idea.";
  return errors;
}

export function buildRequestEmail(r: ProductRequest) {
  const v = (s: string) => s.trim() || "—";
  const subject = `Product request: ${r.projectType || "Project"} from ${r.name.trim()}`;
  const body = [
    "New product request from zeroforgelab.com",
    "",
    "CONTACT",
    `Name: ${v(r.name)}`,
    `Email: ${v(r.email)}`,
    `Phone: ${v(r.phone)}`,
    `Organisation / business: ${v(r.organisation)}`,
    "",
    "PROJECT",
    `Project type: ${v(r.projectType)}`,
    `Budget range: ${v(r.budget)}`,
    `Ideal timeline: ${v(r.timeline)}`,
    "",
    "The idea:",
    v(r.idea),
    "",
    "Main features / must-haves:",
    v(r.features),
    "",
    `How they heard about ZeroForge: ${v(r.referral)}`,
  ].join("\n");
  return { subject, body };
}

export function buildMailtoUrl(r: ProductRequest) {
  const { subject, body } = buildRequestEmail(r);
  return `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function submitViaEndpoint(r: ProductRequest) {
  const res = await fetch(REQUEST_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(r),
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
}

/** Sends the request. Resolves with how it was sent so the UI can explain next steps. */
export async function submitProductRequest(
  r: ProductRequest,
): Promise<"mailto" | "endpoint"> {
  if (SUBMIT_METHOD === "endpoint" && REQUEST_ENDPOINT) {
    try {
      await submitViaEndpoint(r);
      return "endpoint";
    } catch {
      // Fall back to the visitor's email app if direct sending fails.
    }
  }
  window.location.href = buildMailtoUrl(r);
  return "mailto";
}
