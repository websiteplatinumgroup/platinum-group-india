import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeUp, Mask } from "./Rise";

const FAQS = [
  { q: "What is the price range at Platinum Greens Opulence?", a: "Ultra-premium 3 & 4 BHK residences start from ₹1.41 Cr onwards. Platinum Greens residences start from ₹70 Lakh onwards. Share your details and our team will send the current price sheet and payment plans within one working hour." },
  { q: "What is the possession status?", a: "Platinum Greens is ready to move — possession has started. Platinum Greens Opulence is under final fit-out, with possession scheduled in the coming months." },
  { q: "Are the projects RERA registered?", a: "Yes. Platinum Greens Opulence is registered as RERA/RAJ/P/2023/2875 and Platinum Greens as RERA/RAJ/P/2021/1631. Both projects are JDA approved. Full details are available at rera.rajasthan.gov.in." },
  { q: "Where is the project located?", a: "Both projects share one landscaped campus in Mansarovar Extension, Jaipur, near Parshwanath Narayan City — with quick access to Ajmer Road, schools, hospitals and the proposed metro corridor." },
  { q: "Can I schedule a site visit?", a: "Absolutely. Use the enquiry form or call +91 96602 23377 and our team will arrange a private walkthrough of the sample flat, amenities and campus at a time that suits you." },
  { q: "What payment plans and home-loan support are available?", a: "Flexible construction-linked and possession-linked plans are available, and we assist with home-loan processing through all major banks. Our team will structure the plan around your comfort." },
];

export const Faq = () => {
  const [open, setOpen] = useState(null);
  return (
    <section data-testid="faq-section" className="mx-auto mt-24 max-w-6xl">
      <Mask>
        <span className="font-mono text-[10px] tracking-[0.4em] text-gold">FREQUENTLY ASKED</span>
      </Mask>
      <Mask delay={0.1}>
        <h2 className="mt-5 font-display text-3xl text-bone md:text-5xl">
          QUESTIONS, <span className="font-editorial font-light italic text-gold">answered</span>
        </h2>
      </Mask>
      <div className="mt-10 grid gap-x-16 md:grid-cols-2">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <FadeUp key={f.q} delay={(i % 2) * 0.06} className="border-b border-white/10">
              <button
                data-testid={`faq-item-${i}`}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className={`font-body text-sm leading-relaxed transition-colors duration-300 md:text-base ${isOpen ? "text-gold" : "text-bone group-hover:text-gold"}`}>
                  {f.q}
                </span>
                <Plus size={15} className={`shrink-0 text-eglow transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 font-body text-sm leading-relaxed text-platinum/70">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
};
