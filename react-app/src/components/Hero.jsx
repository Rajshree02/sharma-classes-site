import React from 'react';

const Hero = () => {
  return (
    <main id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">COACHING • MINDSET • PERFORMANCE</span>
          <h1 className="headline">Providers of <span className="gradient-text">Holistic Education </span></h1>
          <p className="subhead">Personalized coaching that blends clarity, accountability, and proven systems—so you move from stuck to unstoppable in work and life.</p>
          <div className="hero-actions">
            {/* <a href="#contact" className="cta">Schedule a Call</a> */}
            <a href="#programs" className="btn-ghost">Explore Programs</a>
          </div>
          <div className="trust" aria-label="Trusted by list">
            <span>Founders</span>
            <span>Leaders</span>
            <span>Creators</span>
            <span>Students</span>
            <span>Teams</span>
          </div>
        </div>

        <aside className="hero-card" aria-label="Quick stats">
          <div className="score">
            <div className="chip"><strong>25 Years</strong><small> Teaching Experience</small></div>
            <div className="chip"><strong>4.9★</strong><small>Average Rating</small></div>
            {/* <div className="chip"><strong>12 wks</strong><small>Signature Sprint</small></div> */}
          </div>
          {/* <div className="note">Backed by frameworks from behavioral science, habit design, and mindful leadership.</div> */}
        </aside>
      </div>
    </main>
  );
};

export default Hero;
