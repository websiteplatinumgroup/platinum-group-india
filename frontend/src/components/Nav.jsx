import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { TierMark, Wordmark } from "./TierMark";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WA_DEFAULT,
  scrollToId,
  track,
} from "../lib/config";

const ITEMS = [
  { n: "01", label: "HOME", type: "route", to: "/" },
  { n: "02", label: "GREENS", type: "route", to: "/greens" },
  { n: "03", label: "GREENS OPULENCE", type: "route", to: "/opulence" },
  { n: "04", label: "PROJECTS", type: "scroll", to: "portfolio" },
  { n: "05", label: "ENQUIRE", type: "route", to: "/enquire" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const light = false;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [open]);

  const go = (item, placement = "menu") => {
    setOpen(false);
    track("cta_click", { placement, target: item.label });
    if (item.type === "route") {
      if (item.to === "/" && pathname === "/") scrollToId("top");
      else navigate(item.to);
    } else if (pathname === "/") scrollToId(item.to);
    else navigate(`/#${item.to}`);
  };

  return (
    <>
      <header
        data-testid="main-nav"
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-ink/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6 md:px-12">
          <Link
            to="/"
            data-testid="nav-logo"
            className="flex items-center gap-3"
            aria-label="Platinum Group home"
          >
            <TierMark className="h-8 w-10" />
            <Wordmark
              tone={light ? "#070708" : "#D8D8DC"}
              className="h-5 w-auto transition-all duration-500 md:h-7"
            />
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {ITEMS.map((item) =>
                item.label === "ENQUIRE" ? (
                  <button
                    key={item.n}
                    data-testid="nav-link-enquire"
                    onClick={() => go(item, "header")}
                    className="border border-gold/60 px-5 py-2.5 font-mono text-[11px] tracking-[0.25em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
                  >
                    ENQUIRE
                  </button>
                ) : (
                  <button
                    key={item.n}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => go(item, "header")}
                    className={`font-mono text-[11px] tracking-[0.3em] transition-colors duration-300 ${
                      light
                        ? "text-ink/60 hover:text-ink"
                        : "text-platinum/70 hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </nav>
            <button
              data-testid="nav-menu-button"
              onClick={() => setOpen(true)}
              className={`font-mono text-[11px] tracking-[0.3em] transition-colors md:hidden ${
                light ? "text-ink hover:text-gold" : "text-bone hover:text-gold"
              }`}
              aria-label="Open menu"
            >
              MENU
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="fullscreen-menu"
            className="fixed inset-0 z-[80] flex flex-col bg-ink"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-20 items-center justify-between px-6 md:px-12">
              <span className="font-mono text-[10px] tracking-[0.35em] text-platinum/50">
                NAVIGATION
              </span>
              <button
                data-testid="menu-close-button"
                onClick={() => setOpen(false)}
                className="text-bone transition-colors hover:text-gold"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center px-6 md:px-12">
              {ITEMS.map((item, i) => (
                <div key={item.n} className="overflow-hidden border-b border-white/5">
                  <motion.button
                    data-testid={`menu-link-${item.label.toLowerCase()}`}
                    onClick={() => go(item)}
                    className="group flex w-full items-baseline gap-6 py-6 text-left md:gap-10 md:py-8"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-110%" }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="font-mono text-xs tracking-[0.3em] text-gold">
                      {item.n}
                    </span>
                    <span className="font-display text-5xl text-bone transition-colors duration-300 group-hover:text-gold md:text-7xl">
                      {item.label}
                    </span>
                    <ArrowUpRight
                      className="ml-auto text-platinum/30 transition-colors group-hover:text-gold"
                      size={28}
                    />
                  </motion.button>
                </div>
              ))}
            </nav>
            <div className="flex flex-col gap-3 px-6 pb-10 font-mono text-[10px] tracking-[0.25em] text-platinum/50 md:flex-row md:items-center md:justify-between md:px-12">
              <a
                href={PHONE_TEL}
                data-testid="menu-call-link"
                onClick={() => track("call_click", { placement: "menu" })}
                className="transition-colors hover:text-gold"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noreferrer"
                data-testid="menu-whatsapp-link"
                onClick={() => track("whatsapp_click", { placement: "menu" })}
                className="transition-colors hover:text-eglow"
              >
                WHATSAPP
              </a>
              <span>MANSAROVAR EXTENSION · JAIPUR</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
