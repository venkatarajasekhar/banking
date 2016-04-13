var PlannedTransaction = require('../src/planned_transaction');

module.exports = function (amount, details, plannedDate) {
    return new PlannedTransaction(amount, details, plannedDate);
};