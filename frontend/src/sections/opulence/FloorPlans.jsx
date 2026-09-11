import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { TierMark } from "../../components/TierMark";
import { FadeUp, Mask } from "../../components/Rise";
import { track } from "../../lib/config";

const PLANS = [
  { label: "3 BHK RESIDENCE PLAN", need: "opulence-floorplan-3bhk.pdf", testid: "floorplan-3bhk" },
  { label: "4 BHK RESIDENCE PLAN", need: "opulence-floorplan-4bhk.pdf", testid: "floorplan-4bhk" },
];

export default function FloorPlans() {
  return (
    <section
      data-testid="movement-home"
      className="border-t border-white/5 px-6 py-24 md:px-12 md:py-36"
    >
      <Mask>
        <span className="font-mono text-[10px] tracking-[0.35em] text-gold">
          MOVEMENT 13 — HOME
        </span>
      </Mask>
      <Mask delay={0.1}>
        <h3 className="mt-5 font-display text-5xl text-bone md:text-7xl">
          STEP INSIDE.
        </h3>
      </Mask>
      <FadeUp delay={0.2}>
        <p className="mt-5 max-w-md font-editorial text-lg italic text-platinum/80">
          2,068 to 2,792 square feet of considered space, eleven feet floor to
          floor.
        </p>
      </FadeUp>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {PLANS.map((p) => (
          <FadeUp key={p.testid}>
            <div
              data-testid={p.testid}
              className="relative flex aspect-[4/3] flex-col items-center justify-center gap-5 border border-white/10 bg-ink2"
            >
              <TierMark className="h-10 w-14 opacity-40" />
              <span className="font-display text-xl text-bone md:text-2xl">
                {p.label}
              </span>
              <span className="font-mono text-[10px] tracking-[0.35em] text-gold">
                AVAILABLE ON REQUEST
              </span>
              <span className="absolute bottom-3 left-3 border border-eglow/40 bg-ink/85 px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-eglow">
                ASSET NEEDED · {p.need}
              </span>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.15} className="mt-10">
        <Link
          to="/enquire?project=opulence&intent=floor-plan"
          data-testid="op-cta-floorplans"
          onClick={() => track("floorplan_request", { placement: "movement_home", project: "opulence" })}
          className="inline-flex items-center gap-2 bg-gold px-8 py-4 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
        >
          REQUEST FLOOR PLANS <ArrowUpRight size={14} />
        </Link>
      </FadeUp>
    </section>
  );
}
