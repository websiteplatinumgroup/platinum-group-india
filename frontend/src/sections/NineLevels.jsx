import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { TierProgress } from "../components/TierMark";

const LEVELS = [
  { n: "01", title: "VISION", line: "Landmarks, not buildings." },
  { n: "02", title: "DESIGN", line: "Considered before it is constructed." },
  { n: "03", title: "ARCHITECTURE", line: "Form that earns its height." },
  { n: "04", title: "ENGINEERING", line: "Precision beneath the polish." },
  { n: "05", title: "CRAFTSMANSHIP", line: "Detail as discipline." },
  { n: "06", title: "LIFESTYLE", line: "Fifty amenities. One standard." },
  { n: "07", title: "COMMUNITY", line: "Built for generations, not quarters." },
  { n: "08", title: "LEGACY", line: "Every level builds the next." },
  { n: "09", title: "PLATINUM", line: "The next level is always up." },
];

export default function NineLevels() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(8, Math.max(0, Math.floor(v * 9))));
  });

  return (
    <section
      ref={ref}
      data-testid="nine-levels"
      className="relative"
      style={{ height: "520vh" }}
      aria-label="The Nine Philosophies of Platinum Group"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr] items-center gap-8 px-6 md:grid-cols-[340px_1fr] md:gap-20 md:px-12">
          <div className="flex items-center justify-center" aria-hidden="true">
            <TierProgress active={active} className="w-[170px] -translate-y-4 md:w-[380px] md:-translate-y-8" />
          </div>
          <div className="relative min-h-[280px]">
            <p
              data-testid="nine-levels-progress"
              className="font-mono text-[11px] tracking-[0.35em] text-gold"
            >
              THE NINE PHILOSOPHIES — {LEVELS[active].n} / 09
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="mt-6 font-display text-5xl leading-none text-bone md:text-8xl">
                  {LEVELS[active].title}
                </h2>
                <p className="mt-6 max-w-md font-editorial text-base italic text-platinum/80 md:text-xl">
                  {LEVELS[active].line}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
