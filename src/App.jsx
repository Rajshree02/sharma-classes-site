import Register from './components/Register';
import React, { useState } from 'react'; 
import Header from './components/Header';
import Slider from './components/Slider.jsx';
import Programs from './components/Programs';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  // 1. Tracks whether the pop-up is open (true) or closed (false)
  const [showRegister, setShowRegister] = useState(false);

  const openRegisterForm = () => {
    setShowRegister(true);
  };

  return (
    <>
      {/* 2. Pass the trigger function to the Header */}
      <Header onRegisterClick={openRegisterForm} />
      
      <div className="slider-section">
        {/* Pass showRegister as a prop so the slider knows if the form is open */}
        <Slider isPaused={showRegister} />
      </div>

      <div className="programs-section">
        {/* ◄ CHANGED HERE: Pass the function down to your sister's programs block */}
        <Programs onRegisterClick={openRegisterForm} />
      </div>

      <div className="about-section">
        <About />
      </div>

      {/* 3. This wrapper will now instantly float over the screen when showRegister is true */}
      {showRegister && (
        <div className="register-section">
          <div className="register-modal-content">
            {/* Clean close button to hide the form again */}
            <button className="close-btn" onClick={() => setShowRegister(false)}>✕ Close</button>
            <Register />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;