import React from 'react';
import image from "../assets/director_photo.jpeg";

const TEST_STUDENTS = [
  {
    id: 1,
    name: "Siddhant Jog",
    college: "Symbiosis International University, Nagpur",
    branch: "Pursuing Law",
    review: "Studying under sir during my 11th and 12th grade was truly one of the best academic experiences I’ve had. He made Mathematics incredibly interesting and easy to understand. His guidance not only helped me score well in my 12th Boards but also prepared me for competitive exams like NDA with great confidence."
  },
  {
    id: 2,
    name: "Yash",
    college: "Board Student",
    branch: "Success Story",
    review: "Thank you for helping me clear my backlog papers. I am truly grateful for your guidance and support during my difficult time. I feel very lucky to have a teacher like you."
  },
  {
    id: 3,
    name: "Gursidak Singh Bassi",
    college: "BITS Pilani, Hyderabad",
    branch: "Computer Science (BITSAT: 319/400)",
    review: "Exceptional results in competitive exams. The conceptual depth provided here is unparalleled for JEE and BITSAT aspirants."
  },
  {
    id: 4,
    name: "Mannat Singh Bassi",
    college: "SVCA, Hyderabad",
    branch: "Bachelor of Architecture",
    review: "Great mentorship that goes beyond just academics, helping students find their right career path."
  }
];

const About = () => {
  return (
    <div id="about">
      {/* Mentor Section */}
      <section id="mentor" className="mentor-section">
        <div className="container mentor-grid">
          <div className="mentor-info">
            <span className="eyebrow">THE MENTOR</span>
            <h2 className="section-title">Harish Sharma</h2>
            <h3 className="mentor-subtitle">Founder & Lead Mentor</h3>
            <p className="mentor-description">
              With over 25 years of experience, Harish Sharma has mentored thousands of students, 
              turning complex mathematical concepts into intuitive insights. His passion for teaching 
              is backed by a stellar academic and professional background.
            </p>
            <div className="qualifications">
              <div className="qual-item">
                <strong>B.E. & M.Tech</strong>
                <span>VNIT Nagpur</span>
              </div>
              <div className="qual-item">
                <strong>GATE Score</strong>
                <span>90.91 Percentile</span>
              </div>
              <div className="qual-item">
                <strong>Ex-Lecturer</strong>
                <span>RCOEM Nagpur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title centered">Student Success Stories</h2>
          <div className="testimonials-grid">
            {TEST_STUDENTS.map((student) => (
              <div key={student.id} className="testimonial-card">
                <div className="testimonial-header">
                  <h4>{student.name}</h4>
                  <span className="student-college">{student.college}</span>
                  <span className="student-branch">{student.branch}</span>
                </div>
                <p className="testimonial-text">"{student.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
