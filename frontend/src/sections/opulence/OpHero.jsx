import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ASSETS } from "../../lib/assets";
import { Mask } from "../../components/Rise";
import { track } from "../../lib/config";

const FACTS = [
  { t: "3 & 4 BHK ULTRA-PREMIUM RESIDENCES", cls: "text-bone/90" },
  { t: "₹1.41 CR ONWARDS", cls: "text-gold" },
  { t: "FIT-OUT STARTED", cls: "text-eglow", dot: true },
  { t: "2,068–2,792 SQ. FT.", cls: "text-bone/90" },
];

export default function OpHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  return (
    <section
      ref={ref}
      data-testid="op-hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={ASSETS.arrival.src}
          alt={ASSETS.arrival.alt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-50"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />
      <span
        data-testid="temp-asset-tag"
        className="absolute right-6 top-24 z-10 border border-eglow/40 bg-ink/85 px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-eglow"
      >
        TEMP ASSET · {ASSETS.arrival.need}
      </span>

      <motion.div style={{ opacity: fade }} className="relative z-10 w-full px-6 pb-28 md:px-12">
        <Mask>
          <span className="font-mono text-[10px] tracking-[0.4em] text-gold md:text-[11px]">
            THE FLAGSHIP — PLATINUM GROUP
          </span>
        </Mask>
        <h1 className="mt-6">
          <Mask delay={0.08}>
            <span className="block font-display text-[13vw] leading-[0.95] text-bone md:text-[9vw]">
              PLATINUM GREENS
            </span>
          </Mask>
          <Mask delay={0.18}>
            <span className="block font-editorial text-[13vw] font-light italic leading-[0.95] text-gold md:text-[9vw]">
              OPULENCE
            </span>
          </Mask>
        </h1>
        <Mask delay={0.3}>
          <span className="mt-7 block font-mono text-[11px] tracking-[0.35em] text-platinum/80">
            MANSAROVAR EXTENSION • JAIPUR
          </span>
        </Mask>
        <Mask delay={0.4}>
          <span className="mt-7 flex flex-wrap gap-3">
            {FACTS.map((c) => (
              <span
                key={c.t}
                className={`flex items-center gap-2 border border-white/15 px-4 py-2 font-mono text-[10px] tracking-[0.2em] ${c.cls}`}
              >
                {c.dot && <span className="h-1.5 w-1.5 rounded-full bg-eglow" />}
                {c.t}
              </span>
            ))}
          </span>
        </Mask>
        <Mask delay={0.52}>
          <span className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/enquire?project=opulence&intent=site-visit"
              data-testid="op-hero-visit"
              onClick={() => track("book_site_visit", { placement: "opulence_hero" })}
              className="flex items-center gap-2 bg-gold px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
            >
              ENQUIRE <ArrowUpRight size={14} />
            </Link>
            <a
              href="tel:+919660223377"
              data-testid="op-hero-call"
              onClick={() => track("call_click", { placement: "opulence_hero" })}
              className="border border-white/25 px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              CALL SALES
            </a>
          </span>
        </Mask>
      </motion.div>
    </section>
  );
}
