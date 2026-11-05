import { NavLink } from "react-router-dom";
import { Breadcrumbs } from "../components/ui/PageHero";
import { site, whatsappLink } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const content = {
  privacy: {
    title: "Privacy Policy",
    description:
      "How DEEVA handles the personal information you share through this website.",
    body: (
      <>
        <p>
          This policy explains how {site.tradingName} (“DEEVA”, “we”) handles
          information when you use this website. We keep it simple: we only use
          the details you choose to share with us in order to respond to you.
        </p>
        <h2>Information you share</h2>
        <p>
          When you send an enquiry, you may give us your name, phone number,
          email address and message. If you use the WhatsApp option, your
          message is sent through WhatsApp and is also subject to WhatsApp’s own
          privacy policy.
        </p>
        <h2>How we use it</h2>
        <p>
          We use your details only to reply to your enquiry, arrange a
          consultation or boutique visit, and provide the service you request.
          We do not sell your personal information.
        </p>
        <h2>Cookies and third parties</h2>
        <p>
          This website does not use advertising cookies. The contact page
          displays an embedded Google Map, and links to Instagram, YouTube and
          WhatsApp open those services, which may set their own cookies under
          their policies.
        </p>
        <h2>Your choices</h2>
        <p>
          You can ask us to access, correct or delete the information you have
          shared by contacting us on WhatsApp at{" "}
          <a
            href={whatsappLink("Hello DEEVA, I have a privacy request.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.whatsapp.display}
          </a>{" "}
          or visiting the boutique.
        </p>
      </>
    ),
  },
  terms: {
    title: "Terms & Conditions",
    description: "Terms of use for the DEEVA website.",
    body: (
      <>
        <p>
          By using this website you agree to these terms. The website is
          provided to introduce DEEVA, our lab-grown diamond jewellery and our
          services.
        </p>
        <h2>Product information and imagery</h2>
        <p>
          Photography on this website is representative of the styles we create
          and may not depict a specific piece in our boutique. Designs are made
          to order and can be customised; final specifications, including
          diamond grading, gold purity and price, are confirmed with you before
          purchase.
        </p>
        <h2>Prices</h2>
        <p>
          Prices are provided on request because they depend on your choice of
          diamond, gold and design. Any offer mentioned on our channels is
          subject to its own terms and availability.
        </p>
        <h2>Purchases</h2>
        <p>
          This website does not process orders or payments. Purchases are
          completed with our team at the boutique or through direct
          communication, under the terms confirmed at the time of purchase.
        </p>
        <h2>Intellectual property</h2>
        <p>
          The DEEVA name, logo and website content belong to DEEVA or are used
          under licence, and may not be reproduced without permission.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Speak with us at the boutique,{" "}
          {site.address.line1}, {site.address.line2}, or on WhatsApp at{" "}
          {site.whatsapp.display}.
        </p>
      </>
    ),
  },
  exchange: {
    title: "Exchange & Buyback",
    description:
      "DEEVA offers 100% diamond exchange and 80% buyback, subject to terms and conditions.",
    body: (
      <>
        <p className="legal__lead">
          DEEVA offers <strong>100% diamond exchange</strong> and{" "}
          <strong>80% buyback</strong> on our lab-grown diamond jewellery. Terms
          and conditions apply.
        </p>
        <h2>How it works</h2>
        <p>
          The complete terms and conditions for exchange and buyback are
          available from our team on request, in the boutique or on WhatsApp.
          Please ask us before you purchase so that you have them to hand.
        </p>
        <h2>Ask us</h2>
        <p>
          To exchange or sell back a DEEVA piece, or to read the complete terms
          before you buy, visit us at {site.address.line1}, {site.address.line2}
          , or message us on WhatsApp.
        </p>
        <p>
          <a
            className="btn btn--dark"
            href={whatsappLink(
              "Hello DEEVA, could you share the full terms of your exchange and buyback policy?",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Request the full terms
          </a>
        </p>
      </>
    ),
  },
};

export default function LegalPage({ type }) {
  const page = content[type];
  usePageMeta({ title: page.title, description: page.description });
  return (
    <section className="legal">
      <div className="container legal__grid">
        <header className="legal__head">
          <Breadcrumbs items={[{ label: page.title }]} />
          <h1 className="h1">{page.title}</h1>
          <nav className="legal__nav" aria-label="Policies">
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms &amp; Conditions</NavLink>
            <NavLink to="/exchange-and-buyback">Exchange &amp; Buyback</NavLink>
          </nav>
        </header>
        <div className="legal__body">{page.body}</div>
      </div>
    </section>
  );
}
