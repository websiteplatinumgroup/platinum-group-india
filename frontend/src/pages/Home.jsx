import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import Credibility from "../sections/Credibility";
import NineLevels from "../sections/NineLevels";
import Marquee from "../sections/Marquee";
import OpulenceFeature from "../sections/OpulenceFeature";
import EnquireSection from "../sections/EnquireSection";
import JaipurRising from "../sections/JaipurRising";
import Finale from "../sections/Finale";
import { scrollToId, track } from "../lib/config";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    track("page_view", { page: "home" });
    document.title = "Platinum Group — Ultra-Premium Residences in Jaipur";
  }, []);

  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => scrollToId(hash.slice(1)), 200);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <main className="pb-16 md:pb-0">
      <Hero />
      <Credibility />
      <NineLevels />
      <JaipurRising />
      <Marquee />
      <OpulenceFeature />
      <EnquireSection />
      <Finale />
    </main>
  );
}
