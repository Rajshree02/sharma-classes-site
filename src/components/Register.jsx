import React, { useState } from 'react';

function Register() {
  // 1. Create the temporary basket state to store typed data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. Track user keystrokes and update the state basket instantly
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. This function fires when "Register Now" is clicked
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.course || formData.course === "Select a Course") {
      alert("Please select a valid course first!");
      return;
    }

    setLoading(true);

    // PASTE YOUR SHEETDB API URL HERE
    const SHEETDB_API_URL = "https://sheetdb.io/api/v1/e8dsvjohsbqag"; 

    try {
      // 4. Send the data to your Google Sheet API via a POST request
      const response = await fetch(SHEETDB_API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // SheetDB expects data array containing a data object matching columns
        body: JSON.stringify({
          data: [
            {
              name: formData.name,
              email: formData.email,
              course: formData.course
            }
          ]
        })
      });

      if (response.ok) {
        setIsSuccess(true); // Flip switch to show success card view!
      } else {
        alert("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Network error. Please check your connection!");
    } finally {
      setLoading(false);
    }
  };

  // STAGE 2: If the form successfully sent data to the sheet, show this card
  // STAGE 2: If the form successfully sent data to the sheet, show this personalized dashboard
  // STAGE 2: Render a full-screen standalone dashboard view upon success
  if (isSuccess) {
    return (
      <div style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0f172a', // Matches your deep dark dashboard background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        fontFamily: 'sans-serif'
      }}>
        {/* Main Card Container takes up maximum presentation space */}
        <div style={{
          maxWidth: '600px',
          width: '100%',
          backgroundColor: '#1e293b', // Sleek card background color
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)'
        }}>
          
          <h1 style={{ color: '#38bdf8', fontSize: '32px', marginBottom: '12px', fontWeight: 'bold' }}>
            👋 Hi {formData.name || 'Student'}!!
          </h1>
          
          <h3 style={{ color: '#e2e8f0', fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
            Welcome to Sharma Classes!
          </h3>
          
          <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
            Your registration for <strong style={{ color: '#38bdf8' }}>{formData.course}</strong> has been saved directly to our master roster sheet.
          </p>

          {/* Onboarding Checklist panel */}
          <div style={{
            backgroundColor: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'left',
            marginBottom: '32px'
          }}>
            <h4 style={{ color: '#f8fafc', fontSize: '14px', fontWeight: 'bold', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              📋 Next Steps For You:
            </h4>
            <ul style={{ color: '#cbd5e1', paddingLeft: '20px', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, lineHeight: '1.5' }}>
              <li>Our administrative team will call your registered email (<span style={{ color: '#38bdf8' }}>{formData.email}</span>) within 24 hours.</li>
              <li>Your physical batch materials, booklets, and schedule guidelines will be assigned upon orientation.</li>
              <li>Make sure to join our communication hub below for direct notifications.</li>
            </ul>
          </div>

          {/* WhatsApp community redirectional action button */}
          <a 
            href="https://chat.whatsapp.com/example-link"
            target="_blank" 
            rel="noreferrer"
            style={{ display: 'block', width: '100%', backgroundColor: '#25d366', color: '#fff', padding: '16px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', textAlign: 'center', fontSize: '16px', transition: 'background 0.2s', boxSizing: 'border-box' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#20ba5a'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#25d366'}
          >
            💬 Join Batch WhatsApp Community
          </a>
        </div>
      </div>
    );
  }

  // STAGE 1: The standard interactive input form view
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
        Register for Sharma Classes
      </h2>
      
      <div style={{ textAlign: 'left' }}>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter Full Name" 
          required 
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
        />
      </div>

      <div style={{ textAlign: 'left' }}>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter Email Address" 
          required 
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
        />
      </div>

      <div style={{ textAlign: 'left' }}>
        <select 
          name="course" 
          required 
          value={formData.course}
          onChange={handleChange}
          style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff', cursor: 'pointer' }}
        >
          <option value="">Select a Course</option>
          <option value="Foundation(6th-9th)">Foundation(6th-9th)</option>
          <option value="JEE(Mains + Advanced)">JEE(Mains + Advanced)</option>
          <option value="12th Boards(CBSE/STATE)">12th Boards(CBSE/STATE)</option>
          <option value="10th Boards(CBSE/STATE/ICSE)">10th Boards(CBSE/STATE/ICSE)</option>
          <option value="BITSAT">BITSAT</option>
          <option value="MHT-CET">MHT-CET</option>
        </select>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        style={{ width: '100%', padding: '14px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
      >
        {loading ? "Saving Details..." : "Register Now"}
      </button>
    </form>
  );
}

export default Register;