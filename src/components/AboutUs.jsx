import React from "react";
import "./AboutUs.css";

import aboutImage from "../assets/aboutimage.png";

export default function AboutUs() {
  return (
    <div className="about-section" id="aboutus">
      <h2 className="about-title">About Us</h2>

      <div className="about-content">
        
        {/* LEFT TEXT SIDE */}
        <div className="about-text">
          <p className="about-desc">
            MD Tech Experts Is A Global Technology Studio Specializing In Game Development,
            Web3/Blockchain Gaming, Mobile Apps, Websites, And Cybersecurity-Driven Digital Solutions.
            We Combine Creativity, Engineering, And Strategic Thinking To Build Products That Are Fast,
            Reliable, Secure, And Ready For Scale.
          </p>

          <h3 className="about-subtitle">What We Do</h3>
          <p className="about-desc">
            We Combine Creative Design, Solid Engineering, And A Security-First Approach To Deliver
            Fast, Scalable Solutions.
          </p>

          <h3 className="about-subtitle">Why Clients Choose Us</h3>
          <p className="about-desc">
            Game & Web3 Expertise • End-To-End Delivery <br/>• Reliable Communication • Global Team.
          </p>

          <h3 className="about-subtitle">Our Process</h3>
          <p className="about-desc">
            Discover → Design → Build → Launch → Support
          </p>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="About Us" className="about-image" />
        </div>
      </div>
    </div>
  );
}
