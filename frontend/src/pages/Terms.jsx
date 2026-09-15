import { useSeo } from "../lib/seo";
import Footer from "../sections/Footer";

const SECTIONS = [
  { h: "General", p: "This website is operated by Platinum Group, Jaipur. By using this website you accept these terms. All content, imagery, renders and copy are the property of Platinum Group and may not be reproduced without written permission." },
  { h: "No Offer or Contract", p: "The content of this website is for general information only and does not constitute an offer, invitation to offer, or contract. Prices, specifications, amenities, layouts and timelines are indicative and subject to change without notice." },
  { h: "Imagery Disclaimer", p: "Images, renders, videos and walkthroughs are artistic impressions or sample representations and may differ from the final delivered product. Furniture, fittings and décor shown are not part of the standard offering unless expressly stated in the agreement to sell." },
  { h: "RERA Registration", p: "Platinum Greens Opulence — RERA/RAJ/P/2023/2875. Platinum Greens — RERA/RAJ/P/2021/1631. All project details are available at rera.rajasthan.gov.in. Purchasers are advised to verify all details independently before making any decision." },
  { h: "Limitation of Liability", p: "Platinum Group shall not be liable for any loss or damage arising from reliance on information presented on this website. The agreement to sell shall be the sole governing document for any purchase." },
  { h: "Governing Law", p: "These terms are governed by the laws of India. Courts at Jaipur, Rajasthan shall have exclusive jurisdiction." },
];

export default function Terms() {
  useSeo({
    title: "Terms & Conditions — Platinum Group, Jaipur",
    description: "Terms of use for the Platinum Group website, including RERA disclaimers for Platinum Greens and Platinum Greens Opulence, Mansarovar Extension, Jaipur.",
    path: "/terms",
  });
  return (
    <main data-testid="terms-page" className="min-h-screen px-6 pb-32 pt-32 md:px-12">
      <div className="mx-auto max-w-3xl">
        <span className="font-mono text-[10px] tracking-[0.4em] text-gold">LEGAL</span>
        <h1 className="mt-6 font-display text-4xl text-bone md:text-6xl">TERMS &amp; CONDITIONS</h1>
        <p className="mt-4 font-body text-sm text-platinum/50">Last updated: September 2026</p>
        <div className="mt-12 space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.h} className="border-b border-white/10 pb-8">
              <h2 className="font-display text-xl text-bone">{s.h}</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-platinum/70">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
