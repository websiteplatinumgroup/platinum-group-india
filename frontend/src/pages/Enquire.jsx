import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, Building2, MapPin, MessageCircle, Phone } from "lucide-react";
import LeadForm from "../components/LeadForm";
import { TempImage } from "../components/TempImage";
import { Mask, FadeUp } from "../components/Rise";
import { ASSETS } from "../lib/assets";
import { PHONE_DISPLAY, PHONE_TEL, WA_DEFAULT, SITE_ADDRESS, SITE_ADDRESS_DURGAPURA, OFFICE_ADDRESS, SITE_MAPS_URL, DURGAPURA_MAPS_URL, OFFICE_MAPS_URL, track } from "../lib/config";

const ROWS = [
  {
    icon: Phone,
    label: "CALL SALES",
    value: PHONE_DISPLAY,
    href: PHONE_TEL,
    testid: "enquire-call-link",
    event: "call_click",
  },
  {
    icon: MessageCircle,
    label: "WHATSAPP",
    value: "Instant response",
    href: WA_DEFAULT,
    testid: "enquire-whatsapp-link",
    event: "whatsapp_click",
  },
  {
    icon: MapPin,
    label: "SITE — DURGAPURA",
    value: SITE_ADDRESS_DURGAPURA,
    href: DURGAPURA_MAPS_URL,
    testid: "enquire-site-durgapura-link",
    event: "cta_click",
  },
  {
    icon: MapPin,
    label: "SITE — GREENS OPULENCE",
    value: SITE_ADDRESS,
    href: SITE_MAPS_URL,
    testid: "enquire-location-link",
    event: "cta_click",
  },
  {
    icon: Building2,
    label: "CORPORATE OFFICE",
    value: OFFICE_ADDRESS,
    href: OFFICE_MAPS_URL,
    testid: "enquire-office-link",
    event: "cta_click",
  },
];

export default function Enquire() {
  const [params] = useSearchParams();
  const project = params.get("project") || "opulence";
  const intent = params.get("intent") || "sales";

  useEffect(() => {
    track("page_view", { page: "enquire", project, intent });
    document.title = "Enquire — Platinum Group, Jaipur";
  }, [project, intent]);

  return (
    <main className="min-h-screen px-6 pb-32 pt-32 md:px-12 md:pt-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <Mask>
            <span className="font-mono text-[10px] tracking-[0.4em] text-gold">
              CONTACT — PLATINUM GROUP
            </span>
          </Mask>
          <h1 className="mt-6">
            <Mask delay={0.1}>
              <span className="block font-display text-5xl leading-tight text-bone md:text-7xl">
                BEGIN A
              </span>
            </Mask>
            <Mask delay={0.2}>
              <span className="block font-editorial text-5xl font-light italic leading-tight text-gold md:text-7xl">
                CONVERSATION.
              </span>
            </Mask>
          </h1>
          <FadeUp delay={0.3} className="mt-12 border-t border-white/10">
            {ROWS.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-testid={r.testid}
                onClick={() => track(r.event, { placement: "enquire_page" })}
                className="group flex items-center justify-between border-b border-white/10 py-5 transition-colors hover:border-gold/40"
              >
                <span className="flex items-center gap-4">
                  <r.icon size={16} className="text-gold" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-platinum/50">
                    {r.label}
                  </span>
                </span>
                <span className="flex max-w-[58%] items-center gap-2 text-right font-body text-sm leading-relaxed text-bone">
                  {r.value}
                  <ArrowUpRight
                    size={14}
                    className="text-platinum/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  />
                </span>
              </a>
            ))}
          </FadeUp>
          <FadeUp delay={0.4} className="mt-12">
            <TempImage asset={ASSETS.enquire} className="h-64 w-full md:h-80" />
          </FadeUp>
        </div>

        <FadeUp delay={0.25} className="lg:pt-16">
          <div className="border border-white/10 bg-ink2/60 p-7 md:p-10">
            <p className="mb-8 font-mono text-[10px] tracking-[0.35em] text-platinum/50">
              REQUEST DETAILS — RESPONSE WITHIN ONE WORKING HOUR
            </p>
            <LeadForm
              key={`${project}-${intent}`}
              defaultProject={project}
              defaultIntent={intent}
              source="enquire"
            />
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
