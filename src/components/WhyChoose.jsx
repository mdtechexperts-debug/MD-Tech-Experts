import React from "react";
import "./WhyChoose.css";

// Background
import servicesBg from "../assets/servicesbg.png";

// Icons
import Game from "../assets/Game.svg";
import Booster from "../assets/Booster.svg";
import Security from "../assets/Security.svg";
import Globe from "../assets/Globe.svg";

export default function WhyChoose() {
  const features = [
    {
      icon: Game,
      title: "Game & Web3 Expertise",
      desc: "We Specialize In Modern Game Development And Web3 Technologies, Delivering Innovative And Future-Ready Experiences.",
    },
    {
      icon: Booster,
      title: "End-To-End Product Delivery",
      desc: "From Concept To Launch, We Handle Every Stage Of Development With Clear Planning And Smooth Execution.",
    },
    {
      icon: Security,
      title: "Security-First Approach",
      desc: "Every Product Is Built With Strong Security Practices, Ensuring Safe, Reliable, And Scalable Performance.",
    },
    {
      icon: Globe,
      title: "Global Delivery Experience",
      desc: "Our Distributed Team Works With Clients Across Multiple Regions, Providing Flexible And Efficient Project Delivery.",
    },
  ];

  return (
    <div className="whychoose-section">
      <div className="whychoose-bg"></div>

      <h2 className="whychoose-title">Why Choose MD Tech Experts</h2>

      <div className="whychoose-grid">
        {features.map((item, idx) => (
          <div className="whychoose-card" key={idx}>
            <img src={item.icon} alt={item.title} className="whychoose-icon" />

            <h3 className="whychoose-card-title">{item.title}</h3>

            <p className="whychoose-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
