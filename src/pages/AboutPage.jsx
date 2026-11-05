import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Picture from "../components/ui/Picture";
import Logo from "../components/brand/Logo";
import FinalCTA from "../components/home/FinalCTA";
import { assurances, site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const principles = [
  {
    title: "Modern by nature",
    text: "We believe a diamond’s beauty lies in its brilliance, its craftsmanship and the meaning it holds — and that lab-grown diamonds offer a thoroughly contemporary way to wear it.",
  },
  {
    title: "Certain, not uncertain",
    text: "Luxury should come with clarity. That is why we offer IGI-certified lab-grown diamonds and BIS-hallmarked gold, so every piece is exactly what it is described to be.",
  },
  {
    title: "Yours, entirely",
    text: "The most beautiful jewellery is personal. Every DEEVA piece can be customised, shaped around your style, your occasion and your budget.",
  },
];

export default function AboutPage() {
  usePageMeta({
    title: "About DEEVA",
    description:
      "DEEVA is a lab-grown diamond jewellery house in Raipur, offering IGI-certified diamonds, BIS-hallmarked gold and fully customised designs. Discover our philosophy.",
  });
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="About DEEVA"
        title={
          <>
            The art of <em>modern</em> brilliance.
          </>
        }
        intro="A lab-grown diamond jewellery house, created for those who value beauty, certainty and a piece that is truly their own."
        image="world-bridal"
        focus="50% 28%"
        crumbs={[{ label: "About" }]}
      />

      <section
        className="section about-open"
        aria-labelledby="about-open-title"
      >
        <div className="container about-open__grid">
          <div className="about-open__mark" data-reveal>
            <Logo variant="stacked" />
          </div>
          <div className="about-open__copy">
            <p className="eyebrow" data-reveal>
              Our story
            </p>
            <h2 id="about-open-title" className="h2" data-reveal>
              DEEVA brings the brilliance of diamonds into a <em>modern</em>{" "}
              light.
            </h2>
            <p className="body-copy" data-reveal>
              From our boutique on VIP Road in Raipur, we create jewellery with
              IGI-certified lab-grown diamonds, set in BIS-hallmarked gold —
              rings, earrings, pendants, necklaces and bracelets designed for
              the moments that matter and for the days in between.
            </p>
            <p className="body-copy" data-reveal>
              We design pieces to be worn, not kept in a box: from lightweight
              necklaces of around seven to eight grams for everyday elegance, to
              fuller pieces for weddings and festivals. And because every client
              is different, every design can be fully customised.
            </p>
            <p className="body-copy" data-reveal>
              We invite you to come in, take your time, and try them on.
            </p>
          </div>
        </div>
      </section>

      <section className="about-band" aria-hidden="true">
        <div className="about-band__media media">
          <Picture slug="world-earring" sizes="50vw" data-parallax="6" alt="" />
        </div>
        <div className="about-band__media media">
          <Picture slug="craft-setting" sizes="50vw" data-parallax="9" alt="" />
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className="container">
          <header className="split-head">
            <div>
              <p className="eyebrow">Our philosophy</p>
              <h2 id="principles-title" className="h1">
                What we <em>believe.</em>
              </h2>
            </div>
            <p className="body-copy split-head__aside">
              Three principles shape every piece that leaves our boutique — and
              every conversation we have with our clients.
            </p>
          </header>
          <ol className="principles">
            {principles.map((p, i) => (
              <li
                key={p.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.1}s` }}
              >
                <span className="numeral">{["I", "II", "III"][i]}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="body-copy">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="section on-dark about-approach"
        aria-labelledby="approach-title"
      >
        <div className="container about-approach__grid">
          <div className="about-approach__media media" data-reveal="mask">
            <Picture
              slug="story-loose-diamond"
              sizes="(min-width: 900px) 50vw, 100vw"
            />
          </div>
          <div className="about-approach__copy">
            <p className="eyebrow" data-reveal>
              Our promise
            </p>
            <h2 id="approach-title" className="h2" data-reveal>
              Every piece, <em>documented.</em>
            </h2>
            <ul className="about-approach__list">
              {assurances.map((a) => (
                <li key={a.title} data-reveal>
                  <h3 className="h4">{a.title}</h3>
                  <p>{a.text}</p>
                </li>
              ))}
            </ul>
            <div data-reveal>
              <Link to="/lab-grown-diamonds" className="link-line">
                Understanding lab-grown diamonds{" "}
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-visit" aria-labelledby="visit-title">
        <div className="container about-visit__grid">
          <div>
            <p className="eyebrow" data-reveal>
              The boutique
            </p>
            <h2 id="visit-title" className="h2" data-reveal>
              Come and <em>try them on.</em>
            </h2>
          </div>
          <div className="about-visit__details" data-reveal>
            <address>
              {site.address.line1}
              <br />
              {site.address.line2}
            </address>
            <p>{site.hours}</p>
            <div className="btn-row">
              <a
                className="btn btn--dark"
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
              <Link className="btn" to="/contact?topic=visit">
                Book a visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA images={["world-emerald", "piece-cocktail-ring"]} />
    </>
  );
}
