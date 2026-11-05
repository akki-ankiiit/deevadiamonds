import { Link } from "react-router-dom";
import { Emblem } from "../components/brand/Logo";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta({
    title: "Page not found",
    description: "The page you are looking for could not be found.",
  });
  return (
    <section className="notfound on-dark">
      <Emblem className="notfound__emblem" />
      <div className="container notfound__inner">
        <p className="eyebrow eyebrow--plain">Error 404</p>
        <h1 className="display">
          This piece is <em>not here.</em>
        </h1>
        <p className="lead">
          The page you are looking for may have moved. Let us guide you back to
          the brilliance.
        </p>
        <div className="btn-row">
          <Link to="/" className="btn btn--gold">
            Return home
          </Link>
          <Link to="/collections" className="btn btn--light">
            Explore collections
          </Link>
        </div>
      </div>
    </section>
  );
}
