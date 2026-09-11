import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { TempImage } from "../../components/TempImage";
import { FadeUp, Mask } from "../../components/Rise";
import { track } from "../../lib/config";

export const Movement = ({ n, slug, title, line, img, reverse = false, cta }) => (
  <section
    data-testid={`movement-${slug}`}
    className="border-t border-white/5 px-6 py-24 md:px-12 md:py-36"
  >
    <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
      <div className={reverse ? "md:order-2" : ""}>
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
          <p className="mt-6 max-w-md font-editorial text-lg italic leading-relaxed text-platinum/80">
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
      </div>
      <FadeUp delay={0.15} className={reverse ? "md:order-1" : ""}>
        <TempImage
          asset={img}
          className="aspect-[4/5] w-full"
          imgClass="transition-transform duration-700 hover:scale-[1.03]"
        />
      </FadeUp>
    </div>
  </section>
);
