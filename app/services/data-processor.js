'use strict';
const fs = require('fs');

exports.processData = () => {
    try {
        const jsonString = fs.readFileSync('./data/data.json');
        const data = JSON.parse(jsonString);
        return data;
    } catch (err) {
        console.log(err);
        return;
    }
}