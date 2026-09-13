import LeadForm from "../components/LeadForm";
import { FadeUp, Mask } from "../components/Rise";
import { PHONE_DISPLAY, PHONE_TEL, WA_DEFAULT, SITE_ADDRESS, OFFICE_ADDRESS, track } from "../lib/config";

export default function EnquireSection() {
  return (
    <section
      data-testid="home-enquire"
      className="border-t border-white/5 px-6 py-24 md:px-12 md:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <h2>
            <Mask delay={0.08}>
              <span className="block font-display text-5xl leading-tight text-bone md:text-7xl">
                SPEAK WITH
              </span>
            </Mask>
            <Mask delay={0.16}>
              <span className="block font-editorial text-5xl font-light italic leading-tight text-gold md:text-7xl">
                US
              </span>
            </Mask>
          </h2>
          <FadeUp delay={0.25}>
            <p className="mt-6 max-w-sm font-editorial text-lg italic text-platinum/80">
              Site visits run daily. One conversation is all it takes.
            </p>
          </FadeUp>
          <FadeUp delay={0.35} className="mt-10 flex flex-col gap-3 font-mono text-[11px] tracking-[0.25em]">
            <a
              href={PHONE_TEL}
              data-testid="home-enquire-call"
              onClick={() => track("call_click", { placement: "home_enquire" })}
              className="text-platinum/60 transition-colors hover:text-gold"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
              data-testid="home-enquire-whatsapp"
              onClick={() => track("whatsapp_click", { placement: "home_enquire" })}
              className="text-platinum/60 transition-colors hover:text-eglow"
            >
              WHATSAPP — INSTANT RESPONSE
            </a>
          </FadeUp>
          <FadeUp delay={0.45} className="mt-10 space-y-3 font-mono text-[10px] leading-relaxed tracking-[0.15em] text-platinum/40">
            <p data-testid="home-enquire-site-address">SITE — {SITE_ADDRESS}</p>
            <p data-testid="home-enquire-office-address">CORPORATE OFFICE — {OFFICE_ADDRESS}</p>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <div className="border border-white/10 bg-ink2/60 p-7 md:p-10">
            <p className="mb-8 font-mono text-[10px] tracking-[0.35em] text-platinum/50">
              REQUEST DETAILS
            </p>
            <LeadForm defaultProject="opulence" defaultIntent="sales" source="home" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
