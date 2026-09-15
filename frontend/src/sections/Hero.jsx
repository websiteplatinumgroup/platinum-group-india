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
      <motion.div className="absolute inset-0 bg-black will-change-transform" style={{ y, scale }} />

      {/* drifting brand glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] rounded-full will-change-transform"
          style={{ background: "radial-gradient(circle, rgba(194,160,89,0.14) 0%, transparent 65%)" }}
          animate={{ x: ["-60%", "-30%", "-60%"], y: ["-55%", "-40%", "-55%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] rounded-full will-change-transform"
          style={{ background: "radial-gradient(circle, rgba(29,185,139,0.11) 0%, transparent 65%)" }}
          animate={{ x: ["-45%", "-70%", "-45%"], y: ["-35%", "-60%", "-35%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[55vmin] w-[55vmin] rounded-full will-change-transform"
          style={{ background: "radial-gradient(circle, rgba(216,216,220,0.07) 0%, transparent 60%)" }}
          animate={{ x: ["-55%", "-40%", "-55%"], y: ["-45%", "-30%", "-45%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center px-6 pb-32 text-center md:px-12 md:pb-24">
        <h1>
          <Mask mount delay={d + 0.1}>
            <span className="font-display text-[11vw] leading-[1.02] text-bone md:text-[6.5vw]">
              WHERE VISION
            </span>
          </Mask>
          <Mask mount delay={d + 0.22}>
            <span className="font-editorial text-[11vw] font-light italic leading-[1.02] text-gold md:text-[6.5vw]">
              TAKES FORM
            </span>
          </Mask>
        </h1>
        <Mask mount delay={d + 0.38}>
          <span className="mt-8 block max-w-3xl font-mono text-[10px] tracking-[0.3em] text-platinum/70 md:text-xs">
            THOUGHTFUL ARCHITECTURE · EXCEPTIONAL LIVING · ENDURING VALUE
          </span>
        </Mask>
        <Mask mount delay={d + 0.5}>
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
