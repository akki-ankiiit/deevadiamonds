import { useSearchParams } from "react-router-dom";
import { Breadcrumbs } from "../components/ui/PageHero";
import Picture from "../components/ui/Picture";
import EnquiryForm from "../components/product/EnquiryForm";
import {
  ClockIcon,
  InstagramIcon,
  PinIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "../components/ui/Icons";
import { site, whatsappLink } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const intros = {
  custom: {
    eyebrow: "Custom design",
    title: (
      <>
        Something <em>uniquely</em> yours.
      </>
    ),
    text: "Share your idea — a sketch, a photograph, a piece you love — and we will guide you through the diamond, the gold and every detail.",
  },
  visit: {
    eyebrow: "Visit the boutique",
    title: (
      <>
        Come and <em>try them on.</em>
      </>
    ),
    text: "Let us know when you would like to visit and our team will have pieces ready for you.",
  },
};

export default function ContactPage() {
  const [params] = useSearchParams();
  const topic = params.get("topic") || "general";
  const intro = intros[topic] ?? {
    eyebrow: "Contact & consultation",
    title: (
      <>
        We would love to <em>hear from you.</em>
      </>
    ),
    text: "Visit our Raipur boutique, message us on WhatsApp, or send an enquiry below — for prices, custom designs or simply to talk diamonds.",
  };
  usePageMeta({
    title: "Contact & Visit",
    description:
      "Visit DEEVA at First Floor, Currency Tower, VIP Road, Raipur — open daily 10:30 am to 9:30 pm — or message us on WhatsApp at +91 92016 61918.",
  });

  return (
    <>
      <section className="contact">
        <div className="container">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="contact__grid">
            <div className="contact__copy">
              <p className="eyebrow hero__rise" style={{ "--d": "0.2s" }}>
                {intro.eyebrow}
              </p>
              <h1 className="h1 hero__rise" style={{ "--d": "0.3s" }}>
                {intro.title}
              </h1>
              <p className="lead hero__rise" style={{ "--d": "0.45s" }}>
                {intro.text}
              </p>

              <ul
                className="contact__details hero__rise"
                style={{ "--d": "0.6s" }}
              >
                <li>
                  <PinIcon />
                  <div>
                    <p className="contact__label">Boutique</p>
                    <address>
                      {site.tradingName}
                      <br />
                      {site.address.line1}
                      <br />
                      {site.address.line2}, {site.address.region}
                    </address>
                    <a
                      className="link-line"
                      href={site.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get directions <span className="arrow">→</span>
                    </a>
                  </div>
                </li>
                <li>
                  <ClockIcon />
                  <div>
                    <p className="contact__label">Hours</p>
                    <p>{site.hours}</p>
                  </div>
                </li>
                <li>
                  <WhatsAppIcon />
                  <div>
                    <p className="contact__label">WhatsApp &amp; phone</p>
                    <p>
                      <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {site.whatsapp.display}
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <InstagramIcon />
                  <div>
                    <p className="contact__label">Follow</p>
                    <p className="contact__social">
                      <a
                        href={site.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {site.social.instagramHandle}
                      </a>
                      <a
                        href={site.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <YouTubeIcon /> YouTube
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact__form">
              <div className="contact__formhead">
                <h2 className="h3">Send an enquiry</h2>
                <p className="body-copy">
                  We usually reply on WhatsApp during boutique hours.
                </p>
              </div>
              <EnquiryForm key={topic} initialTopic={topic} />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-visit on-dark" aria-labelledby="map-title">
        <div className="contact-visit__media media">
          <Picture slug="contact-box" sizes="(min-width: 900px) 40vw, 100vw" />
        </div>
        <div className="contact-visit__map">
          <h2 id="map-title" className="sr-only">
            Map to the DEEVA boutique
          </h2>
          <div className="contact-visit__fallback">
            <p className="eyebrow">Find us</p>
            <p className="h3">
              {site.address.line1}, {site.address.line2}
            </p>
            <a
              className="link-line"
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps <span className="arrow">→</span>
            </a>
          </div>
          <iframe
            title="Map showing DEEVA at Currency Tower, VIP Road, Raipur"
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
