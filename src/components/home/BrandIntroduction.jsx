import { Link } from "react-router-dom";
import Picture from "../ui/Picture";
import { assurances } from "../../data/site";

export default function BrandIntroduction() {
  return (
    <section
      id="philosophy"
      className="intro section"
      aria-labelledby="intro-title"
    >
      <div className="container intro__grid">
        <figure className="intro__figure">
          <div className="intro__media media" data-reveal="mask">
            <Picture
              slug="philosophy"
              sizes="(min-width: 900px) 42vw, 100vw"
              data-parallax="6"
              className="intro__pic"
            />
          </div>
          <figcaption className="intro__caption">
            <span className="numeral">i.</span> Brilliance, worn with intention
          </figcaption>
        </figure>

        <div className="intro__copy">
          <p className="eyebrow" data-reveal>
            The DEEVA Philosophy
          </p>
          <h2
            id="intro-title"
            className="h1"
            data-reveal
            style={{ "--reveal-delay": "0.1s" }}
          >
            Where brilliance <em>meets</em> intention.
          </h2>
          <p className="lead" data-reveal style={{ "--reveal-delay": "0.2s" }}>
            At DEEVA, we celebrate the beauty of diamonds through a modern
            perspective. Discover lab-grown diamonds that bring together
            timeless elegance, thoughtful design and the brilliance of
            contemporary craftsmanship.
          </p>
          <div data-reveal style={{ "--reveal-delay": "0.3s" }}>
            <Link to="/about" className="link-line">
              Our story <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="promise" aria-label="The DEEVA promise">
          {assurances.map((a, i) => (
            <li
              key={a.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.08}s` }}
            >
              <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="h4">{a.title}</h3>
              <p>{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
