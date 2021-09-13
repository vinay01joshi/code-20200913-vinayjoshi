const path = require('path');
const express = require('express');
const router = express.Router();

const processor = require(path.resolve('./app/routes/processor'));

router.use('/processor', processor);

module.exports = (app) => {
    app.use('/', router);
}