import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import BrochureLeadForm from "./Broucherform";

export default function BrochureModal() {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState("opulence");
  const navigate = useNavigate();

  // any "DOWNLOAD BROCHURE" button fires this event via tryBrochureDownload()
  useEffect(() => {
    const handler = (e) => {
      const placement = String(e.detail?.placement || "");
      setProject(placement.startsWith("greens") ? "greens" : "opulence");
      setOpen(true);
    };
    window.addEventListener("open-brochure-form", handler);
    return () => window.removeEventListener("open-brochure-form", handler);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto border border-white/10 bg-ink p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 text-platinum/60 transition-colors hover:text-bone"
        >
          <X size={20} />
        </button>

        <p className="font-mono text-[10px] tracking-[0.3em] text-gold">E-BROCHURE</p>
        <h3 className="mb-6 mt-2 font-display text-2xl text-bone">
          SHARE YOUR DETAILS TO DOWNLOAD
        </h3>

        <BrochureLeadForm
          key={project}
          project={project}
          source="brochure-gate"
          onSuccess={({ project: p }) => {
            setOpen(false);
            navigate(`/brochure-thank-you?project=${p}`);
          }}
        />
      </div>
    </div>
  );
}