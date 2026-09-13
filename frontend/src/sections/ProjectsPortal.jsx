import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ASSETS } from "../lib/assets";
import { TempImage } from "../components/TempImage";
import { FadeUp, Mask } from "../components/Rise";
import { scrollToId as _scrollToId, track } from "../lib/config";

const PANELS = [
  {
    n: "01",
    tag: "CURRENT · FIT-OUT STARTED",
    title: "PLATINUM GREENS OPULENCE",
    sub: "Ultra-premium 3 & 4 BHK · Mansarovar Extension · ₹1.41 Cr onwards",
    img: ASSETS.portalCurrent,
    cta: "EXPLORE THE FLAGSHIP",
    cursor: "VIEW",
    testid: "portal-panel-current",
    action: "opulence",
  },
  {
    n: "02",
    tag: "LEGACY · SINCE 2006",
    title: "THE ARCHIVE",
    sub: "Five delivered landmarks across Jaipur. Unveiling soon.",
    img: ASSETS.portalLegacy,
    cta: "UNVEILING SOON",
    testid: "portal-panel-legacy",
    action: null,
  },
  {
    n: "03",
    tag: "UPCOMING",
    title: "THE NEXT CHAPTER",
    sub: "Already rising. Details under wraps.",
    img: null,
    cta: "REGISTER INTEREST",
    cursor: "EXPLORE",
    testid: "portal-panel-upcoming",
    action: "upcoming",
  },
];

export default function ProjectsPortal() {
  const navigate = useNavigate();

  const go = (p) => {
    if (p.action === "opulence") {
      track("cta_click", { placement: "portal", target: "opulence" });
      navigate("/platinum-greens-opulence");
    } else if (p.action === "upcoming") {
      track("cta_click", { placement: "portal", target: "upcoming" });
      navigate("/enquire?project=upcoming&intent=sales");
    } else if (p.action) p.action();
  };

  return (
    <section data-testid="projects-portal" className="px-6 py-28 md:px-12 md:py-40">
      <Mask delay={0.1}>
        <h2 className="mt-5 font-display text-4xl text-bone md:text-6xl">
          CHOOSE YOUR ALTITUDE.
        </h2>
      </Mask>

      <FadeUp delay={0.2} className="mt-14">
        <div className="flex flex-col gap-px border border-white/5 bg-white/5 lg:h-[68vh] lg:flex-row">
          {PANELS.map((p) => (
            <div
              key={p.n}
              data-testid={p.testid}
              data-cursor={p.cursor}
              onClick={() => go(p)}
              onKeyDown={(e) => e.key === "Enter" && go(p)}
              tabIndex={p.action ? 0 : -1}
              role={p.action ? "link" : "group"}
              className={`group relative min-h-[52vh] flex-1 overflow-hidden bg-ink2 transition-all duration-700 lg:min-h-0 ${
                p.action ? "cursor-pointer lg:hover:flex-[1.8]" : ""
              }`}
            >
              {p.img && (
                <div className="absolute inset-0 opacity-25 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60">
                  <TempImage asset={p.img} className="h-full w-full" />
                </div>
              )}
              {!p.img && (
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(29,185,139,0.10) 0%, transparent 60%)",
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30" />
              <div className="relative flex h-full flex-col justify-between p-7 md:p-9">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] text-gold">
                    {p.n}
                  </span>
                  <span className="border border-white/15 px-3 py-1.5 font-mono text-[9px] tracking-[0.25em] text-platinum/70">
                    {p.tag}
                  </span>
                </div>
                <div>
                  <h3 className="max-w-md font-display text-3xl leading-tight text-bone md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-platinum/70">
                    {p.sub}
                  </p>
                  <span className="mt-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-gold">
                    {p.cta}
                    {p.action && (
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
