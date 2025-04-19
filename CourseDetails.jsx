// CourseDetails.jsx — Dynamic and Functional 📘

import { useParams, useNavigate } from 'react-router-dom';

const courseData = {
  ai: {
    title: 'AI & Data Science',
    description: 'Learn the fundamentals of AI, machine learning, and big data analytics with hands-on projects.',
    duration: '12 Weeks',
    image: 'https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-970-80.jpg.webp'
  },
  cloud: {
    title: 'Cloud Computing',
    description: 'Master AWS, Azure, and Google Cloud to become a cloud expert.',
    duration: '12 Weeks',
    image: 'https://euro-systems.co.uk/wp-content/uploads/2024/09/Cloud-Computing-History-1.png'
  },
  cybersecurity: {
    title: 'Cybersecurity',
    description: 'Protect digital assets with ethical hacking, penetration testing, and security protocols.',
    duration: '12 Weeks',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335'
  },
  web: {
    title: 'Web Development',
    description: 'Build dynamic websites and web apps using modern frameworks like React and Node.js.',
    duration: '12 Weeks',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/0/1715058774193'
  }
};

function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseData[courseId];

  if (!course) {
    return <h2 style={{ textAlign: 'center', color: '#ff4d4d' }}>Course not found</h2>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      width: '98vw',
      maxWidth: 'none',
    }}>
      <h1 style={{ color: '#764ba2' }}>{course.title}</h1>
      <img src={course.image} alt={course.title} style={{ width: '80%', maxHeight: '400px', borderRadius: '10px', margin: '20px 0' }} />
      <p style={{ fontSize: '1.2rem', color: '#ccc' }}>{course.description}</p>
      <p style={{ fontSize: '1rem', color: '#ffeb3b' }}>Duration: {course.duration}</p>

      <button
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          marginTop: '20px',
        }}
        onClick={() => navigate(`/enroll/${courseId}`)}
      >
        Enroll Now
      </button>
    </div>
  );
}

export default CourseDetails;

// Fully dynamic course details — with Enroll Now button linked! 🚀
