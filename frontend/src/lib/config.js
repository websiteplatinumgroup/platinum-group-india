export const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const PHONE_TEL = "tel:+919660223377";
export const PHONE_DISPLAY = "+91 96602 23377";
export const WA_NUMBER = "919660223377";

export const waLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Hi Platinum Group, I'm interested in Platinum Greens Opulence and would like more details."
);

export const SITE_ADDRESS =
  "Platinum Greens Opulence, Near Parshwanath Narayan City, Mansarovar Extension, Jaipur, Rajasthan – 302029";
export const OFFICE_ADDRESS =
  "G-1 269/270, RIICO Industrial Area, Sitapura, Jaipur, Rajasthan – 302022";
export const SITE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=26.8102201688762,75.75891828735266";
export const OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;

// Drop the real e-brochure at frontend/public/brochure/ with this exact name
// and every DOWNLOAD BROCHURE button serves the file instantly.
export const BROCHURE_URL = "/brochure/platinum-greens-opulence-brochure.pdf";

export const tryBrochureDownload = async (placement) => {
  track("brochure_request", { placement, project: "opulence" });
  try {
    const res = await fetch(BROCHURE_URL, { method: "HEAD" });
    if (res.ok && (res.headers.get("content-type") || "").includes("pdf")) {
      const a = document.createElement("a");
      a.href = BROCHURE_URL;
      a.download = "Platinum-Greens-Opulence-Brochure.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }
  } catch {}
  window.location.href = "/enquire?project=opulence&intent=brochure";
};

export const track = (event, data = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
};

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};
