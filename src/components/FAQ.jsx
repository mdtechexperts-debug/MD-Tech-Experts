import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What platforms do you support for game development?",
      answer:
        "We develop games for mobile (iOS & Android), PC, and console platforms, ensuring high performance and immersive gameplay across devices.",
    },
    {
      question: "Can you help with both 2D and 3D game projects?",
      answer:
        "Absolutely. Our team is experienced in building both 2D and 3D games using engines like Unity and Unreal Engine, tailored to your vision and audience.",
    },
    {
      question: "What makes a blockchain game different from a traditional game?",
      answer:
        "Blockchain games integrate NFTs, token economies, and decentralized mechanics, enabling true digital ownership and play-to-earn models.",
    },
    {
      question: "Do you assist with smart contract development and audits?",
      answer:
        "Yes, we provide full-stack Web3 game development, including smart contract creation, integration, and security audits.",
    },
    {
      question: "What types of apps do you build?",
      answer:
        "We specialize in scalable, user-friendly mobile apps for Android and iOS, including e-commerce, social, utility, and custom enterprise apps.",
    },
    {
      question: "Can you help with app store deployment?",
      answer:
        "Yes, we handle the entire process—from development to publishing on Google Play and the Apple App Store.",
    },
    {
      question: "Do you build responsive and SEO-friendly websites?",
      answer:
        "Yes, all our websites are mobile-responsive, fast-loading, and optimized for search engines to help you rank and convert better.",
    },
    {
      question: "Can you redesign or upgrade an existing website?",
      answer:
        "Definitely. We offer website revamps, performance optimization, and modern UI/UX enhancements.",
    },
    {
      question: "What kind of cybersecurity services do you offer?",
      answer:
        "We provide security audits, vulnerability assessments, and strategic consulting to protect your digital assets from threats.",
    },
    {
      question: "Can you help secure existing systems or apps?",
      answer:
        "Yes, we specialize in identifying and patching vulnerabilities in existing infrastructures, apps, and websites.",
    },
    {
      question: "What’s included in your UI/UX design services?",
      answer:
        "We deliver wireframes, prototypes, and high-fidelity designs focused on usability, aesthetics, and conversion optimization.",
    },
    {
      question: "Do you offer branding and logo design?",
      answer:
        "Yes, our graphic design team creates logos, brand kits, and marketing materials tailored to your business identity.",
    },
    {
      question: "What types of videos can you produce?",
      answer:
        "We create promotional videos, explainer animations, social media content, and AI-generated visuals for storytelling and marketing.",
    },
    {
      question: "Can you work with raw footage or create videos from scratch?",
      answer:
        "Yes, we can edit your existing footage or generate new content using AI tools and creative direction.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-left">
        <h1 className="faq-heading">
          Frequently<br />Asked<br />Questions
        </h1>
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
