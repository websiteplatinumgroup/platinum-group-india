export const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const PHONE_TEL = "tel:+919660223377";
export const PHONE_DISPLAY = "+91 96602 23377";
export const WA_NUMBER = "919660223377";

export const waLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Hi Platinum Group, I'm interested in Platinum Greens Opulence and would like more details."
);

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
