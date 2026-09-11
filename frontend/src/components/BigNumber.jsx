import { FadeUp, Mask } from "./Rise";

export const BigNumber = ({ n, slug, value, unit, sub }) => (
  <section
    data-testid={`moment-${slug}`}
    className="relative border-t border-white/5 px-6 py-28 text-center md:py-44"
  >
    <Mask>
      <span className="font-mono text-[10px] tracking-[0.4em] text-gold">
        MOVEMENT {n}
      </span>
    </Mask>
    <Mask delay={0.1}>
      <span className="mt-4 block font-display text-[19vw] leading-[0.9] text-bone md:text-[14vw]">
        {value}
      </span>
    </Mask>
    <Mask delay={0.2}>
      <span className="mt-4 block font-mono text-xs tracking-[0.55em] text-gold md:text-sm">
        {unit}
      </span>
    </Mask>
    <FadeUp delay={0.3}>
      <p className="mx-auto mt-6 max-w-md font-editorial text-base italic text-platinum/70 md:text-lg">
        {sub}
      </p>
    </FadeUp>
  </section>
);
