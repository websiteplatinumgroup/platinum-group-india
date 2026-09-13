import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { TierMark } from "../components/TierMark";
import { FadeUp, Mask } from "../components/Rise";
import { track } from "../lib/config";

const FOUNDERS = [
  {
    name: "SHRI SWANTANTRA GUPTA",
    role: "FOUNDER",
    line: "Founded Platinum Group in 2006 with a vision to create landmarks in real estate.",
  },
  {
    name: "SHRI VIJAY MEHTA",
    role: "FOUNDER",
    line: "Co-founder — bound to build a world-class construction company.",
  },
  {
    name: "SHRI SUBHASH GUPTA",
    role: "KIRAN MODES — STAR EXPORT HOUSE",
    line: "Actively driving the group to newer heights.",
  },
  {
    name: "SHRI VIKAS LODHA",
    role: "NRI — JEWELLERY",
    line: "Strengthening the foundation of the group.",
  },
];

const VALUES = [
  { n: "01", t: "INTEGRITY", d: "We say what we mean, and do what we say. Unconditional honesty, respect and courtesy — at all times." },
  { n: "02", t: "PARTNERSHIP", d: "Trusted relationships with customers, suppliers and each other. Responsive, transparent, open." },
  { n: "03", t: "CAN-DO ATTITUDE", d: "Ownership and accountability. Everyone is encouraged to suggest a better way." },
  { n: "04", t: "QUALITY", d: "Measured outward to the customer, inward to the craft. A commitment to superior outcomes." },
  { n: "05", t: "INNOVATION", d: "We reflect on everything we do, and improve every day." },
];

const CSR = [
  {
    org: "SURMAN SANSTHAN",
    line: "Seventeen years sheltering destitute and abandoned children and women. Platinum Group supports the mission with annual cash, food and grain donations — and helped set up its Palana and Koshish projects.",
  },
  {
    org: "AKSHAYA PATRA",
    line: "Fighting classroom hunger across India. We provide ingredients for mid-day meals in government schools, alongside cash donations.",
  },
];

const Row = ({ n, title, children, testid }) => (
  <FadeUp
    className="group grid gap-3 border-b border-white/10 py-8 transition-colors duration-300 hover:border-gold/40 md:grid-cols-[80px_1fr_1.4fr] md:items-baseline md:gap-8"
  >
    <span data-testid={testid} className="contents">
      <span className="font-mono text-[10px] tracking-[0.3em] text-gold">{n}</span>
      <span className="font-display text-2xl text-bone transition-colors duration-300 group-hover:text-gold md:text-3xl">
        {title}
      </span>
      <span className="max-w-lg font-body text-sm leading-relaxed text-platinum/70">
        {children}
      </span>
    </span>
  </FadeUp>
);

