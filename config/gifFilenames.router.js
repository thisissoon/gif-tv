const express = require('express');
const router = express.Router();

const gifFilenames = require('../controllers/gifFilenames.controller');

router.route('/')
  .get(gifFilenames.index);

module.exports = router;