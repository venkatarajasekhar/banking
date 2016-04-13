/**
 * Created by oksanatunik on 13.04.2016.
 */
var Money = require('../src/money.js');
var Expense = require('../src/expense.js');

describe('Expense', function () {
    describe('constructor', function () {
        it('sets amount to positive number', function () {
            var expense = new Expense(new Money(35, 'usd'), 'salary Art', '2017/01/22');
            expect(expense.amount.value).toBeGreaterThan(0);
        });
    });
});