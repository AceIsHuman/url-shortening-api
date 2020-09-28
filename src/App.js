import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import URLForm from './components/URLForm';
import Links from './components/Links';
import Staircase from './components/Staircase';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import Attribution from './components/Attribution';

import './main.css';
import useLocalStorage from './utils/useLocalStorage';

function App() {
  const [links, addLink] = useLocalStorage("links");

  return (
    <div className="app">
      <NavBar />
      <Banner />
      <URLForm addLink={addLink} />
      <Links links={links} />
      <Staircase />
      <BottomCTA />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
