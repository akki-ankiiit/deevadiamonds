import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { searchIndex } from "../../data/navigation";
import { CloseIcon, SearchIcon } from "../ui/Icons";

const suggestions = [
  "Solitaire",
  "Earrings",
  "Necklace",
  "4Cs",
  "Custom design",
];

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const input = useRef();

  useEffect(() => {
    if (!open) return undefined;
    setQuery("");
    const t = setTimeout(() => input.current?.focus(), 60);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const terms = q.split(/\s+/);
    return searchIndex.filter((item) => {
      const hay = `${item.title} ${item.text} ${item.type}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [query]);

  return (
    <div
      className={`search ${open ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      aria-hidden={!open}
      inert={!open}
    >
      <div className="search__panel container">
        <div className="search__bar">
          <SearchIcon className="search__icon" />
          <label htmlFor="site-search" className="sr-only">
            Search DEEVA
          </label>
          <input
            id="site-search"
            ref={input}
            type="search"
            autoComplete="off"
            placeholder="Search collections, styles and guides"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label="Close search"
          >
            <CloseIcon />
          </button>
        </div>

        {!query && (
          <div className="search__suggest">
            <p className="eyebrow eyebrow--plain">Popular searches</p>
            <ul>
              {suggestions.map((s) => (
                <li key={s}>
                  <button type="button" onClick={() => setQuery(s)}>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {query && (
          <div className="search__results" aria-live="polite">
            <p className="search__count">
              {results.length
                ? `${results.length} result${results.length > 1 ? "s" : ""}`
                : "No results — try “ring”, “pendant” or “certification”."}
            </p>
            <ul>
              {results.map((r) => (
                <li key={r.to + r.title}>
                  <Link to={r.to} onClick={onClose}>
                    <span className="search__type">{r.type}</span>
                    <span className="search__title">{r.title}</span>
                    <span className="search__text">{r.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button
        type="button"
        className="search__scrim"
        aria-label="Close search"
        tabIndex={-1}
        onClick={onClose}
      />
    </div>
  );
}
