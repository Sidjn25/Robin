require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample API route: Health check
app.get('/', (req, res) => {
  res.send('Robin AI Agent backend is running!');
});

// Sample: Get insurance product types
app.get('/api/insurance', (req, res) => {
  res.json({
    products: [
      { type: "Life Insurance", description: "Protects your family." },
      { type: "Health Insurance", description: "Covers medical expenses." },
      { type: "Term Insurance", description: "Long-term coverage." }
    ]
  });
});

// Sample: Calculate premium (stub)
app.post('/api/calculate', (req, res) => {
  const { age, coverage } = req.body;
  let premium = 500 + (coverage || 100000) / 1000 + (age || 30) * 10;
  res.json({ premium });
});

// Sample: Recommend a plan (stub)
app.post('/api/recommend', (req, res) => {
  const { age, budget } = req.body;
  if (age < 30 && budget > 500) {
    res.json({ recommended: "Term Insurance" });
  } else {
    res.json({ recommended: "Health Insurance" });
  }
});

// TODO: Add authentication, payment, chat history, Azure integrations

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Robin AI Agent backend running on port ${PORT}`);
});
