import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, WA_DEFAULT, track } from "../lib/config";

export const MobileCTA = () => (
  <nav
    data-testid="mobile-cta-bar"
    className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-3 border-t border-white/10 bg-ink/90 backdrop-blur-md md:hidden"
    aria-label="Quick contact"
  >
    <a
      href={PHONE_TEL}
      data-testid="mobile-cta-call"
      onClick={() => track("call_click", { placement: "mobile_bar" })}
      className="flex items-center justify-center gap-2 py-4 font-mono text-[11px] tracking-[0.2em] text-bone"
    >
      <Phone size={14} /> CALL
    </a>
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noreferrer"
      data-testid="mobile-cta-whatsapp"
      onClick={() => track("whatsapp_click", { placement: "mobile_bar" })}
      className="flex items-center justify-center gap-2 border-x border-white/10 py-4 font-mono text-[11px] tracking-[0.2em] text-eglow"
    >
      <MessageCircle size={14} /> WHATSAPP
    </a>
    <Link
      to="/enquire?intent=site-visit"
      data-testid="mobile-cta-visit"
      onClick={() => track("book_site_visit", { placement: "mobile_bar" })}
      className="flex items-center justify-center gap-2 py-4 font-mono text-[11px] tracking-[0.2em] text-gold"
    >
      ENQUIRE <ArrowUpRight size={13} />
    </Link>
  </nav>
);

export const WhatsAppFloat = () => (
  <motion.div
    className="fixed bottom-6 right-6 z-[70] hidden items-center gap-2 md:flex"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <a
      href={PHONE_TEL}
      data-testid="desktop-call-float"
      onClick={() => track("call_click", { placement: "float" })}
      className="flex items-center gap-2.5 border border-gold/40 bg-ink/80 px-4 py-2.5 backdrop-blur-md transition-colors duration-300 hover:border-gold"
      aria-label="Call sales"
    >
      <Phone size={13} className="text-gold" />
      <span className="font-mono text-[11px] tracking-[0.25em] text-bone">
        CALL
      </span>
    </a>
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noreferrer"
      data-testid="whatsapp-float"
      onClick={() => track("whatsapp_click", { placement: "float" })}
      className="flex items-center gap-2.5 border border-eglow/30 bg-ink/80 px-4 py-2.5 backdrop-blur-md transition-colors duration-300 hover:border-eglow/70"
      aria-label="Chat on WhatsApp"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-eglow" />
      <span className="font-mono text-[11px] tracking-[0.25em] text-bone">
        WHATSAPP
      </span>
    </a>
  </motion.div>
);
