/**
 * Created by oksanatunik on 13.04.2016.
 */
var Money = require('../src/money.js');
var PlannedIncome = require('../src/planned_income.js');

describe('PlannedIncome', function () {
    describe('constructor', function () {
        it('sets plannedDate', function () {
            var income = new PlannedIncome(new Money(60, 'pln'), 'salary', '2017/08/23');

            expect(income.plannedDate).toEqual('2017/08/23');
        });

        it('sets date to null', function () {
            var income = new PlannedIncome(new Money(35, 'usd'), 'salary Art', '2017/01/22');
            expect(income.date).toBe(null);
        });
    });
});