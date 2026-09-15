import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="flex w-full flex-col items-center justify-center gap-3 border-t border-white/5 px-6 py-8 text-center font-mono text-[9px] tracking-[0.25em] text-platinum/40 md:text-[10px]"
    >
      <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <Link to="/" className="transition-colors hover:text-gold">HOME</Link>
        <Link to="/greens" className="transition-colors hover:text-gold">GREENS</Link>
        <Link to="/opulence" className="transition-colors hover:text-gold">GREENS OPULENCE</Link>
        <Link to="/enquire" className="transition-colors hover:text-gold">ENQUIRE</Link>
        <Link to="/privacy" data-testid="footer-privacy-link" className="transition-colors hover:text-gold">PRIVACY</Link>
        <Link to="/terms" data-testid="footer-terms-link" className="transition-colors hover:text-gold">TERMS</Link>
      </span>
      <span>© 2026 PLATINUM GROUP</span>
    </footer>
  );
}
