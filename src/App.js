import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import URLForm from './components/URLForm';
import Staircase from './components/Staircase';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import Attribution from './components/Attribution';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <URLForm />
      <Staircase />
      <BottomCTA />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
