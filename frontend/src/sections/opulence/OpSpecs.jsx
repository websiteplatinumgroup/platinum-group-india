import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeUp, Mask } from "../../components/Rise";
import { track } from "../../lib/config";
import { OP_SPECS } from "./data";

export default function OpSpecs() {
  const [open, setOpen] = useState(null);

  return (
    <section data-testid="opulence-specs" className="border-t border-white/5 px-6 py-24 md:px-12 md:py-32">
      <Mask>
        <span className="font-mono text-[10px] tracking-[0.4em] text-eglow">BUILT TO LAST</span>
      </Mask>
      <Mask delay={0.1}>
        <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.02] text-bone md:text-6xl">
          SPECIFICATIONS, <span className="font-editorial font-light italic text-gold">in detail</span>
        </h2>
      </Mask>
      <div className="mt-14 max-w-4xl">
        {OP_SPECS.map((s, i) => {
          const isOpen = open === s.id;
          return (
            <FadeUp key={s.id} delay={i * 0.04} className="border-b border-white/10 first:border-t">
              <button
                data-testid={`opulence-spec-accordion-${s.id}`}
                aria-expanded={isOpen}
                onClick={() => {
                  setOpen(isOpen ? null : s.id);
                  track("spec_expand", { placement: "opulence_specs", section: s.id });
                }}
                className="group flex w-full items-center justify-between py-6 text-left"
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-eglow/70">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`font-editorial text-2xl font-light italic transition-colors duration-300 md:text-3xl ${isOpen ? "text-gold" : "text-bone group-hover:text-gold"}`}>
                    {s.header}
                  </span>
                </span>
                <Plus size={18} className={`shrink-0 text-eglow transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2.5 pb-7 pl-0 md:pl-12">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-platinum/80">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-eglow" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
