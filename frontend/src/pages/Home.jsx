import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import Credibility from "../sections/Credibility";
import NineLevels from "../sections/NineLevels";
import Marquee from "../sections/Marquee";
import OpulenceFeature from "../sections/OpulenceFeature";
import Portfolio from "../sections/Portfolio";
import EnquireSection from "../sections/EnquireSection";
import JaipurRising from "../sections/JaipurRising";
import Finale from "../sections/Finale";
import Footer from "../sections/Footer";
import { scrollToId, track } from "../lib/config";
import { useSeo } from "../lib/seo";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    track("page_view", { page: "home" });
    document.title = "Platinum Group — Ultra-Premium Residences in Jaipur";
  }, []);

  useEffect(() => {
    if (!hash) return;
    // re-assert the target as lazy media settles the page height
    const timers = [300, 1200, 2600].map((t) =>
      setTimeout(() => scrollToId(hash.slice(1)), t)
    );
    return () => timers.forEach(clearTimeout);
  }, [hash]);

  useSeo({
    title: "Platinum Group — Ultra-Premium Residences in Jaipur",
    description:
      "Platinum Greens Opulence — 3 & 4 BHK ultra-premium residences in Mansarovar Extension, Jaipur. 50+ amenities, 70% open space, 112 ft indoor pool. ₹1.41 Cr onwards.",
    path: "/",
  });

  return (
    <main className="pb-16 md:pb-0">
      <Hero />
      <JaipurRising />
      <Credibility />
      <NineLevels />
      <Marquee />
      <OpulenceFeature />
      <Portfolio />
      <Finale />
      <EnquireSection />
      <Footer />
    </main>
    
  );
}
