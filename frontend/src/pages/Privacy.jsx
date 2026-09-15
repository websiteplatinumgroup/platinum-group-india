import { useSeo } from "../lib/seo";
import Footer from "../sections/Footer";

const SECTIONS = [
  { h: "Information We Collect", p: "When you submit an enquiry on this website, we collect your name, mobile number, email address (optional), and your stated interest in our projects. We also collect standard, anonymised usage analytics to improve the website experience." },
  { h: "How We Use Your Information", p: "Your details are used solely to respond to your enquiry, share project information, brochures, price lists and site-visit coordination for Platinum Group developments. We do not sell, rent or trade your personal information to third parties." },
  { h: "Data Storage & Security", p: "Enquiry data is stored securely in our systems with access restricted to authorised Platinum Group sales personnel. Email notifications are delivered through encrypted channels." },
  { h: "Cookies", p: "We use essential cookies and privacy-respecting analytics to understand how visitors use the site. You may decline non-essential cookies via the consent banner; the website remains fully functional." },
  { h: "Your Rights", p: "You may request access, correction or deletion of your personal data at any time by writing to us at leads@platinumgroupindia.com or calling +91 96602 23377." },
  { h: "RERA Compliance", p: "Platinum Greens Opulence is registered under RERA/RAJ/P/2023/2875 and Platinum Greens under RERA/RAJ/P/2021/1631. Details are available at rera.rajasthan.gov.in." },
];

export default function Privacy() {
  useSeo({
    title: "Privacy Policy — Platinum Group, Jaipur",
    description: "How Platinum Group collects, uses and protects your information when you enquire about Platinum Greens and Platinum Greens Opulence, Mansarovar Extension, Jaipur.",
    path: "/privacy",
  });
  return (
    <main data-testid="privacy-page" className="min-h-screen px-6 pb-32 pt-32 md:px-12">
      <div className="mx-auto max-w-3xl">
        <span className="font-mono text-[10px] tracking-[0.4em] text-gold">LEGAL</span>
        <h1 className="mt-6 font-display text-4xl text-bone md:text-6xl">PRIVACY POLICY</h1>
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
