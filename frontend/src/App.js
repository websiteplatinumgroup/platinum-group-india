import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Ascent from "@/components/Ascent";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import { MobileCTA, WhatsAppFloat } from "@/components/Conversion";
import Home from "@/pages/Home";
import Enquire from "@/pages/Enquire";
import Opulence from "@/pages/Opulence";

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
      <Cursor />
      <Ascent />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platinum-greens-opulence" element={<Opulence />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <MobileCTA />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}

export default App;
