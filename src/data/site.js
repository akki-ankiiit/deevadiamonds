/**
 * Verified DEEVA business information.
 *
 * Source: the official Instagram profile and post captions of @deeva.diamonds
 * (bio, bio links and store captions), reviewed November 2026. Do not add
 * claims here unless they have been confirmed by DEEVA.
 */
export const site = {
  name: "DEEVA",
  descriptor: "Lab Grown Diamond",
  tradingName: "Deeva Diamonds",
  url: (import.meta.env.VITE_SITE_URL || "").replace(/\/$/, ""),
  city: "Raipur",
  address: {
    line1: "First Floor, Currency Tower",
    line2: "VIP Road, Raipur",
    region: "Chhattisgarh",
    country: "India",
  },
  hours: "Open daily · 10:30 am – 9:30 pm",
  hoursSchema: "Mo-Su 10:30-21:30",
  whatsapp: {
    number: "919201661918",
    display: "+91 92016 61918",
  },
  phoneHref: "tel:+919201661918",
  mapUrl: "https://maps.app.goo.gl/MDF4G1tSF6YctSvS7",
  mapEmbed:
    "https://www.google.com/maps?q=Currency+Tower,+VIP+Road,+Raipur,+Chhattisgarh&output=embed",
  social: {
    instagram: "https://www.instagram.com/deeva.diamonds/",
    instagramHandle: "@deeva.diamonds",
    youtube: "https://youtube.com/@deeva_lgds",
  },
  startingPrice: "₹20,000",
};

/** Brand-wide assurances as published by DEEVA. */
export const assurances = [
  {
    title: "IGI-certified",
    text: "Lab-grown diamonds accompanied by an independent IGI grading report.",
  },
  {
    title: "BIS-hallmarked gold",
    text: "Gold that carries the Bureau of Indian Standards hallmark of purity.",
  },
  {
    title: "Fully customised",
    text: "Pieces created around your design, your stone and your budget.",
  },
  {
    title: "Exchange & buyback",
    text: "100% diamond exchange and 80% buyback. Terms and conditions apply.",
  },
];

export function whatsappLink(
  message = "Hello DEEVA, I would like to know more about your lab-grown diamond jewellery.",
) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
