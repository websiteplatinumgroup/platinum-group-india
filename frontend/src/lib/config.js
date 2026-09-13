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
  "Platinum Greens Opulence, Near Parshwanath Narayan City, Mansarovar Extension, Jaipur, Rajasthan";
export const OFFICE_ADDRESS =
  "G-1/269, RIICO Industrial Area, Sitapura, Jaipur, Rajasthan – 302022";
export const SITE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=26.8102201688762,75.75891828735266";
export const OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;

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
