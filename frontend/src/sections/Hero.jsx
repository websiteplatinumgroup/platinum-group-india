import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
      <motion.div className="absolute inset-0 bg-ink" style={{ y, scale }}>
        <motion.img
          src="/brand/hero-abstract.webp"
          alt="Platinum Group — emerald and gold light over black"
          data-testid="hero-image"
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 45%, transparent 40%, rgba(7,7,8,0.55) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/85 to-transparent" />
      </motion.div>

      <div className="relative z-10 flex w-full flex-col items-center px-6 pb-32 text-center md:px-12 md:pb-24">
        <h1>
          <Mask delay={d + 0.1}>
            <span className="font-display text-[15vw] leading-[0.95] text-bone md:text-[10.5vw]">
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
          <span className="mt-8 block max-w-md font-body text-sm leading-relaxed text-platinum/70 md:text-base">
            Architecture shaped by ambition
          </span>
        </Mask>
        <Mask delay={d + 0.5}>
          <span className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              data-testid="hero-discover-button"
              data-cursor="EXPLORE"
              onClick={() => scrollToId("opulence", true)}
              className="border border-bone/40 px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-bone"
            >
              GREENS OPULENCE
            </button>
            <button
              data-testid="hero-brochure-button"
              onClick={() => tryBrochureDownload("hero")}
              className="border border-bone/40 px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
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
