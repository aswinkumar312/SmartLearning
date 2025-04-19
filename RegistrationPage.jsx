import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate('/login');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#111', color: '#fff' }}>
      <div style={{ padding: '40px', borderRadius: '10px', background: '#222', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.6)', width: '600px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register for Smart Learning</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #444', background: '#333', color: '#fff' }} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #444', background: '#333', color: '#fff' }} />
          {error && <p style={{ color: '#ff4d4d' }}>{error}</p>}
          <button type="submit" style={{ padding: '10px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;