import { useEffect } from "react";
import OpHero from "../sections/opulence/OpHero";
import { Movement } from "../sections/opulence/Movement";
import { BigNumber } from "../components/BigNumber";
import AmenityField from "../sections/opulence/AmenityField";
import FloorPlans from "../sections/opulence/FloorPlans";
import OpAction from "../sections/opulence/OpAction";
import { ASSETS } from "../lib/assets";
import { track } from "../lib/config";

export default function Opulence() {
  useEffect(() => {
    track("page_view", { page: "opulence" });
    track("project_view", { project: "opulence", placement: "page" });
    document.title =
      "Platinum Greens Opulence — 3 & 4 BHK Ultra-Premium Residences, Mansarovar Extension";
  }, []);

  return (
    <main className="pb-16 md:pb-0">
      <OpHero />
      <Movement
        n="01"
        slug="arrival"
        title="ARRIVAL."
        line="A grand entrance lobby, a waiting lounge — and eleven storeys of intent above them."
        img={ASSETS.scaleImg}
      />
      <BigNumber
        n="02"
        slug="scale"
        value="G+11"
        unit="STOREYS OVER 15,000 SQ. YD."
        sub="Basement, ground and eleven residential floors. Scale you feel before you can name it."
      />
      <BigNumber
        n="03"
        slug="space"
        value="70%"
        unit="OPEN"
        sub="Seven parts sky and garden. Three parts architecture."
      />
      <Movement
        n="04"
        slug="residences"
        title="RESIDENCES."
        line="King-sized 3 & 4 BHK homes from 2,068 to 2,792 sq. ft. — among the largest in Mansarovar Extension."
        img={ASSETS.residences}
        reverse
        cta={{
          label: "REQUEST FLOOR PLANS",
          to: "/enquire?project=opulence&intent=floor-plan",
          testid: "op-cta-floorplans-movement",
        }}
      />
      <BigNumber
        n="05"
        slug="light"
        value="3-SIDE"
        unit="OPEN"
        sub="Light and air from three faces of every home."
      />
      <BigNumber
        n="06"
        slug="volume"
        value="~10 FT"
        unit="CLEAR CEILINGS"
        sub="Eleven feet floor to floor. A full ten feet, clear."
      />
      <BigNumber
        n="07"
        slug="lifestyle"
        value="50+"
        unit="AMENITIES"
        sub="Not a list. A field."
      />
      <AmenityField />
      <FloorPlans />
      <OpAction />
    </main>
  );
}
