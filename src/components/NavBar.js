import React, { useRef, useEffect, useCallback } from 'react';
import logo from '../images/logo.svg';

function NavBar() {
  const navMenu = useRef();
  const navContainer = useRef();

  const handleMenu = useCallback(() => {
    navContainer.current.classList.toggle('open');
    navMenu.current.classList.toggle('open');
  }, []);

  useEffect(() => {
    window.addEventListener('click', e => {
      if (e.target === navContainer.current) {
        handleMenu();
      }
    });
  }, [handleMenu]);

  return (
    <header className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="shortly-logo" />
      </div>
      <div className="menu-button" onClick={handleMenu}></div>
      <div className="navigation-container" ref={navContainer}>
        <div className="navigation" ref={navMenu}>
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
      </div>
    </header>
  );
}

export default NavBar;
