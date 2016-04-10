var Main = require('../src/main.js');

describe('Account', function () {
    describe('.getBalance', function () {
        it('should return 0 for new account', function () {
            var balance = new Main.Money(15, 'usd');
            var account = new Main.Account(balance);

            var newBalance = account.getBalance('usd');
            var expectedBalance = new Main.Money(15, 'usd');

            expect(newBalance).toEqual(expectedBalance);
        });
    });
});
