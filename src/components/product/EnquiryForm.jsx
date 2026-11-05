import { useId, useState } from "react";
import { site } from "../../data/site";
import { WhatsAppIcon } from "../ui/Icons";

export const topics = {
  general: "General enquiry",
  custom: "Custom design",
  visit: "Book a boutique visit",
  price: "Price & availability",
  exchange: "Exchange & buyback",
};

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  const digits = values.phone.replace(/[^\d]/g, "");
  if (digits.length < 10 || digits.length > 13)
    errors.phone = "Please enter a valid phone number, e.g. 98765 43210.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10)
    errors.message = "Please tell us a little more (at least 10 characters).";
  return errors;
}

export default function EnquiryForm({ initialTopic = "general", piece }) {
  const uid = useId();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    topic: topics[initialTopic] ? initialTopic : "general",
    message: piece ? `I would like to know more about the ${piece}.` : "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({
        state: "error",
        message: "Please check the highlighted fields.",
      });
      e.currentTarget
        .querySelector(`[name="${Object.keys(found)[0]}"]`)
        ?.focus();
      return;
    }

    const lines = [
      `Hello DEEVA — ${topics[values.topic]}`,
      piece ? `Piece: ${piece}` : null,
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.email ? `Email: ${values.email.trim()}` : null,
      "",
      values.message.trim(),
    ].filter((l) => l !== null);

    if (!endpoint) {
      window.open(
        `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(lines.join("\n"))}`,
        "_blank",
        "noopener",
      );
      setStatus({
        state: "handoff",
        message:
          "We have opened WhatsApp with your message ready — simply press send and our team will reply.",
      });
      return;
    }

    setStatus({ state: "sending", message: "Sending your enquiry…" });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          topic: topics[values.topic],
          piece: piece || "",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus({
        state: "sent",
        message:
          "Thank you. Your enquiry has been received and our team will be in touch.",
      });
      setValues((v) => ({ ...v, message: "" }));
    } catch {
      setStatus({
        state: "error",
        message: `Your enquiry could not be sent. Please try again, or message us on WhatsApp at ${site.whatsapp.display}.`,
      });
    }
  };

  const field = (key) => ({
    id: `${uid}-${key}`,
    name: key,
    value: values[key],
    onChange: set(key),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${uid}-${key}-error` : undefined,
  });

  const FieldError = ({ k }) =>
    errors[k] ? (
      <p className="field__error" id={`${uid}-${k}-error`}>
        {errors[k]}
      </p>
    ) : null;

  return (
    <form className="enquiry" onSubmit={onSubmit} noValidate>
      <div className="enquiry__row">
        <div className={`field ${errors.name ? "has-error" : ""}`}>
          <label htmlFor={`${uid}-name`}>Name</label>
          <input type="text" autoComplete="name" required {...field("name")} />
          <FieldError k="name" />
        </div>
        <div className={`field ${errors.phone ? "has-error" : ""}`}>
          <label htmlFor={`${uid}-phone`}>Phone / WhatsApp</label>
          <input
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            {...field("phone")}
          />
          <FieldError k="phone" />
        </div>
      </div>
      <div className="enquiry__row">
        <div className={`field ${errors.email ? "has-error" : ""}`}>
          <label htmlFor={`${uid}-email`}>
            Email <span className="field__opt">(optional)</span>
          </label>
          <input type="email" autoComplete="email" {...field("email")} />
          <FieldError k="email" />
        </div>
        <div className="field">
          <label htmlFor={`${uid}-topic`}>I am interested in</label>
          <select {...field("topic")}>
            {Object.entries(topics).map(([k, label]) => (
              <option key={k} value={k}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={`field ${errors.message ? "has-error" : ""}`}>
        <label htmlFor={`${uid}-message`}>Your message</label>
        <textarea rows={4} required {...field("message")} />
        <FieldError k="message" />
      </div>

      <div className="enquiry__foot">
        <button
          type="submit"
          className="btn btn--dark"
          disabled={status.state === "sending"}
        >
          {endpoint ? (
            "Send enquiry"
          ) : (
            <>
              <WhatsAppIcon /> Send via WhatsApp
            </>
          )}
        </button>
        <p className="enquiry__note">
          {endpoint
            ? "We use your details only to respond to your enquiry."
            : "Your message opens in WhatsApp, ready to send to DEEVA. We use your details only to respond."}
        </p>
      </div>
      <p
        className={`enquiry__status is-${status.state}`}
        role="status"
        aria-live="polite"
      >
        {status.message}
      </p>
    </form>
  );
}
