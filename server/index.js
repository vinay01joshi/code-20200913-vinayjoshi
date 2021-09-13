const express = require('express');
const routes = require('./routes');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        message: "The service is online!",
        version: '1.0.0',
    });
});


routes(app);
module.exports = app;