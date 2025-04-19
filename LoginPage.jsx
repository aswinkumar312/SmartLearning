
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        navigate('/HomePage'); // Redirect to HomePage after login
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Server error. Please try again later.');
    }
  };

  return (
<div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  height: '100vh', 
  background: '#111', 
  color: '#fff', 
  width: '98vw' 
}}>
  <div style={{ 
    padding: '40px', 
    borderRadius: '10px', 
    background: '#222', 
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.6)', 
    width: '600px', 
    height:'300px'
  }}>

        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Smart Learning</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
  <label style={{ fontSize: '1.1rem', color: '#ccc' }}>Enter Email:</label>
  <input 
    type="email" 
    name="email" 
    placeholder="Email" 
    value={formData.email} 
    onChange={handleChange} 
    required 
    style={inputStyle} 
  />

  <label style={{ fontSize: '1.1rem', color: '#ccc' }}>Enter Password:</label>
  <input 
    type="password" 
    name="password" 
    placeholder="Password" 
    value={formData.password} 
    onChange={handleChange} 
    required 
    style={inputStyle} 
  />

  {error && <p style={{ color: '#ff4d4d' }}>{error}</p>}
  <button type="submit" style={buttonStyle}>Login</button>
</form>

      </div>
    </div>
  );
}

const inputStyle = { padding: '10px', borderRadius: '5px', border: '1px solid #444', background: '#333', color: '#fff' };
const buttonStyle = { padding: '10px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' };

export default LoginPage;