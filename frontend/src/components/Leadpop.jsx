// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { X } from "lucide-react";
// import LeadForm from "../components/LeadForm";

// const POPUP_DELAY_MS = 3000; // popup dikhne se pehle ka delay
// const HIDDEN_PATHS = ["/thank-you", "/enquire"];

// export default function LeadPopup() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     if (HIDDEN_PATHS.includes(location.pathname)) {
//       setIsOpen(false);
//       return;
//     }

//     const timer = setTimeout(() => setIsOpen(true), POPUP_DELAY_MS);

//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   if (HIDDEN_PATHS.includes(location.pathname)) return null;
//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
//       onClick={() => setIsOpen(false)}
//     >
//       <div
//         className="relative w-full max-w-lg bg-ink border border-white/10 p-8  overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={() => setIsOpen(false)}
//           aria-label="Close"
//           className="absolute top-4 right-4 text-platinum/60 hover:text-bone transition-colors"
//         >
//           <X size={20} />
//         </button>

//         <h3 className="font-display text-2xl text-bone mb-6">
//           GET IN TOUCH
//         </h3>

//         <LeadForm source="popup" />
//       </div>
//     </div>
//   );
// }








import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import LeadForm from "../components/LeadForm";

const POPUP_DELAY_MS = 3000; // popup dikhne se pehle ka delay
const HIDDEN_PATHS = ["/thank-you", "/enquire"];

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (HIDDEN_PATHS.includes(location.pathname)) {
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(() => setIsOpen(true), POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (HIDDEN_PATHS.includes(location.pathname)) return null;
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative flex w-full max-w-lg max-h-[85vh] flex-col bg-ink border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 pt-6 sm:px-8 sm:pt-8">
          <h3 className="font-display text-2xl text-bone">
            GET IN TOUCH
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="text-platinum/60 hover:text-bone transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
          <LeadForm source="popup" />
        </div>
      </div>
    </div>
  );
}