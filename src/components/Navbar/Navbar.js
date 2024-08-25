// import React , { useState }  from 'react';
// import './Navbar.css';


// import { FaShoppingCart ,FaUser,FaBars, FaTimes} from 'react-icons/fa';
// // import { FiMenu } from "react-icons/fi";
// import { Link } from 'react-router-dom';


// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

// const toggleMenu = () => {
//   setIsMenuOpen(!isMenuOpen);
// };
//     return (  
      
//         <nav className="navbar  ">
//           <div className="navbar-left">
//         <div className="navbar-logo">
//         <Link to="/">
//         <img src="https://static.onsitego.com/_next/static/media/onsite-logo-inverse.66c01a54.webp" alt=''/>
//         </Link>
//         </div >
//         <button className="menu-toggle" onClick={toggleMenu}>
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//         </div>
//         <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
    
//           <li><a href="/">Devices and Plans</a></li>
    
//           <li><a href="/">Home Protection</a></li>
    
//           <li><a href="/">Activation Plan</a></li>
        
//           <li><a href="/">Track Service Request</a></li>
       
//         </ul>
//         <div className={`navbar-sign ${isMenuOpen ? 'open' : ''}`}>
//         <Link to="/signin" className="sign-in-link">
//           <div className="sign-icon-wrapper">
//             <FaUser className="sign-icon" />
//           </div>
//           <span>Sign In</span>
//           </Link>
        
//         </div>
//         <div className="navbar-cart">
//         <FaShoppingCart className="cart-icon" />
//       </div>
//       </nav>

//     );
// }

// export default Navbar;

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
          <img src="https://static.onsitego.com/_next/static/media/onsite-logo-inverse.66c01a54.webp" alt="" />
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
