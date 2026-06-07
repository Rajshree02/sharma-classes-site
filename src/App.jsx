import Register from './components/Register';
import React, { useState } from 'react'; 
import Header from './components/Header';
import Slider from './components/Slider.jsx';
import Programs from './components/Programs';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  // ✨ NEW STATE: Stores the student's name once they successfully register
  const [userName, setUserName] = useState('');

  // ✨ NEW FUNCTION: Closes the modal and saves the name to update the header title
  const handleRegisterSuccess = (name) => {
    setUserName(name);
    setShowRegister(false); // Cleanly closes the popup modal background!
  };

  return (
    <>
      <Header onRegisterClick={() => setShowRegister('split')} />
      
      <div className="slider-section">
        {/* 🚀 PASSED USERNAME: Sending the name to the slider so it can change the title */}
        <Slider isPaused={!!showRegister} userName={userName} />
      </div>

      <div className="programs-section">
        <Programs onRegisterClick={() => setShowRegister('form')} />
      </div>

      <div className="about-section">
        <About />
      </div>

      {showRegister && (
        <div className="register-section">
          <div className={`register-modal-content ${showRegister === 'form' ? 'form-only-mode' : ''}`}>
            
            <button className="close-btn" onClick={() => setShowRegister(false)}>✕ Close</button>
            
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

            {/* RIGHT COLUMN */}
            <div className="modal-form-side">
              {/* 🚀 PASSED PROP: Telling Register to run our success function when done */}
              <Register onRegisterSuccess={handleRegisterSuccess} />
            </div>

          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;