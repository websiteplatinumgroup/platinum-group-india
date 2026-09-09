import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export default function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 42, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 420, damping: 42, mass: 0.6 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const t = e.target.closest?.("[data-cursor]");
      setLabel(t ? t.dataset.cursor : "");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      data-testid="custom-cursor"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x: sx, y: sy }}
    >
      <div
        className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 ${
          label
            ? "h-16 w-16 border-gold/80 bg-ink/40 backdrop-blur-sm"
            : "h-7 w-7 border-platinum/50"
        }`}
      >
        {label && (
          <span className="font-mono text-[9px] tracking-[0.25em] text-gold">
            {label}
          </span>
        )}
      </div>
      <div className="absolute left-0 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
    </motion.div>
  );
}
