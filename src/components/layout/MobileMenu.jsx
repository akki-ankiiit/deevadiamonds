import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { collections } from "../../data/collections";
import { site, whatsappLink } from "../../data/site";
import { Emblem } from "../brand/Logo";
import { InstagramIcon, WhatsAppIcon } from "../ui/Icons";

const links = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "The Lab-Grown Diamond", to: "/lab-grown-diamonds" },
  { label: "About DEEVA", to: "/about" },
  { label: "Visit & Contact", to: "/contact" },
];

export default function MobileMenu({ open, onClose }) {
  const ref = useRef();

  useEffect(() => {
    if (!open) return undefined;
    const first = ref.current?.querySelector("a");
    first?.focus({ preventScroll: true });
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;
      const focusables = [...ref.current.querySelectorAll("a, button")];
      const [f, l] = [focusables[0], focusables[focusables.length - 1]];
      if (e.shiftKey && document.activeElement === f) {
        e.preventDefault();
        l.focus();
      } else if (!e.shiftKey && document.activeElement === l) {
        e.preventDefault();
        f.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      ref={ref}
      className={`mobile-menu ${open ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      inert={!open}
    >
      <Emblem className="mobile-menu__emblem" />
      <div className="mobile-menu__body">
        <nav aria-label="Mobile">
          <ul className="mobile-menu__primary">
            {links.map((l, i) => (
              <li key={l.to} style={{ "--i": i }}>
                <Link to={l.to} onClick={onClose}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mobile-menu__label">Shop by category</p>
          <ul className="mobile-menu__cats">
            {collections.map((c) => (
              <li key={c.slug}>
                <Link to={`/collections/${c.slug}`} onClick={onClose}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <a
            className="btn btn--gold btn--block"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Enquire on WhatsApp
          </a>
          <p className="mobile-menu__address">
            {site.address.line1}, {site.address.line2}
            <br />
            {site.hours}
          </p>
          <a
            className="mobile-menu__social"
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon /> {site.social.instagramHandle}
          </a>
        </div>
      </div>
    </div>
  );
}
