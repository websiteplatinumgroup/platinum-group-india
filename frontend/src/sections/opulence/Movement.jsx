import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, Mask } from "../../components/Rise";
import { track } from "../../lib/config";

export const Movement = ({ n, slug, title, line, cta }) => (
  <section
    data-testid={`movement-${slug}`}
    className="border-t border-white/5 px-6 py-24 text-center md:py-32"
  >
    <Mask>
      <span className="font-mono text-[10px] tracking-[0.35em] text-gold">
        MOVEMENT {n}
      </span>
    </Mask>
    <Mask delay={0.08}>
      <h3 className="mt-4 font-display text-5xl text-bone md:text-7xl">
        {title}
      </h3>
    </Mask>
    <FadeUp delay={0.18}>
      <p className="mx-auto mt-6 max-w-md font-editorial text-lg italic leading-relaxed text-platinum/80">
        {line}
      </p>
    </FadeUp>
    {cta && (
      <FadeUp delay={0.28}>
        <Link
          to={cta.to}
          data-testid={cta.testid}
          onClick={() =>
            track("cta_click", { placement: `movement_${slug}`, target: cta.label })
          }
          className="mt-8 inline-flex items-center gap-2 border border-gold/60 px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          {cta.label} <ArrowUpRight size={13} />
        </Link>
      </FadeUp>
    )}
  </section>
);
