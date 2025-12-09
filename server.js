const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/api/services/status', (req, res) => {
  res.json([
    { id: 1, name: 'API Service', status: 'online', uptime: 99.9 },
    { id: 2, name: 'Database', status: 'online', uptime: 99.8 },
    { id: 3, name: 'Cache', status: 'online', uptime: 99.7 },
    { id: 4, name: 'Queue', status: 'online', uptime: 99.5 }
  ]);
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  // This is a demo - don't do this in production!
  if (username && password) {
    res.json({ 
      success: true, 
      token: 'demo-jwt-token',
      message: 'Login successful' 
    });
  } else {
    res.status(400).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`API Service running on port ${PORT}`);
});
