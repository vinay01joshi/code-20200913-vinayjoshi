'use strict';
const expect = require('chai').expect

const dataProcessor = require('../../app/services/data-processor');

describe('Unit Test | Data processor Service', () => {

    it('Should Calcualte bmi with valid number', () => {
        var data = {
            "Gender": "Male",
            "HeightCm": 125,
            "WeightKg": 49,
            "Bmi": 39.2,
            "HealthRisk": "High risk",
            "BmiCategory": "obese Veryseverely"
        };
        var bmi = dataProcessor.calulcateBmi(data);
        expect(bmi).greaterThan(0);
        expect(bmi).to.be.a('number');
        expect(bmi).to.be.equal(39.2);
    })

    it('Shold Evalute Bmi Category', () => {
        var bmi = 39.2;
        var category = dataProcessor.evaluateBmiCateogory(bmi);

        expect(category).to.be.a('string');
        expect(category).to.be.equal('obese Veryseverely');
    });

    it('Should Evalute heath risk', () => {
        var bmi = 39.2;
        var risk = dataProcessor.evaluateHealthRisk(bmi);

        expect(risk).to.be.a('string');
        expect(risk).to.be.equal('High risk');
    })
});


