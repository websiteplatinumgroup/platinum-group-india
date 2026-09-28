import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Ascent from "@/components/Ascent";
import Nav from "@/components/Nav";
import { MobileCTA, WhatsAppFloat } from "@/components/Conversion";

const Home = lazy(() => import("@/pages/Home"));
const Enquire = lazy(() => import("@/pages/Enquire"));
const Opulence = lazy(() => import("@/pages/Opulence"));
const Greens = lazy(() => import("@/pages/Greens"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const NotFound = lazy(() => import("@/pages/NotFound"));
import CookieConsent from "@/components/CookieConsent";
import LeadPopup from "./components/Leadpop";
import ThankYou from "./pages/Thankupage";
import BrochureModal from "./components/Brochuremodal";
import BrochureThankYou from "./components/BrochureThankYou";

const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <>
    <BrowserRouter>
      <ScrollManager />
      <Ascent />
      <Nav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platinum-greens-opulence" element={<Opulence />} />
          <Route path="/platinum-greens" element={<Greens />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/brochure-thank-you" element={<BrochureThankYou />} />
          
        </Routes>
      </Suspense>
      <BrochureModal />
      <CookieConsent />
      <MobileCTA />
      <WhatsAppFloat />
          <LeadPopup/>

    </BrowserRouter>
    </>
  );
}

export default App;
