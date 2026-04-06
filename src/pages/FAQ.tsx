import { useState } from "react";
import "../styles/faq.scss";
import "../styles/globals.scss";

const faqData = [
  {
    question: "How long does delivery take?",
    answer:
      "We deliver within 24 hours for most local orders. Same-day delivery is available if you place your order before noon. For special arrangements or large orders, please allow up to 48 hours.",
  },
  {
    question: "Do you offer custom bouquets?",
    answer:
      "Absolutely! We love creating one-of-a-kind arrangements. Simply contact us with your vision, occasion, and budget, and our florists will craft something beautiful just for you.",
  },
  {
    question: "Are your flowers fresh and ethically sourced?",
    answer:
      "Yes — every bloom is hand-selected from trusted growers and arrives at our shop fresh daily. We prioritize sustainable and ethically sourced flowers whenever possible.",
  },
  {
    question: "Can I schedule a delivery for a future date?",
    answer:
      "Of course! You can choose any future delivery date at checkout. We recommend booking at least 2 days in advance for large or custom orders.",
  },
  {
    question: "What is your return or refund policy?",
    answer:
      "Your satisfaction is our priority. If your flowers arrive damaged or below our quality standards, please contact us within 24 hours and we'll arrange a replacement or full refund.",
  },
  {
    question: "Do you deliver outside the local area?",
    answer:
      "We currently deliver within a 30-mile radius. For long-distance gifting, we can ship dried flower arrangements and gift sets nationally.",
  },
];

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className={`faq-chevron ${open ? "faq-chevron--open" : ""}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className="faq-answer-wrapper" style={{ maxHeight: open ? "300px" : "0" }}>
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="container">
      <div className="textCenter" style={{ marginBottom: "3rem" }}>
        <h2 className="introHeading">Frequently Asked Questions</h2>
        <p className="introDetails" style={{ marginTop: "1.5rem" }}>
          Everything you need to know about our flowers and service.
        </p>
      </div>
      <div className="faq-accordion">
        {faqData.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}
