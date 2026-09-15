import { FadeUp, Mask } from "../../components/Rise";

const HIGHLIGHTS = [
  { n: "01", title: "Ready To Move", line: "Possession started. No waiting, no uncertainty — walk in and begin." },
  { n: "02", title: "₹70 Lakh Onwards", line: "2, 3 & 4 BHK residences that respect both ambition and arithmetic." },
  { n: "03", title: "The Greens Address", line: "Mansarovar Extension — beside Opulence, inside the same landscaped campus." },
  { n: "04", title: "Green By Design", line: "Open lawns, walking trails and tree-lined calm built into everyday life." },
  { n: "05", title: "Approved & Assured", line: "JDA approved and RERA registered — RERA/RAJ/P/2021/1631." },
];

export default function GrHighlights() {
  return (
    <section data-testid="greens-highlights" className="relative overflow-hidden border-t border-white/5 px-6 py-24 md:px-12 md:py-28">
      <img src="/brand/opulence-symbol.png" alt="" aria-hidden="true" className="pointer-events-none absolute -left-16 top-8 h-72 opacity-[0.05] md:h-96" />
      <Mask>
        <span className="font-mono text-[10px] tracking-[0.4em] text-eglow">WHY GREENS</span>
      </Mask>
      <Mask delay={0.1}>
        <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.02] text-bone md:text-5xl">
          FIVE REASONS, <span className="font-editorial font-light italic text-gold">one address</span>
        </h2>
      </Mask>
      <Mask delay={0.18}>
        <span className="mt-5 block max-w-xl font-body text-sm leading-relaxed text-platinum/70 md:text-base">
          Some homes ask you to wait. Greens simply asks you to arrive.
        </span>
      </Mask>

      <div className="mt-14 grid gap-px bg-white/5 sm:grid-cols-3">
        {[
          { value: "70%", label: "OPEN SPACE", line: "More sky than structure — the campus breathes so you can too." },
          { value: "50+", label: "AMENITIES", line: "From sunrise yoga to evening billiards, every hour finds its place." },
          { value: "112 FT", label: "INDOOR POOL", line: "A covered, all-season stretch of blue — rain or shine, swim on." },
        ].map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.1} className="bg-[#061410] p-7">
            <span className="block font-display text-4xl text-eglow md:text-5xl" data-testid={`greens-stat-${i}`}>{s.value}</span>
            <span className="mt-2 block font-mono text-[10px] tracking-[0.3em] text-bone">{s.label}</span>
            <span className="mt-3 block font-body text-sm leading-relaxed text-platinum/70">{s.line}</span>
          </FadeUp>
        ))}
      </div>

      <div className="mt-14 space-y-px">
        {HIGHLIGHTS.map((h, i) => (
          <FadeUp key={h.n} delay={i * 0.06} className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-white/10 py-6 transition-colors duration-300 first:border-t hover:bg-white/[0.02] md:grid-cols-[80px_320px_1fr] md:gap-10 md:px-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-eglow/70">{h.n}</span>
            <h3 data-testid={`greens-highlight-${i}`} className="font-display text-xl text-bone transition-colors duration-300 group-hover:text-gold md:text-2xl">
              {h.title}
            </h3>
            <p className="col-span-2 mt-1 font-body text-sm leading-relaxed text-platinum/65 md:col-span-1 md:mt-0">
              {h.line}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
