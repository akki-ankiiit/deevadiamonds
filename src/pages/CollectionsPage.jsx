import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import PieceCard from "../components/product/PieceCard";
import { CollectionTile } from "../components/home/CollectionGrid";
import FinalCTA from "../components/home/FinalCTA";
import { collections } from "../data/collections";
import { pieces } from "../data/pieces";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function CollectionsPage() {
  usePageMeta({
    title: "Collections",
    description:
      "Explore DEEVA's lab-grown diamond collections — rings, earrings, pendants, necklaces and bracelets in BIS-hallmarked gold, each fully customisable.",
  });
  const [params, setParams] = useSearchParams();
  const filter = params.get("category") || "all";
  const shown = useMemo(
    () =>
      filter === "all" ? pieces : pieces.filter((p) => p.collection === filter),
    [filter],
  );

  const choose = (value) => {
    const next = new URLSearchParams(params);
    if (value === "all") next.delete("category");
    else next.set("category", value);
    setParams(next, { replace: true, preventScrollReset: true });
  };

  return (
    <>
      <PageHero
        eyebrow="The Collections"
        title={
          <>
            Brilliance, in <em>five forms.</em>
          </>
        }
        intro={`IGI-certified lab-grown diamonds, set in BIS-hallmarked gold. Explore each collection, then make any piece entirely your own. Jewellery from ${site.startingPrice}.`}
        image="collection-necklaces"
        crumbs={[{ label: "Collections" }]}
      />

      <section
        className="section collections-index"
        aria-labelledby="cats-title"
      >
        <div className="container">
          <h2 id="cats-title" className="sr-only">
            Collections
          </h2>
          <div className="cindex">
            {collections.map((c, i) => (
              <CollectionTile
                key={c.slug}
                collection={c}
                index={i}
                className="cindex__item"
                sizes="(min-width: 1100px) 20vw, (min-width: 640px) 33vw, 50vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section on-white" aria-labelledby="styles-title">
        <div className="container">
          <header className="split-head">
            <div>
              <p className="eyebrow">Discover by style</p>
              <h2 id="styles-title" className="h2">
                Signature <em>silhouettes.</em>
              </h2>
            </div>
            <p className="body-copy split-head__aside">
              Representative designs from each collection. Every style can be
              customised — the stone, the gold and the details — and our
              boutique holds many more designs to try on.
            </p>
          </header>

          <div
            className="filters"
            role="group"
            aria-label="Filter by collection"
          >
            {[{ slug: "all", name: "All" }, ...collections].map((c) => (
              <button
                key={c.slug}
                type="button"
                className={`filter ${filter === c.slug ? "is-active" : ""}`}
                aria-pressed={filter === c.slug}
                onClick={() => choose(c.slug)}
              >
                {c.name}
                <span className="filter__count">
                  {c.slug === "all"
                    ? pieces.length
                    : pieces.filter((p) => p.collection === c.slug).length}
                </span>
              </button>
            ))}
          </div>

          <p className="sr-only" aria-live="polite">
            Showing {shown.length} styles
          </p>
          <div className="pgrid">
            {shown.map((p) => (
              <PieceCard key={p.slug} piece={p} />
            ))}
          </div>
          <p className="showcase__note pgrid__note">
            Imagery is representative of styles available to order.{" "}
            <Link to="/contact?topic=price">
              Ask for current designs and prices.
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA
        title={
          <>
            Imagine it. <em>We’ll make it yours.</em>
          </>
        }
        text="Every DEEVA piece can be customised, from the diamond to the final detail."
        cta={{
          label: "Enquire about custom design",
          to: "/contact?topic=custom",
        }}
        images={["bespoke", "world-lace"]}
      />
    </>
  );
}
