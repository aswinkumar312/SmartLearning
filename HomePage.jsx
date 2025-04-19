// HomePage.jsx — Full-Screen & Polished Design 🚀

import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Profile from './Profile';

function HomePage() {
  const navigate = useNavigate();

  const courses = [
    { title: 'AI & Data Science', img: 'https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-970-80.jpg.webp', link: 'ai', description: 'Learn AI, machine learning, and big data analytics.', duration: 'Duration: 6 months' },
    { title: 'Cloud Computing', img: 'https://euro-systems.co.uk/wp-content/uploads/2024/09/Cloud-Computing-History-1.png', link: 'cloud', description: 'Master cloud infrastructure and services.', duration: 'Duration: 4 months' },
    { title: 'Cybersecurity', img: 'https://media.licdn.com/dms/image/v2/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=AA7ierE6T8n-g7EDphWBu9qKdqcsXkOXo4tj7xg146s', link: 'cybersecurity', description: 'Understand and mitigate cyber threats.', duration: 'Duration: 5 months' },
    { title: 'Web Development', img: 'https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E', link:'web',duration: 'Duration: 6 months' }
  ];

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
          <button 
            onClick={() => navigate('/Profile')} 
            style={{ 
              marginRight: '10px', 
              padding: '10px', 
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
            onClick={() => {
              console.log("Navigating to Profile");
              navigate('/');
            }}
            
            style={{ 
              
              padding: '10px', 
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

      <h2 style={{ fontSize: '3rem', color: '#fff', margin: '20px 0' }}>Explore Our Courses</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        width: '98vw',
        maxWidth: 'none',
        padding: '20px'
      }}>
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              padding: '15px',
              borderRadius: '10px',
              background: '#111',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onClick={() => navigate(`/course/${course.link}`)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img 
              src={course.img} 
              alt={course.title} 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '300px',
                objectFit: 'cover', 
                borderRadius: '10px' 
              }} 
            />
            <h3 style={{ color: '#007bff', marginTop: '10px' }}>{course.title}</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{course.description} — {course.duration}</p>
            <button style={{
              marginTop: '10px',
              padding: '10px',
              borderRadius: '5px',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#0056b3'}
            onMouseLeave={(e) => e.target.style.background = '#007bff'}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

// Full screen, responsive, and sleek design! 🚀