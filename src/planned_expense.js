var PlannedTransaction = require('../src/planned_transaction');

function PlannedExpense(amount, details, plannedDate) {
    return new PlannedTransaction(amount, details, plannedDate);

}

module.exports = PlannedExpense;