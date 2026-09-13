import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { FadeUp } from "../components/Rise";

const STATS = [
  { value: 2006, suffix: "", label: "ESTABLISHED IN JAIPUR", plain: true },
  { value: 1700000, suffix: "+", label: "SQ. FT. COMMERCIAL & RESIDENTIAL UNITS DELIVERED", format: true, long: true },
  { value: 700000, suffix: "+", label: "SQ. FT. UNITS UNDER CONSTRUCTION", format: true, long: true },
  { text: "CREDAI", label: "MEMBER — RAJASTHAN", plain: true },
];

const Counter = ({ value, suffix, plain, format, long, text }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(plain || text ? value : 0);

  useEffect(() => {
    if (!inView || plain || text) return;
    const c = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) =>
        setDisplay(format ? Math.round(v).toLocaleString("en-IN") : Math.round(v)),
    });
    return () => c.stop();
  }, [inView, value, plain, text, format]);

  return (
    <span
      ref={ref}
      className={`font-display text-bone ${long ? "text-2xl md:text-4xl" : "text-4xl md:text-5xl"}`}
    >
      {text || (format && plain ? value.toLocaleString("en-IN") : display)}
      <span className="text-gold">{suffix}</span>
    </span>
  );
};

export default function Credibility() {
  return (
    <section
      data-testid="credibility-band"
      aria-label="Platinum Group at a glance"
      className="border-y border-white/5"
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <FadeUp
            key={s.label}
            delay={i * 0.08}
            className={`px-6 py-10 md:py-14 ${i > 0 ? "border-l border-white/5" : ""} ${i === 2 ? "max-md:border-l-0 max-md:border-t max-md:border-white/5" : ""} ${i === 3 ? "max-md:border-t max-md:border-white/5" : ""}`}
          >
            <Counter value={s.value} suffix={s.suffix} plain={s.plain} format={s.format} long={s.long} text={s.text} />
            <p className="mt-3 font-mono text-[9px] tracking-[0.3em] text-platinum/50 md:text-[10px]">
              {s.label}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
