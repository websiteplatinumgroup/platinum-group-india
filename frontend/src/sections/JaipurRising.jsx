import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TierMark } from "../components/TierMark";

const BACK = [22, 15, 26, 13, 20, 17, 24, 15, 21, 16, 25, 19, 14, 23];
const MID = [30, 24, 36, 22, 28, 26, 34, 25, 31, 23, 33, 27, 24, 30];
const FRONT = [40, 32, 46, 30, 38, 34, 52, 36, 44, 33, 48, 37, 31, 42];

const Row = ({ hts, cls, y }) => (
  <motion.div
    style={{ y }}
    className="absolute inset-x-0 bottom-0 flex items-end gap-1.5 px-2"
    aria-hidden="true"
  >
    {hts.map((h, i) => (
      <div key={i} className={`flex-1 ${cls}`} style={{ height: `${h}vh` }} />
    ))}
  </motion.div>
);

export default function JaipurRising() {
  const ref = useRef(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const yBack = useTransform(p, [0, 1], ["60%", "-20%"]);
  const yMid = useTransform(p, [0, 1], ["90%", "-42%"]);
  const yFront = useTransform(p, [0, 1], ["120%", "-68%"]);
  const glowO = useTransform(p, [0.05, 0.5], [0, 1]);
  const b1o = useTransform(p, [0.08, 0.2, 0.3], [0, 1, 0]);
  const b1y = useTransform(p, [0.08, 0.3], [80, -40]);
  const b2o = useTransform(p, [0.34, 0.46, 0.58], [0, 1, 0]);
  const b2y = useTransform(p, [0.34, 0.58], [80, -40]);
  const b3o = useTransform(p, [0.62, 0.78], [0, 1]);
  const b3y = useTransform(p, [0.62, 0.78], [60, 0]);
  const frontO = useTransform(p, [0.58, 0.8], [1, 0.3]);

  return (
    <section
      ref={ref}
      data-testid="jaipur-rising"
      className="relative"
      style={{ height: "380vh" }}
      aria-label="Jaipur is rising"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ opacity: glowO }}
          className="absolute -bottom-[25%] left-1/2 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full"
          aria-hidden="true"
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(194,160,89,0.14) 0%, rgba(29,185,139,0.06) 45%, transparent 70%)",
            }}
          />
        </motion.div>

        <Row hts={BACK} cls="bg-white/[0.05]" y={yBack} />
        <Row hts={MID} cls="bg-white/[0.09]" y={yMid} />

        <motion.h2
          style={{ opacity: b1o, y: b1y }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center font-display text-[11vw] text-bone md:text-8xl"
        >
          JAIPUR IS RISING
        </motion.h2>
        <motion.h2
          style={{ opacity: b2o, y: b2y }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center font-editorial text-[11vw] font-light italic text-gold md:text-8xl"
        >
          SO ARE WE
        </motion.h2>

        <motion.div style={{ y: yFront, opacity: frontO }} className="absolute inset-x-0 bottom-0" aria-hidden="true">
          <div className="relative flex items-end gap-1.5 px-2">
            {FRONT.map((h, i) => (
              <div key={i} className="flex-1 bg-white/[0.14]" style={{ height: `${h}vh` }} />
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: b3o, y: b3y }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 px-6 text-center"
        >
          <TierMark className="h-10 w-14" />
        </motion.div>
      </div>
    </section>
  );
}
