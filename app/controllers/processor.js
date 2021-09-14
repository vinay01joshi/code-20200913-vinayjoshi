const HttpStatus = require('http-status-codes');
const dataService = require('../services/data-processor');

exports.process = (req, res) => {

    // Process the data
    var modifiedData = dataService.processData();

    // Send the response
    res.status(HttpStatus.OK).send(modifiedData);
}


exports.createLargeJson = (req, res) => {

    dataService.createJsonFile();

    res.status(HttpStatus.OK).send(true);
}