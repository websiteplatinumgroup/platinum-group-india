import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { FadeUp, Mask } from "../../components/Rise";
import LeadForm from "../../components/LeadForm";
import { PHONE_DISPLAY, PHONE_TEL, WA_DEFAULT, track, tryBrochureDownload } from "../../lib/config";

export default function GrCTA() {
  return (
    <section data-testid="greens-cta" className="relative overflow-hidden border-t border-white/5 bg-emerald px-6 py-24 md:px-12 md:py-32">
      <Mask>
        <span className="font-mono text-[10px] tracking-[0.4em] text-eglow">READY TO MOVE</span>
      </Mask>
      <Mask delay={0.1}>
        <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-bone md:text-6xl">
          COME HOME TO <span className="text-gold">GREENS</span>
        </h2>
      </Mask>
      <Mask delay={0.2}>
        <span className="mt-6 block font-mono text-[12px] tracking-[0.3em] text-gold">
          2, 3 &amp; 4 BHK RESIDENCES FROM ₹70 LAKH ONWARDS
        </span>
      </Mask>

      <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeUp>
            <LeadForm defaultProject="greens" defaultIntent="site-visit" source="greens_page" />
          </FadeUp>
        </div>

        <div>
          <FadeUp delay={0.1}>
            <div data-testid="greens-cta-map" className="group relative overflow-hidden border border-white/10">
              <iframe
                title="Platinum Greens site location map"
                src="https://maps.google.com/maps?q=26.8102201688762,75.75891828735266&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0 grayscale-[0.2] invert-[0.92] hue-rotate-180 contrast-[0.9] md:aspect-[16/10]"
              />
              <a
                href="https://maps.app.goo.gl/dodhKdoTiL9Fatyh7"
                target="_blank"
                rel="noreferrer"
                data-testid="greens-cta-map-open"
                onClick={() => track("map_click", { placement: "greens_cta" })}
                className="absolute bottom-4 left-4 flex items-center gap-2 border border-eglow/50 bg-[#061410]/85 px-4 py-2.5 font-mono text-[10px] tracking-[0.25em] text-eglow backdrop-blur-sm transition-colors duration-300 hover:bg-eglow hover:text-ink"
              >
                <MapPin size={13} /> OPEN SITE LOCATION ON GOOGLE MAPS <ArrowUpRight size={12} />
              </a>
            </div>
            <p className="mt-4 font-body text-xs leading-relaxed text-platinum/60">
              Platinum Greens, Near Parshwanath Narayan City, Mansarovar Extension, Jaipur
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-10 flex flex-wrap items-center gap-4">
            <button
              data-testid="greens-cta-brochure-btn"
              onClick={() => tryBrochureDownload("greens_cta")}
              className="border border-platinum/40 px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-eglow hover:text-eglow"
            >
              DOWNLOAD BROCHURE
            </button>
            <a
              href={PHONE_TEL}
              data-testid="greens-cta-call-btn"
              onClick={() => track("call_click", { placement: "greens_cta" })}
              className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-platinum/80 underline-offset-8 transition-colors duration-300 hover:text-gold hover:underline"
            >
              <Phone size={13} /> {PHONE_DISPLAY}
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
              data-testid="greens-cta-whatsapp-btn"
              onClick={() => track("whatsapp_click", { placement: "greens_cta" })}
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
