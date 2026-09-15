import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Mask } from "../../components/Rise";
import { track, tryBrochureDownload } from "../../lib/config";
import { OP_STATS } from "./data";

export default function OpHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} data-testid="opulence-hero" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src="/opulence/elevation.webp" alt="Platinum Greens Opulence elevation" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#061410] via-[#061410]/55 to-[#061410]/30" />
      <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-[#061410]/85 to-transparent" />
      <div className="absolute inset-0 bg-emerald/20 mix-blend-multiply" />

      <div className="relative z-10 px-6 pb-14 pt-32 md:px-12">
        <Mask delay={0.3}>
          <span className="mt-6 block max-w-lg font-body text-sm leading-relaxed text-platinum [text-shadow:0_1px_12px_rgba(6,20,16,0.9)] md:text-base">
            3 &amp; 4 BHK ultra-premium residences · Mansarovar Extension, Jaipur
          </span>
        </Mask>
        <Mask delay={0.5}>
          <span className="mt-8 flex flex-wrap items-center gap-4">
            <span data-testid="opulence-hero-price" className="border border-gold/50 px-5 py-3.5 font-mono text-[11px] tracking-[0.25em] text-gold">
              ₹1.41 CR ONWARDS
            </span>
            <button
              data-testid="opulence-hero-brochure-btn"
              onClick={() => tryBrochureDownload("opulence_hero")}
              className="border border-platinum/40 px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-eglow hover:text-eglow"
            >
              DOWNLOAD BROCHURE
            </button>
            <Link
              to="/enquire?project=opulence&intent=site-visit"
              data-testid="opulence-hero-visit-btn"
              onClick={() => track("book_site_visit", { placement: "opulence_hero" })}
              className="flex items-center gap-2 bg-gold px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
            >
              BOOK SITE VISIT <ArrowUpRight size={13} />
            </Link>
          </span>
        </Mask>

        <div className="mt-14 grid gap-px border border-white/10 bg-white/5 backdrop-blur-sm sm:grid-cols-3">
          {OP_STATS.map((s, i) => (
            <Mask key={s.label} delay={0.6 + i * 0.1}>
              <span className="block bg-[#061410]/80 p-6" data-testid={`opulence-stat-${i}`}>
                <span className="block font-display text-3xl text-eglow md:text-4xl">{s.value}</span>
                <span className="mt-2 block font-mono text-[10px] tracking-[0.3em] text-bone">{s.label}</span>
                <span className="mt-1 block font-body text-xs text-platinum/60">{s.desc}</span>
              </span>
            </Mask>
          ))}
        </div>
      </div>
    </section>
  );
}
