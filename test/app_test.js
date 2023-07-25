const { expect } = require('chai');
const { toCelcius, toFahrenheit } = require('../app.js');

describe('Test zur Umrechnung der Temparute', () => {
    describe('toCelcius', () => {
        it('Postive Zahlen °C', () => {
            expect(toCelcius(62.6)).to.equal(17);
        });
        
        it('Nulltest °C', () => {
            expect(toCelcius(32)).to.equal(0);
        });
        
        it('Negative Zahlen °C', () => {
            expect(toCelcius(24.8)).to.equal(-4);
            expect(toCelcius(-4)).to.equal(-20);
        });
    });

    describe('toFahrenheit', () => {
        it('Postive Zahlen °F', () => {
            expect(toFahrenheit(21)).to.equal(69.8);
            expect(toFahrenheit(4)).to.equal(39.2);
        });

        it('Nulltest °F', () => {
            expect(toFahrenheit(0)).to.equal(32);
            // expect(toFahrenheit(-17.7777778)).to.equal(0);
            expect(toFahrenheit(-17.7777778)).to.be.closeTo(0, 0.01);
        });

        it('Negative Zahlen °F', () => {
            expect(toFahrenheit(-3)).to.equal(26.6);
            expect(toFahrenheit(-20)).to.equal(-4);
        });
    });
});
