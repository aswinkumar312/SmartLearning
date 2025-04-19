require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5001;

// Connect to MongoDB Atlas
console.log('Connecting to MongoDB...');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

// Test login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const staticEmail = 'admin@example.com';
  const staticPassword = 'admin123';

  try {
    if (email !== staticEmail || password !== staticPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Basic test route
app.get('/', (req, res) => {
  res.send('API is running! 🚀');
});

// Start the server
app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
