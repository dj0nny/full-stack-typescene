const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ response: 200, route: 'todo', method: 'GET' });
});

module.exports = router;