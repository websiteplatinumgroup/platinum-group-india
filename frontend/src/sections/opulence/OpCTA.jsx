import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { FadeUp, Mask } from "../../components/Rise";
import LeadForm from "../../components/LeadForm";
import { PHONE_DISPLAY, PHONE_TEL, SITE_MAPS_URL, WA_DEFAULT, track, tryBrochureDownload } from "../../lib/config";

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

      <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeUp>
            <LeadForm defaultProject="opulence" defaultIntent="site-visit" source="opulence_page" />
          </FadeUp>
        </div>

        <div>
          <FadeUp delay={0.1}>
            <a
              href={SITE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              data-testid="opulence-cta-map"
              onClick={() => track("map_click", { placement: "opulence_cta" })}
              className="group relative block overflow-hidden border border-white/10"
            >
              <img
                src="/opulence/location-map.webp"
                alt="Platinum Greens Opulence location plan — Mansarovar Extension, Jaipur"
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
              <span className="absolute bottom-4 left-4 flex items-center gap-2 border border-eglow/50 bg-[#061410]/85 px-4 py-2.5 font-mono text-[10px] tracking-[0.25em] text-eglow backdrop-blur-sm">
                <MapPin size={13} /> OPEN SITE LOCATION ON GOOGLE MAPS <ArrowUpRight size={12} />
              </span>
            </a>
            <p className="mt-4 font-body text-xs leading-relaxed text-platinum/60">
              Platinum Greens Opulence, Near Parshwanath Narayan City, Mansarovar Extension, Jaipur
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-10 flex flex-wrap items-center gap-4">
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
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
