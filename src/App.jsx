import Register from './components/Register';
import React, { useState } from 'react'; 
import Header from './components/Header';
import Slider from './components/Slider.jsx';
import Programs from './components/Programs';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  // 1. CHANGED: State now stores 'split', 'form', or false
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {/* 2. When clicking Contact us, open the "split" view */}
      <Header onRegisterClick={() => setShowRegister('split')} />
      
      <div className="slider-section">
        <Slider isPaused={!!showRegister} />
      </div>

      <div className="programs-section">
        {/* 3. When clicking Register here, open the pure "form" view */}
        <Programs onRegisterClick={() => setShowRegister('form')} />
      </div>

      <div className="about-section">
        <About />
      </div>

      {/* 4. Only show the modal if showRegister has a value */}
      {showRegister && (
        <div className="register-section">
          {/* ADDED CLASSNAME DYNAMICALLY: Adds a special class if it's form-only mode */}
          <div className={`register-modal-content ${showRegister === 'form' ? 'form-only-mode' : ''}`}>
            
            <button className="close-btn" onClick={() => setShowRegister(false)}>✕ Close</button>
            
            {/* 5. CONDITIONAL RENDER: Only show the info side if we are in 'split' mode */}
            {showRegister === 'split' && (
              <div className="modal-info-side">
                <h3>Connect With Us</h3>
                <p>Have questions about batch timings, fees, or course structures? Reach out directly or leave your details and we'll call you back.</p>
                
                <div className="contact-details-list">
                  <div className="contact-item">
                    <label>Call or WhatsApp</label>
                    <span>+91 9850332334</span>
                  </div>
                  
                  <div className="contact-item">
                    <label>Email Address</label>
                    <span>harishsharmaiitclasses@gmail.com</span>
                  </div>
                  
                  <div className="contact-item">
                    <label>Our Location</label>
                    <span>Nagpur, Maharashtra</span>
                  </div>
                </div>
              </div>
            )}

            {/* RIGHT COLUMN: Always visible */}
            <div className="modal-form-side">
              <Register />
            </div>

          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;