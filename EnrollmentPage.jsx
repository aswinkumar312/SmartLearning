// EnrollmentPage.jsx — Full Width Form with Local Storage Update 🚀

import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const courses = {
  ai: 'AI & Data Science',
  cloud: 'Cloud Computing',
  cybersecurity: 'Cybersecurity',
  web: 'Web Development'
};

function EnrollmentPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const selectedCourse = courses[courseId] || 'Unknown Course';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourse
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setError('All fields are required.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Enter a valid email address.');
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError('Enter a valid 10-digit phone number.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Store enrollment in localStorage
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    enrolledCourses.push({ ...formData });
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));

    // Redirect to the syllabus page after enrollment
    setTimeout(() => navigate(`/course/${courseId}/syllabus`), 2000);
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, rgb(0, 0, 0), rgb(0, 0, 0))',
      width: '100vw',
      minHeight: '100vh'
    }}>
      {/* App Bar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 20px', 
        background: '#007bff', 
        color: '#fff', 
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h2>Smart Learning</h2>
        <div>
          <button onClick={() => navigate('/Profile')} style={{ marginRight: '10px', padding: '10px', background: '#0056b3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>My Profile</button>
          <button onClick={() => navigate('/')} style={{ padding: '10px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>
        </div>
        </div>
      <h2>Enroll in {selectedCourse}</h2>

      {submitted ? (
        <p style={{ color: '#4CAF50', fontSize: '1.2rem' }}>🎉 Enrollment successful! Redirecting to syllabus...</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <p style={{ marginBottom: '10px', color: '#ccc' }}>Enrolling in: <strong>{selectedCourse}</strong></p>

          {error && <p style={{ color: '#ff4d4d', fontSize: '0.9rem' }}>{error}</p>}

          <button type="submit" style={buttonStyle}>Enroll Now</button>
        </form>
      )}
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  width: '50%',
  maxWidth: '400px',
  borderRadius: '5px',
  border: '1px solid #444',
  background: '#222',
  color: '#fff',
  fontSize: '1rem'
};

const buttonStyle = {
  padding: '10px',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background 0.3s'
};

export default EnrollmentPage;

// Now stores enrollment details in localStorage and updates profile page! 🚀
