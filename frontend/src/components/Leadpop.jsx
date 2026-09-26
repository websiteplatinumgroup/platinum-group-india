import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import LeadForm from "../components/LeadForm";

const POPUP_INTERVAL_MS = 1 * 60 * 1000; // every 4 minutes
const HIDDEN_PATHS = ["/thank-you", "/enquire"];

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // show once shortly after load, then repeat every 4 minutes
    const openPopup = () => setIsOpen(true);

    const initialTimer = setTimeout(openPopup, POPUP_INTERVAL_MS);
    const interval = setInterval(openPopup, POPUP_INTERVAL_MS);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (HIDDEN_PATHS.includes(location.pathname)) return null;
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg bg-ink border border-white/10 p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 text-platinum/60 hover:text-bone transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="font-display text-2xl text-bone mb-6">
          GET IN TOUCH
        </h3>

        <LeadForm source="popup" />
      </div>
    </div>
  );
}