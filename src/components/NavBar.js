import React from 'react';
import logo from '../images/logo.svg';

function NavBar() {
  return (
    <header class="nav-bar">
      <div class="logo-container">
        <img src={logo} alt="shortly-logo" />
      </div>
      <div class="navigation">
        <div class="links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div class="login-signup">
          <button class="login-btn">Login</button>
          <button class="sign-up-btn">Sign Up</button>
        </div>
      </div>
    </header>
  )
};

export default NavBar;
