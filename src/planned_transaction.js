/**
 * Created by oksanatunik on 13.04.2016.
 */
var Transaction = require('../src/transaction');

/**
 * An plannedTransaction - base class for the future transaction.
 * @constructor
 * @param {!Money} amount Expense amount
 * @param {string} details The additional information about planned transaction
 * @param {!string} plannedDate The date expense is going to be created
 */
function PlannedTransaction(amount, details, plannedDate) {
    var transaction = new Transaction(amount, details, null);

    transaction.plannedDate = plannedDate;

    return transaction;
}

module.exports = PlannedTransaction;
