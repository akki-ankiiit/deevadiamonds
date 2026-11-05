import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../data/site";

const DEFAULT_DESCRIPTION =
  "DEEVA creates IGI-certified lab-grown diamond jewellery in BIS-hallmarked gold — rings, earrings, pendants, necklaces and bracelets, fully customised. Visit our Raipur boutique.";

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export function usePageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  image = "/og-image.jpg",
}) {
  const { pathname } = useLocation();
  useEffect(() => {
    const fullTitle = title
      ? `${title} | DEEVA Lab Grown Diamonds`
      : "DEEVA | Lab Grown Diamonds";
    const url = `${site.url}${pathname}`;
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", `${site.url}${image}`);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, image, pathname]);
}
