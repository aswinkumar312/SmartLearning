// CyberCourse.jsx — Redesigned Like CloudCourse 🚀

import { useNavigate } from 'react-router-dom';

function CyberCourse() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 0, padding: 0, color: '#333', fontFamily: 'Arial, sans-serif', height: '100vh', background: 'black' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 20px', 
        background: '#007bff', 
        color: '#fff', 
        width: '98vw',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ margin: 0 }}>Smart Learning</h2>
        <div>
          <button 
            onClick={() => navigate('/profile')} 
            style={{ 
              marginRight: '10px', 
              padding: '10px 20px', 
              background: '#0056b3', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            My Profile
          </button>
          <button 
            onClick={() => navigate('/logout')} 
            style={{ 
              padding: '10px 20px', 
              background: '#dc3545', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ color: 'white', fontSize: '2.5rem' }}>Cybersecurity</h1>
          <p style={{ fontSize: '1.2rem', color: 'white' }}>
            Learn ethical hacking, penetration testing, and advanced security techniques to safeguard digital assets.
          </p>
          <button
            style={{
              padding: '15px 30px',
              backgroundColor: '#007bff',
              color: '#fff',
              textAlign: 'center',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.2rem'
            }}
            onClick={() => navigate('/enroll/cybersecurity')}
          >
            Enroll Now
          </button>
        </div>

        <img 
          src="https://media.licdn.com/dms/image/v2/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=AA7ierE6T8n-g7EDphWBu9qKdqcsXkOXo4tj7xg146s" 
          alt="Cybersecurity" 
          style={{ width: '300px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
      </div>
    </div>
  );
}

export default CyberCourse;

// Design now matches the Cloud Computing course layout! 🚀
