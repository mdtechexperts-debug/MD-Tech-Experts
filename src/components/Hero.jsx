import React from 'react';
import './Hero.css';
import HeroImage from '../assets/Heroimage.png'; // Adjust path if necessary

const Hero = () => {
  const handleFreeConsultationClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Try default mail client
    window.location.href = "mailto:info@mdtechexperts.com?subject=Free%20Consultation";

    // Fallback to Gmail web
    setTimeout(() => {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=info@mdtechexperts.com&su=Free%20Consultation",
        "_blank"
      );
    }, 500);
  };

  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="hero-content">
        <h1 className="hero-title">
          Build Next-Generation Games, Apps & Secure Digital Experiences
        </h1>
        <p className="hero-subtitle">
          Specializing in cutting-edge game development, blockchain solutions, and secure, scalable applications for a global clientele.
        </p>
        <div className="hero-buttons">
          <a href="#services"><button className="hero-btn">View Our Services</button></a>
          <button className="hero-btn-secondary" onClick={handleFreeConsultationClick}>
            Request a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
