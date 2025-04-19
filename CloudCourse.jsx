import { useNavigate } from 'react-router-dom';

function CloudCourse() {
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
          <h1 style={{ color: 'white', fontSize: '2.5rem' }}>Cloud Computing</h1>
          <p style={{ fontSize: '1.2rem', color: 'white' }}>
            Gain expertise in cloud solutions, security, and infrastructure with this comprehensive course.
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
            onClick={() => navigate('/enroll/cloud')}
          >
            Enroll Now
          </button>
        </div>

        <img 
          src="https://euro-systems.co.uk/wp-content/uploads/2024/09/Cloud-Computing-History-1.png" 
          alt="Cloud Computing" 
          style={{ width: '300px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
      </div>
    </div>
  );
}

export default CloudCourse;
