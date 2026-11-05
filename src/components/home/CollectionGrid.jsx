import { Link } from "react-router-dom";
import Picture from "../ui/Picture";
import { collections } from "../../data/collections";

export function CollectionTile({
  collection,
  index,
  className = "",
  sizes = "(min-width: 900px) 33vw, 100vw",
}) {
  return (
    <Link
      to={`/collections/${collection.slug}`}
      className={`ctile ${className}`}
      data-reveal
    >
      <div className="ctile__media media media--zoom">
        <Picture slug={collection.image} sizes={sizes} alt="" />
      </div>
      <div className="ctile__body">
        <span className="numeral">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="ctile__title">{collection.name}</h3>
          <p className="ctile__line">{collection.line}</p>
        </div>
        <span className="link-line ctile__link">
          Explore <span className="sr-only">{collection.name}</span>{" "}
          <span className="arrow">→</span>
        </span>
      </div>
    </Link>
  );
}

export default function CollectionGrid() {
  return (
    <section
      className="collections section on-cream"
      aria-labelledby="collections-title"
    >
      <div className="container">
        <header className="split-head">
          <div>
            <p className="eyebrow" data-reveal>
              Explore the Collections
            </p>
            <h2
              id="collections-title"
              className="h1"
              data-reveal
              style={{ "--reveal-delay": "0.1s" }}
            >
              Five ways to <em>wear the light.</em>
            </h2>
          </div>
          <div
            className="split-head__aside"
            data-reveal
            style={{ "--reveal-delay": "0.2s" }}
          >
            <p className="body-copy">
              Rings, earrings, pendants, necklaces and bracelets — each designed
              in BIS-hallmarked gold with IGI-certified lab-grown diamonds, and
              each open to be made entirely your own.
            </p>
            <Link to="/collections" className="link-line">
              All collections <span className="arrow">→</span>
            </Link>
          </div>
        </header>

        <div className="cgrid">
          <div className="cgrid__col cgrid__col--a">
            <CollectionTile
              collection={collections[0]}
              index={0}
              className="cgrid__item--rings"
              sizes="(min-width: 900px) 42vw, 100vw"
            />
            <CollectionTile
              collection={collections[3]}
              index={3}
              className="cgrid__item--necklaces"
              sizes="(min-width: 900px) 34vw, 100vw"
            />
          </div>
          <div className="cgrid__col cgrid__col--b">
            <div className="cgrid__pair">
              <CollectionTile
                collection={collections[1]}
                index={1}
                className="cgrid__item--earrings"
                sizes="(min-width: 900px) 24vw, 50vw"
              />
              <CollectionTile
                collection={collections[2]}
                index={2}
                className="cgrid__item--pendants"
                sizes="(min-width: 900px) 24vw, 50vw"
              />
            </div>
            <CollectionTile
              collection={collections[4]}
              index={4}
              className="cgrid__item--bracelets"
              sizes="(min-width: 900px) 36vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
