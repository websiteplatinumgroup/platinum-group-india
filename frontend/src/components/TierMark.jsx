import { motion } from "framer-motion";

// The approved Platinum Group logo, used exactly as supplied by the client.
// Geometry, gradients and colours are untouched — only framing (viewBox)
// and build-in animation are applied.

const GOLD_GRADIENT = (
  <linearGradient
    id="champagneGold"
    x1="132"
    y1="0"
    x2="1122"
    y2="0"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0" stopColor="#6F7A7F" />
    <stop offset="0.035" stopColor="#FFFFFF" />
    <stop offset="0.075" stopColor="#CDD5D8" />
    <stop offset="0.14" stopColor="#C9B778" />
    <stop offset="0.26" stopColor="#D2A62E" />
    <stop offset="0.44" stopColor="#E0B83C" />
    <stop offset="0.50" stopColor="#F4D66D" />
    <stop offset="0.56" stopColor="#E0B83C" />
    <stop offset="0.74" stopColor="#D2A62E" />
    <stop offset="0.86" stopColor="#C9B778" />
    <stop offset="0.925" stopColor="#CDD5D8" />
    <stop offset="0.965" stopColor="#FFFFFF" />
    <stop offset="1" stopColor="#6F7A7F" />
  </linearGradient>
);

// Nine tiers, ordered bottom-up (nearest the foundation first).
const TIERS = [
  { apex: 779.538381909994, w: 12.5 },
  { apex: 733.807236676808, w: 12.5 },
  { apex: 685.718219259359, w: 12.5 },
  { apex: 634.282039018326, w: 12.5 },
  { apex: 578.254763476234, w: 12.5 },
  { apex: 516.003067117959, w: 12.5 },
  { apex: 445.291222863653, w: 12.5 },
  { apex: 362.926331629597, w: 12.5 },
  { apex: 264.133498145859, w: 15 },
];

const tierPath = (apex) => `M132 876 L627 ${apex} L1122 876`;

