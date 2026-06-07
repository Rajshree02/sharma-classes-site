import React, { useState } from 'react';

// 💡 We pass onRegisterSuccess as a prop from the main dashboard page
function Register({ onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.course || formData.course === "Select a Course") {
      alert("Please select a valid course first!");
      return;
    }

    setLoading(true);
    const SHEETDB_API_URL = "https://sheetdb.io/api/v1/e8dsvjohsbqag"; 

    try {
      const response = await fetch(SHEETDB_API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
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
        // 🚀 Tell the main page dashboard the registration is done and send the name!
        if (onRegisterSuccess) {
          onRegisterSuccess(formData.name);
        }
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