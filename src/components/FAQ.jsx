import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I contact MD Tech Team?",
      answer:
        "You can reach us through the contact form on our website or by emailing us at info@mdtechexperts.com. We typically respond within 24 hours.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We provide end-to-end digital solutions, including website development, app development, UI/UX design, blockchain development, game development, branding, and long-term tech support.",
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "Yes. We offer dedicated maintenance plans that include security updates, speed optimization, content updates, backups, and continuous monitoring.",
    },
    {
      question: "How long does it take to design and develop a website?",
      answer:
        "Timeline depends on the project size. A standard website takes 2–3 weeks, while advanced or custom-functional websites may take 4–8 weeks.",
    },
    {
      question: "Do you require a deposit for projects?",
      answer:
        "Yes. We require a 40% upfront deposit to begin the project, 30% after design approval, and the remaining 30% upon project completion.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-left">
        <h1 className="faq-heading">Frequently<br />Asked<br />Questions</h1>
      </div>

      <div className="faq-right">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>

              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
