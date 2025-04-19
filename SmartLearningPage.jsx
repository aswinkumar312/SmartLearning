import React from 'react';
import { Link } from 'react-router-dom';

const SmartLearningPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333',width:'99vw',height:'48vw',background: 'linear-gradient(135deg,rgb(0, 0, 0),rgb(0, 0, 0))' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#007bff' }}>Smart Learning</h2>
        <div>
          <Link to="/LoginPage">
            <button style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Login / Sign Up</button>
          </Link>
        </div>
      </header>

      <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px 20px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' ,color:'white'}}>Learn fundamental skills with Free Online Courses</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' ,color:'white'}}>Gain basic concepts with 1,000+ free online courses across new-age domains.</p>
        </div>
        <img src="https://d1vwxdpzbgdqj.cloudfront.net/images/gla-home-page/free-course-banner-d.jpg" alt="Learning" style={{ width: '400px', borderRadius: '10px' }} />
      </section>

      
    </div>
  );
};

export default SmartLearningPage;
