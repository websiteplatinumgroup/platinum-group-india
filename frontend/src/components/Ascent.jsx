import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TierBuild } from "./TierMark";

const WORD = "PLATINUM GROUP";

export default function Ascent() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem("pg-ascent");
    } catch {
      return false;
    }
  });

  const dismiss = () => {
    try {
      sessionStorage.setItem("pg-ascent", "1");
    } catch {}
    document.body.style.overflow = "";
    window.__lenis?.start();
    setShow(false);
  };

  useEffect(() => {
    if (!show) return;
    if (reduced) {
      dismiss();
      return;
    }
    document.body.style.overflow = "hidden";
    window.__lenis?.stop();
    const t = setTimeout(dismiss, 3700);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, reduced]);

  return (
    <AnimatePresence>
      {show && !reduced && (
        <motion.div
          key="ascent"
          data-testid="ascent-intro"
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink"
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="pointer-events-none absolute -bottom-[20%] left-1/2 h-[60vh] w-[85vw] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(29,185,139,0.20) 0%, rgba(12,59,46,0.10) 45%, transparent 70%)",
            }}
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-[18%] left-1/2 h-px w-[42vw] -translate-x-1/2 bg-eglow/60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
          />
          <motion.div
            exit={{ scale: 2.2, opacity: 0, y: -50 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="relative flex flex-col items-center"
          >
            <TierBuild className="h-40 w-52 md:h-52 md:w-64" />
            <div className="mt-8 flex overflow-hidden">
              {WORD.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className="font-display text-lg tracking-[0.45em] text-bone md:text-2xl"
                  initial={{ y: "120%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 2.25 + i * 0.04,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.button
            data-testid="ascent-skip-button"
            onClick={dismiss}
            className="absolute bottom-8 right-8 font-mono text-[11px] tracking-[0.3em] text-platinum/60 transition-colors hover:text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            SKIP INTRO
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
