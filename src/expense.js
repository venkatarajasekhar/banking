var Transaction = require('../src/transaction');

/**
 * An expense.
 * @constructor
 * @param {!Money} amount Expense amount
 * @param {!string} date The date expense was created
 * @param {string} details The addional information about expense
 */
function Expense(amount, date, details) {
    var transaction = new Transaction(amount, details, date);

    if (amount.value < 0) {
        throw new Error("Amount couldn't be negative");
    }

    return transaction;
}

module.exports = Expense;

