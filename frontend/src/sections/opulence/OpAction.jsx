import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import LeadForm from "../../components/LeadForm";
import { FadeUp, Mask } from "../../components/Rise";
import { PHONE_DISPLAY, PHONE_TEL, WA_DEFAULT, SITE_ADDRESS, OFFICE_ADDRESS, track } from "../../lib/config";

const SPECS = [
  { k: "STRUCTURE", v: "RCC frame · seismic-zone resistant · Vastu compliant" },
  { k: "FINISHES", v: "Kajaria-class vitrified flooring · anti-skid bathrooms · waterproof exterior texture" },
  { k: "FITTINGS", v: "Duravit-class WCs · Hansgrohe-class CP fittings" },
  { k: "VERTICAL TRANSPORT", v: "High-speed lifts · stretcher lift in every block" },
];

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=26.8102201688762,75.75891828735266";

export default function OpAction() {
  return (
    <>
      <section
        data-testid="movement-location"
        className="border-t border-white/5 px-6 py-24 md:px-12 md:py-36"
      >
        <Mask>
          <span className="font-mono text-[10px] tracking-[0.35em] text-gold">
            MOVEMENT 14 — THE ADDRESS
          </span>
        </Mask>
        <h3 className="mt-5">
          <Mask delay={0.08}>
            <span className="block font-display text-4xl leading-tight text-bone md:text-6xl">
              NEAR PARSHWANATH NARAYAN CITY,
            </span>
          </Mask>
          <Mask delay={0.16}>
            <span className="block font-editorial text-5xl font-light italic leading-tight text-gold md:text-7xl">
              MANSAROVAR EXTENSION.
            </span>
          </Mask>
        </h3>
        <FadeUp delay={0.25}>
          <p className="mt-6 max-w-xl font-mono text-[11px] leading-relaxed tracking-[0.15em] text-platinum/60">
            {SITE_ADDRESS}
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.3em] text-platinum/40">
            26.8102° N, 75.7589° E
          </p>
        </FadeUp>
        <FadeUp delay={0.35} className="mt-10 flex flex-wrap gap-4">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            data-testid="op-maps-link"
            onClick={() => track("cta_click", { placement: "opulence_location", target: "maps" })}
            className="flex items-center gap-2 border border-white/25 px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            OPEN IN MAPS <ArrowUpRight size={14} />
          </a>
          <Link
            to="/enquire?project=opulence&intent=site-visit"
            data-testid="op-location-visit"
            onClick={() => track("book_site_visit", { placement: "opulence_location" })}
            className="flex items-center gap-2 bg-gold px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
          >
            BOOK A SITE VISIT <ArrowUpRight size={14} />
          </Link>
        </FadeUp>
      </section>

      <section data-testid="op-specs" className="border-t border-white/5 px-6 py-20 md:px-12 md:py-28">
        <Mask>
          <span className="font-mono text-[10px] tracking-[0.35em] text-gold">
            THE SPECIFICATION
          </span>
        </Mask>
        <div className="mt-10 grid gap-x-16 md:grid-cols-2">
          {SPECS.map((s) => (
            <FadeUp key={s.k} className="flex flex-col justify-between gap-2 border-b border-white/10 py-6 md:flex-row md:items-baseline">
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                {s.k}
              </span>
              <span className="max-w-md font-body text-sm leading-relaxed text-platinum/80 md:text-right">
                {s.v}
              </span>
            </FadeUp>
          ))}
        </div>
      </section>

      <section data-testid="op-action" className="border-t border-white/5 px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <Mask>
              <span className="block font-display text-5xl leading-tight text-bone md:text-7xl">
                SPEAK WITH
              </span>
            </Mask>
            <Mask delay={0.1}>
              <span className="block font-editorial text-5xl font-light italic leading-tight text-gold md:text-7xl">
                PLATINUM.
              </span>
            </Mask>
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-sm font-editorial text-lg italic text-platinum/80">
                Site visits run daily. Bring your questions — leave with a plan.
              </p>
            </FadeUp>
            <FadeUp delay={0.3} className="mt-10 flex flex-col gap-3 font-mono text-[11px] tracking-[0.25em]">
              <a
                href={PHONE_TEL}
                data-testid="op-action-call"
                onClick={() => track("call_click", { placement: "opulence_action" })}
                className="text-platinum/60 transition-colors hover:text-gold"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noreferrer"
                data-testid="op-action-whatsapp"
                onClick={() => track("whatsapp_click", { placement: "opulence_action" })}
                className="text-platinum/60 transition-colors hover:text-eglow"
              >
                WHATSAPP — INSTANT RESPONSE
              </a>
              <span
                data-testid="op-action-office-address"
                className="mt-5 max-w-sm font-mono text-[10px] leading-relaxed tracking-[0.15em] text-platinum/40"
              >
                CORPORATE OFFICE — {OFFICE_ADDRESS}
              </span>
            </FadeUp>
          </div>
          <FadeUp delay={0.25}>
            <div className="border border-white/10 bg-ink2/60 p-7 md:p-10">
              <p className="mb-8 font-mono text-[10px] tracking-[0.35em] text-platinum/50">
                REQUEST DETAILS — OPULENCE
              </p>
              <LeadForm defaultProject="opulence" defaultIntent="site-visit" source="opulence" />
            </div>
          </FadeUp>
        </div>
        <div className="mx-auto mt-20 flex max-w-7xl flex-col gap-2 border-t border-white/5 pt-8 font-mono text-[9px] tracking-[0.25em] text-platinum/40 md:flex-row md:justify-between md:text-[10px]">
          <span data-testid="op-rera">RERA RAJ/P/2023/2875 · rera.rajasthan.gov.in</span>
          <span>© 2026 PLATINUM GROUP · JAIPUR</span>
        </div>
      </section>
    </>
  );
}
