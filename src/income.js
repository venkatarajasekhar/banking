var Transaction = require('../src/transaction');

/**
 * An income.
 * @constructor
 * @param {!Money} amount Expense amount
 * @param {!string} date The date income was created
 * @param {string} details The additional information about expense
 */
function Income(amount, details, date) {
    var transaction = new Transaction(amount, details, date);
    return transaction;
}

module.exports = Income;