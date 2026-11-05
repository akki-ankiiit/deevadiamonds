import { Link } from "react-router-dom";
import Logo from "../brand/Logo";
import { site, whatsappLink } from "../../data/site";
import { collections } from "../../data/collections";
import { InstagramIcon, WhatsAppIcon, YouTubeIcon } from "../ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer on-dark">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" aria-label="DEEVA — home">
              <Logo variant="stacked" />
            </Link>
            <p className="footer__intro">
              A modern expression of diamond brilliance, design and timeless
              elegance.
            </p>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            <div>
              <h2 className="footer__heading">Explore</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About DEEVA</Link>
                </li>
                <li>
                  <Link to="/collections">Collections</Link>
                </li>
                <li>
                  <Link to="/lab-grown-diamonds">Lab-grown diamonds</Link>
                </li>
                <li>
                  <Link to="/contact?topic=custom">Custom design</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer__heading">Collections</h2>
              <ul>
                {collections.map((c) => (
                  <li key={c.slug}>
                    <Link to={`/collections/${c.slug}`}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="footer__heading">Client care</h2>
              <ul>
                <li>
                  <Link to="/exchange-and-buyback">Exchange &amp; buyback</Link>
                </li>
                <li>
                  <Link to="/lab-grown-diamonds#certification">
                    Certification
                  </Link>
                </li>
                <li>
                  <Link to="/lab-grown-diamonds#care">Jewellery care</Link>
                </li>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp enquiries
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__visit">
              <h2 className="footer__heading">The boutique</h2>
              <address>
                {site.tradingName}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
              </address>
              <p>{site.hours}</p>
              <p>
                <a href={site.phoneHref}>{site.whatsapp.display}</a>
              </p>
              <a
                className="link-line"
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions <span className="arrow">→</span>
              </a>
            </div>
          </nav>
        </div>

        <div className="footer__social">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DEEVA on Instagram"
          >
            <InstagramIcon /> <span>Instagram</span>
          </a>
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DEEVA on YouTube"
          >
            <YouTubeIcon /> <span>YouTube</span>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message DEEVA on WhatsApp"
          >
            <WhatsAppIcon /> <span>WhatsApp</span>
          </a>
        </div>

        <div className="footer__bottom">
          <p>© {year} DEEVA · Lab Grown Diamond. All rights reserved.</p>
          <ul>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/exchange-and-buyback">Exchange &amp; Buyback</Link>
            </li>
          </ul>
        </div>

        <div className="footer__credit">
          <span className="footer__credit-ornament" aria-hidden="true" />
          <p className="footer__credit-label">Designed &amp; developed by</p>
          <p className="footer__credit-name">Ankit Chandrakar</p>
          <a
            className="footer__credit-link"
            href="https://ankit.devs.surf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ankit.devs.surf
          </a>
        </div>
      </div>
    </footer>
  );
}
