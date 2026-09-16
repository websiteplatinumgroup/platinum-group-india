import { FadeUp, Mask } from "../../components/Rise";
import { OP_GALLERY } from "./data";

export default function OpGallery() {
  return (
    <section data-testid="opulence-gallery" className="relative border-t border-white/5 px-6 py-24 md:px-12 md:py-32">
      <Mask>
        <span className="font-mono text-[10px] tracking-[0.4em] text-eglow">THE RESIDENCES</span>
      </Mask>
      <Mask delay={0.1}>
        <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.02] text-bone md:text-6xl">
          EVERY FRAME, <span className="font-editorial font-light italic text-gold">composed</span>
        </h2>
      </Mask>

      <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-3 md:auto-rows-[240px] md:grid-cols-12">
        {OP_GALLERY.map((g, i) => (
          <FadeUp key={g.title} delay={i * 0.08} className={`group relative overflow-hidden ${g.cls}`}>
            <img
              src={g.src}
              alt={g.title}
              loading="lazy"
              decoding="async"
              data-testid={`opulence-gallery-img-${i}`}
              className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${g.pos || ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061410]/85 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 font-editorial text-lg italic text-bone">{g.title}</span>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
