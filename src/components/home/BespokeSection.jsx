import { Link } from "react-router-dom";
import Picture from "../ui/Picture";

const steps = [
  {
    title: "Share your vision",
    text: "Visit the boutique or message us with an idea, a sketch or a piece you love.",
  },
  {
    title: "Choose the details",
    text: "Select your diamond, your gold and the design details, guided by our team.",
  },
  {
    title: "Treasure it",
    text: "Receive a piece made around you, with its diamond certification.",
  },
];

export default function BespokeSection() {
  return (
    <section
      className="bespoke section on-cream"
      aria-labelledby="bespoke-title"
    >
      <div className="container bespoke__grid">
        <div className="bespoke__copy">
          <p className="eyebrow" data-reveal>
            Custom Design
          </p>
          <h2
            id="bespoke-title"
            className="h1"
            data-reveal
            style={{ "--reveal-delay": "0.1s" }}
          >
            Something beautiful. <em>Something uniquely yours.</em>
          </h2>
          <p className="lead" data-reveal style={{ "--reveal-delay": "0.2s" }}>
            From a personal vision to a piece you will treasure, discover the
            possibilities of creating jewellery that reflects your individual
            style.
          </p>
          <ol className="bespoke__steps">
            {steps.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ "--reveal-delay": `${0.1 + i * 0.08}s` }}
              >
                <span className="numeral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="h4">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div data-reveal>
            <Link to="/contact?topic=custom" className="btn btn--dark">
              Enquire about custom design
            </Link>
          </div>
        </div>
        <div className="bespoke__media media" data-reveal="mask">
          <Picture
            slug="bespoke"
            sizes="(min-width: 900px) 46vw, 100vw"
            data-parallax="5"
          />
        </div>
      </div>
    </section>
  );
}
