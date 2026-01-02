import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider.jsx';
import Programs from './components/Programs';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="slider-section">
        <Slider />
      </div>
      <div className="programs-section">
        <Programs />
      </div>
      <div className="about-section">
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;
