const express = require('express');
const router = express.Router();

const gifInfo = require('../controllers/gifInfo.controller');

router.route('/')
  .get(gifInfo.index);

module.exports = router;