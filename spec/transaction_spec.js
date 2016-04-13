/**
 * Created by oksanatunik on 13.04.2016.
 */
var Transaction = require('../src/transaction.js');
var Money = require('../src/money.js');

describe("Transaction", function () {
    describe("constructor", function () {
        it("sets amount data", function () {
            var transaction = new Transaction(new Money(15, 'usd'), 'buy a bicycle', '2016/04/27');

            expect(transaction.amount).toEqual(new Money(15, 'usd'));
        });

        it("sets details data", function () {
            var transaction = new Transaction(new Money(15, 'usd'), 'buy a bicycle', '2016/04/27');

            expect(transaction.details).toEqual('buy a bicycle');
        });

        it("sets date", function () {
            var transaction = new Transaction(new Money(15, 'usd'), 'buy a bicycle', '2016/04/27');

            expect(transaction.date).toEqual('2016/04/27');
        });
    });
});