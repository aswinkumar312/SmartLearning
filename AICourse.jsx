// AICourse.jsx — Redesigned Course Page 🟢

import { useNavigate } from 'react-router-dom';

function AICourse() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 0, padding: 0, color: 'black', fontFamily: 'Arial, sans-serif', height: '100vh', background: 'black' }}>
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
          <h1 style={{ color: 'white', fontSize: '2.5rem' }}>Artificial Intelligence</h1>
          <p style={{ fontSize: '1.2rem', color: 'white' }}>
            Artificial Intelligence (AI) is the simulation of human intelligence in machines, enabling them to learn, reason, and solve problems. It powers technologies like natural language processing, computer vision, and autonomous systems, transforming industries worldwide.
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
            onClick={() => navigate('/enroll/ai')}
          >
            Enroll Now
          </button>
        </div>

        <img 
          src="https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-970-80.jpg.webp" 
          alt="Certificate Preview" 
          style={{ width: '300px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
      </div>
    </div>
  );
}

export default AICourse;
