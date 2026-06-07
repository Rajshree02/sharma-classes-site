import React from 'react';

// 1. CHANGED: Receive the 'onRegisterClick' prop inside the brackets here so it can listen to App.jsx
const Programs = ({ onRegisterClick }) => {
    return (
        <section id="programs">
            <div id = "courses">
            <div className="container">
                <h2 className="section-title">Courses</h2>
                <p className="section-sub">Choose a format that fits your goals and schedule. All programs come with
                    clear milestones.</p>
                <div className="grid-3">
                    <article className="card">
                        <span className="pill"></span>
                        <h3>IIT JEE Courses for XI/XII</h3>
                        <p>Intensive, bespoke coaching to define your vision, build momentum, and stay consistent.
                            Includes unlimited async support.</p>
                        <ul>
                            <li>Weekly 60‑min sessions</li>
                            <li>Custom roadmap</li>
                            <li>Check‑ins & KPIs</li>
                        </ul>
                    </article>
                    <article className="card">
                        <span className="pill"></span>
                        <h3>CBSE/STATE BOARDS CLASS X/XII</h3>
                        <p>Collaborative cohorts with peer energy and structured challenges. Ship meaningful progress,
                            together.</p>
                        <ul>
                            <li>Live workshops</li>
                            <li>Accountability pods</li>
                            <li>Templates & tools</li>
                        </ul>
                    </article>
                    <article className="card">
                        <span className="pill"></span>
                        <h3>MHT-CET CRASH COURSE</h3>
                        <p>Practical sessions for managers & teams to improve communication, decision‑making, and
                            outcomes.</p>
                        <ul>
                            <li>Interactive training</li>
                            <li>Real scenarios</li>
                            <li>Action plans</li>
                        </ul>
                    </article>
                </div>
            </div>
            <div className="hero-actions">
                {/* 2. CHANGED: Converted from an <a> tag to a <button> and attached the onClick trigger */}
                <button 
                    className="btn-register" 
                    onClick={onRegisterClick}
                    style={{ 
                    cursor: 'pointer', 
                    border: 'none',
                    fontSize: '19px',       /* ◄ Bumps up the text size (Default is likely 12px-14px) */
                    fontWeight: '600',      /* ◄ Makes the text slightly bolder so it stands out */
                    padding: '12px 28px'    /* ◄ Optional: Expands the pill padding slightly if it looks squished */
                    }} 
>
    Register here
</button>
            </div>
            </div>
        </section>
    );
};

export default Programs;