const WORDMARK_PATHS = [
  "m 237.75977,1010 h 5.328 v -21.528 h 10.224 c 7.2,0 11.088,-0.936 14.328,-3.312 3.456,-2.52 5.328,-6.912 5.328,-12.24 0,-6.12 -2.304,-10.944 -6.336,-13.32 -3.312,-2.016 -7.344,-2.808 -14.184,-2.808 h -14.688 z m 5.328,-26.352 v -22.032 h 7.56 c 6.12,0 9.936,0.504 12.096,1.584 3.168,1.584 4.824,4.968 4.824,9.72 0,4.104 -1.656,7.416 -4.392,8.928 -2.232,1.296 -5.328,1.8 -10.224,1.8 z",
  "m 293.31188,1010 h 27.36 v -4.824 h -22.032 v -48.384 h -5.328 z",
  "m 337.3439,1010 h 5.616 l 7.776,-17.928 h 24.768 l 7.704,17.928 h 5.832 l -22.896,-53.208 h -5.976 z m 15.408,-22.752 10.44,-24.408 10.224,24.408 z",
  "m 411.90394,1010 h 5.328 v -48.384 h 12.168 v -4.824 h -29.664 v 4.824 h 12.168 z",
  "m 448.52004,1010 h 5.328 v -53.208 h -5.328 z",
  "m 477.79203,1010 h 5.328 v -46.8 l 31.68,46.8 h 5.328 v -53.208 h -5.328 v 44.136 l -29.808,-44.136 h -7.2 z",
  "m 544.07203,956.792 v 33.192 c 0,6.84 1.08,10.872 3.744,14.4 3.168,4.176 8.424,6.552 14.328,6.552 5.976,0 11.232,-2.376 14.4,-6.552 2.664,-3.528 3.744,-7.56 3.744,-14.4 v -33.192 h -5.328 v 33.192 c 0,4.824 -0.792,8.496 -2.448,11.016 -2.016,3.096 -5.976,5.04 -10.368,5.04 -4.32,0 -8.28,-1.944 -10.296,-5.04 -1.656,-2.52 -2.448,-6.192 -2.448,-11.016 v -33.192 z",
  "m 604.23206,1010 h 5.328 v -47.376 l 19.944,47.376 h 4.608 l 20.016,-47.376 V 1010 h 5.328 v -53.208 h -8.28 l -19.296,45.288 -19.368,-45.288 h -8.28 z",
  "m 734.56012,985.448 v 4.824 h 29.736 c -0.792,3.456 -2.592,6.408 -5.616,9.432 -4.104,4.104 -9.72,6.336 -15.912,6.336 -13.032,0 -23.328,-9.936 -23.328,-22.608 0,-12.816 10.08,-22.68 23.256,-22.68 8.208,0 15.12,3.744 18.792,10.224 h 5.976 c -3.528,-9.072 -13.608,-15.12 -25.2,-15.12 -15.84,0 -28.224,12.024 -28.224,27.432 0,15.624 12.6,27.648 28.944,27.648 8.424,0 15.624,-3.096 20.736,-9 4.32,-4.968 6.624,-10.512 6.984,-16.488 z",
  "m 812.50412,990.128 c 10.224,-1.08 15.696,-6.696 15.696,-16.272 0,-6.624 -2.808,-11.664 -7.992,-14.472 -3.312,-1.8 -7.848,-2.592 -14.904,-2.592 h -13.176 V 1010 h 5.328 v -48.384 h 7.488 c 5.616,0 9.36,0.576 12.24,1.944 3.6,1.728 5.616,5.328 5.616,10.152 0,6.048 -2.736,9.864 -8.064,11.232 -2.52,0.648 -5.976,0.936 -11.88,0.936 l 17.928,24.12 h 6.624 z",
  "m 874.68016,955.856 c -15.264,0 -28.152,12.456 -28.152,27.216 0,15.48 12.528,27.864 28.224,27.864 15.336,0 28.008,-12.456 28.008,-27.504 0,-15.192 -12.672,-27.576 -28.08,-27.576 z m 0,4.896 c 12.456,0 22.68,10.296 22.68,22.752 0,12.312 -10.296,22.536 -22.608,22.536 -12.672,0 -22.824,-10.224 -22.824,-22.824 0,-12.168 10.44,-22.464 22.752,-22.464 z",
  "m 924.40009,956.792 v 33.192 c 0,6.84 1.08,10.872 3.744,14.4 3.168,4.176 8.424,6.552 14.328,6.552 5.976,0 11.232,-2.376 14.4,-6.552 2.664,-3.528 3.744,-7.56 3.744,-14.4 v -33.192 h -5.328 v 33.192 c 0,4.824 -0.792,8.496 -2.448,11.016 -2.016,3.096 -5.976,5.04 -10.368,5.04 -4.32,0 -8.28,-1.944 -10.296,-5.04 -1.656,-2.52 -2.448,-6.192 -2.448,-11.016 v -33.192 z",
  "m 984.56019,1010 h 5.328 v -21.528 h 10.22401 c 7.2,0 11.088,-0.936 14.328,-3.312 3.456,-2.52 5.328,-6.912 5.328,-12.24 0,-6.12 -2.304,-10.944 -6.336,-13.32 -3.312,-2.016 -7.344,-2.808 -14.18401,-2.808 h -14.688 z m 5.328,-26.352 v -22.032 h 7.56 c 6.12001,0 9.93601,0.504 12.09601,1.584 3.168,1.584 4.824,4.968 4.824,9.72 0,4.104 -1.656,7.416 -4.392,8.928 -2.232,1.296 -5.328,1.8 -10.22401,1.8 z",
];

const FOUNDATION = {
  d: "M132 876 H1122",
  stroke: "#00685F",
  strokeWidth: 15,
};

