const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/', async (req, res) => {
  const { amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // converts to paise/cents
    currency: "inr"
  });
  res.json({ clientSecret: paymentIntent.client_secret });
});

module.exports = router;
