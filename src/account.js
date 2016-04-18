var Income = require("./income.js");
var Money = require("./money.js");

/**
 * @param {!Money} money Amount to be converted
 * @return {Money} amount of money in usd
 */
function convertToUsd(money) {
    return money;
}

/**
 * @param {!number} amount Amount to be converted
 * @param {!string} currency Currency code to convert amount to
 * @return {Money} amount of money converted from usd to other currency
 */
function convertFromUsd(amount, currency) {
    return new Money(amount, currency);
}

/**
 * An account.
 * @constructor
 * @param {!Money} startBalance Initial balance
 */
function Account(startBalance) {
    this.incomes = [new Income(startBalance, new Date(), 'startBalance')];
    this.expenses = [];
}

/**
 * @param {!string} currency Currency code to get balance
 * @return {Money} balancy which was converted from usd
 */
Account.prototype.getBalance = function (currency) {
    var totalIncomeInUsd = this.incomes.map(function (i) {
        return convertToUsd(i.amount).value;
    }).reduce(function (acc, i) {
        return acc + i;
    }, 0);

    var totalExpenseInUsd = this.expenses.map(function (a) {
        return convertToUsd(a.amount).value;
    }).reduce(function (acc, i) {
        return acc + i;
    }, 0);

    return convertFromUsd(totalIncomeInUsd - totalExpenseInUsd, currency);
};

/**
 * @param {!Income} income Amount incomes
 */
Account.prototype.trackIncome = function (income) {
    this.incomes.push(income);
};

/**
 * @param {!Expense} e Amount expenses
 */
Account.prototype.trackExpense = function (e) {
    this.expenses.push(e);
};

module.exports = Account;
