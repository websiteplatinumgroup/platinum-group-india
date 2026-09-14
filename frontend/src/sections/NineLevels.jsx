import { useEffect, useRef, useState } from "react";
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
  const activeRef = useRef(0);
  const lockUntil = useRef(0);
  const touchY = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (performance.now() < lockUntil.current) return;
    const next = Math.min(8, Math.max(0, Math.floor(v * 9)));
    activeRef.current = next;
    setActive(next);
  });

  useEffect(() => {
    const next = Math.min(8, Math.max(0, Math.floor(scrollYProgress.get() * 9)));
    activeRef.current = next;
    setActive(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const range = () => {
      const top = el.getBoundingClientRect().top + window.scrollY;
      return { top, end: top + el.offsetHeight - window.innerHeight };
    };
    const inRange = () => {
      const { top, end } = range();
      const y = window.scrollY;
      return y >= top - 2 && y <= end + 2;
    };
    const step = (dir) => {
      const next = activeRef.current + dir;
      if (next < 0 || next > 8) return false;
      if (performance.now() < lockUntil.current) return true;
      lockUntil.current = performance.now() + 750;
      activeRef.current = next;
      setActive(next);
      const { top, end } = range();
      const y = top + (next / 8) * (end - top);
      if (window.__lenis) window.__lenis.scrollTo(y, { duration: 0.65 });
      else window.scrollTo(0, y);
      return true;
    };
    const onWheel = (e) => {
      if (!inRange()) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      if (step(dir)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const onKey = (e) => {
      const map = { ArrowDown: 1, PageDown: 1, " ": 1, ArrowUp: -1, PageUp: -1 };
      const dir = map[e.key];
      if (!dir || !inRange()) return;
      if (step(dir)) e.preventDefault();
    };
    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      touchY.current = null;
    };
    const onTouchMove = (e) => {
      if (touchY.current === null || !inRange()) return;
      const dy = touchY.current - e.touches[0].clientY;
      if (Math.abs(dy) < 48) {
        const release =
          (activeRef.current === 8 && dy > 0) || (activeRef.current === 0 && dy < 0);
        if (!release) e.preventDefault();
        return;
      }
      if (step(dy > 0 ? 1 : -1)) {
        e.preventDefault();
        touchY.current = null;
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false, capture: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("wheel", onWheel, { capture: true });
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove, { capture: true });
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <section
      ref={ref}
      data-testid="nine-levels"
      className="relative"
      style={{ height: "520vh" }}
      aria-label="The Nine Philosophies of Platinum Group"
    >
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <div className="grid w-full max-w-5xl grid-cols-1 items-center justify-items-center gap-8 px-6 md:gap-12">
          <div className="flex items-center justify-center" aria-hidden="true">
            <TierProgress active={active} className="w-[150px] sm:w-[180px] lg:w-[240px]" />
          </div>
          <div className="relative min-h-[210px] w-full text-center md:min-h-[260px]">
            <p
              data-testid="nine-levels-progress"
              className="font-mono text-[10px] tracking-[0.35em] text-gold md:text-[11px]"
            >
              THE NINE PHILOSOPHIES — {LEVELS[active].n} / 09
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.09 } },
                  exit: {
                    opacity: 0,
                    y: -28,
                    transition: { duration: 0.28, ease: "easeIn" },
                  },
                }}
              >
                <div className="mt-5 overflow-hidden">
                  <motion.h2
                    variants={{
                      hidden: { y: "112%" },
                      show: {
                        y: "0%",
                        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="font-display text-4xl leading-none text-bone will-change-transform sm:text-5xl lg:text-7xl xl:text-8xl"
                  >
                    {LEVELS[active].title}
                  </motion.h2>
                </div>
                <div className="overflow-hidden">
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 26 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="mx-auto mt-5 max-w-md font-editorial text-base italic text-platinum/80 md:text-xl"
                  >
                    {LEVELS[active].line}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
