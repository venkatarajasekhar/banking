/**
 * Created by oksanatunik on 13.04.2016.
 */
var Transaction = require('../src/transaction');

function PlannedTransaction(amount, details, plannedDate){
    var transaction = new Transaction(amount, details, null);

    transaction.plannedDate = plannedDate;

    return transaction;
}

module.exports = PlannedTransaction;