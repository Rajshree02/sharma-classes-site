import Register from './components/Register';
import React, { useState } from 'react'; 
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [userName, setUserName] = useState('');

  const handleRegisterSuccess = (name) => {
    setUserName(name);
    setShowRegister(false);
  };

  return (
      <div id="home">
      <Header onRegisterClick={() => setShowRegister('split')} />
      
      <Hero onRegisterClick={() => setShowRegister('split')} />

      <Programs onRegisterClick={() => setShowRegister('form')} />

      <About />

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
    </div>
  );
}

export default App;