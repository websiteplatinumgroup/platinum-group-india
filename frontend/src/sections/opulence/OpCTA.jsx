import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import { Mask } from "../../components/Rise";
import { PHONE_DISPLAY, PHONE_TEL, WA_DEFAULT, track, tryBrochureDownload } from "../../lib/config";

export default function OpCTA() {
  return (
    <section data-testid="opulence-cta" className="border-t border-white/5 bg-emerald px-6 py-24 md:px-12 md:py-32">
      <Mask>
        <span className="font-mono text-[10px] tracking-[0.4em] text-eglow">PRIVATE PREVIEW</span>
      </Mask>
      <Mask delay={0.1}>
        <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.02] text-bone md:text-6xl">
          OWN YOUR LEVEL OF <span className="font-editorial font-light italic text-gold">opulence</span>
        </h2>
      </Mask>
      <Mask delay={0.2}>
        <span className="mt-6 block font-mono text-[12px] tracking-[0.3em] text-gold">
          EXCLUSIVE RESIDENCES FROM ₹1.41 CR ONWARDS
        </span>
      </Mask>
      <Mask delay={0.3}>
        <span className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/enquire?project=opulence&intent=site-visit"
            data-testid="opulence-cta-visit-btn"
            onClick={() => track("book_site_visit", { placement: "opulence_cta" })}
            className="flex items-center gap-2 bg-gold px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
          >
            SCHEDULE PRIVATE PREVIEW <ArrowUpRight size={14} />
          </Link>
          <button
            data-testid="opulence-cta-brochure-btn"
            onClick={() => tryBrochureDownload("opulence_cta")}
            className="border border-platinum/40 px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-eglow hover:text-eglow"
          >
            DOWNLOAD BROCHURE
          </button>
          <a
            href={PHONE_TEL}
            data-testid="opulence-cta-call-btn"
            onClick={() => track("call_click", { placement: "opulence_cta" })}
            className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-platinum/80 underline-offset-8 transition-colors duration-300 hover:text-gold hover:underline"
          >
            <Phone size={13} /> {PHONE_DISPLAY}
          </a>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noreferrer"
            data-testid="opulence-cta-whatsapp-btn"
            onClick={() => track("whatsapp_click", { placement: "opulence_cta" })}
            className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-eglow underline-offset-8 transition-colors duration-300 hover:underline"
          >
            WHATSAPP <ArrowUpRight size={13} />
          </a>
        </span>
      </Mask>
    </section>
  );
}
