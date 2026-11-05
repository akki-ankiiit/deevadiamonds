import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Picture from "../components/ui/Picture";
import { ComparisonTable } from "../components/home/DiamondStory";
import { care, fourCs, storyPoints } from "../data/education";
import { whatsappLink } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const sections = [
  { id: "what", label: "What they are" },
  { id: "four-cs", label: "The 4Cs" },
  { id: "certification", label: "Certification" },
  { id: "hallmark", label: "BIS hallmark" },
  { id: "care", label: "Care" },
];

export default function GuidePage() {
  usePageMeta({
    title: "The Lab-Grown Diamond Guide",
    description:
      "What are lab-grown diamonds, how are they created, and how do you choose one? A clear guide to HPHT and CVD, the 4Cs, IGI certification, the BIS hallmark and diamond care.",
  });
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="The Lab-Grown Diamond"
        title={
          <>
            A modern perspective on a <em>timeless</em> diamond.
          </>
        }
        intro="Everything you need to know to choose a lab-grown diamond with confidence."
        image="story-loose-diamond"
        focus="62% 50%"
        crumbs={[{ label: "Lab-grown diamonds" }]}
      />

      <nav className="guide-nav" aria-label="On this page">
        <div className="container">
          <ul>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span className="numeral">
                    {String(i + 1).padStart(2, "0")}
                  </span>{" "}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section
        id="what"
        className="section guide-block"
        aria-labelledby="what-title"
      >
        <div className="container guide-block__grid">
          <header className="guide-block__head">
            <p className="eyebrow">01 · What they are</p>
            <h2 id="what-title" className="h2">
              A real diamond, <em>grown</em> rather than mined.
            </h2>
          </header>
          <div className="guide-block__body">
            <ol className="story__list">
              {storyPoints.slice(0, 3).map((p, i) => (
                <li key={p.title} data-reveal>
                  <span className="numeral">{["i.", "ii.", "iii."][i]}</span>
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

      <section
        className="guide-methods on-dark"
        aria-labelledby="methods-title"
      >
        <div className="container guide-methods__grid">
          <div className="guide-methods__media media">
            <Picture
              slug="craft-selection"
              sizes="(min-width: 900px) 40vw, 100vw"
            />
          </div>
          <div>
            <p className="eyebrow">How they are grown</p>
            <h2 id="methods-title" className="h2">
              Two methods, <em>one diamond.</em>
            </h2>
            <div className="methods">
              <div data-reveal>
                <h3 className="h4">HPHT</h3>
                <p className="body-copy">
                  High Pressure, High Temperature. A diamond seed is placed with
                  pure carbon in a press that recreates the intense pressure and
                  heat found deep within the earth, where carbon crystallises as
                  diamond.
                </p>
              </div>
              <div data-reveal>
                <h3 className="h4">CVD</h3>
                <p className="body-copy">
                  Chemical Vapour Deposition. Diamond seed plates are placed in
                  a chamber filled with a carbon-rich gas; heated, the gas
                  releases carbon atoms that settle on the seed and build the
                  crystal layer by layer.
                </p>
              </div>
            </div>
            <p className="body-copy methods__note">
              Both methods produce diamond. Once cut and polished, a stone is
              graded in exactly the same way as a natural diamond.
            </p>
          </div>
        </div>
      </section>

      <section
        id="four-cs"
        className="section on-cream guide-block"
        aria-labelledby="fourcs-title"
      >
        <div className="container">
          <header className="split-head">
            <div>
              <p className="eyebrow">02 · The 4Cs</p>
              <h2 id="fourcs-title" className="h2">
                The language of <em>quality.</em>
              </h2>
            </div>
            <p className="body-copy split-head__aside">
              Cut, colour, clarity and carat weight are the universal standard
              for describing a diamond. Together they determine its character —
              and its beauty.
            </p>
          </header>
          <ol className="fourcs">
            {fourCs.map((c, i) => (
              <li
                key={c.key}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.08}s` }}
              >
                <span className="fourcs__letter" aria-hidden="true">
                  {c.key[0]}
                </span>
                <h3 className="h3">{c.key}</h3>
                <p className="body-copy">{c.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="certification"
        className="section guide-block"
        aria-labelledby="cert-title"
      >
        <div className="container guide-block__grid">
          <header className="guide-block__head">
            <p className="eyebrow">03 · Certification</p>
            <h2 id="cert-title" className="h2">
              Why the <em>report</em> matters.
            </h2>
          </header>
          <div className="guide-block__body">
            <p className="lead">
              DEEVA offers IGI-certified lab-grown diamonds. The International
              Gemological Institute is an independent laboratory that grades
              diamonds and issues a report for each stone it examines.
            </p>
            <ul className="checklist" data-reveal>
              <li>
                The report records the diamond’s shape, measurements, carat
                weight, colour and clarity grades, and cut-related details.
              </li>
              <li>
                It clearly identifies the stone as laboratory-grown, and may
                note the growth method and any post-growth treatment.
              </li>
              <li>
                Each report carries a unique number. Many certified stones also
                bear a microscopic laser inscription of that number on the
                girdle.
              </li>
              <li>
                Reports can be verified online on the IGI website using the
                report number.
              </li>
            </ul>
            <p className="body-copy">
              When you choose a diamond, ask to see its report and match the
              details to the stone in front of you.
            </p>
          </div>
        </div>
      </section>

      <section
        id="hallmark"
        className="section on-white guide-block"
        aria-labelledby="hallmark-title"
      >
        <div className="container guide-block__grid">
          <header className="guide-block__head">
            <p className="eyebrow">04 · BIS hallmark</p>
            <h2 id="hallmark-title" className="h2">
              The mark of <em>pure gold.</em>
            </h2>
          </header>
          <div className="guide-block__body">
            <p className="lead">
              In India, the Bureau of Indian Standards (BIS) hallmark certifies
              the purity of gold jewellery. DEEVA uses BIS-hallmarked gold.
            </p>
            <dl className="hallmark">
              <div data-reveal>
                <dt>BIS mark</dt>
                <dd>The standard mark of the Bureau of Indian Standards.</dd>
              </div>
              <div data-reveal>
                <dt>Purity grade</dt>
                <dd>
                  The caratage and fineness, for example 22K916, 18K750 or
                  14K585.
                </dd>
              </div>
              <div data-reveal>
                <dt>HUID</dt>
                <dd>
                  A six-digit alphanumeric Hallmark Unique Identification code,
                  specific to each piece and verifiable through the BIS CARE
                  app.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        id="care"
        className="section guide-care"
        aria-labelledby="care-title"
      >
        <div className="container guide-care__grid">
          <div className="guide-care__media media" data-reveal="mask">
            <Picture
              slug="piece-solitaire-studs"
              sizes="(min-width: 900px) 40vw, 100vw"
            />
          </div>
          <div>
            <p className="eyebrow">05 · Care</p>
            <h2 id="care-title" className="h2">
              Keeping the <em>brilliance.</em>
            </h2>
            <ol className="care-list">
              {care.map((c, i) => (
                <li key={c} data-reveal>
                  <span className="numeral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p>{c}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section on-dark guide-cta">
        <div className="container guide-cta__inner">
          <h2 className="h2">
            Questions about a diamond? <em>Ask us.</em>
          </h2>
          <p className="lead">
            Our team is happy to explain any grading report and help you compare
            stones.
          </p>
          <div className="btn-row">
            <a
              className="btn btn--gold"
              href={whatsappLink(
                "Hello DEEVA, I have a question about lab-grown diamonds.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask on WhatsApp
            </a>
            <Link className="btn btn--light" to="/collections">
              Explore the collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
