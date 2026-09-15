import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "pg-cookie-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      const t = setTimeout(() => setShow(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const choose = (val) => {
    localStorage.setItem(KEY, val);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cookie_consent", choice: val });
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="cookie-consent"
          role="dialog"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-20 left-1/2 z-[90] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 border border-white/10 bg-ink2/95 p-5 backdrop-blur-md md:bottom-6 md:left-6 md:translate-x-0"
        >
          <p className="font-body text-xs leading-relaxed text-platinum/75">
            We use cookies and privacy-respecting analytics to improve your experience. See our{" "}
            <a href="/privacy" className="text-gold underline-offset-4 hover:underline">privacy policy</a>.
          </p>
          <div className="mt-4 flex gap-3">
            <button
              data-testid="cookie-accept-btn"
              onClick={() => choose("accepted")}
              className="bg-gold px-5 py-2.5 font-mono text-[10px] tracking-[0.25em] text-ink transition-colors duration-300 hover:bg-bone"
            >
              ACCEPT
            </button>
            <button
              data-testid="cookie-decline-btn"
              onClick={() => choose("declined")}
              className="border border-white/20 px-5 py-2.5 font-mono text-[10px] tracking-[0.25em] text-platinum/70 transition-colors duration-300 hover:border-bone hover:text-bone"
            >
              DECLINE
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
