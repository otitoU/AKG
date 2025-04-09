import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section">
      <h2>Contact Us</h2>
      <div className="footer-icons">
        <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="tel:+1234567890">
          <FaPhoneAlt />
        </a>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Armstrong, Kelley, & Gatewood Referee School.
         All rights reserved.</p>
    </footer>
  );
}

export default Footer;
