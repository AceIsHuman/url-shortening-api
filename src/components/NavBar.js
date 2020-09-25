import React from 'react';
import logo from '../images/logo.svg';

function NavBar() {
  return (
    <header className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="shortly-logo" />
      </div>
      <div className="navigation">
        <div className="links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div className="login-signup">
          <button className="login-btn">Login</button>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>
    </header>
  )
};

export default NavBar;
