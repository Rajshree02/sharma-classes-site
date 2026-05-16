import React, { useState } from 'react';

const Register = () => {
  // Just like declaring variables in C++ (string name, email;)
  // Here, we use "useState" to track what the user types.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where your Backend connection will happen later!
    console.log("Student Data Submitted:", formData);
    alert(`Thank you ${formData.name}! Your registration for ${formData.course} is received.`);
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: 'white' }}>Register for Sharma Classes</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <select 
          name="course" 
          value={formData.course} 
          onChange={handleChange} 
          style={styles.input} 
          required
        >
          <option value="">Select a Course</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select>
        <button type="submit" style={styles.button}>Register Now</button>
      </form>
    </div>
  );
};

// Simple styling to make it look decent immediately
const styles = {
  container: { padding: '40px', textAlign: 'center', backgroundColor: 'black', borderRadius: '8px' },
  form: { display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' },
  input: { padding: '12px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc' },
  button: { padding: '12px', backgroundColor: '#007bff', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};

export default Register;