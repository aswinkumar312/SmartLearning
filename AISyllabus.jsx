// AISyllabus.jsx — AI & Data Science Course Syllabus 🚀
import { useState } from 'react';
function AISyllabus() {
    const [videoUrl, setVideoUrl] = useState(aiCourseContent[0].url);

    return (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#111', color: '#fff', fontFamily: 'Arial, sans-serif' ,width:'98vw'}}>
        
        <div style={{ width: '300px', backgroundColor: '#333', overflowY: 'auto' }}>
          <h2 style={{ textAlign: 'center', padding: '10px', backgroundColor: '#444' }}>Course Content</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {aiCourseContent.map((item, index) => (
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
  
  const aiCourseContent = [
    { title: 'Demo Video | AI Basics', url: 'https://www.youtube.com/embed/8zQ-RX1WD7o' },
    { title: 'Intro to Search Problem', url: 'https://www.youtube.com/embed/ezRYc1U8-9k' },
    { title: 'Informed & Uninformed Search', url: 'https://www.youtube.com/embed/PyBJ5XBfsS4' },
    { title: 'Depth First Search (DFS)', url: 'https://www.youtube.com/embed/enYbxnO0Jxw' },
    { title: 'DFS Examples', url: 'https://www.youtube.com/embed/HV-bDtZcAd4' },
    { title: 'Breadth First Search (BFS)', url: 'https://www.youtube.com/embed/h9-XnCveZoE' },
    { title: 'BFS vs DFS', url: 'https://www.youtube.com/embed/QEW46gLThAk' },
    { title: 'Depth Limited Search', url: 'https://www.youtube.com/embed/KaJ1fr48S3o' },
    { title: 'Iterative Deepening DFS', url: 'https://www.youtube.com/embed/jrbSdAiGiVg' },
    { title: 'Uniform Cost Search (UCS)', url: 'https://www.youtube.com/embed/jmyUhft7lK4' },
    { title: 'Bidirectional Search', url: 'https://www.youtube.com/embed/vcwW8PTxCSs' }
  ];
  
  export default AISyllabus;
  
  // Fully interactive AI syllabus page! 🚀
  