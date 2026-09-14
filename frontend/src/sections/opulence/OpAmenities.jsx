import { FadeUp, Mask } from "../../components/Rise";
import { OP_AMENITIES } from "./data";

export default function OpAmenities() {
  return (
    <section data-testid="opulence-amenities" className="border-t border-white/5 bg-[#081a14] px-6 py-24 md:px-12 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Mask>
            <span className="font-mono text-[10px] tracking-[0.4em] text-eglow">LIFE, ELEVATED</span>
          </Mask>
          <Mask delay={0.1}>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] text-bone md:text-6xl">
              50+ <span className="font-editorial font-light italic text-gold">amenities</span>
            </h2>
          </Mask>
        </div>
        <Mask delay={0.2}>
          <span className="max-w-xs font-body text-sm leading-relaxed text-platinum/60">
            Eight curated lifestyle zones — from a 112 ft indoor pool to dedicated temples.
          </span>
        </Mask>
      </div>

      <div className="mt-14 grid gap-px border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
        {OP_AMENITIES.map((c, i) => (
          <FadeUp key={c.id} delay={(i % 4) * 0.08} className="bg-[#061410] p-7">
            <span className="font-mono text-[9px] tracking-[0.3em] text-eglow">{String(i + 1).padStart(2, "0")}</span>
            <h3 data-testid={`opulence-amenity-cat-${c.id}`} className="mt-2 font-display text-lg text-bone">
              {c.cat}
            </h3>
            <ul className="mt-4 space-y-2">
              {c.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 font-body text-sm text-platinum/75">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-gold" />
                  {it}
                </li>
              ))}
            </ul>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
