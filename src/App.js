import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import URLForm from './components/URLForm';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <URLForm />
      Advanced Statistics Track how your
      links are performing across the web with our advanced statistics
      dashboard. Brand Recognition Boost your brand recognition with each click.
      Generic links don’t mean a thing. Branded links help instil confidence in
      your content. Detailed Records Gain insights into who is clicking your
      links. Knowing when and where people engage with your content helps inform
      better decisions. Fully Customizable Improve brand awareness and content
      discoverability through customizable links, supercharging audience
      engagement. Boost your links today Get Started Features Link Shortening
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
