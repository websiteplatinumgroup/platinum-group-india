import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, Mask } from "../components/Rise";
import { track } from "../lib/config";

const ONGOING = [
  {
    name: "PLATINUM GREENS OPULENCE",
    loc: "MANSAROVAR EXTENSION · JAIPUR",
    facts: "3 & 4 BHK ultra-premium residences · ₹1.41 Cr onwards",
    status: "FIT-OUT STARTED",
    live: true,
    img: "/brand/elevation.webp",
    pos: "object-center",
    alt: "Platinum Greens Opulence — elevation render",
    need: "opulence-facade-day.jpg",
    alt: "Platinum Greens Opulence facade (asset needed)",
    to: "/platinum-greens-opulence",
    testid: "portfolio-opulence",
  },
  {
    name: "PLATINUM GREENS",
    loc: "MANSAROVAR EXTENSION · JAIPUR",
    facts: "2, 3 & 4 BHK residences · ₹70 Lakh onwards",
    status: "POSSESSION STARTED",
    live: false,
    img: "/brand/elevation.webp",
    pos: "object-right",
    alt: "Platinum Greens residences, Mansarovar Extension",
    need: "greens-hero.jpg",
    alt: "Platinum Greens residences (asset needed)",
    to: "/enquire?project=greens&intent=sales",
    testid: "portfolio-greens",
  },
];

const COMPLETED = [
  { name: "PLATINUM AMALTAS", loc: "VAISHALI NAGAR EXTENSION" },
  { name: "PLATINUM HEIGHTS", loc: "GANDHI PATH (WEST)" },
  { name: "PLATINUM MAYFAIR", loc: "C-SCHEME" },
  { name: "PLATINUM ROSEWOOD", loc: "SIRSI ROAD" },
  { name: "PLATINUM SHUBH RATAN", loc: "BANIPARK" },
  { name: "SAGAR ENCLAVE", loc: "DIGGI ROAD" },
  { name: "TEJASVI GREENS", loc: "AJMER ROAD" },
];

export default function Portfolio() {
  return (
    <section
      data-testid="portfolio"
      className="border-t border-white/5 px-6 py-24 md:px-12 md:py-36"
    >
      <Mask>
        <span className="font-mono text-[10px] tracking-[0.4em] text-gold">
          OUR PROJECTS
        </span>
      </Mask>
      <Mask delay={0.1}>
        <h2 className="mt-5 font-display text-4xl text-bone md:text-6xl">
          EVERY LEVEL BUILDS THE NEXT
        </h2>
      </Mask>

      <div className="mt-16">
        <p className="border-b border-white/10 pb-4 font-mono text-[10px] tracking-[0.35em] text-platinum/50">
          ONGOING
        </p>
        <div className="mt-8 grid gap-px border border-white/5 bg-white/5 lg:grid-cols-2">
          {ONGOING.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.12}>
              <Link
                to={p.to}
                data-testid={p.testid}
                onClick={() => track("cta_click", { placement: "portfolio", target: p.name })}
                className="group block h-full bg-ink2"
              >
                {p.img && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.alt}
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${p.pos || ""}`}
                    />
                  </div>
                )}
                <div className="p-7 md:p-9">
                  <span
                    className={`flex w-fit items-center gap-2 border px-3 py-1.5 font-mono text-[9px] tracking-[0.25em] ${
                      p.live ? "border-eglow/40 text-eglow" : "border-gold/50 text-gold"
                    }`}
                  >
                    {p.status}
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-bone transition-colors duration-300 group-hover:text-gold md:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.25em] text-platinum/50">
                    {p.loc}
                  </p>
                  <p className="mt-3 font-body text-sm text-platinum/70">{p.facts}</p>
                  <span className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-gold">
                    VIEW <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <p className="border-b border-white/10 pb-4 font-mono text-[10px] tracking-[0.35em] text-platinum/50">
          COMPLETED — DELIVERED ACROSS JAIPUR
        </p>
        <div data-testid="portfolio-completed" className="mt-2">
          {COMPLETED.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.05}>
              <div className="group grid grid-cols-[48px_1fr] items-baseline gap-4 border-b border-white/10 py-5 transition-colors duration-300 hover:border-gold/40 md:grid-cols-[64px_1fr_1fr]">
                <span className="font-mono text-[10px] tracking-[0.3em] text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl text-bone transition-colors duration-300 group-hover:text-gold md:text-2xl">
                  {p.name}
                </span>
                <span className="col-start-2 font-mono text-[10px] tracking-[0.25em] text-platinum/50 md:col-start-3 md:text-right">
                  {p.loc}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <FadeUp className="mt-20">
        <div
          data-testid="portfolio-upcoming"
          className="relative overflow-hidden border border-white/5 bg-ink2 px-6 py-16 text-center md:py-24"
        >
          <div
            className="pointer-events-none absolute -bottom-[40%] left-1/2 h-[60%] w-[70%] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(29,185,139,0.10) 0%, transparent 65%)",
            }}
          />
          <p className="font-mono text-[10px] tracking-[0.35em] text-gold">
            UPCOMING
          </p>
          <h3 className="mt-5 font-display text-3xl text-bone md:text-5xl">
            THE NEXT CHAPTER
          </h3>
          <p className="mx-auto mt-5 max-w-md font-editorial text-base italic leading-relaxed text-platinum/70 md:text-lg">
            A new landmark is quietly taking shape in Jaipur. That is all we can
            say — for now.
          </p>
          <Link
            to="/enquire?project=upcoming&intent=sales"
            data-testid="portfolio-upcoming-cta"
            onClick={() => track("cta_click", { placement: "portfolio", target: "upcoming" })}
            className="mt-8 inline-flex items-center gap-2 border border-gold/60 px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
          >
            REGISTER INTEREST <ArrowUpRight size={14} />
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
