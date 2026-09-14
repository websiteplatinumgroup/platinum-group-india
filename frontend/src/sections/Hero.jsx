import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ASSETS } from "../lib/assets";
import { Mask } from "../components/Rise";
import { scrollToId, track, tryBrochureDownload } from "../lib/config";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  const d = useMemo(() => {
    try {
      return sessionStorage.getItem("pg-ascent") ? 0.15 : 4.4;
    } catch {
      return 0.15;
    }
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      data-testid="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div className="absolute inset-0 bg-bone" style={{ y, scale }} />
      <span
        data-testid="temp-asset-tag"
        className="absolute right-6 top-24 z-10 border border-eglow/40 bg-ink/85 px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-eglow"
      >
        TEMP ASSET · {ASSETS.hero.need}
      </span>

      <div className="relative z-10 w-full px-6 pb-32 md:px-12 md:pb-24">
        <h1>
          <Mask delay={d + 0.1}>
            <span className="font-display text-[15vw] leading-[0.95] text-ink md:text-[10.5vw]">
              WE BUILD
            </span>
          </Mask>
          <Mask delay={d + 0.22}>
            <span className="font-editorial text-[15vw] font-light italic leading-[0.95] text-gold md:text-[10.5vw]">
              UPWARDS
            </span>
          </Mask>
        </h1>
        <Mask delay={d + 0.38}>
          <span className="mt-8 block max-w-md font-body text-sm leading-relaxed text-ink/60 md:text-base">
            Architecture shaped by ambition
          </span>
        </Mask>
        <Mask delay={d + 0.5}>
          <span className="mt-10 flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-discover-button"
              data-cursor="EXPLORE"
              onClick={() => scrollToId("opulence")}
              className="border border-ink/25 px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:border-ink"
            >
              GREENS OPULENCE
            </button>
            <button
              data-testid="hero-brochure-button"
              onClick={() => tryBrochureDownload("hero")}
              className="border border-ink/25 px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              DOWNLOAD BROCHURE
            </button>
            <Link
              to="/enquire?intent=site-visit"
              data-testid="hero-book-visit-button"
              onClick={() => track("book_site_visit", { placement: "hero" })}
              className="flex items-center gap-2 bg-gold px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
            >
              ENQUIRE <ArrowUpRight size={13} />
            </Link>
          </span>
        </Mask>
      </div>
    </section>
  );
}
