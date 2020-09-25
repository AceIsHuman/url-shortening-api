import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import URLForm from './components/URLForm';
import Staircase from './components/Staircase';
import BottomCTA from './components/BottomCTA';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <URLForm />
      <Staircase />
      <BottomCTA />
      Features Link Shortening
      Branded Links Analytics Resources Blog Developers Support Company About
      Our Team Careers Contact
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://acielochoa.com" target="_blank" rel="noopener noreferrer">Aciel Ochoa</a>.
      </div>
    </div>
  );
}

export default App;
