const express = require('express');
const router = express.Router();


router.post('/', function(req, res, next) {
  const data= req.body
  res.json(data)
});

module.exports = router;