export default function About() {
  useEffect(() => {
    track("page_view", { page: "about" });
    document.title = "About — Platinum Group, Jaipur";
  }, []);

  return (
    <main className="pb-24 md:pb-0">
      <section data-testid="about-hero" className="px-6 pb-24 pt-36 md:px-12 md:pb-32 md:pt-48">
        <Mask>
          <span className="font-mono text-[10px] tracking-[0.4em] text-gold">
            THE GROUP — EST. 2006 · JAIPUR
          </span>
        </Mask>
        <h1 className="mt-8">
          <Mask delay={0.08}>
            <span className="block font-display text-[9.5vw] leading-[1.05] text-bone md:text-7xl">
              WE DON'T MEASURE
            </span>
          </Mask>
          <Mask delay={0.16}>
            <span className="block font-display text-[9.5vw] leading-[1.05] text-bone md:text-7xl">
              OUR WORK ONLY
            </span>
          </Mask>
          <Mask delay={0.24}>
            <span className="block font-display text-[9.5vw] leading-[1.05] text-bone md:text-7xl">
              IN SQUARE FEET.
            </span>
          </Mask>
          <Mask delay={0.45}>
            <span className="mt-10 block font-editorial text-[9.5vw] font-light italic leading-[1.05] text-gold md:text-7xl">
              WE MEASURE IT IN LEGACY.
            </span>
          </Mask>
        </h1>
      </section>

      <section data-testid="about-founders" className="border-t border-white/5 px-6 py-24 md:px-12 md:py-32">
        <Mask>
          <span className="font-mono text-[10px] tracking-[0.35em] text-gold">
            01 — THE PEOPLE
          </span>
        </Mask>
        <Mask delay={0.1}>
          <h2 className="mt-5 font-display text-4xl text-bone md:text-6xl">
            FOUNDED TO BUILD LANDMARKS.
          </h2>
        </Mask>
        <FadeUp delay={0.2}>
          <p className="mt-6 max-w-xl font-editorial text-lg italic leading-relaxed text-platinum/80">
            Platinum Group was founded in 2006 with a single vision — to create
            landmarks in real estate, and to construct dreams into comfortable,
            astounding homes.
          </p>
        </FadeUp>
        <div className="mt-14 border-t border-white/10">
          {FOUNDERS.map((f, i) => (
            <Row key={f.name} n={`0${i + 1}`} title={f.name} testid={`founder-${i + 1}`}>
              <span className="mb-1 block font-mono text-[9px] tracking-[0.3em] text-gold/80">
                {f.role}
              </span>
              {f.line}
            </Row>
          ))}
        </div>
      </section>

      <section data-testid="about-promise" className="border-t border-white/5 px-6 py-28 text-center md:px-12 md:py-40">
        <Mask>
          <span className="font-mono text-[10px] tracking-[0.4em] text-gold">
            02 — THE PROMISE
          </span>
        </Mask>
        <h2 className="mt-6">
          <Mask delay={0.08}>
            <span className="block font-display text-[11vw] leading-[1] text-bone md:text-8xl">
              ON TIME.
            </span>
          </Mask>
          <Mask delay={0.16}>
            <span className="block font-display text-[11vw] leading-[1] text-bone md:text-8xl">
              WITHIN BUDGET.
            </span>
          </Mask>
          <Mask delay={0.24}>
            <span className="block font-editorial text-[11vw] font-light italic leading-[1] text-gold md:text-8xl">
              GUARANTEED.
            </span>
          </Mask>
        </h2>
        <FadeUp delay={0.35}>
          <p className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed text-platinum/70 md:text-base">
            Every project carries a 100% workmanship guarantee — and 90% of our
            work arrives by referral from satisfied customers.
          </p>
        </FadeUp>
      </section>

      <section data-testid="about-values" className="border-t border-white/5 px-6 py-24 md:px-12 md:py-32">
        <Mask>
          <span className="font-mono text-[10px] tracking-[0.35em] text-gold">
            03 — THE STANDARD
          </span>
        </Mask>
        <Mask delay={0.1}>
          <h2 className="mt-5 font-display text-4xl text-bone md:text-6xl">
            FIVE VALUES. NO SHORTCUTS.
          </h2>
        </Mask>
        <div className="mt-14 border-t border-white/10">
          {VALUES.map((v) => (
            <Row key={v.n} n={v.n} title={v.t} testid={`value-${v.t.toLowerCase().replace(/\s+/g, "-")}`}>
              {v.d}
            </Row>
          ))}
        </div>
      </section>

      <section data-testid="about-vision" className="border-t border-white/5 px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-5xl">
          <Mask>
            <span className="font-mono text-[10px] tracking-[0.4em] text-gold">
              04 — THE DIRECTION
            </span>
          </Mask>
          <Mask delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-tight text-bone md:text-6xl">
              A TOP-TEN INDIAN REAL ESTATE COMPANY —{" "}
              <span className="font-editorial font-light italic text-gold">
                WITHIN THE DECADE.
              </span>
            </h2>
          </Mask>
          <FadeUp delay={0.25}>
            <p className="mt-8 max-w-xl font-editorial text-lg italic leading-relaxed text-platinum/80">
              Modernism, reconnected with the idea of eco living — spaces that
              are sustainable, livable, contextual, economical and beautiful.
            </p>
          </FadeUp>
        </div>
      </section>

      <section data-testid="about-csr" className="border-t border-white/5 px-6 py-24 md:px-12 md:py-32">
        <Mask>
          <span className="font-mono text-[10px] tracking-[0.35em] text-gold">
            05 — BEYOND BUILDINGS
          </span>
        </Mask>
        <Mask delay={0.1}>
          <h2 className="mt-5 font-display text-4xl text-bone md:text-6xl">
            WHAT WE RAISE, WE SHARE.
          </h2>
        </Mask>
        <div className="mt-14 grid gap-px border border-white/5 bg-white/5 md:grid-cols-2">
          {CSR.map((c, i) => (
            <FadeUp key={c.org} delay={i * 0.12} className="bg-ink2 p-8 md:p-12">
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl text-bone md:text-3xl">
                {c.org}
              </h3>
              <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-platinum/70">
                {c.line}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section data-testid="about-cta" className="border-t border-white/5 px-6 py-28 text-center md:py-36">
        <FadeUp>
          <TierMark className="mx-auto h-12 w-16" />
        </FadeUp>
        <Mask delay={0.1}>
          <h2 className="mt-8 font-display text-4xl text-bone md:text-6xl">
            THE NEXT LEVEL IS ALWAYS UP.
          </h2>
        </Mask>
        <FadeUp delay={0.25} className="mt-10">
          <Link
            to="/enquire"
            data-testid="about-cta-conversation"
            onClick={() => track("cta_click", { placement: "about", target: "conversation" })}
            className="inline-flex items-center gap-2 bg-gold px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
          >
            BEGIN A CONVERSATION <ArrowUpRight size={14} />
          </Link>
        </FadeUp>
        <div className="mt-20 border-t border-white/5 pt-8 text-center font-mono text-[9px] tracking-[0.25em] text-platinum/40 md:text-[10px]">
          © 2026 PLATINUM GROUP · JAIPUR
        </div>
      </section>
    </main>
  );
}
