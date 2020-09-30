import React from 'react';

import logo from '../images/logo.svg';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import instagramIcon from '../images/icon-instagram.svg';

import Attribution from './Attribution';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-width">
        <div className="logo-container">
          <img src={logo} alt="shortly-logo" />
        </div>
        <div className="footer-links">
          <ul className="footer-links-list">
            <li className="footer-link title">Features</li>
            <li className="footer-link">Link Shortening</li>
            <li className="footer-link">Branded Links</li>
            <li className="footer-link">Analytics</li>
          </ul>
          <ul className="footer-links-list">
            <li className="footer-link title">Resources</li>
            <li className="footer-link">Blog</li>
            <li className="footer-link">Developers</li>
            <li className="footer-link">Support</li>
          </ul>
          <ul className="footer-links-list">
            <li className="footer-link title">Company</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Our Team</li>
            <li className="footer-link">Careers</li>
            <li className="footer-link">Contact</li>
          </ul>
          <div className="footer-socials">
            <img src={facebookIcon} alt="facebook-icon" />
            <img src={twitterIcon} alt="twitter-icon" />
            <img src={pinterestIcon} alt="pinterest-icon" />
            <img src={instagramIcon} alt="instagram-icon" />
          </div>
        </div>
      </div>
      <Attribution />
    </footer>
  );
}

export default Footer;
