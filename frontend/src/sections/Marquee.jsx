const ITEMS = [
  "PLATINUM GREENS OPULENCE",
  "MANSAROVAR EXTENSION · JAIPUR",
  "3 & 4 BHK ULTRA-PREMIUM RESIDENCES",
  "₹1.41 CR ONWARDS",
  "FIT-OUT STARTED",
];

export default function Marquee() {
  return (
    <section
      data-testid="editorial-marquee"
      aria-label="Platinum Greens Opulence highlights"
      className="overflow-hidden border-y border-white/5 py-6 md:py-8"
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {[0, 1].map((dup) => (
          <div key={dup} aria-hidden={dup === 1} className="flex items-center gap-10">
            {ITEMS.map((t) => (
              <span key={t} className="flex items-center gap-10">
                <span className="whitespace-nowrap font-display text-2xl tracking-wide text-platinum/50 md:text-4xl">
                  {t}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
