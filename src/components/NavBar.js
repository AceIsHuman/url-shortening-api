import React, { useRef } from 'react';
import logo from '../images/logo.svg';

function NavBar() {
  const navigation = useRef();
  const handleMenu = e => {
    navigation.current.classList.toggle('open');
  }

  return (
    <header className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="shortly-logo" />
      </div>
      <div className="menu-button" onClick={handleMenu}></div>
      <div className="navigation" ref={navigation}>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
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
