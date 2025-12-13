// src/components/ContactSection.jsx
import React from "react";
import servicesbg from "../assets/servicesbg.png";
import contactbg from "../assets/contactbg.png";
import Logo from "../assets/Logo.svg";
import "./ContactSection.css";

const ContactSection = () => {

  const handleStartProjectClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Try default mail client
    window.location.href =
      "mailto:info@mdtechexperts.com?subject=Start%20a%20Project";

    // Fallback to Gmail web (guaranteed)
    setTimeout(() => {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=info@mdtechexperts.com&su=Start%20a%20Project",
        "_blank"
      );
    }, 500);
  };

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

        {/* Start Project Button */}
        <button
          className="contact-button"
          onClick={handleStartProjectClick}
        >
          Start Project
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
