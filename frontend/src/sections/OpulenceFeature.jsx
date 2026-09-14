import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Mask } from "../components/Rise";
import { track, tryBrochureDownload } from "../lib/config";

const CHIPS = [
  { t: "3 & 4 BHK ULTRA-PREMIUM RESIDENCES", cls: "text-bone/90" },
  { t: "₹1.41 CR ONWARDS", cls: "text-gold" },
  { t: "FIT-OUT STARTED", cls: "text-eglow" },
];

export default function OpulenceFeature() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const inView = useInView(ref, { once: true, margin: "-30% 0px" });

  useEffect(() => {
    if (inView) track("project_view", { project: "opulence", placement: "home_feature" });
  }, [inView]);

  return (
    <section
      ref={ref}
      id="opulence"
      data-testid="opulence-feature"
      className="relative overflow-hidden"
    >
      <motion.div className="absolute -inset-y-[10%] inset-x-0" style={{ y }}>
        <img
          src="/brand/elevation.webp"
          alt="Platinum Greens Opulence — elevation render"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 px-6 py-32 md:px-12 md:py-48">
        <h2>
          <Mask delay={0.08}>
            <span className="block font-display text-[12vw] leading-[0.95] text-bone md:text-[8.5vw]">
              PLATINUM
            </span>
          </Mask>
          <Mask delay={0.16}>
            <span className="block font-display text-[12vw] leading-[0.95] text-bone md:text-[8.5vw]">
              GREENS
            </span>
          </Mask>
          <Mask delay={0.24}>
            <span className="block font-editorial text-[12vw] font-light italic leading-[0.95] text-gold md:text-[8.5vw]">
              OPULENCE
            </span>
          </Mask>
        </h2>
        <Mask delay={0.36}>
          <span className="mt-8 block font-mono text-[11px] tracking-[0.35em] text-platinum/80">
            MANSAROVAR EXTENSION • JAIPUR
          </span>
        </Mask>
        <Mask delay={0.44}>
          <span className="mt-8 flex flex-wrap gap-3">
            {CHIPS.map((c) => (
              <span
                key={c.t}
                className={`flex items-center gap-2 border border-white/15 px-4 py-2 font-mono text-[10px] tracking-[0.2em] ${c.cls}`}
              >
                {c.t}
              </span>
            ))}
          </span>
        </Mask>
        <Mask delay={0.54}>
          <span className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/enquire?project=opulence&intent=sales"
              data-testid="opulence-cta-details"
              onClick={() => track("cta_click", { placement: "opulence_feature", target: "request_details" })}
              className="flex items-center gap-2 bg-gold px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
            >
              REQUEST DETAILS <ArrowUpRight size={14} />
            </Link>
            <button
              data-testid="opulence-cta-brochure"
              onClick={() => tryBrochureDownload("opulence_feature")}
              className="border border-white/25 px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              DOWNLOAD BROCHURE
            </button>
            <Link
              to="/platinum-greens-opulence"
              data-testid="opulence-cta-experience"
              onClick={() => track("cta_click", { placement: "opulence_feature", target: "full_experience" })}
              className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-platinum/70 underline-offset-8 transition-colors duration-300 hover:text-gold hover:underline"
            >
              ENTER THE FULL EXPERIENCE <ArrowUpRight size={13} />
            </Link>
          </span>
        </Mask>
      </div>
    </section>
  );
}
