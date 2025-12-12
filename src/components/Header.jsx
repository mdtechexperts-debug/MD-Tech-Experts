// src/components/Header.jsx
import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/Logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo-section">
          <a href="https://www.mdtechexperts.com/">
          <img src={Logo} alt="Logo" className="logo-img" /></a>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <a href="#home" className="active">Home</a>
          <a href="#services">Services</a>
          <a href="#aboutus">About Us</a>
          <a href="#contactus">Contact</a>
        </nav>

        {/* Desktop Quote Button */}
        <button a href="#services" className="quote-btn desktop-btn">Get a Quote</button>

        {/* Hamburger (Mobile) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "bar active bar1" : "bar bar1"}></span>
          <span className={menuOpen ? "bar active bar2" : "bar bar2"}></span>
          <span className={menuOpen ? "bar active bar3" : "bar bar3"}></span>
        </div>

        {/* Mobile Menu */}
        <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="active">Home</a>
          <a href="#services">Services</a>
          <a href="#aboutus">About Us</a>
          <a href="#contactus">Contact</a>

          {/* Mobile Quote Button */}
          <a href="#services"><button className="quote-btn mobile-btn">Get a Quote</button></a>
        </nav>

      </div>
    </header>
  );
}
