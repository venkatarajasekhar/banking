var Transaction = require('../src/transaction');

function Expense(amount, date, details) {
    var transaction = new Transaction(amount, details, date);

    if (amount.value < 0) {
        throw new Error("Amount couldn't be negative");
    }

    return transaction;
}

module.exports = Expense;
