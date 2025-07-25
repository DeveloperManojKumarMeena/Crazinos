import React from "react";
import "./Footer.css";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo and About */}
        <div className="footer-section">
          <img
            src="https://i.postimg.cc/1t6frvMM/logo.png"
            alt="Crazy XYZ Logo"
            className="footer-logo"
          />
          <p className="footer-about">
            Crazy XYZ is known for thrilling science experiments and innovative DIY kits like Crazinos. Explore the science behind the fun!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* YouTube Link */}
        <div className="footer-section">
          <h3 className="footer-title">Connect With Us</h3>
          <a
            href="https://www.youtube.com/channel/UCebC4x5l2-PQxg46Ucv9CsA"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-youtube-link"
          >
            <FaYoutube className="youtube-icon" />
            Visit our YouTube Channel <FaExternalLinkAlt className="external-link-icon" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Crazy XYZ. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
