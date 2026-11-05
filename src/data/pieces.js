/**
 * Representative styles.
 *
 * Names describe the design style only — they are not DEEVA product names —
 * and imagery is representative. Specifications shown are DEEVA's
 * brand-wide published standards. Replace with real catalogue entries
 * (name, verified specifications, price and photography) as they become
 * available; any field left out falls back to "shared on request".
 */
const standard = {
  diamond: "IGI-certified lab-grown diamond",
  metal: "BIS-hallmarked gold",
  design: "Fully customisable",
  price: "On request",
};

export const pieces = [
  {
    slug: "pear-halo-ring",
    name: "Pear Halo Ring",
    collection: "rings",
    image: "piece-pear-halo-ring",
    gallery: ["world-rings"],
    summary:
      "A pear-shaped centre diamond encircled by a halo of smaller stones — a classic engagement silhouette with a graceful, elongating line.",
  },
  {
    slug: "sculptural-cocktail-ring",
    name: "Sculptural Cocktail Ring",
    collection: "rings",
    image: "piece-cocktail-ring",
    gallery: ["campaign"],
    summary:
      "A bold, architectural ring that layers baguette and brilliant diamonds into a single, light-catching form. Made for evenings to remember.",
  },
  {
    slug: "solitaire-studs",
    name: "Solitaire Studs",
    collection: "earrings",
    image: "piece-solitaire-studs",
    gallery: ["world-cascade"],
    summary:
      "Two round brilliant diamonds, each held in a clean prong setting. The most essential of diamond earrings, and the most versatile.",
  },
  {
    slug: "halo-studs",
    name: "Halo Studs",
    collection: "earrings",
    image: "piece-halo-studs",
    gallery: ["world-earring"],
    summary:
      "A round centre stone framed by a circle of smaller diamonds, creating a fuller, softer glow that flatters the face.",
  },
  {
    slug: "cluster-drop-earrings",
    name: "Cluster Drop Earrings",
    collection: "earrings",
    image: "piece-drop-earrings",
    gallery: ["philosophy"],
    summary:
      "Open gold contours finished with a cascade of clustered diamonds — a contemporary drop that moves beautifully with you.",
  },
  {
    slug: "solitaire-pendant",
    name: "Solitaire Pendant",
    collection: "pendants",
    image: "piece-pendant-worn",
    gallery: ["story-loose-diamond"],
    summary:
      "A single diamond suspended on a fine chain. Understated, personal and made to be worn every day.",
  },
  {
    slug: "halo-pendant-black-bead",
    name: "Halo Pendant on Black-Bead Chain",
    collection: "pendants",
    image: "collection-pendants",
    gallery: ["world-hands"],
    summary:
      "A round halo pendant set on a traditional black-bead chain — a modern expression of a meaningful Indian tradition.",
  },
  {
    slug: "diamond-necklace-set",
    name: "Diamond Necklace & Earring Set",
    collection: "necklaces",
    image: "piece-necklace-set",
    gallery: ["world-bridal"],
    summary:
      "A graduated necklace of marquise and pear motifs with matching drop earrings, designed for weddings and grand celebrations.",
  },
  {
    slug: "gold-diamond-necklace",
    name: "Gold & Diamond Necklace",
    collection: "necklaces",
    image: "piece-lightweight-necklace",
    gallery: ["world-lace"],
    summary:
      "Gold links punctuated with diamond-set motifs and a fringe of fine diamond lines — occasion-worthy, yet easy to wear.",
  },
  {
    slug: "diamond-line-bracelet",
    name: "Diamond Line Bracelet",
    collection: "bracelets",
    image: "piece-tennis-bracelet",
    gallery: ["collection-bracelets"],
    summary:
      "A continuous line of diamonds with a delicate pear-shaped centre. Fluid, refined and endlessly wearable.",
  },
  {
    slug: "slim-diamond-bangle",
    name: "Slim Diamond Bangle",
    collection: "bracelets",
    image: "piece-bangle-worn",
    gallery: ["world-emerald"],
    summary:
      "A slender gold bangle with a channel of diamonds. Beautiful alone, and made to be stacked.",
  },
].map((piece) => ({ ...piece, specs: { ...standard, ...piece.specs } }));

export const getPiece = (slug) => pieces.find((p) => p.slug === slug);
export const piecesIn = (collection) =>
  pieces.filter((p) => p.collection === collection);

export const signaturePieces = [
  "pear-halo-ring",
  "solitaire-studs",
  "diamond-necklace-set",
  "diamond-line-bracelet",
  "cluster-drop-earrings",
  "solitaire-pendant",
].map(getPiece);
