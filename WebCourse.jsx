// WebCourse.jsx — Redesigned Course Page 🟢

import { useNavigate } from 'react-router-dom';
import EnrollmentPage from './EnrollmentPage';

function WebCourse() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 0, padding: 0, color: '#333', fontFamily: 'Arial, sans-serif', height: '100vh', background: 'black',width:'98vw' }}>
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

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ color: 'white', fontSize: '2.5rem' }}>Web Development</h1>
          <p style={{ fontSize: '1.2rem', color: 'white' }}>
            Learn front-end and back-end development with the latest frameworks and tools.
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
            onClick={() => navigate('/enroll/web')}
          >
            Enroll Now
          </button>
        </div>

        <img 
          src="https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E" 
          alt="Web Development" 
          style={{ width: '300px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
      </div>
    </div>
  );
}

export default WebCourse;
