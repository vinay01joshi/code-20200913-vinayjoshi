'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/processor');

router.get('/', controller.process);
router.get('/create', controller.createLargeJson);

module.exports = router;