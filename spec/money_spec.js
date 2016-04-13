/**
 * Created by oksanatunik on 13.04.2016.
 */
var Money = require('../src/money');

describe("Money", function () {
    describe("constructor", function () {
        it("sets value data", function () {
            var money = new Money(15, 'usd');

            expect(money.value).toEqual(15);
        });

        it("sets currencyCode data", function () {
            var money = new Money(15, 'usd');

            expect(money.currency).toEqual('usd');
        });
    });
});