// CloudSyllabus.jsx — Cloud Computing Course Syllabus ☁️
import { useState } from 'react';
function CloudSyllabus() {
    const [videoUrl, setVideoUrl] = useState(cloudCourseContent[0].url);
    return (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#111', color: '#fff', fontFamily: 'Arial, sans-serif' ,width:'98vw'}}>
        <div style={{ width: '300px', backgroundColor: '#333', overflowY: 'auto' }}>
          <h2 style={{ textAlign: 'center', padding: '10px', backgroundColor: '#444' }}>Course Content</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {cloudCourseContent.map((item, index) => (
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
  
  const cloudCourseContent = [
    { title: 'Cloud Computing Basics', url: 'https://www.youtube.com/embed/M988_fsOSWo' },
    { title: 'Virtualization & Cloud Models', url: 'https://www.youtube.com/embed/M3IqXcQf5Os' },
    { title: 'Amazon Web Services (AWS) Overview', url: 'https://www.youtube.com/embed/aZ1FjJ0B25s' },
    { title: 'Microsoft Azure Introduction', url: 'https://www.youtube.com/embed/mo6XK4yEOZw' },
    { title: 'Google Cloud Platform (GCP) Overview', url: 'https://www.youtube.com/embed/OvqOP8vI4Mg' },
    { title: 'Serverless Computing', url: 'https://www.youtube.com/embed/Xo6yotRX1l4' }
  ];
  
  export default CloudSyllabus;
  
  // Fully interactive Cloud Computing syllabus page! 🚀
  