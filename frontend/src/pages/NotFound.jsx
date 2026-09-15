import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useSeo } from "../lib/seo";
import { Mask } from "../components/Rise";

export default function NotFound() {
  useSeo({
    title: "Page Not Found — Platinum Group, Jaipur",
    description: "The page you are looking for does not exist. Explore Platinum Greens Opulence and Platinum Greens by Platinum Group, Jaipur.",
    path: "/404",
  });
  return (
    <main data-testid="not-found-page" className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <Mask>
        <span className="font-mono text-[10px] tracking-[0.45em] text-eglow">ERROR 404</span>
      </Mask>
      <Mask delay={0.12}>
        <h1 className="mt-6 font-display text-[18vw] leading-none text-bone md:text-[10rem]">404</h1>
      </Mask>
      <Mask delay={0.24}>
        <p className="mt-2 font-editorial text-2xl font-light italic text-gold md:text-3xl">
          This level hasn't been built yet.
        </p>
      </Mask>
      <Mask delay={0.36}>
        <span className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            data-testid="not-found-home-btn"
            className="flex items-center gap-2 bg-gold px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-bone"
          >
            BACK TO HOME <ArrowUpRight size={13} />
          </Link>
          <Link
            to="/opulence"
            data-testid="not-found-opulence-btn"
            className="border border-platinum/40 px-7 py-3.5 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors duration-300 hover:border-eglow hover:text-eglow"
          >
            EXPLORE OPULENCE
          </Link>
        </span>
      </Mask>
    </main>
  );
}
