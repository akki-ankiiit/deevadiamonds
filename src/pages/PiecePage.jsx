import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/ui/PageHero";
import Picture from "../components/ui/Picture";
import PieceCard from "../components/product/PieceCard";
import EnquiryForm from "../components/product/EnquiryForm";
import { WhatsAppIcon } from "../components/ui/Icons";
import { getCollection } from "../data/collections";
import { getPiece, pieces } from "../data/pieces";
import { assurances, site, whatsappLink } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function PiecePage() {
  const { category, piece: slug } = useParams();
  const piece = getPiece(slug);
  const collection = piece && getCollection(piece.collection);
  const [active, setActive] = useState(0);
  usePageMeta({
    title: piece ? `${piece.name} — ${collection.name}` : "Style",
    description: piece
      ? `${piece.summary} IGI-certified lab-grown diamond, BIS-hallmarked gold, fully customisable at DEEVA, Raipur.`
      : undefined,
  });
  if (!piece || piece.collection !== category)
    return <Navigate to={`/collections/${category ?? ""}`} replace />;

  const gallery = [piece.image, ...piece.gallery];
  const related = pieces
    .filter((p) => p.slug !== piece.slug && p.collection === piece.collection)
    .concat(pieces.filter((p) => p.collection !== piece.collection))
    .slice(0, 3);
  const specs = [
    { label: "Diamond", value: piece.specs.diamond },
    { label: "Metal", value: piece.specs.metal },
    { label: "Design", value: piece.specs.design },
    {
      label: "Carat, colour & clarity",
      value: "Chosen with you · stated on the IGI report",
    },
    { label: "Price", value: piece.specs.price },
  ];

  return (
    <>
      <section className="pdp">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Collections", to: "/collections" },
              { label: collection.name, to: `/collections/${collection.slug}` },
              { label: piece.name },
            ]}
          />
          <div className="pdp__grid">
            <div className="pdp__gallery">
              <div className="pdp__stage media">
                {gallery.map((g, i) => (
                  <Picture
                    key={g}
                    slug={g}
                    priority={i === 0}
                    sizes="(min-width: 900px) 55vw, 100vw"
                    className={`pdp__slide ${i === active ? "is-active" : ""}`}
                    aria-hidden={i !== active}
                  />
                ))}
              </div>
              <div
                className="pdp__thumbs"
                role="group"
                aria-label="Choose image"
              >
                {gallery.map((g, i) => (
                  <button
                    key={g}
                    type="button"
                    className={`pdp__thumb media ${i === active ? "is-active" : ""}`}
                    aria-label={`Show image ${i + 1} of ${gallery.length}`}
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                  >
                    <Picture slug={g} sizes="120px" alt="" />
                  </button>
                ))}
              </div>
              <p className="pdp__note">
                Representative imagery. Your piece is made to order.
              </p>
            </div>

            <div className="pdp__info">
              <p className="eyebrow">{collection.name}</p>
              <h1 className="h1 pdp__title">{piece.name}</h1>
              <p className="lead">{piece.summary}</p>

              <dl className="pdp__specs">
                {specs.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="pdp__actions">
                <a
                  className="btn btn--dark btn--block"
                  href={whatsappLink(
                    `Hello DEEVA, I am interested in the ${piece.name} (${collection.name}). Could you share designs, options and prices?\n${site.url}/collections/${collection.slug}/${piece.slug}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> Enquire on WhatsApp
                </a>
                <a className="btn btn--block" href="#enquire">
                  Request a consultation
                </a>
              </div>

              <ul className="pdp__assure">
                {assurances.map((a) => (
                  <li key={a.title}>
                    <strong>{a.title}</strong> — {a.text}
                  </li>
                ))}
              </ul>

              <p className="pdp__visit">
                Try it on at our boutique: {site.address.line1},{" "}
                {site.address.line2}. {site.hours}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="enquire"
        className="section on-cream pdp-enquire"
        aria-labelledby="enquire-title"
      >
        <div className="container pdp-enquire__grid">
          <div>
            <p className="eyebrow">Personal consultation</p>
            <h2 id="enquire-title" className="h2">
              Let’s make it <em>yours.</em>
            </h2>
            <p className="body-copy">
              Tell us how you imagine your {piece.name.toLowerCase()} — the
              diamond, the gold, the details — and our team will guide you
              through options and pricing.
            </p>
          </div>
          <EnquiryForm initialTopic="price" piece={piece.name} />
        </div>
      </section>

      <section className="section" aria-labelledby="related-title">
        <div className="container">
          <header className="cat-styles__head">
            <h2 id="related-title" className="h3">
              You may also love
            </h2>
            <Link to="/collections" className="link-line">
              All collections <span className="arrow">→</span>
            </Link>
          </header>
          <div className="pgrid">
            {related.map((p) => (
              <PieceCard key={p.slug} piece={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
