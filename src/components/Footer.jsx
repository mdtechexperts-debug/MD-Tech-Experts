import React from "react";
import "./Footer.css";
import Logo from "../assets/Logo.svg";
import IconMail from "../assets/icon-mail.svg";
import IconPhone from "../assets/icon-phone.svg";
import IconFacebook from "../assets/icon-facebook.svg";
import IconTwitter from "../assets/icon-twitter.svg";
import IconLinkedin from "../assets/icon-linkedin.svg";

const Footer = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Try default mail client
    window.location.href = "mailto:info@mdtechexperts.com";

    // Fallback to Gmail web
    setTimeout(() => {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=info@mdtechexperts.com",
        "_blank"
      );
    }, 500);
  };

  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Logo */}
        <img src={Logo} alt="MD Tech Experts" className="footer-logo" />

        {/* Center Menu */}
        <ul className="footer-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#contactus">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://www.facebook.com/share/1Fd2sFzjmk/?mibextid=wwXIfr">
            <img src={IconFacebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/mdtech.experts?igsh=M3p6dWRoaHhleHl5&utm_source=qr">
            <img src={IconTwitter} alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/company/md-tech-experts/">
            <img src={IconLinkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Contact + Copyright */}
      <div className="footer-bottom">
        <div className="footer-contact">
          <span>
            <a href="#!" onClick={handleEmailClick}>
              <img src={IconMail} alt="email" /> info@mdtechexperts.com
            </a>
          </span>
          <span>
            <a href="https://wa.me/+923468190496">
              <img src={IconPhone} alt="phone" /> +92 346 8190496
            </a>
          </span>
        </div>

        <p className="footer-copy">
          © 2025 MD Tech Experts. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
