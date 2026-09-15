import GrHero from "../sections/greens/GrHero";
import GrHighlights from "../sections/greens/GrHighlights";
import GrCTA from "../sections/greens/GrCTA";
import Footer from "../sections/Footer";

export default function Greens() {
  return (
    <main data-testid="greens-page" className="bg-[#061410]">
      <GrHero />
      <GrHighlights />
      <GrCTA />
      <Footer />
    </main>
  );
}
