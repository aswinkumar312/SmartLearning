// CyberSyllabus.jsx — Cybersecurity Course Syllabus 🔐
import { useState } from 'react';
function CyberSyllabus() {
    const [videoUrl, setVideoUrl] = useState(cyberCourseContent[0].url);
    return (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#111', color: '#fff', fontFamily: 'Arial, sans-serif',width:'98vw' }}>
        <div style={{ width: '300px', backgroundColor: '#333', overflowY: 'auto' }}>
          <h2 style={{ textAlign: 'center', padding: '10px', backgroundColor: '#444' }}>Course Content</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {cyberCourseContent.map((item, index) => (
              <li
                key={index}
                style={{ padding: '15px 20px', borderBottom: '1px solid #444', cursor: 'pointer' }}
                onClick={() => setVideoUrl(item.url)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <iframe
            id="courseVideo"
            style={{ width: '80%', height: '450px', border: 'none' }}
            src={videoUrl}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  
  const cyberCourseContent = [
    { title: 'Introduction to Cybersecurity', url: 'https://www.youtube.com/embed/6wXkI4t7nuc' },
    { title: 'Types of Cyber Attacks', url: 'https://www.youtube.com/embed/Ty6oizfZC7A' },
    { title: 'Penetration Testing Basics', url: 'https://www.youtube.com/embed/FtMTMJgZbpc' },
    { title: 'Cryptography Fundamentals', url: 'https://www.youtube.com/embed/Zbn8i2hYLT0' },
    { title: 'Incident Response', url: 'https://www.youtube.com/embed/6mMzXG8GBvA' }
  ];
  
  export default CyberSyllabus;
  
  // Fully interactive Cybersecurity syllabus page! 🚀
  