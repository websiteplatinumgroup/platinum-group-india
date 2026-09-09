import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { TierMark } from "../components/TierMark";
import { FadeUp, Mask } from "../components/Rise";
import { PHONE_DISPLAY, PHONE_TEL, WA_DEFAULT, track } from "../lib/config";

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
            IS ALWAYS UP.
          </span>
        </Mask>
      </h2>
      <FadeUp delay={0.35} className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          to="/enquire"
          data-testid="finale-cta-conversation"
          onClick={() => track("cta_click", { placement: "finale", target: "conversation" })}
          className="flex items-center gap-2 bg-gold px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
        >
          BEGIN A CONVERSATION <ArrowUpRight size={14} />
        </Link>
        <Link
          to="/enquire?intent=site-visit"
          data-testid="finale-cta-visit"
          onClick={() => track("book_site_visit", { placement: "finale" })}
          className="border border-white/25 px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          BOOK A SITE VISIT
        </Link>
      </FadeUp>
      <FadeUp delay={0.45} className="mt-10 flex items-center gap-6 font-mono text-[10px] tracking-[0.25em] text-platinum/50">
        <a
          href={PHONE_TEL}
          data-testid="finale-call-link"
          onClick={() => track("call_click", { placement: "finale" })}
          className="transition-colors hover:text-gold"
        >
          {PHONE_DISPLAY}
        </a>
        <span className="h-1 w-1 rotate-45 bg-gold/60" />
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noreferrer"
          data-testid="finale-whatsapp-link"
          onClick={() => track("whatsapp_click", { placement: "finale" })}
          className="transition-colors hover:text-eglow"
        >
          WHATSAPP
        </a>
      </FadeUp>

      <footer className="mt-28 flex w-full flex-col items-center gap-3 border-t border-white/5 pt-8 font-mono text-[9px] tracking-[0.25em] text-platinum/40 md:flex-row md:justify-between md:text-[10px]">
        <span>© 2026 PLATINUM GROUP · JAIPUR</span>
        <span data-testid="footer-rera">RERA RAJ/P/2023/2875 · RAJ/P/2021/1631</span>
        <span>MANSAROVAR EXTENSION · JAIPUR</span>
      </footer>
    </section>
  );
}
