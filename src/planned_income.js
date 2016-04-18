var PlannedTransaction = require('../src/planned_transaction');

/**
 * An plannedIncome.
 * @constructor
 * @param {!Money} amount Expense amount
 * @param {string} details The additional information about the planned income
 * @param {!string} plannedDate The date expense is going to be placed
 */
module.exports = function (amount, details, plannedDate) {
    return new PlannedTransaction(amount, details, plannedDate);
};