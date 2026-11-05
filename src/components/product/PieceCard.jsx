import { Link } from "react-router-dom";
import Picture from "../ui/Picture";
import { getCollection } from "../../data/collections";

export default function PieceCard({
  piece,
  sizes = "(min-width: 1100px) 30vw, (min-width: 640px) 45vw, 80vw",
}) {
  const collection = getCollection(piece.collection);
  return (
    <article className="piece" data-reveal>
      <Link
        to={`/collections/${piece.collection}/${piece.slug}`}
        className="piece__link"
      >
        <div className="piece__media media media--zoom">
          <Picture slug={piece.image} sizes={sizes} />
          <span className="piece__view" aria-hidden="true">
            View details
          </span>
        </div>
        <div className="piece__body">
          <p className="piece__cat">{collection.name}</p>
          <h3 className="piece__name">{piece.name}</h3>
          <p className="piece__meta">
            <span>Lab-grown diamond · Hallmarked gold</span>
            <span className="piece__price">Price on request</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
