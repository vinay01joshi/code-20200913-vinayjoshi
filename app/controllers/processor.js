const HttpStatus = require('http-status-codes');

exports.process = (req, res) => {
    res.status(HttpStatus.OK).send({
        message: 'Dummy Method',
        status: HttpStatus.OK
    });
}