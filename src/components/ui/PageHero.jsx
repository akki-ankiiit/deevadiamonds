import { Link } from "react-router-dom";
import Picture from "./Picture";

export function Breadcrumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label}>
            {item.to && i < items.length - 1 ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * Internal page hero.
 * tone="dark": full-bleed image under a forest veil (header overlays it).
 * tone="light": ivory editorial split with image.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  tone = "light",
  crumbs = [],
  children,
  focus,
}) {
  if (tone === "dark") {
    return (
      <section className="phero phero--dark on-dark">
        {image && (
          <div className="phero__media media">
            <Picture
              slug={image}
              priority
              sizes="100vw"
              focus={focus}
              className="phero__pic"
            />
          </div>
        )}
        <div className="phero__veil" aria-hidden="true" />
        <div className="phero__content container">
          <Breadcrumbs items={crumbs} />
          {eyebrow && (
            <p className="eyebrow hero__rise" style={{ "--d": "0.3s" }}>
              {eyebrow}
            </p>
          )}
          <h1
            className="display phero__title hero__rise"
            style={{ "--d": "0.45s" }}
          >
            {title}
          </h1>
          {intro && (
            <p className="lead hero__rise" style={{ "--d": "0.6s" }}>
              {intro}
            </p>
          )}
          {children}
        </div>
      </section>
    );
  }
  return (
    <section className="phero phero--light">
      <div className="container phero__grid">
        <div className="phero__copy">
          <Breadcrumbs items={crumbs} />
          {eyebrow && (
            <p className="eyebrow hero__rise" style={{ "--d": "0.2s" }}>
              {eyebrow}
            </p>
          )}
          <h1 className="h1 phero__title hero__rise" style={{ "--d": "0.35s" }}>
            {title}
          </h1>
          {intro && (
            <p className="lead hero__rise" style={{ "--d": "0.5s" }}>
              {intro}
            </p>
          )}
          {children}
        </div>
        {image && (
          <div className="phero__media media hero__media-reveal">
            <Picture
              slug={image}
              priority
              sizes="(min-width: 900px) 45vw, 100vw"
              focus={focus}
            />
          </div>
        )}
      </div>
    </section>
  );
}
