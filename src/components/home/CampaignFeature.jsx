import { Link } from "react-router-dom";
import Picture from "../ui/Picture";

export default function CampaignFeature() {
  return (
    <section className="campaign on-dark" aria-labelledby="campaign-title">
      <div className="campaign__media media">
        <Picture slug="campaign" sizes="100vw" data-parallax="7" />
      </div>
      <div className="campaign__veil" aria-hidden="true" />
      <div className="campaign__content container">
        <p className="eyebrow" data-reveal>
          The Campaign
        </p>
        <h2
          id="campaign-title"
          className="display"
          data-reveal
          style={{ "--reveal-delay": "0.1s" }}
        >
          Created to <em>catch</em> the light.
        </h2>
        <div
          className="campaign__foot"
          data-reveal
          style={{ "--reveal-delay": "0.2s" }}
        >
          <p className="lead">
            A celebration of exceptional brilliance, beautiful details and
            contemporary elegance.
          </p>
          <Link to="/collections/rings" className="link-line">
            Discover the rings <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
