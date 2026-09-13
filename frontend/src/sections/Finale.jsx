import { TierMark } from "../components/TierMark";
import { FadeUp, Mask } from "../components/Rise";

export default function Finale() {
  return (
    <section
      data-testid="finale"
      className="relative flex flex-col items-center overflow-hidden px-6 pb-10 pt-36 text-center md:pt-48"
    >
      <div
        className="pointer-events-none absolute -bottom-[30%] left-1/2 h-[55vh] w-[70vw] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(29,185,139,0.12) 0%, transparent 65%)",
        }}
      />
      <FadeUp>
        <TierMark className="h-12 w-16" />
      </FadeUp>
      <h2 className="mt-10">
        <Mask delay={0.1}>
          <span className="block font-display text-5xl leading-tight text-bone md:text-8xl">
            THE NEXT LEVEL
          </span>
        </Mask>
        <Mask delay={0.2}>
          <span className="block font-editorial text-5xl font-light italic leading-tight text-gold md:text-8xl">
            IS ALWAYS UP
          </span>
        </Mask>
      </h2>

      <footer className="mt-28 flex w-full flex-col items-center gap-3 border-t border-white/5 pt-8 font-mono text-[9px] tracking-[0.25em] text-platinum/40 md:flex-row md:justify-between md:text-[10px]">
        <span>© 2026 PLATINUM GROUP · JAIPUR</span>
      </footer>
    </section>
  );
}
