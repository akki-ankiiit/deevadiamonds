# DEEVA — Lab Grown Diamonds

The website for **DEEVA | Lab Grown Diamond** (Deeva Diamonds), Raipur. Built with React 19, Vite and React Router, with GSAP ScrollTrigger and Lenis for motion.

```bash
npm install
npm run dev        # local development
npm run build      # production build → dist/
npm run preview    # preview the production build
npm test           # Playwright tests (desktop + mobile)
npm run images     # rebuild responsive photography (see below)
```

Node.js 22+ is recommended. For a fresh testing environment, run `npx playwright install chromium` first.

## Brand and content inventory

Every business fact on the site comes from DEEVA's official Instagram profile and post captions ([@deeva.diamonds](https://www.instagram.com/deeva.diamonds/)), reviewed in November 2026. These facts live in `src/data/site.js`.

| Fact               | Value                                                 | Source             |
| ------------------ | ----------------------------------------------------- | ------------------ |
| Name               | DEEVA · Lab Grown Diamond (trading as Deeva Diamonds) | Profile, logo      |
| Offer              | IGI-certified lab-grown diamonds, BIS-hallmarked gold | Bio, captions      |
| Customisation      | Fully customised                                      | Bio                |
| Starting price     | From ₹20,000                                          | Bio, captions      |
| Exchange / buyback | 100% exchange, 80% buyback (T&C apply)                | Bio, captions      |
| Categories         | Rings, Earrings, Pendants, Necklaces, Bracelets       | Story highlights   |
| Lightweight pieces | Necklaces of around 7–8 g of gold                     | Dhanteras caption  |
| Boutique           | First Floor, Currency Tower, VIP Road, Raipur         | Bio link, captions |
| Hours              | Daily, 10:30 am – 9:30 pm                             | Captions           |
| WhatsApp           | +91 92016 61918                                       | Bio link, captions |
| Map, YouTube       | Google Maps link, youtube.com/@deeva_lgds             | Bio links          |

DEEVA is a **boutique jeweller with WhatsApp enquiries**, not an online shop, so the site is a discovery experience: there is no cart or checkout, and every conversion point leads to WhatsApp, the enquiry form or a boutique visit.

**Intentionally not published** (not verified): individual product names, prices, diamond specifications, gold caratage, email address, testimonials, delivery terms, the full exchange/buyback terms, and limited-time offers (such as the festive "0% making charges" campaign).

## What DEEVA should supply

1. **Logo.** The official artwork is in `public/images/Logos/` (`Frame 2` horizontal lockup, `Frame 3` stacked lockup, `Frame 4` emblem). Gold and green versions used by the site are in `public/brand/`. The emblem is applied as a CSS mask so it can take any colour without being redrawn.
2. **Product catalogue.** `src/data/pieces.js` contains representative _styles_ (e.g. "Pear Halo Ring") with brand-wide standards only. Replace or extend them with real pieces, verified specifications and prices. Fields left out fall back to "on request".
3. **Photography.** All current imagery is licensed from [Pexels](https://www.pexels.com/license/) (free commercial use, no attribution required) and is labelled on the site as representative. The source of every image is listed in `scripts/photography.mjs`. To use DEEVA's own photography, swap the source for a slug and run `npm run images`, or drop correctly sized files into `public/images/deeva/`.
4. **Exchange & buyback terms, privacy and terms copy.** The legal pages are sensible drafts and should be reviewed by DEEVA.
5. **Domain.** Set `VITE_SITE_URL` in `.env` (used for canonical URLs, Open Graph and structured data).

## Enquiries

The enquiry form validates its fields, then:

- with `VITE_CONTACT_ENDPOINT` set → POSTs JSON `{ name, phone, email, topic, message, piece }` and shows the result;
- without it → opens WhatsApp with the message pre-filled for DEEVA. It never claims a message was sent when it wasn't.

`/contact?topic=custom|visit|price|exchange` preselects the topic.

## Routes

| Route                                         | Page                                                |
| --------------------------------------------- | --------------------------------------------------- |
| `/`                                           | Homepage                                            |
| `/collections`                                | All collections + filterable styles (`?category=`)  |
| `/collections/:category`                      | Rings, earrings, pendants, necklaces, bracelets     |
| `/collections/:category/:piece`               | Style detail with gallery, specifications, enquiry  |
| `/about`                                      | About DEEVA                                         |
| `/lab-grown-diamonds`                         | Guide: what they are, HPHT/CVD, 4Cs, IGI, BIS, care |
| `/contact`                                    | Boutique details, enquiry form, map                 |
| `/privacy`, `/terms`, `/exchange-and-buyback` | Policies                                            |

## Structure

```text
public/
  brand/         Emblem SVGs and the original logo reference
  fonts/         Self-hosted Cormorant Garamond and DM Sans (woff2)
  images/deeva/  Responsive AVIF + WebP photography
  og-image.jpg   Social preview
src/
  components/
    brand/       Emblem and logo lockups
    home/        Homepage sections (Hero, BrandIntroduction, CollectionGrid,
                 ProductShowcase, CampaignFeature, DiamondStory,
                 CraftsmanshipSection, BespokeSection, InstagramGallery, FinalCTA)
    layout/      Header (announcement bar, mega menu), MobileMenu, SearchOverlay, Footer
    product/     PieceCard, EnquiryForm
    ui/          Picture, PageHero, Icons
  data/          site facts, collections, pieces, education, media, navigation
  hooks/         usePageMeta (SEO), useMotion (Lenis, reveals, parallax)
  pages/         Route pages
  styles/        tokens.css (design tokens), base, layout, home, pages
scripts/
  photography.mjs  Photography sources and the responsive image build
  screenshot.mjs   Visual QA screenshots at multiple breakpoints
tests/site.spec.js
```

## Design system

Tokens are in `src/styles/tokens.css`. The colours are sampled from the logo: forest `#0F2E20`, champagne gold `#C6A869`, warm ivory `#F7F4EC`. On light backgrounds, gold text uses `--gold-ink` (`#8A6D3B`) for contrast. Type pairs Cormorant Garamond (editorial headings) with DM Sans (body and UI) on a fluid `clamp()` scale.

Motion respects `prefers-reduced-motion`. In that mode, smooth scrolling, reveals and parallax are all switched off and content is shown immediately.

## Deployment

Deploy `dist/` to any static host with an SPA fallback. `vercel.json` (Vercel) and `public/_redirects` (Netlify) are included.
# deevadiamonds
