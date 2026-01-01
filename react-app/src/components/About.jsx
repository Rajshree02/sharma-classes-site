import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container about">
        <div>
          <div className="avatar" aria-hidden="true"><div className="avatar-inner"></div></div>
        </div>
        <div>
          <h2 className="section-title">Harish Sharma</h2> <br /><h3> Founder and Mentor of Sharma Classes</h3> <br />
          <p className="section-sub"> After so many years of experience and extreme passion for the subject, Sir has produced great results and mentored many students.</p>
          <ul>
            <li><span className="title"></span><div><strong style={{ fontSize: '1.5em' }}>Qualifications/Achievements:</strong><br /><br /> B.E from VNIT Nagpur<br /> M.Tech in Induatrial form VNIT Nagpur<br /> GATE SCORE: 90.91 percentile <br /> CET/JEE rank: 1935 <br /> Ex-Lecturer of RCOEM</div></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
