import { Link } from "react-router-dom";
import PieceCard from "../product/PieceCard";
import { signaturePieces } from "../../data/pieces";
import { site, whatsappLink } from "../../data/site";

export default function ProductShowcase() {
  return (
    <section
      className="showcase section on-white"
      aria-labelledby="showcase-title"
    >
      <div className="container">
        <header className="showcase__head">
          <p className="eyebrow" data-reveal>
            Signature Pieces
          </p>
          <h2
            id="showcase-title"
            className="h1"
            data-reveal
            style={{ "--reveal-delay": "0.1s" }}
          >
            The DEEVA <em>edit.</em>
          </h2>
          <p
            className="body-copy"
            data-reveal
            style={{ "--reveal-delay": "0.2s" }}
          >
            A selection of the silhouettes our clients return to — each
            available in a design made around you. Our jewellery begins from{" "}
            {site.startingPrice}; ask us for current designs and prices.
          </p>
        </header>

        <div className="showcase__rail" role="list">
          {signaturePieces.map((piece) => (
            <div role="listitem" key={piece.slug} className="showcase__cell">
              <PieceCard piece={piece} />
            </div>
          ))}
        </div>

        <div className="showcase__foot" data-reveal>
          <p className="showcase__note">
            Imagery is representative of styles available to order.
          </p>
          <div className="btn-row">
            <Link to="/collections" className="btn">
              View all collections
            </Link>
            <a
              href={whatsappLink(
                "Hello DEEVA, I would like to see your current designs and prices.",
              )}
              className="btn btn--dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask for prices on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
