import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import URLForm from './components/URLForm';
import Staircase from './components/Staircase';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';

import './main.css';
import useLocalStorage from './utils/useLocalStorage';

function App() {
  const [links, addLink] = useLocalStorage("links");

  return (
    <div className="app">
      <NavBar />
      <Banner />
      <URLForm addLink={addLink} />
      <Staircase links={links} />
      <BottomCTA />
      <Footer />
    </div>
  );
}

export default App;
