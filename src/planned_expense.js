var PlannedTransaction = require('../src/planned_transaction');

/**
 * An plannedExpense.
 * @constructor
 * @param {!Money} amount Expense amount
 * @param {string} details The additional information about the planned expense
 * @param {!string} plannedDate The date expense is going to be placed
 */
function PlannedExpense(amount, details, plannedDate) {
    return new PlannedTransaction(amount, details, plannedDate);

}

module.exports = PlannedExpense;