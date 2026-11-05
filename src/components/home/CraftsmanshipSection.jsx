import Picture from "../ui/Picture";

const standards = [
  {
    image: "craft-selection",
    label: "Certified",
    title: "Diamonds graded independently",
    text: "Our lab-grown diamonds are IGI-certified — graded by the International Gemological Institute for cut, colour, clarity and carat, and documented as laboratory-grown.",
  },
  {
    image: "craft-setting",
    label: "Hallmarked",
    title: "Gold you can trust",
    text: "Our jewellery is made in BIS-hallmarked gold — gold that carries the Bureau of Indian Standards mark of purity and a unique HUID code that can be verified.",
  },
  {
    image: "craft-finishing",
    label: "Personal",
    title: "Made around you",
    text: "Fully customised jewellery — from the shape of the stone to the finished design — so that the piece you wear is entirely your own.",
  },
];

export default function CraftsmanshipSection() {
  return (
    <section
      className="standard section on-dark"
      aria-labelledby="standard-title"
    >
      <div className="container">
        <header className="split-head">
          <div>
            <p className="eyebrow" data-reveal>
              The DEEVA Standard
            </p>
            <h2
              id="standard-title"
              className="h1"
              data-reveal
              style={{ "--reveal-delay": "0.1s" }}
            >
              Beauty, held to a <em>standard.</em>
            </h2>
          </div>
          <p
            className="body-copy split-head__aside"
            data-reveal
            style={{ "--reveal-delay": "0.2s" }}
          >
            True luxury lies in what you can be certain of. Every DEEVA piece
            brings together independently certified diamonds, hallmarked gold
            and a design shaped by you.
          </p>
        </header>

        <ol className="standard__grid">
          {standards.map((s, i) => (
            <li
              key={s.label}
              className={`standard__item standard__item--${i + 1}`}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.12}s` }}
            >
              <div className="standard__media media">
                <Picture
                  slug={s.image}
                  sizes="(min-width: 900px) 30vw, 100vw"
                />
              </div>
              <div className="standard__body">
                <p className="standard__label">
                  <span className="numeral">
                    {String(i + 1).padStart(2, "0")}
                  </span>{" "}
                  {s.label}
                </p>
                <h3 className="h3">{s.title}</h3>
                <p className="body-copy">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
