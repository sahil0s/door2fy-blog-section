import React from 'react';
import './Footer.css';
import '../blog/Blog'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li><Link to={/s}>Blog</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Account Management</li>
            <li>Device Protection</li>
            <li>Activation Plans</li>
            <li>Service Requests</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Guides</li>
            <li>Case Studies</li>
            <li>Whitepapers</li>
            <li>Webinars</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: support@omsitego.com</li>
            <li>Phone: +1 234 567 8901</li>
            <li>Address: 123 OMSiteGo Street, Tech City, USA</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 OMSiteGo. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="#home">Facebook</a></li>
          <li><a href="#home">Twitter</a></li>
          <li><a href="#home">Instagram</a></li>
          <li><a href="#home">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
