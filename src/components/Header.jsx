// src/components/Header.jsx
import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/Logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleQuoteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Try default mail client first
    window.location.href =
      "mailto:info@mdtechexperts.com?subject=Service%20Consultation";

    // Fallback to Gmail web (guaranteed)
    setTimeout(() => {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=info@mdtechexperts.com&su=Service%20Consultation",
        "_blank"
      );
    }, 500);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo-section">
          <a href="https://www.mdtechexperts.com/">
            <img src={Logo} alt="Logo" className="logo-img" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <a href="#home" className="active">Home</a>
          <a href="#services">Services</a>
          <a href="#aboutus">About Us</a>
          <a href="#contactus">Contact</a>
        </nav>

        {/* Desktop Quote Button */}
        <button
          className="quote-btn desktop-btn"
          onClick={handleQuoteClick}
        >
          Get a Quote
        </button>

        {/* Hamburger (Mobile) */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
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
          <button
            className="quote-btn mobile-btn"
            onClick={(e) => {
              handleQuoteClick(e);
              setMenuOpen(false); // close menu after click
            }}
          >
            Get a Quote
          </button>
        </nav>

      </div>
    </header>
  );
}
