import { Link } from "react-router-dom";
import Picture from "../ui/Picture";
import { site } from "../../data/site";
import { InstagramIcon } from "../ui/Icons";

const tiles = [
  {
    slug: "world-earring",
    to: "/collections/earrings",
    caption: "Candlelit detail",
  },
  { slug: "world-rings", to: "/collections/rings", caption: "Rings, together" },
  {
    slug: "world-bridal",
    to: "/collections/necklaces",
    caption: "The bridal choker",
  },
  { slug: "world-cascade", to: "/collections/earrings", caption: "Movement" },
  {
    slug: "world-emerald",
    to: "/collections/necklaces",
    caption: "Evening, in green",
  },
  {
    slug: "world-hands",
    to: "/collections/necklaces",
    caption: "A line of light",
  },
];

export default function InstagramGallery() {
  return (
    <section className="world section" aria-labelledby="world-title">
      <div className="container">
        <header className="world__head">
          <p className="eyebrow" data-reveal>
            {site.social.instagramHandle}
          </p>
          <h2
            id="world-title"
            className="h1"
            data-reveal
            style={{ "--reveal-delay": "0.1s" }}
          >
            The world of <em>DEEVA</em>
          </h2>
          <p
            className="body-copy"
            data-reveal
            style={{ "--reveal-delay": "0.2s" }}
          >
            A closer look at the details, moments and brilliance that inspire
            us.
          </p>
        </header>

        <div className="world__grid">
          {tiles.map((t, i) => (
            <Link
              key={t.slug}
              to={t.to}
              className={`world__tile world__tile--${i + 1}`}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 0.08}s` }}
            >
              <div className="media media--zoom">
                <Picture slug={t.slug} sizes="(min-width: 900px) 30vw, 50vw" />
              </div>
              <span className="world__caption">{t.caption}</span>
            </Link>
          ))}
        </div>

        <div className="world__foot" data-reveal>
          <a
            className="btn"
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon /> Follow {site.social.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
