import OpHero from "../sections/opulence/OpHero";
import OpGallery from "../sections/opulence/OpGallery";
import OpAmenities from "../sections/opulence/OpAmenities";
import OpSpecs from "../sections/opulence/OpSpecs";
import OpCTA from "../sections/opulence/OpCTA";
import Footer from "../sections/Footer";

export default function Opulence() {
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
