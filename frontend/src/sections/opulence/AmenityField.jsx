import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Mask, FadeUp } from "../../components/Rise";

const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=60`;

const AMENITIES = [
  { name: "INDOOR POOL", cat: "WELLNESS", detail: "112 feet of covered blue", img: u("photo-1445019980597-93fa8acb246c"), need: "opulence-pool-indoor.jpg" },
  { name: "THEATRE", cat: "CLUB", detail: "Private screenings, no queues", img: u("photo-1489599849927-2ee91cede3ba"), need: "opulence-theatre.jpg" },
  { name: "PICKLEBALL", cat: "PLAY", detail: "The new resident sport", img: u("photo-1554068865-24cecd4e34b8"), need: "opulence-pickleball.jpg" },
  { name: "SQUASH", cat: "PLAY", detail: "Rally. Recover. Repeat.", img: u("photo-1557672172-298e090bd0f1"), need: "opulence-squash.jpg" },
  { name: "BADMINTON", cat: "PLAY", detail: "Indoor court, all seasons", img: u("photo-1549490349-8643362247b5"), need: "opulence-badminton.jpg" },
  { name: "GYM", cat: "WELLNESS", detail: "Fully equipped, power-backed", img: u("photo-1534438327276-14e5300c3a48"), need: "opulence-gym.jpg" },
  { name: "WELLNESS", cat: "WELLNESS", detail: "Yoga corner · meditation · aerobics", img: u("photo-1506126613408-eca07ce68773"), need: "opulence-wellness.jpg" },
  { name: "BANQUET", cat: "COMMUNITY", detail: "The heart of every celebration", img: u("photo-1519167758481-83f550bb49b3"), need: "opulence-banquet.jpg" },
  { name: "CO-WORKING", cat: "COMMUNITY", detail: "Work from home, elevated", img: u("photo-1497366216548-37526070297c"), need: "opulence-coworking.jpg" },
  { name: "GUEST ROOMS", cat: "COMMUNITY", detail: "Guests stay close — you keep your space", img: u("photo-1590490360182-c33d57733427"), need: "opulence-guest-rooms.jpg" },
  { name: "LANDSCAPE", cat: "LANDSCAPE", detail: "Gardens · temples · walking areas", img: u("photo-1416879595882-3373a0480b5b"), need: "opulence-garden.jpg" },
  { name: "CHILDREN", cat: "PLAY", detail: "Kids & toddler play zones", img: u("photo-1550684376-efcbd6e3f031"), need: "opulence-kids.jpg" },
];

const slug = (s) => s.toLowerCase().replace(/[^a-z]+/g, "-");

export default function AmenityField() {
  const [active, setActive] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 });

  const move = (e) => {
    x.set(e.clientX + 28);
    y.set(e.clientY - 180);
  };

  return (
    <section
      data-testid="amenity-field"
      onMouseMove={move}
      className="relative border-t border-white/5 py-24 md:py-36"
    >
      <div className="px-6 md:px-12">
        <Mask>
          <span className="font-mono text-[10px] tracking-[0.35em] text-gold">
            MOVEMENTS 07–12 — LIFESTYLE · CLUB · WELLNESS · PLAY · COMMUNITY · LANDSCAPE
          </span>
        </Mask>
        <Mask delay={0.1}>
          <h3 className="mt-5 font-display text-4xl text-bone md:text-6xl">
            THE FIELD OF FIFTY.
          </h3>
        </Mask>
        <FadeUp delay={0.2}>
          <p className="mt-4 font-editorial text-base italic text-platinum/70 md:text-lg">
            <span className="hidden lg:inline">Hover to look inside.</span>
            <span className="lg:hidden">Swipe to look inside.</span>
          </p>
        </FadeUp>
      </div>

      <div className="mt-12 hidden border-t border-white/10 lg:block">
        {AMENITIES.map((a, i) => (
          <button
            key={a.name}
            data-testid={`amenity-item-${slug(a.name)}`}
            data-cursor="VIEW"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="group flex w-full items-baseline justify-between gap-6 border-b border-white/10 px-6 py-5 text-left md:px-12"
          >
            <span className="flex items-baseline gap-6">
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-3xl text-platinum/50 transition-all duration-300 group-hover:translate-x-2 group-hover:text-bone md:text-5xl">
                {a.name}
              </span>
            </span>
            <span className="flex items-baseline gap-6">
              <span className="font-mono text-[10px] tracking-[0.25em] text-platinum/40">
                {a.detail}
              </span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold/0 transition-colors duration-300 group-hover:text-gold">
                {a.cat}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="-mx-0 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:hidden">
        {AMENITIES.map((a) => (
          <div
            key={a.name}
            data-testid={`amenity-card-${slug(a.name)}`}
            className="w-[76vw] flex-none snap-start border border-white/10 bg-ink2"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={a.img} alt={`${a.name} (temporary placeholder)`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              <span className="absolute bottom-2 left-2 border border-eglow/40 bg-ink/85 px-2 py-1 font-mono text-[8px] tracking-[0.2em] text-eglow">
                TEMP ASSET · {a.need}
              </span>
            </div>
            <div className="p-5">
              <p className="font-display text-2xl text-bone">{a.name}</p>
              <p className="mt-2 font-mono text-[9px] tracking-[0.25em] text-platinum/50">
                {a.cat} — {a.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      <motion.div
        data-testid="amenity-preview"
        className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
        style={{ x: sx, y: sy }}
      >
        <AnimatePresence mode="wait">
          {active !== null && (
            <motion.div
              key={active}
              initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[360px] w-[280px] overflow-hidden border border-white/10"
            >
              <img
                src={AMENITIES[active].img}
                alt={`${AMENITIES[active].name} (temporary placeholder)`}
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-2 left-2 border border-eglow/40 bg-ink/85 px-2 py-1 font-mono text-[8px] tracking-[0.2em] text-eglow">
                TEMP ASSET · {AMENITIES[active].need}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <FadeUp className="mt-10 px-6 md:px-12">
        <a
          href="/enquire?project=opulence&intent=brochure"
          data-testid="amenity-cta-brochure"
          className="inline-flex items-center gap-2 border border-gold/60 px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          REQUEST THE FULL BROCHURE <ArrowUpRight size={13} />
        </a>
      </FadeUp>
    </section>
  );
}
