import { Link } from "react-router-dom";
import Picture from "../ui/Picture";
import { comparison, storyPoints } from "../../data/education";

export function ComparisonTable({ className = "" }) {
  return (
    <div className={`compare ${className}`} data-reveal>
      <table>
        <caption className="sr-only">
          Natural and lab-grown diamonds compared
        </caption>
        <thead>
          <tr>
            <th scope="col">
              <span className="sr-only">Property</span>
            </th>
            <th scope="col">Natural diamond</th>
            <th scope="col">Lab-grown diamond</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.natural}</td>
              <td>{row.lab}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DiamondStory() {
  return (
    <section className="story section" aria-labelledby="story-title">
      <div className="container story__grid">
        <div className="story__aside">
          <div className="story__sticky">
            <p className="eyebrow" data-reveal>
              The Lab-Grown Diamond
            </p>
            <h2
              id="story-title"
              className="h1"
              data-reveal
              style={{ "--reveal-delay": "0.1s" }}
            >
              A modern perspective on a <em>timeless</em> diamond.
            </h2>
            <div className="story__media media" data-reveal="mask">
              <Picture
                slug="story-loose-diamond"
                sizes="(min-width: 900px) 40vw, 100vw"
              />
            </div>
            <div data-reveal>
              <Link to="/lab-grown-diamonds" className="btn">
                Discover the world of lab-grown diamonds
              </Link>
            </div>
          </div>
        </div>

        <div className="story__main">
          <ol className="story__list">
            {storyPoints.map((p, i) => (
              <li key={p.title} data-reveal>
                <span className="numeral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="h3">{p.title}</h3>
                  <p className="body-copy">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <ComparisonTable />
        </div>
      </div>
    </section>
  );
}
