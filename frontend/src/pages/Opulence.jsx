import OpHero from "../sections/opulence/OpHero";
import OpGallery from "../sections/opulence/OpGallery";
import OpAmenities from "../sections/opulence/OpAmenities";
import OpSpecs from "../sections/opulence/OpSpecs";
import OpCTA from "../sections/opulence/OpCTA";
import Footer from "../sections/Footer";
import { useSeo } from "../lib/seo";

export default function Opulence() {
  useSeo({
    title: "Platinum Greens Opulence — 3 & 4 BHK Ultra-Premium Residences, Jaipur",
    description:
      "Platinum Greens Opulence, Mansarovar Extension, Jaipur. 50+ amenities, 70% open space, 112 ft indoor pool. RERA/RAJ/P/2023/2875. ₹1.41 Cr onwards.",
    path: "/opulence",
  });
  return (
    <main data-testid="opulence-page" className="bg-[#061410]">
      <OpHero />
      <OpGallery />
      <OpAmenities />
      <OpSpecs />
      <OpCTA />
      <Footer />
    </main>
  );
}
