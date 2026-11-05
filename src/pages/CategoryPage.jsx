import { Link, Navigate, useParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Picture from "../components/ui/Picture";
import PieceCard from "../components/product/PieceCard";
import { collections, getCollection } from "../data/collections";
import { piecesIn } from "../data/pieces";
import { whatsappLink } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function CategoryPage() {
  const { category } = useParams();
  const collection = getCollection(category);
  usePageMeta({
    title: collection ? `Lab-Grown Diamond ${collection.name}` : "Collection",
    description: collection
      ? `${collection.name} by DEEVA — IGI-certified lab-grown diamonds in BIS-hallmarked gold. ${collection.line} Fully customisable, at our Raipur boutique.`
      : undefined,
  });
  if (!collection) return <Navigate to="/collections" replace />;

  const items = piecesIn(collection.slug);
  const index = collections.indexOf(collection);
  const next = collections[(index + 1) % collections.length];

  return (
    <>
      <PageHero
        tone="dark"
        eyebrow={collection.eyebrow}
        title={collection.name}
        intro={collection.line}
        image={collection.image}
        crumbs={[
          { label: "Collections", to: "/collections" },
          { label: collection.name },
        ]}
      />

      <section className="section cat-intro" aria-labelledby="cat-intro-title">
        <div className="container cat-intro__grid">
          <div className="cat-intro__copy">
            <p className="eyebrow" data-reveal>
              The {collection.name.toLowerCase()} collection
            </p>
            <h2
              id="cat-intro-title"
              className="cat-intro__statement"
              data-reveal
            >
              {collection.intro}
            </h2>
            <div className="btn-row" data-reveal>
              <a
                className="btn btn--dark"
                href={whatsappLink(
                  `Hello DEEVA, I would like to see your ${collection.name.toLowerCase()} — designs and prices, please.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                See current designs on WhatsApp
              </a>
              <Link className="btn" to="/contact?topic=custom">
                Customise a piece
              </Link>
            </div>
          </div>
          <div className="cat-intro__media media" data-reveal="mask">
            <Picture
              slug={collection.mood}
              sizes="(min-width: 900px) 34vw, 100vw"
              data-parallax="5"
            />
          </div>
        </div>
      </section>

      <section className="section on-white" aria-labelledby="cat-styles-title">
        <div className="container">
          <header className="cat-styles__head">
            <h2 id="cat-styles-title" className="h3">
              Styles to inspire
            </h2>
            <p className="showcase__note">
              Representative designs · Every style can be customised
            </p>
          </header>
          <div className="pgrid">
            {items.map((p) => (
              <PieceCard key={p.slug} piece={p} />
            ))}
            <article className="piece piece--custom" data-reveal>
              <Link to="/contact?topic=custom" className="piece__custom">
                <span className="numeral">∞</span>
                <h3 className="h3">Design your own</h3>
                <p>
                  Bring us your idea and we will create{" "}
                  {collection.name.toLowerCase()} around your vision, your stone
                  and your budget.
                </p>
                <span className="link-line">
                  Begin a custom design <span className="arrow">→</span>
                </span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="next-cat on-dark">
        <Link
          to={`/collections/${next.slug}`}
          className="next-cat__link container"
        >
          <span className="eyebrow">Next collection</span>
          <span className="next-cat__name display">
            {next.name} <span className="arrow">→</span>
          </span>
          <div className="next-cat__media media" aria-hidden="true">
            <Picture slug={next.image} sizes="20vw" alt="" />
          </div>
        </Link>
      </section>
    </>
  );
}
