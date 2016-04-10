var Account = require('../src/account.js');
var Money = require('../src/money.js');
var Expense = require('../src/expense.js');
var Income = require('../src/income.js');

describe('Account', function () {
    describe('.getBalance', function () {
        it('should return 0 for new account', function () {
            var balance = new Money(15, 'usd');
            var account = new Account(balance);

            var newBalance = account.getBalance('usd');
            var expectedBalance = new Money(15, 'usd');

            expect(newBalance).toEqual(expectedBalance);
        });

        it('should return 30$ for the account, when the start balance is 15$ + adding 15$ to the balance', function () {
            var balance = new Money(15, 'usd');
            var account = new Account(balance);
            var newIncome = new Income(new Money(15, 'usd'), 'today', '16/04/27');
            
            account.trackIncome(newIncome);

            var newBalance = account.getBalance('usd');
            var expectedBalance = new Money(30, 'usd');

            expect(newBalance).toEqual(expectedBalance);
        });

        it('should return 45$ for the account, when the start balance is 15$ + adding 30$ to the balance', function () {
            var balance = new Money(15, 'usd');
            var account = new Account(balance);
            var newIncome = new Income(new Money(15, 'usd'), 'today', '16/04/27');

            account.trackIncome(newIncome);
            account.trackIncome(newIncome);

            var newBalance = account.getBalance('usd');
            var expectedBalance = new Money(45, 'usd');

            expect(newBalance).toEqual(expectedBalance);
        });
    });


    describe('.trackExpense', function () {
        it('should return 10$ for $5 expense', function () {
            var balance = new Money(15, 'usd');
            var account = new Account(balance);
            var newExpense = new Expense(new Money(5, 'usd'), 'today', '16/04/27');

            account.trackExpense(newExpense);

            var newBalance = account.getBalance('usd');
            var expectedBalance = new Money(10, 'usd');

            expect(newBalance).toEqual(expectedBalance);
        });
    });

});
