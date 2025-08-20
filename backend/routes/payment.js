const express = require('express');
const router = express.Router();

// Dummy payment endpoint (no Stripe integration)
router.post('/', async (req, res) => {
  const { amount } = req.body;
  if (!amount || amount <= 0) return res.status(400).json({ error: "Invalid amount" });

  // Simulate payment success response
  res.json({
    clientSecret: 'demo_secret_key',
    message: 'Payment feature is not active yet. This is a placeholder response.'
  });
});

module.exports = router;
