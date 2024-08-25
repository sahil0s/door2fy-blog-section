import React from 'react';
import './SignIn.css';
import Navbar from '../Navbar/Navbar';


const SignIn = () => {
  return (
    <div>
      <Navbar />
      <div className="sign-in-container">
        <div className="sign-in-left">
          <div className="sign-in-text">
            <h2>Sign In</h2>
            <p>Sign in using your registered mobile number.</p>
          </div>
          <img src="/images/Login.webp" alt="Sign In" className="sign-in-image" />
        </div>
        <div className="sign-in-right">
          <h2>Login</h2>
          <form className="sign-in-form">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Enter your mobile number"
              required
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
