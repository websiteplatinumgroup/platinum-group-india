import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ASSETS } from "../lib/assets";
import { Mask } from "../components/Rise";
import { scrollToId, track } from "../lib/config";

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
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={ASSETS.hero.src}
          alt={ASSETS.hero.alt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-60"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />
      <span
        data-testid="temp-asset-tag"
        className="absolute right-6 top-24 z-10 border border-eglow/40 bg-ink/85 px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-eglow"
      >
        TEMP ASSET · {ASSETS.hero.need}
      </span>

      <div className="relative z-10 w-full px-6 pb-32 md:px-12 md:pb-24">
        <Mask delay={d}>
          <span className="font-mono text-[10px] tracking-[0.4em] text-gold md:text-[11px]">
            PLATINUM GROUP · JAIPUR · EST. 2006
          </span>
        </Mask>
        <h1 className="mt-6">
          <Mask delay={d + 0.1}>
            <span className="font-display text-[15vw] leading-[0.95] text-bone md:text-[10.5vw]">
              WE BUILD
            </span>
          </Mask>
          <Mask delay={d + 0.22}>
            <span className="font-editorial text-[15vw] font-light italic leading-[0.95] text-gold md:text-[10.5vw]">
              UPWARDS.
            </span>
          </Mask>
        </h1>
        <Mask delay={d + 0.38}>
          <span className="mt-8 block max-w-md font-body text-sm leading-relaxed text-platinum/80 md:text-base">
            Architecture shaped by ambition.
          </span>
        </Mask>
        <Mask delay={d + 0.5}>
          <span className="mt-10 flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-discover-button"
              data-cursor="EXPLORE"
              onClick={() => scrollToId("opulence")}
              className="border border-white/20 px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-bone"
            >
              DISCOVER OPULENCE
            </button>
            <Link
              to="/enquire?intent=site-visit"
              data-testid="hero-book-visit-button"
              onClick={() => track("book_site_visit", { placement: "hero" })}
              className="flex items-center gap-2 bg-gold px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
            >
              BOOK A VISIT <ArrowUpRight size={13} />
            </Link>
          </span>
        </Mask>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-4 md:flex">
        <span
          className="font-mono text-[9px] tracking-[0.4em] text-platinum/50"
          style={{ writingMode: "vertical-rl" }}
        >
          ASCEND
        </span>
        <span className="relative block h-16 w-px overflow-hidden bg-white/15">
          <span className="rise-dot absolute bottom-0 left-0 h-4 w-px bg-gold" />
        </span>
      </div>
    </section>
  );
}
