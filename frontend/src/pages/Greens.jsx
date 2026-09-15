import GrHero from "../sections/greens/GrHero";
import GrHighlights from "../sections/greens/GrHighlights";
import GrCTA from "../sections/greens/GrCTA";
import Footer from "../sections/Footer";
import { useSeo } from "../lib/seo";

export default function Greens() {
  useSeo({
    title: "Platinum Greens — Ready-to-Move 2, 3 & 4 BHK Residences, Jaipur",
    description:
      "Platinum Greens, Mansarovar Extension, Jaipur. Ready-to-move 2, 3 & 4 BHK residences from ₹70 Lakh onwards. RERA/RAJ/P/2021/1631. Possession started.",
    path: "/greens",
  });
  return (
    <main data-testid="greens-page" className="bg-[#061410]">
      <GrHero />
      <GrHighlights />
      <GrCTA />
      <Footer />
    </main>
  );
}
