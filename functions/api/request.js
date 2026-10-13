// Cloudflare Pages Function: POST /api/request
// Sends product requests to ZeroForge via Resend. Needs secret RESEND_API_KEY.
const TO = "founder@zeroforgelab.com";
const FROM = "ZeroForge Website <requests@zeroforgelab.com>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { "Content-Type": "application/json" } });
const clip = (v, n) => String(v ?? "").trim().slice(0, n);

export async function onRequestPost({ request, env }) {
  if (!env.RESEND_API_KEY) return json({ error: "not_configured" }, 503);
  let d;
  try { d = await request.json(); } catch { return json({ error: "bad_json" }, 400); }
  if (d.website) return json({ ok: true }); // honeypot
  const r = {
    name: clip(d.name, 200), email: clip(d.email, 200), phone: clip(d.phone, 50),
    organisation: clip(d.organisation, 200), projectType: clip(d.projectType, 50),
    idea: clip(d.idea, 5000), features: clip(d.features, 5000), budget: clip(d.budget, 50),
    timeline: clip(d.timeline, 50), referral: clip(d.referral, 300),
  };
  if (!r.name || !EMAIL_RE.test(r.email) || !r.projectType || !r.idea) return json({ error: "invalid" }, 400);
  const v = (s) => s || "—";
  const text = [
    "New product request from zeroforgelab.com", "",
    "CONTACT", `Name: ${r.name}`, `Email: ${r.email}`, `Phone: ${v(r.phone)}`, `Organisation / business: ${v(r.organisation)}`, "",
    "PROJECT", `Project type: ${r.projectType}`, `Budget range: ${v(r.budget)}`, `Ideal timeline: ${v(r.timeline)}`, "",
    "The idea:", r.idea, "", "Main features / must-haves:", v(r.features), "",
    `How they heard about ZeroForge: ${v(r.referral)}`,
  ].join("\n");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [TO], reply_to: r.email, subject: `Product request: ${r.projectType} from ${r.name}`, text }),
  });
  if (!res.ok) return json({ error: "send_failed" }, 502);
  return json({ ok: true });
}
