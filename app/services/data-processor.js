'use strict';
const { randomInt } = require('crypto');
const fs = require('fs');
const jsonfile = require('jsonfile')

exports.processData = () => {
    try {
        const jsonString = fs.readFileSync('./data/large.json');
        const data = JSON.parse(jsonString);
        data.forEach(element => {
            var bmi = calulcateBmi(element);
            element.Bmi = bmi;
            element.HealthRisk = evaluateHealthRisk(bmi);
            element.BmiCategory = evaluateBmiCateogory(bmi);
        });
        saveProcessodJson(data);
        return data;
    } catch (err) {
        console.log(err);
        return;
    }
}


exports.createJsonFile = () => {
    const file = './data/large.json';
    var data = [];
    for (var i = 0; i < 100000; i++) {
        var obj = {
            Gender: "Male",
            HeightCm: randomInt(10, 180),
            WeightKg: randomInt(5, 100)
        }
        data.push(obj);
    }

    jsonfile.writeFile(file, data, function (err) {
        if (err) console.error(err)
    })
}

const saveProcessodJson = (data) => {
    const file = './data/processed-large.json';
    jsonfile.writeFile(file, data, function (err) {
        if (err) console.error(err)
    })
}

const evaluateHealthRisk = (bmi) => {

    if (bmi < 18.4) return "Malnutrition risk";

    if (bmi > 18.5 && bmi <= 24.9) return "Low risk";

    if (bmi > 25 && bmi <= 29.9) return "Enhanced risk";

    if (bmi > 30 && bmi <= 34.9) return "Medium risk";

    if (bmi > 35 && bmi <= 39.9) return "High risk";

    if (bmi > 40) return "Very high risk";
}

const evaluateBmiCateogory = (bmi) => {
    if (bmi < 18.4) return "Underweight";

    if (bmi > 18.5 && bmi <= 24.9) return "Normal weight";

    if (bmi > 25 && bmi <= 29.9) return "Overweight Moderately";

    if (bmi > 30 && bmi <= 34.9) return "obese Severely";

    if (bmi > 35 && bmi <= 39.9) return "obese Veryseverely";

    if (bmi > 40) return "obese";
}


const calulcateBmi = (data) => {
    if (heightInMeter === 0) return 0;

    var heightInMeter = data.HeightCm / 100;
    var bmi = data.WeightKg / heightInMeter;

    return bmi;
}