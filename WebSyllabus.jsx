// WebSyllabus.jsx — Web Development Course Syllabus 🌐
import { useState } from 'react';
function WebSyllabus() {
    const [videoUrl, setVideoUrl] = useState(webCourseContent[0].url);
    return (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#111', color: '#fff', fontFamily: 'Arial, sans-serif',width:'98vw' }}>
        <div style={{ width: '300px', backgroundColor: '#333', overflowY: 'auto' }}>
          <h2 style={{ textAlign: 'center', padding: '10px', backgroundColor: '#444' }}>Course Content</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {webCourseContent.map((item, index) => (
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
  
  const webCourseContent = [
    { title: 'HTML Basics', url: 'https://www.youtube.com/embed/qz0aGYrrlhU' },
    { title: 'CSS Styling', url: 'https://www.youtube.com/embed/1Rs2ND1ryYc' },
    { title: 'JavaScript Essentials', url: 'https://www.youtube.com/embed/W6NZfCO5SIk' },
    { title: 'React.js Introduction', url: 'https://www.youtube.com/embed/bMknfKXIFA8' },
    { title: 'Node.js and Express.js', url: 'https://www.youtube.com/embed/Oe421EPjeBE' }
  ];
  
  export default WebSyllabus;
  
  // Fully interactive Web Development syllabus page! 🚀
  