import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { API, track, waLink } from "../lib/config";

const INTERESTS = [
  { id: "opulence", label: "Platinum Greens Opulence" },
  { id: "greens", label: "Platinum Greens" },
  { id: "upcoming", label: "Upcoming Projects" },
  { id: "other", label: "Other" },
];

const INTENTS = [
  { id: "site-visit", label: "Book a Site Visit" },
  { id: "brochure", label: "Receive Brochure" },
  { id: "price", label: "Get Price Details" },
  { id: "sales", label: "Speak to Sales" },
];

const INTENT_EVENTS = {
  "site-visit": "book_site_visit",
  brochure: "brochure_request",
  price: "price_request",
  sales: "enquiry",
};

const inputCls =
  "w-full border-b border-white/15 bg-transparent py-3 font-body text-base text-bone placeholder:text-platinum/30 focus:border-gold focus:outline-none transition-colors";

export default function LeadForm({
  defaultProject = "opulence",
  defaultIntent = "sales",
  source = "enquire",
}) {
  const [form, setForm] = useState({ name: "", mobile: "", email: "" });
  const [project, setProject] = useState(defaultProject);
  const [intent, setIntent] = useState(defaultIntent);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (form.name.trim().length < 2) errs.name = "Please share your name";
    const digits = form.mobile.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
    if (!/^[6-9]\d{9}$/.test(digits))
      errs.mobile = "Enter a valid 10-digit mobile number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      errs.email = "Enter a valid email or leave it blank";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setState("sending");
    try {
      const res = await fetch(`${API}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          mobile: digits,
          email: form.email || null,
          project,
          intent,
          source,
        }),
      });
      if (!res.ok) throw new Error("failed");
      track("lead_submit", { project, intent, source });
      track(INTENT_EVENTS[intent] || "enquiry", { project, source });
      setState("done");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    const pLabel = INTERESTS.find((i) => i.id === project)?.label;
    const iLabel = INTENTS.find((i) => i.id === intent)?.label;
    return (
      <div data-testid="lead-success" className="flex flex-col items-start gap-6 py-10">
        <span className="flex h-12 w-12 items-center justify-center border border-gold text-gold">
          <Check size={20} />
        </span>
        <h3 className="font-display text-3xl text-bone md:text-4xl">
          REQUEST RECEIVED.
        </h3>
        <p className="max-w-sm font-body text-sm leading-relaxed text-platinum/70">
          Thank you, {form.name.split(" ")[0]}. Our senior team will reach you
          on +91 {form.mobile.replace(/\D/g, "").slice(-10)} shortly. For an
          immediate conversation:
        </p>
        <a
          href={waLink(
            `Hi Platinum Group, I'm ${form.name.trim()}. I just requested: ${iLabel} — ${pLabel}.`
          )}
          target="_blank"
          rel="noreferrer"
          data-testid="lead-success-whatsapp"
          onClick={() => track("whatsapp_click", { placement: "lead_success" })}
          className="flex items-center gap-2 border border-eglow/50 px-6 py-3 font-mono text-[11px] tracking-[0.25em] text-eglow transition-colors hover:bg-eglow hover:text-ink"
        >
          CONTINUE ON WHATSAPP <ArrowUpRight size={13} />
        </a>
      </div>
    );
  }

  return (
    <form data-testid="lead-form" onSubmit={submit} noValidate>
      <div className="space-y-7">
        <div>
          <label htmlFor="lead-name" className="font-mono text-[10px] tracking-[0.3em] text-platinum/50">
            NAME *
          </label>
          <input
            id="lead-name"
            data-testid="lead-name-input"
            value={form.name}
            onChange={set("name")}
            placeholder="Your full name"
            className={inputCls}
            autoComplete="name"
          />
          {errors.name && (
            <p data-testid="lead-name-error" className="mt-2 font-mono text-[10px] tracking-widest text-red-400">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lead-mobile" className="font-mono text-[10px] tracking-[0.3em] text-platinum/50">
            MOBILE *
          </label>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-platinum/50">+91</span>
            <input
              id="lead-mobile"
              data-testid="lead-mobile-input"
              value={form.mobile}
              onChange={set("mobile")}
              placeholder="10-digit mobile number"
              inputMode="numeric"
              autoComplete="tel-national"
              className={inputCls}
            />
          </div>
          {errors.mobile && (
            <p data-testid="lead-mobile-error" className="mt-2 font-mono text-[10px] tracking-widest text-red-400">
              {errors.mobile}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lead-email" className="font-mono text-[10px] tracking-[0.3em] text-platinum/50">
            EMAIL — OPTIONAL
          </label>
          <input
            id="lead-email"
            data-testid="lead-email-input"
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            autoComplete="email"
            className={inputCls}
          />
          {errors.email && (
            <p data-testid="lead-email-error" className="mt-2 font-mono text-[10px] tracking-widest text-red-400">
              {errors.email}
            </p>
          )}
        </div>
        <fieldset>
          <legend className="mb-3 font-mono text-[10px] tracking-[0.3em] text-platinum/50">
            I'M INTERESTED IN
          </legend>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((i) => (
              <button
                type="button"
                key={i.id}
                data-testid={`lead-interest-${i.id}`}
                onClick={() => setProject(i.id)}
                aria-pressed={project === i.id}
                className={`border px-4 py-2 font-mono text-[10px] tracking-[0.15em] transition-colors duration-300 ${
                  project === i.id
                    ? "border-gold text-gold"
                    : "border-white/15 text-platinum/60 hover:border-white/40"
                }`}
              >
                {i.label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-3 font-mono text-[10px] tracking-[0.3em] text-platinum/50">
            I WOULD LIKE TO
          </legend>
          <div className="flex flex-wrap gap-2">
            {INTENTS.map((i) => (
              <button
                type="button"
                key={i.id}
                data-testid={`lead-intent-${i.id}`}
                onClick={() => setIntent(i.id)}
                aria-pressed={intent === i.id}
                className={`border px-4 py-2 font-mono text-[10px] tracking-[0.15em] transition-colors duration-300 ${
                  intent === i.id
                    ? "border-gold text-gold"
                    : "border-white/15 text-platinum/60 hover:border-white/40"
                }`}
              >
                {i.label}
              </button>
            ))}
          </div>
        </fieldset>
        {state === "error" && (
          <p data-testid="lead-error" className="font-mono text-[11px] tracking-widest text-red-400">
            SOMETHING WENT WRONG — PLEASE TRY AGAIN OR WHATSAPP US DIRECTLY.
          </p>
        )}
        <button
          type="submit"
          data-testid="lead-submit-button"
          disabled={state === "sending"}
          className="group flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 font-mono text-xs tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone disabled:opacity-60"
        >
          {state === "sending" ? "SENDING…" : "REQUEST DETAILS"}
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </form>
  );
}