// Static symbol (foundation + nine tiers), framed on the mark only.
export const TierMark = ({ className = "h-8 w-10" }) => (
  <svg
    viewBox="92 230 1070 690"
    className={className}
    role="img"
    aria-label="Platinum Group"
  >
    <defs>{GOLD_GRADIENT}</defs>
    <path
      d={FOUNDATION.d}
      fill="none"
      stroke={FOUNDATION.stroke}
      strokeWidth={FOUNDATION.strokeWidth}
      strokeLinecap="round"
    />
    {TIERS.map((t) => (
      <path
        key={t.apex}
        d={tierPath(t.apex)}
        fill="none"
        stroke="url(#champagneGold)"
        strokeWidth={t.w}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ))}
  </svg>
);

// The brand wordmark, tuned luminous platinum for legibility on the dark UI.
export const Wordmark = ({ className = "h-5 w-auto", tone = "#D8D8DC" }) => (
  <svg
    viewBox="200 905 854 125"
    className={className}
    role="img"
    aria-label="Platinum Group"
  >
    <g
      fill={tone}
      stroke={tone}
      strokeWidth="2.07"
      strokeLinejoin="round"
      paintOrder="stroke"
      transform="translate(0 -30.906679851669)"
    >
      {WORDMARK_PATHS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </g>
  </svg>
);

// Scroll-linked build: chevron i draws in as the visitor reaches
// philosophy i+1, foundation line always present.
export const TierProgress = ({ active = 0, className = "" }) => (
  <svg
    viewBox="92 230 1070 690"
    className={className}
    data-testid="tier-progress"
    role="img"
    aria-label="Platinum Group emblem building upward"
  >
    <defs>{GOLD_GRADIENT}</defs>
    <path
      d={FOUNDATION.d}
      fill="none"
      stroke={FOUNDATION.stroke}
      strokeWidth={FOUNDATION.strokeWidth}
      strokeLinecap="round"
    />
    {TIERS.map((t, i) => (
      <motion.path
        key={t.apex}
        d={tierPath(t.apex)}
        fill="none"
        stroke="url(#champagneGold)"
        strokeWidth={t.w}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={{
          pathLength: i <= active ? 1 : 0,
          opacity: i <= active ? 1 : 0,
        }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      />
    ))}
  </svg>
);

// The Platinum Ascent: foundation line first, nine tiers build upward,
// a gold highlight travels up the tallest tier, then the wordmark rises.
export const TierBuild = ({ className = "" }) => (
  <svg
    viewBox="92 210 1070 820"
    className={className}
    data-testid="ascent-logo-tiers"
    role="img"
    aria-label="Platinum Group emblem"
  >
    <defs>{GOLD_GRADIENT}</defs>
    <motion.path
      d={FOUNDATION.d}
      fill="none"
      stroke={FOUNDATION.stroke}
      strokeWidth={FOUNDATION.strokeWidth}
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
    />
    {TIERS.map((t, i) => (
      <motion.path
        key={t.apex}
        d={tierPath(t.apex)}
        fill="none"
        stroke="url(#champagneGold)"
        strokeWidth={t.w}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.4 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          delay: 0.95 + i * 0.13,
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    ))}
    <motion.path
      d={tierPath(264.133498145859)}
      fill="none"
      stroke="#F4D66D"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={1}
      strokeDasharray="0.14 1"
      initial={{ strokeDashoffset: 1, opacity: 0 }}
      animate={{ strokeDashoffset: -1, opacity: [0, 0.85, 0.85, 0] }}
      transition={{ delay: 2.55, duration: 1.15, ease: "easeInOut" }}
    />
    <g transform="translate(0 -30.906679851669)">
      <motion.g
        fill="#7F8A8F"
        stroke="#7F8A8F"
        strokeWidth="2.07"
        strokeLinejoin="round"
        paintOrder="stroke"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {WORDMARK_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </motion.g>
    </g>
  </svg>
);
