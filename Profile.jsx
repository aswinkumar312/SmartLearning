// Profile.jsx — Redesigned Like AICourse 🚀

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", 
    email: "",
    bio: ""
  });

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch user details from login
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser({
        name: loggedInUser.name,
        email: loggedInUser.email,
        bio: loggedInUser.bio || "Welcome to your profile!"
      });
    }

    // Fetch enrolled courses from backend
    fetch("http://localhost:5000/api/courses") 
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, color: 'black', fontFamily: 'Arial, sans-serif', height: '100vh', background: 'black',width:'98vw' }}>
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
            onClick={() => navigate('/HomePage')} 
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
            Home
          </button>
          <button 
            onClick={() => navigate('/')} 
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
          <h1 style={{ color: 'white', fontSize: '2.5rem' }}>Welcome, {user.name || "Guest"}</h1>
          <p style={{ fontSize: '1.2rem', color: 'white' }}>{user.bio}</p>
          <h2 style={{ color: 'white', fontSize: '2rem', marginTop: '20px' }}>Enrolled Courses</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {courses.length > 0 ? (
              courses.map((course) => (
                <div key={course._id} style={{ padding: '15px', borderRadius: '10px', background: '#111', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)' }}>
                  <img
                    src={course.thumbnail || "https://via.placeholder.com/300x150"}
                    alt={course.title}
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                  />
                  <h3 style={{ color: '#007bff', marginTop: '10px' }}>{course.title}</h3>
                  <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{course.duration}</p>
                </div>
              ))
            ) : (
              <p style={{ color: 'white' }}>No courses enrolled yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
