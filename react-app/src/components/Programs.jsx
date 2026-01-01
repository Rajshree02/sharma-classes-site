import React from 'react';

const Programs = () => {
  return (
    <section id="programs">
      <div className="container">
        <h2 className="section-title">Coaching Programs</h2>
        <p className="section-sub">Choose a format that fits your goals and schedule. All programs come with clear milestones.</p>
        <div className="grid-3">
          <article className="card">
            <span className="pill"></span>
            <h3>IIT JEE Courses for XI/XII</h3>
            <p>Intensive, bespoke coaching to define your vision, build momentum, and stay consistent. Includes unlimited async support.</p>
            <ul>
              <li>• Weekly 60‑min sessions</li>
              <li>• Custom roadmap</li>
              <li>• Check‑ins & KPIs</li>
            </ul>
          </article>
          <article className="card">
            <span className="pill"></span>
            <h3>CBSE/STATE BOARDS CLASS X/XII</h3>
            <p>Collaborative cohorts with peer energy and structured challenges. Ship meaningful progress, together.</p>
            <ul>
              <li>• Live workshops</li>
              <li>• Accountability pods</li>
              <li>• Templates & tools</li>
            </ul>
          </article>
          <article className="card">
            <span className="pill"></span>
            <h3>MHT-CET CRASH COURSE</h3>
            <p>Practical sessions for managers & teams to improve communication, decision‑making, and outcomes.</p>
            <ul>
              <li>• Interactive training</li>
              <li>• Real scenarios</li>
              <li>• Action plans</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Programs;
