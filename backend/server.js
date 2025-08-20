require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Connect to CosmosDB (MongoDB API)
mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(() => console.log('Connected to CosmosDB!'))
.catch((err) => console.error('CosmosDB connection error:', err));

app.use(cors());
app.use(express.json());

// Import routers
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const callRoutes = require('./routes/call');
const paymentRoutes = require('./routes/payment');

// Health check
app.get('/', (req, res) => {
  res.send('Robin AI Agent backend is running!');
});

// Insurance products
app.get('/api/insurance', (req, res) => {
  res.json({
    products: [
      { type: "Life Insurance", description: "Protects your family." },
      { type: "Health Insurance", description: "Covers medical expenses." },
      { type: "Term Insurance", description: "Long-term coverage." }
    ]
  });
});

// Calculate premium
app.post('/api/calculate', (req, res) => {
  const { age, coverage } = req.body;
  let premium = 500 + (coverage || 100000) / 1000 + (age || 30) * 10;
  res.json({ premium });
});

// Recommend plan
app.post('/api/recommend', (req, res) => {
  const { age, budget } = req.body;
  if (age < 30 && budget > 500) {
    res.json({ recommended: "Term Insurance" });
  } else {
    res.json({ recommended: "Health Insurance" });
  }
});

// Use API routers
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/call', callRoutes);
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Robin AI Agent backend running on port ${PORT}`);
});
