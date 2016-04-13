/**
 * Created by oksanatunik on 13.04.2016.
 */
var Money = require('../src/money.js');
var Income = require('../src/income.js');

describe('Income', function () {
    describe('constructor', function () {
        it('sets date', function () {
            var income = new Income(new Money(35, 'usd'), 'salary Art', '2017/01/22');
            expect(income.date).toEqual('2017/01/22');
        });
    });
});