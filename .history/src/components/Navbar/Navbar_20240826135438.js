
import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="navbar-logo">
          <img src="images/Logo.webp" alt="" />
        </div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>Devices and Plans</li>
        <li>Home Protection</li>
        <li>Activation Plan</li>
        <li>Track Service Request</li>
      </ul>
      <div className="navbar-right">
        <div className="signin-container">
        <Link to="/signin" className="signinclass">
          <FaUser className="signin-icon" />
          <span className="signin-text">Sign In</span>
          </Link>
        </div>
        <FaShoppingCart className="cart-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
