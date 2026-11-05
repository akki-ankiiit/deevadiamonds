import { Link } from "react-router-dom";
import Picture from "../ui/Picture";
import { Emblem } from "../brand/Logo";

export default function FinalCTA({
  title = (
    <>
      Discover your kind of <em>brilliance.</em>
    </>
  ),
  text = "Explore the world of DEEVA and find a piece that speaks to you.",
  cta = { label: "Explore the Collection", to: "/collections" },
  images = ["world-cascade", "world-bridal"],
}) {
  return (
    <section className="final on-dark" aria-labelledby="final-title">
      <Emblem className="final__emblem" />
      <div className="container final__grid">
        <div className="final__media final__media--a media" data-reveal="mask">
          <Picture
            slug={images[0]}
            sizes="(min-width: 900px) 24vw, 60vw"
            data-parallax="6"
          />
        </div>
        <div className="final__copy">
          <p className="eyebrow eyebrow--plain" data-reveal>
            DEEVA · Lab Grown Diamond
          </p>
          <h2
            id="final-title"
            className="h1"
            data-reveal
            style={{ "--reveal-delay": "0.1s" }}
          >
            {title}
          </h2>
          <p className="lead" data-reveal style={{ "--reveal-delay": "0.2s" }}>
            {text}
          </p>
          <div data-reveal style={{ "--reveal-delay": "0.3s" }}>
            <Link to={cta.to} className="btn btn--gold">
              {cta.label}
            </Link>
          </div>
        </div>
        <div
          className="final__media final__media--b media"
          data-reveal="mask"
          style={{ "--reveal-delay": "0.2s" }}
        >
          <Picture
            slug={images[1]}
            sizes="(min-width: 900px) 20vw, 40vw"
            data-parallax="9"
          />
        </div>
      </div>
    </section>
  );
}
