import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Mask } from "../../components/Rise";
import { track, tryBrochureDownload } from "../../lib/config";

const EASE = [0.22, 1, 0.36, 1];

export default function GrHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yLeaf = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);

  return (
    <section ref={ref} data-testid="greens-hero" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: yBg }}>
        <img src="/greens/hero.webp" alt="Platinum Greens residences" className="hidden h-full w-full object-cover md:block" />
        <img src="/greens/hero-mobile.webp" alt="Platinum Greens residences" className="h-full w-full object-cover md:hidden" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#061410] via-[#061410]/60 to-[#061410]/45" />
      <div className="absolute inset-0 bg-[#061410]/45 md:hidden" />
      <div className="absolute inset-0 bg-emerald/25 mix-blend-multiply" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(194,160,89,0.28) 0%, rgba(29,185,139,0.12) 45%, transparent 70%)" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.9, ease: EASE }}
      />

      <motion.div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-28" style={{ y: yLeaf }}>
        <motion.img
          src="/brand/opulence-symbol.png"
          alt="Platinum Greens leaf emblem"
          data-testid="greens-hero-symbol"
          className="h-40 drop-shadow-[0_0_28px_rgba(29,185,139,0.35)] md:h-60 lg:h-72"
          initial={{ opacity: 0, y: 90, scale: 0.82 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.35, ease: EASE }}
        />
        <Mask delay={0.9}>
          <img
            src="/brand/greens-wordmark.png"
            alt="Platinum Greens"
            data-testid="greens-hero-wordmark"
            className="mt-4 w-72 md:w-[30rem]"
          />
        </Mask>
        <Mask delay={1.0}>
          <span className="mt-3 block font-mono text-[9px] tracking-[0.35em] text-platinum/80 [text-shadow:0_1px_10px_rgba(6,20,16,1)] md:text-[10px]">
            RERA/RAJ/P/2021/1631
          </span>
        </Mask>
        <Mask delay={1.05}>
          <span className="mt-5 block text-center font-body text-sm leading-relaxed text-platinum [text-shadow:0_1px_12px_rgba(6,20,16,0.9)] md:text-base">
            2, 3 &amp; 4 BHK residences · Mansarovar Extension, Jaipur
          </span>
        </Mask>
        <Mask delay={1.15}>
          <span className="mt-3 block font-mono text-[10px] tracking-[0.35em] text-eglow [text-shadow:0_1px_10px_rgba(6,20,16,1)]">
            POSSESSION STARTED
          </span>
        </Mask>
        <Mask delay={1.25}>
          <span className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span data-testid="greens-hero-price" className="border border-gold/50 px-5 py-3.5 font-mono text-[11px] tracking-[0.25em] text-gold">
              ₹70 LAKH ONWARDS
            </span>
            <button
              data-testid="greens-hero-brochure-btn"
              onClick={() => tryBrochureDownload("greens_hero")}
              className="border border-platinum/40 px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-eglow hover:text-eglow"
            >
              DOWNLOAD BROCHURE
            </button>
            <Link
              to="/enquire?project=greens&intent=site-visit"
              data-testid="greens-hero-visit-btn"
              onClick={() => track("book_site_visit", { placement: "greens_hero" })}
              className="flex items-center gap-2 bg-gold px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
            >
              BOOK SITE VISIT <ArrowUpRight size={13} />
            </Link>
          </span>
        </Mask>
      </motion.div>
    </section>
  );
}
