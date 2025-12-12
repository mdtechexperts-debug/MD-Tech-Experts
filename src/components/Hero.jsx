import React from 'react';
import './Hero.css';
import HeroImage from '../assets/Heroimage.png'; // Adjust path if necessary

const Hero = () => {
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
          <a href="https://wa.me/+923468190496"><button className="hero-btn-secondary">Request a Free Consultation</button></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
