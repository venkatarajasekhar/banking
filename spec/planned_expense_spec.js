/**
 * Created by oksanatunik on 13.04.2016.
 */
var Money = require('../src/money.js');
var PlannedExpense = require('../src/planned_expense.js');

describe("PlannedExpense", function () {
    describe("constructor", function () {
        it("sets planned data to planned date", function () {
            var expense = new PlannedExpense(new Money(15, 'usd'), 'buy a bicycle', '2016/04/27');

            expect(expense.plannedDate).toEqual('2016/04/27');
        });
        it("sets date to null", function () {
            var expense = new PlannedExpense(new Money(20, 'usd'), 'book the hotel', '2016/04/27');

            expect(expense.date).toBe(null);
        });
    });
});