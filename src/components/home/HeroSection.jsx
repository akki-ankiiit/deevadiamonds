import { Link } from "react-router-dom";
import Picture from "../ui/Picture";
import { Emblem } from "../brand/Logo";

export default function HeroSection() {
  return (
    <section className="hero on-dark" aria-labelledby="hero-title">
      <div className="hero__media media">
        <Picture slug="hero" priority sizes="(min-width: 900px) 58vw, 100vw" className="hero__pic" />
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__copy">
          <p className="eyebrow hero__rise" style={{ "--d": "0.5s" }}>
            The art of brilliance
          </p>
          <h1 id="hero-title" className="display hero__title">
            <span className="hero__line">
              <span style={{ "--d": "0.65s" }}>A brilliance</span>
            </span>
            <span className="hero__line">
              <span style={{ "--d": "0.78s" }}>
                that is <em>entirely</em>
              </span>
            </span>
            <span className="hero__line">
              <span style={{ "--d": "0.91s" }}>your own.</span>
            </span>
          </h1>
          <p className="lead hero__lead hero__rise" style={{ "--d": "1.15s" }}>
            Discover the timeless beauty of lab-grown diamonds, thoughtfully selected for their brilliance and crafted to
            celebrate life’s most meaningful moments.
          </p>
          <div className="btn-row hero__rise" style={{ "--d": "1.3s" }}>
            <Link to="/collections" className="btn btn--gold">
              Explore Collection
            </Link>
            <Link to="/about" className="btn btn--light">
              Discover DEEVA
            </Link>
          </div>
        </div>

        <div className="hero__meta hero__rise" style={{ "--d": "1.5s" }}>
          <Emblem className="hero__emblem" />
          <ul>
            <li>IGI-certified diamonds</li>
            <li>BIS-hallmarked gold</li>
            <li>Raipur boutique</li>
          </ul>
        </div>
      </div>

      <a href="#philosophy" className="hero__scroll" aria-label="Scroll to discover">
        <span />
      </a>
    </section>
  );
}
