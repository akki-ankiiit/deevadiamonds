import { collections } from "./collections";
import { pieces } from "./pieces";

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections", mega: true },
  { label: "Rings", to: "/collections/rings" },
  { label: "Earrings", to: "/collections/earrings" },
  { label: "Necklaces", to: "/collections/necklaces" },
  { label: "Bracelets", to: "/collections/bracelets" },
  { label: "About Us", to: "/about" },
];

export const announcements = [
  "IGI-certified lab-grown diamonds, set in BIS-hallmarked gold",
  "Visit our boutique — Currency Tower, VIP Road, Raipur",
  "Fully customised jewellery · Book a personal consultation",
];

export const searchIndex = [
  ...collections.map((c) => ({
    type: "Collection",
    title: c.name,
    text: c.line,
    to: `/collections/${c.slug}`,
  })),
  ...pieces.map((p) => ({
    type: "Style",
    title: p.name,
    text: p.summary,
    to: `/collections/${p.collection}/${p.slug}`,
  })),
  {
    type: "Guide",
    title: "What is a lab-grown diamond?",
    text: "How lab-grown diamonds are created",
    to: "/lab-grown-diamonds",
  },
  {
    type: "Guide",
    title: "Understanding the 4Cs",
    text: "Cut, colour, clarity and carat",
    to: "/lab-grown-diamonds#four-cs",
  },
  {
    type: "Guide",
    title: "IGI certification",
    text: "Diamond grading reports explained",
    to: "/lab-grown-diamonds#certification",
  },
  {
    type: "Guide",
    title: "BIS hallmark",
    text: "Gold purity and HUID",
    to: "/lab-grown-diamonds#hallmark",
  },
  {
    type: "Guide",
    title: "Caring for your diamonds",
    text: "Cleaning and storage",
    to: "/lab-grown-diamonds#care",
  },
  {
    type: "Service",
    title: "Custom design",
    text: "Create a piece that is uniquely yours",
    to: "/contact?topic=custom",
  },
  {
    type: "Service",
    title: "Exchange & buyback",
    text: "100% exchange, 80% buyback (T&C apply)",
    to: "/exchange-and-buyback",
  },
  {
    type: "Page",
    title: "About DEEVA",
    text: "Our philosophy and boutique",
    to: "/about",
  },
  {
    type: "Page",
    title: "Visit the boutique",
    text: "Currency Tower, VIP Road, Raipur",
    to: "/contact",
  },
];
