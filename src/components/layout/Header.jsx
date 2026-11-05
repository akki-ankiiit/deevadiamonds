import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../brand/Logo";
import Picture from "../ui/Picture";
import { ChevronIcon, SearchIcon, WhatsAppIcon } from "../ui/Icons";
import { announcements, primaryNav } from "../../data/navigation";
import { collections } from "../../data/collections";
import { whatsappLink } from "../../data/site";
import MobileMenu from "./MobileMenu";
import SearchOverlay from "./SearchOverlay";
import { getLenis } from "../../hooks/useMotion";

function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % announcements.length),
      5200,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <div className="announce" role="region" aria-label="Announcements">
      <div className="announce__track" aria-live="off">
        {announcements.map((text, i) => (
          <p
            key={text}
            className={`announce__item ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

function MegaMenu({ open, onClose, id }) {
  const [active, setActive] = useState(collections[0].slug);
  const current = collections.find((c) => c.slug === active);
  return (
    <div
      id={id}
      className={`mega ${open ? "is-open" : ""}`}
      aria-hidden={!open}
    >
      <div className="mega__inner container">
        <div className="mega__intro">
          <p className="eyebrow">The Collections</p>
          <p className="mega__lede">
            Lab-grown diamonds in BIS-hallmarked gold — every piece can be{" "}
            <em>made your own.</em>
          </p>
          <Link
            className="link-line"
            to="/collections"
            tabIndex={open ? 0 : -1}
            onClick={onClose}
          >
            View all collections <span className="arrow">→</span>
          </Link>
        </div>
        <ol className="mega__list">
          {collections.map((c, i) => (
            <li key={c.slug}>
              <Link
                to={`/collections/${c.slug}`}
                tabIndex={open ? 0 : -1}
                onMouseEnter={() => setActive(c.slug)}
                onFocus={() => setActive(c.slug)}
                onClick={onClose}
                className={active === c.slug ? "is-active" : ""}
              >
                <span className="numeral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mega__name">{c.name}</span>
                <span className="mega__line">{c.line}</span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="mega__aside">
          <div className="mega__image media">
            {collections.map((c) => (
              <Picture
                key={c.slug}
                slug={c.image}
                sizes="22vw"
                className={`mega__pic ${c.slug === current.slug ? "is-active" : ""}`}
                alt=""
              />
            ))}
          </div>
          <div className="mega__links">
            <Link
              to="/lab-grown-diamonds"
              tabIndex={open ? 0 : -1}
              onClick={onClose}
            >
              The lab-grown diamond
            </Link>
            <Link
              to="/contact?topic=custom"
              tabIndex={open ? 0 : -1}
              onClick={onClose}
            >
              Custom design
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header({ overlay = false }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const closeTimer = useRef();
  const headerRef = useRef();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMega(false);
    setMenu(false);
    setSearch(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const lenis = getLenis();
    const locked = menu || search;
    document.documentElement.classList.toggle("is-locked", locked);
    if (lenis) locked ? lenis.stop() : lenis.start();
  }, [menu, search]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMega(false);
      const typing = /input|textarea|select/i.test(
        document.activeElement?.tagName,
      );
      if (e.key === "/" && !typing) {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMega(true);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(false), 180);
  };

  const solid = scrolled || mega || menu || !overlay;
  const tone = menu
    ? "dark"
    : overlay && !scrolled && !mega
      ? "overlay"
      : overlay || mega
        ? "dark"
        : "light";

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div
        className={`site-top ${scrolled && !menu ? "is-scrolled" : ""} ${menu ? "is-menu" : ""}`}
      >
        <AnnouncementBar />
        <header
          ref={headerRef}
          className={`header header--${tone} ${solid ? "is-solid" : ""}`}
          onMouseLeave={scheduleClose}
        >
          <div className="header__inner container">
            <Link to="/" className="header__logo" aria-label="DEEVA — home">
              <Logo variant="inline" tone={tone === "light" ? "green" : "gold"} />
            </Link>

            <nav className="header__nav" aria-label="Primary">
              <ul>
                {primaryNav.map((item) =>
                  item.mega ? (
                    <li key={item.to} onMouseEnter={openMega}>
                      <NavLink
                        to={item.to}
                        className="nav-link"
                        aria-expanded={mega}
                        aria-controls="mega-menu"
                        onFocus={openMega}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setMega(true);
                            requestAnimationFrame(() =>
                              document
                                .querySelector("#mega-menu .mega__list a")
                                ?.focus(),
                            );
                          }
                        }}
                      >
                        {item.label}
                        <ChevronIcon className="nav-link__chev" />
                      </NavLink>
                    </li>
                  ) : (
                    <li key={item.to} onMouseEnter={scheduleClose}>
                      <NavLink to={item.to} end className="nav-link">
                        {item.label}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <div className="header__actions">
              <button
                type="button"
                className="icon-btn"
                aria-label="Search the site"
                onClick={() => setSearch(true)}
              >
                <SearchIcon />
              </button>
              <a
                className="icon-btn header__wa"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message DEEVA on WhatsApp (opens in a new tab)"
              >
                <WhatsAppIcon />
              </a>
              <Link to="/contact" className="header__cta">
                Book a consultation
              </Link>
              <button
                type="button"
                className={`burger ${menu ? "is-open" : ""}`}
                aria-label={menu ? "Close menu" : "Open menu"}
                aria-expanded={menu}
                aria-controls="mobile-menu"
                onClick={() => setMenu((m) => !m)}
              >
                <span />
                <span />
              </button>
            </div>
          </div>
          <div onMouseEnter={openMega}>
            <MegaMenu
              id="mega-menu"
              open={mega}
              onClose={() => setMega(false)}
            />
          </div>
        </header>
      </div>
      <div
        className={`mega-scrim ${mega ? "is-open" : ""}`}
        onMouseEnter={scheduleClose}
        aria-hidden="true"
      />
      <MobileMenu open={menu} onClose={() => setMenu(false)} />
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </>
  );
}
