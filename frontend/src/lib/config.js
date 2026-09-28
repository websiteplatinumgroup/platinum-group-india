// export const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// export const PHONE_TEL = "tel:+919660223377";
// export const PHONE_DISPLAY = "+91 96602 23377";
// export const WA_NUMBER = "919660223377";

// export const waLink = (message) =>
//   `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

// export const WA_DEFAULT = waLink(
//   "Hi Platinum Group, I'm interested in Platinum Greens Opulence and would like more details."
// );

// export const SITE_ADDRESS =
//   "Platinum Greens Opulence, Near Parshwanath Narayan City, Mansarovar Extension, Jaipur, Rajasthan – 302029";
// export const OFFICE_ADDRESS =
//   "G-1 269/270, RIICO Industrial Area, Sitapura, Jaipur, Rajasthan – 302022";
// export const SITE_MAPS_URL =
//   "https://www.google.com/maps/dir/?api=1&destination=26.8102201688762,75.75891828735266";
// export const OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;

// // Real e-brochures live at frontend/public/brochure/ and are served instantly
// // by every DOWNLOAD BROCHURE button. Placement prefix picks the project.
// export const BROCHURES = {
//   opulence: { url: "/brochure/platinum-greens-opulence-brochure.pdf", name: "Platinum-Greens-Opulence-Brochure.pdf" },
//   greens: { url: "/brochure/platinum-greens-brochure.pdf", name: "Platinum-Greens-Brochure.pdf" },
// };

// export const tryBrochureDownload = async (placement) => {
//   const project = String(placement).startsWith("greens") ? "greens" : "opulence";
//   const b = BROCHURES[project];
//   track("brochure_request", { placement, project });
//   try {
//     const res = await fetch(b.url, { method: "HEAD" });
//     if (res.ok && (res.headers.get("content-type") || "").includes("pdf")) {
//       const a = document.createElement("a");
//       a.href = b.url;
//       a.download = b.name;
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//       return;
//     }
//   } catch {}
//   window.location.href = `/enquire?project=${project}&intent=brochure`;
// };

// export const track = (event, data = {}) => {
//   window.dataLayer = window.dataLayer || [];
//   window.dataLayer.push({ event, ...data });
// };

// export const scrollToId = (id, immediate = false) => {
//   const el = document.getElementById(id);
//   if (!el) return;
//   if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.4, immediate });
//   else el.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
// };









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

// Real e-brochures live at frontend/public/brochure/. Placement prefix picks the project.
export const BROCHURES = {
  opulence: { url: "/brochure/platinum-greens-opulence-brochure.pdf", name: "Platinum-Greens-Opulence-Brochure.pdf" },
  greens: { url: "/brochure/platinum-greens-brochure.pdf", name: "Platinum-Greens-Brochure.pdf" },
};

export const track = (event, data = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
};

// Every DOWNLOAD BROCHURE button calls this. It now opens the lead form
// (BrochureModal listens for this event) instead of downloading directly.
export const tryBrochureDownload = (placement) => {
  track("brochure_request", { placement });
  window.dispatchEvent(
    new CustomEvent("open-brochure-form", { detail: { placement } })
  );
};

// The Thank You page calls this after the form is submitted.
export const downloadBrochure = (project) => {
  const b = BROCHURES[project] || BROCHURES.opulence;
  track("brochure_download", { project });
  const a = document.createElement("a");
  a.href = b.url;
  a.download = b.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export const scrollToId = (id, immediate = false) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.4, immediate });
  else el.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
};