import { motion } from "framer-motion";

// Placeholder nine-tier mark. The final approved client SVG drops into this
// same animated structure without changing any surrounding code.
export const TIERS = [180, 161, 142, 123, 104, 86, 68, 50, 32];

export const TierMark = ({ className = "h-8 w-10" }) => (
  <svg viewBox="0 0 200 160" className={className} aria-hidden="true">
    {TIERS.map((w, i) => (
      <rect
        key={i}
        x={(200 - w) / 2}
        y={150 - i * 16}
        width={w}
        height={10}
        fill={i === 8 ? "#C2A059" : "#D8D8DC"}
      />
    ))}
  </svg>
);

export const TierBuild = ({ className = "", baseDelay = 0.9 }) => (
  <svg
    viewBox="0 0 200 160"
    className={className}
    data-testid="ascent-logo-tiers"
    role="img"
    aria-label="Platinum Group emblem"
  >
    {TIERS.map((w, i) => (
      <motion.rect
        key={i}
        x={(200 - w) / 2}
        y={150 - i * 16}
        width={w}
        height={10}
        fill={i === 8 ? "#C2A059" : "#D8D8DC"}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{
          delay: baseDelay + i * 0.13,
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      />
    ))}
    <motion.rect
      x={0}
      width={200}
      height={2}
      fill="#C2A059"
      initial={{ y: 158, opacity: 0 }}
      animate={{ y: [158, 4], opacity: [0, 0.75, 0] }}
      transition={{ delay: baseDelay + 1.4, duration: 1.1, ease: "easeInOut" }}
    />
  </svg>
);
