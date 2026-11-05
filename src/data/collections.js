/**
 * Categories confirmed by DEEVA's Instagram highlights:
 * Ring · Earring · Pendant · Necklace · Bracelet.
 */
export const collections = [
  {
    slug: "rings",
    name: "Rings",
    eyebrow: "Collection I",
    line: "Solitaires, halos and statement rings.",
    intro:
      "From a single brilliant solitaire to a sculptural cocktail ring, our rings are designed to be worn for a lifetime of moments — the proposal, the anniversary, and every ordinary day in between.",
    image: "collection-rings",
    mood: "world-rings",
  },
  {
    slug: "earrings",
    name: "Earrings",
    eyebrow: "Collection II",
    line: "Studs, drops and gentle movement.",
    intro:
      "Light that frames the face. Classic solitaire studs, softly glowing halos and drops that move with you — earrings for the boardroom, the sangeet and everything in between.",
    image: "collection-earrings",
    mood: "world-cascade",
  },
  {
    slug: "pendants",
    name: "Pendants",
    eyebrow: "Collection III",
    line: "A single point of brilliance.",
    intro:
      "An intimate kind of brilliance, worn close to the heart. Pendants that can be as quiet as a solitaire on a fine chain or as meaningful as a diamond on a traditional black-bead chain.",
    image: "collection-pendants",
    mood: "piece-pendant-worn",
  },
  {
    slug: "necklaces",
    name: "Necklaces",
    eyebrow: "Collection IV",
    line: "Everyday elegance to occasion pieces.",
    intro:
      "Necklaces for celebrations and for every day — including lightweight designs of around 7–8 grams of gold, made to be worn easily and often, alongside fuller sets for life's grand occasions.",
    image: "collection-necklaces",
    mood: "world-tennis",
  },
  {
    slug: "bracelets",
    name: "Bracelets",
    eyebrow: "Collection V",
    line: "Brilliance at the wrist.",
    intro:
      "Fine diamond lines, slim bangles and bracelets designed to be stacked, gifted and treasured. Effortless enough for every day, refined enough for every occasion.",
    image: "collection-bracelets",
    mood: "piece-bangle-worn",
  },
];

export const getCollection = (slug) => collections.find((c) => c.slug === slug);
