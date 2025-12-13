import React from "react";
import "./Popup.css";

const popupContent = {
  "Game Development": {
    title: "Game Development",
    text: "We design and develop engaging games that keep players coming back. From concept and  storyboarding to art, development, and live operations, MD Tech Experts covers the full  lifecycle of your game. Whether you are building a casual mobile game, a multiplayer  experience, or a serious/educational game, our team focuses on smooth performance, fun  gameplay loops, and monetization strategies that respect your players.",
    list: [
      "Game concept, GDD and prototyping",
      "2D & 3D game development (mobile, PC, web)",
      "Multiplayer & real-time gameplay features",
      "In-game economy and monetization systems",
      "Live updates, events, and post-launch support"
    ],
    buttonText: "Request Game Consultation"
  },
  "Blockchain Game Dev": {
    title: "Blockchain Game Development",
    text: "We build next-generation Web3 and blockchain-powered games that offer real digital  ownership and innovative reward systems. Our team combines traditional game design  expertise with on-chain technologies to create experiences that are both fun and future ready.",
    list: [
      "Tokenomics and game economy design",
      "NFT-based assets, skins, and collectibles",
      "Smart contract development & integration",
      "Wallet, marketplace, and payment integration",
      "Security review of on-chain components"
    ],
    buttonText: "Request Blockchain Consultation"
  },
  "App Development": {
    title: "App Development",
    text: "We develop high-quality mobile and cross-platform applications that are fast, intuitive, and  aligned with your business goals. From MVPs for startups to full-scale enterprise apps, MD  Tech Experts manages everything from UX to deployment.",
    list: [
      "Native and cross-platform app development",
      "MVP design, prototyping and validation",
      "API and third-party service integrations",
      "Analytics, performance, and crash monitoring",
      "Continuous updates and maintenance"
    ],
    buttonText: "Request App Consultation"
  },
  "Website Development": {
    title: "Website Development",
    text: "Your website is often the first touchpoint with your audience. We build modern, responsive,  and secure websites that represent your brand clearly and convert visitors into customers.  From landing pages and portfolios to custom dashboards and portals, our development  process focuses on usability, speed, and scalability.",
    list: [
      "Business websites and product landing pages",
      "Custom web platforms and admin dashboards",
      "CMS-based sites (content-manageable)",
      "Performance optimization & SEO-ready structure",
      "Ongoing support and feature enhancements"
    ],
    buttonText: "Request Website Consultation"
  },
  "Cybersecurity Consulting": {
    title: "Cybersecurity Consulting",
    text: "Our cybersecurity consulting services help you identify vulnerabilities, protect sensitive  data, and meet compliance requirements. We work closely with your team to build a  realistic and actionable security roadmap.",
    list: [
      "Security audits and vulnerability assessments",
      "Secure architecture and best-practice review",
      "Web & application security hardening",
      "Incident response planning and guidance",
      "Training and awareness for your team"
    ],
    buttonText: "Request Cybersecurity Consultation"
  },
  "UI/UX Design": {
    title: "UI/UX Design",
    text: "Our UI/UX designers create clean, intuitive, and user-centered interfaces for games, apps,  and websites. We focus on flows, usability, and visual hierarchy so that users naturally  understand what to do, leading to better engagement and higher retention.",
    list: [
      "User research and journey mapping",
      "Wireframes, low-/high-fidelity prototypes",
      "Design systems and style guides",
      "Game UI & HUD design, app & web layouts",
      "Usability review and design audits"
    ],
    buttonText: "Request UI/UX Consultation"
  },
  "Graphic Design": {
    title: "Graphic Design",
    text: "Our graphic design team crafts brand-consistent, professional visuals that work across  platforms and formats.",
    list: [
      "Logos and brand identity (colors, fonts, guidelines)",
      "Social media posts, banners, and ad creatives",
      "Thumbnails, cover art, and game key art",
      "Pitch decks, brochures, and marketing materials",
      "Print design"
    ],
    buttonText: "Request Graphic Design Consultation"
  },
  "Video Editing / AI Video Generation": {
    title: "Video Editing / AI Video Generation",
    text: "We help you stand out with dynamic video content that tells your story clearly and  creatively. From marketing videos and trailers to AI-assisted content, MD Tech Experts  combines editing skills with next-gen tools.",
    list: [
      "Game trailers and app/product promo videos ",
      "Social media content (shorts/reels)",
      "Corporate explainers and demo videos",
      "AI-assisted video generation and enhancement",
      "Motion graphics, titles, and basic VFX"
    ],
    buttonText: "Request Video Consultation"
  }
};

export default function Popup({ service, onClose }) {
  const content = popupContent[service.title];

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        {/* RIGHT CONTENT */}
        <div className="popup-right">
          <h2 className="popup-title">{content.title}</h2>
          <p className="popup-text">{content.text}</p>
          <h3 className="popup-subtitle">What We Offer:</h3>
          <ul className="popup-list">
            {content.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <a href="mailto:info@mdtechexperts.com"><button className="popup-btn">{content.buttonText}</button></a>
        </div>

        {/* LEFT IMAGE */}
        <div className="popup-left">
          <img src={service.popupImage} alt={content.title} className="popup-image" />
        </div>

        {/* CLOSE BUTTON */}
        <button className="popup-close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
}
