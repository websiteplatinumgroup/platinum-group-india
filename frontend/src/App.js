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
    <BrowserRouter>
      <ScrollManager />
      <Ascent />
      <Nav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opulence" element={<Opulence />} />
          <Route path="/greens" element={<Greens />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <MobileCTA />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}

export default App;
