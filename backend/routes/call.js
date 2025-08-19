const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { phone } = req.body;
  // TODO: Integrate with Azure Communication Services
  res.json({ status: "Call scheduled to " + phone });
});

module.exports = router;
