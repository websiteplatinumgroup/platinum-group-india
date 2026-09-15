import { useEffect } from "react";

const SITE = "https://opulence-preview-1.preview.emergentagent.com";
const DEFAULT_IMG = `${SITE}/og-image.jpg`;

const upsert = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const useSeo = ({ title, description, path = "/", image = DEFAULT_IMG }) => {
  useEffect(() => {
    document.title = title;
    upsert("name", "description", description);
    upsert("property", "og:title", title);
    upsert("property", "og:description", description);
    upsert("property", "og:type", "website");
    upsert("property", "og:url", `${SITE}${path}`);
    upsert("property", "og:image", image);
    upsert("property", "og:site_name", "Platinum Group");
    upsert("name", "twitter:card", "summary_large_image");
    upsert("name", "twitter:title", title);
    upsert("name", "twitter:description", description);
    upsert("name", "twitter:image", image);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", `${SITE}${path}`);
  }, [title, description, path, image]);
};
