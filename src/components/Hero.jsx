import React from 'react';
import directorPhoto from '../assets/director_photo.jpeg';

const Hero = ({ onRegisterClick }) => {
  return (
    <section className="hero-simple">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">25+ YEARS OF EXCELLENCE</span>
          <h1>Master Mathematics with <span className="gradient-text">Harish Sharma</span></h1>
          <p className="subhead">
            Proven pedagogy by a VNIT alumnus. We focus on conceptual clarity and result-oriented coaching for JEE, BITSAT, and Board Exams.
          </p>
          <div className="hero-actions">
            <button onClick={onRegisterClick} className="cta">Register for a Demo</button>
            <a href="#mentor" className="btn-ghost">Learn about the Mentor</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={directorPhoto} alt="Harish Sharma" className="hero-img" />
          <div className="hero-badge">
            <strong>VNIT Alumnus</strong>
            <span>Ex-Lecturer RCOEM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
