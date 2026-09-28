import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Check, Download } from "lucide-react";
import { BROCHURES, downloadBrochure, waLink } from "../lib/config";

export default function BrochureThankYou() {
  const [params] = useSearchParams();
  const project = params.get("project") === "greens" ? "greens" : "opulence";
  const brochure = BROCHURES[project];
  const fired = useRef(false);

  // start the download automatically, once, shortly after the page loads
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    const t = setTimeout(() => downloadBrochure(project), 800);
    return () => clearTimeout(t);
  }, [project]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-ink px-6 py-20">
      <div className="flex w-full max-w-lg flex-col items-start gap-6">
        <span className="flex h-14 w-14 items-center justify-center border border-gold text-gold">
          <Check size={24} />
        </span>

        <p className="font-mono text-[11px] tracking-[0.3em] text-gold">
          E-BROCHURE
        </p>

        <h1 className="font-display text-4xl leading-tight text-bone md:text-5xl">
          THANK YOU.
          <br />
          YOUR BROCHURE
          <br />
          IS ON ITS WAY.
        </h1>

        <p className="max-w-md font-body text-sm leading-relaxed text-platinum/70">
          Your download should begin automatically in a moment. If it does not,
          use the button below. Our senior team will also reach out to you
          shortly.
        </p>

        <div className="flex w-full items-center gap-4 border border-white/10 px-5 py-4">
          <Download size={18} className="shrink-0 text-gold" />
          <span className="break-all font-mono text-[11px] tracking-[0.15em] text-platinum/80">
            {brochure.name}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => downloadBrochure(project)}
            className="flex items-center gap-2 bg-gold px-6 py-3 font-mono text-[11px] tracking-[0.25em] text-ink transition-colors hover:bg-bone"
          >
            <Download size={13} /> DOWNLOAD AGAIN
          </button>
          <a
            href={waLink(
              "Hi Platinum Group, I just downloaded the brochure and would like to know more."
            )}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-eglow/50 px-6 py-3 font-mono text-[11px] tracking-[0.25em] text-eglow transition-colors hover:bg-eglow hover:text-ink"
          >
            WHATSAPP US <ArrowUpRight size={13} />
          </a>
          <Link
            to="/"
            className="flex items-center gap-2 border border-white/15 px-6 py-3 font-mono text-[11px] tracking-[0.25em] text-platinum/70 transition-colors hover:border-white/40 hover:text-bone"
          >
            BACK TO HOME
          </Link>
        </div>

        <div className="mt-10 w-full border-t border-white/10 pt-6">
          <p className="font-mono text-[10px] tracking-[0.3em] text-platinum/40">
            PLATINUM GROUP
          </p>
        </div>
      </div>
    </section>
  );
}