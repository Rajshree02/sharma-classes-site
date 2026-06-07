import React from 'react';
import image from "../assets/director_photo.jpeg";

const TEST_STUDENTS = [
  {
    id: 1,
    name: "Siddhant Jog",
    college: "Symbiosis International University, Nagpur",
    branch: "Persuing Law",
    review: "Studying under sir during my 11th and 12th grade was truly one of the best academic experiences I’ve had. He made Mathematics incredibly interesting and easy to understand, even the toughest concepts felt simple because of his teaching style. His guidance not only helped me score well in my 12th Board examinations but also prepared me for competitive exams like the NDA examination with great confidence. What makes him stand out is the way he teaches smart tricks, shortcuts, formulas, and practical problem-solving methods that make learning both effective and enjoyable. Apart from being an exceptional teacher, he has always been supportive, motivating, and approachable for every student. In my opinion, he is undoubtedly one of the best Mathematics professors in the city, and I’m genuinely grateful for all the knowledge, confidence, and support he provided throughout my journey."
  },
  {
    id: 2,
    name: "Yash",
    college: "",
    branch: "",
    review: "Thank you for helping me clear my backlog papers. I am truly grateful for your guidance and support during my difficult time. I feel very lucky to have a teacher like you, especially when I didn’t get such guidance after 10th. Wishing you a year filled with success, good health, and happiness"
  },
  {
    id: 3,
    name: "Gursidak Singh Bassi (BITSAT score - 319)",
    college: "Birla Institute of Technology and Science Pilani, Hyderabad Campus",
    branch: "Computer Science and Engineering",
    
  },
  {
    id: 4,
    name: "Mannat Singh Bassi",
    college: " Sri Venkateshwara College of Architecture (SVCA) , Hyderabad ",
    branch: "Bachelor of Architecture",
    
  }
  
]

const About = () => {
  return (
    <section id="about" style={{ padding: '60px 0' }}>
      <div className="container about">
        <div>
            <img src={image} alt="Sharma Classes Logo"/>
        </div>
        <div>
          <h2 className="section-title">Harish Sharma</h2> <br />
          <h3> Founder and Mentor of Sharma Classes</h3> <br />
          <p className="section-sub"> After so many years of experience and extreme passion for the subject, Sir has produced great results and mentored many students.</p>
          <ul>
            <li><div><strong style={{ fontSize: '1.5em' }}>Qualifications/Achievements:</strong><br /><br /> B.E from VNIT Nagpur<br /> M.Tech in Industrial form VNIT Nagpur<br /> GATE SCORE: 90.91 percentile <br /> CET/JEE rank: 1935 <br /> Ex-Lecturer of RCOEM</div></li>
          </ul>
        </div>
      </div>

      <hr style={{ border: 'none', height: '1px', backgroundColor: '#1e293b', margin: '40px auto', maxWidth: '1160px' }} />

      <div style={{
        display: 'flex',
        flexDirection: 'row',        
        flexWrap: 'wrap',            
        justifyContent: 'left',    
        alignItems: 'flex-start',    
        gap: '24px',                 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>

        {TEST_STUDENTS.map((student) => (
          <div key={student.id} style={{
            backgroundColor: '#0a1120',
            border: '1px solid #1e293b',
            borderRadius: '12px',
            padding: '24px',
            width: '360px',             
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',    
            gap: '16px'
          }}>
            
            <div style={{
              borderBottom: '1px solid #1e293b', 
              paddingBottom: '12px'
            }}>
              <h5 style={{
                margin: '0px',
                color: '#fff',          
                fontWeight: 'bold',
                fontSize: '16px'
              }}>{student.name}</h5>
    
              {student.college && (
                <span style={{
                  color: '#38bdf8',     
                  fontSize: '12px',
                  display: 'block',
                  marginTop: '6px',
                }}>{student.college}</span>
              )}
    
              {student.branch && (
                <span style={{
                  color: '#94a3b8',     
                  fontSize: '11px',
                  display: 'block',
                  marginTop: '3px',
                }}> {student.branch}</span>
              )}
            </div>
            <div>
              <p style={{ 
                color: '#cbd5e1', 
                fontStyle: 'italic', 
                margin: 0, 
                fontSize: '14px', 
                lineHeight: '1.6' 
              }}>
                "{student.review || "No review content provided."}"
              </p>
            </div>

          </div> 
        ))}

      </div> 
         
    </section>
  );
};

export default About;