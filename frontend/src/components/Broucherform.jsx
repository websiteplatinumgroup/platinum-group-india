import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { API, track } from "../lib/config";

const CONFIGS = [
  { id: "3bhk", label: "3 BHK" },
  { id: "4bhk", label: "4 BHK" },
];

const inputCls =
  "w-full border-b border-white/15 bg-transparent py-2 sm:py-3 font-body text-base text-bone placeholder:text-platinum/30 focus:border-gold focus:outline-none transition-colors";

export default function BrochureLeadForm({
  project = "opulence",
  source = "brochure-gate",
  onSuccess,
}) {
  const [form, setForm] = useState({ name: "", mobile: "", email: "" });
  const [configs, setConfigs] = useState([]); // optional, can pick both
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const toggleConfig = (id) =>
    setConfigs((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );

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
      const res = await fetch(`${API}/brochure-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          mobile: digits,
          email: form.email || null,
          project,
          configurations: configs, // ["2bhk", "3bhk"]
          source,
        }),
      });
      if (!res.ok) throw new Error("failed");
      track("lead_submit", { project, intent: "brochure", source });
      track("brochure_request", { project, source });
      setState("done");
      onSuccess?.({ project });
    } catch {
      setState("error");
    }
  };

  // only visible if no onSuccess redirect is provided
  if (state === "done") {
    return (
      <div data-testid="brochure-lead-success" className="flex flex-col items-start gap-4 py-6">
        <span className="flex h-12 w-12 items-center justify-center border border-gold text-gold">
          <Check size={20} />
        </span>
        <h3 className="font-display text-3xl text-bone">THANK YOU.</h3>
      </div>
    );
  }

  return (
    <form data-testid="brochure-lead-form" onSubmit={submit} noValidate>
      <div className="space-y-4 sm:space-y-7">
        <div>
          <label htmlFor="bl-name" className="font-mono text-[10px] tracking-[0.3em] text-platinum/50">
            NAME *
          </label>
          <input
            id="bl-name"
            data-testid="brochure-name-input"
            value={form.name}
            onChange={set("name")}
            placeholder="Your full name"
            className={inputCls}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1 font-mono text-[10px] tracking-widest text-red-400 sm:mt-2">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="bl-mobile" className="font-mono text-[10px] tracking-[0.3em] text-platinum/50">
            MOBILE *
          </label>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-platinum/50">+91</span>
            <input
              id="bl-mobile"
              data-testid="brochure-mobile-input"
              value={form.mobile}
              onChange={set("mobile")}
              placeholder="10-digit mobile number"
              inputMode="numeric"
              autoComplete="tel-national"
              className={inputCls}
            />
          </div>
          {errors.mobile && (
            <p className="mt-1 font-mono text-[10px] tracking-widest text-red-400 sm:mt-2">
              {errors.mobile}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="bl-email" className="font-mono text-[10px] tracking-[0.3em] text-platinum/50">
            EMAIL — OPTIONAL
          </label>
          <input
            id="bl-email"
            data-testid="brochure-email-input"
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            autoComplete="email"
            className={inputCls}
          />
          {errors.email && (
            <p className="mt-1 font-mono text-[10px] tracking-widest text-red-400 sm:mt-2">
              {errors.email}
            </p>
          )}
        </div>

        <fieldset>
          <legend className="mb-2 font-mono text-[10px] tracking-[0.3em] text-platinum/50 sm:mb-3">
            I'M INTERESTED IN
          </legend>
          <div className="flex flex-wrap gap-2">
            {CONFIGS.map((c) => (
              <button
                type="button"
                key={c.id}
                data-testid={`brochure-config-${c.id}`}
                onClick={() => toggleConfig(c.id)}
                aria-pressed={configs.includes(c.id)}
                className={`border px-5 py-2 font-mono text-[10px] tracking-[0.15em] transition-colors duration-300 ${
                  configs.includes(c.id)
                    ? "border-gold text-gold"
                    : "border-white/15 text-platinum/60 hover:border-white/40"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </fieldset>

        {state === "error" && (
          <p className="font-mono text-[11px] tracking-widest text-red-400">
            SOMETHING WENT WRONG — PLEASE TRY AGAIN OR WHATSAPP US DIRECTLY.
          </p>
        )}

        <button
          type="submit"
          data-testid="brochure-submit-button"
          disabled={state === "sending"}
          className="group flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 font-mono text-xs tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone disabled:opacity-60"
        >
          {state === "sending" ? "SENDING…" : "DOWNLOAD BROCHURE"}
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </form>
  );
}