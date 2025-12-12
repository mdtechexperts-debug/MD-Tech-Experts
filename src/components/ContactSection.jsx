// src/components/ContactSection.jsx
import React from "react";
import servicesbg from "../assets/servicesbg.png";
import contactbg from "../assets/contactbg.png"; 
import Logo from "../assets/Logo.svg";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contactus">
      <div className="contact-bg-layer" />
      <div className="contact-overlay" />

      <div className="contact-inner">
        {/* Logo */}
        <img src={Logo} alt="MD Tech Experts" className="contact-logo" />

        {/* Heading */}
        <h2 className="contact-heading">
          Thank you for your Interest in MD Tech Experts.
        </h2>

        {/* Subheading */}
        <p className="contact-description">
          We would love to hear from you and discuss how we can help bring your
          digital ideas to life. Here are the different ways you can get in
          touch with us.
        </p>

        {/* Button */}
        <a href="https://wa.me/+923468190496"><button className="contact-button">Start Project</button></a>
      </div>
    </section>
  );
};

export default ContactSection;
