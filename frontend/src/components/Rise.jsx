import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Mask = ({ children, delay = 0, mount = false, className = "" }) => (
  <motion.span
    className={`block overflow-hidden ${className}`}
    initial="hidden"
    {...(mount
      ? { animate: "show" }
      : { whileInView: "show", viewport: { once: true, margin: "-8% 0px" } })}
  >
    <motion.span
      className="block will-change-transform"
      variants={{ hidden: { y: "112%" }, show: { y: "0%" } }}
      transition={{ duration: 1.05, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </motion.span>
);

export const FadeUp = ({ children, delay = 0, y = 36, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-8% 0px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);
