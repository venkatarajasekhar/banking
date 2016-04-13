var Transaction = require('../src/transaction');

function Income(amount, details, date) {
    var transaction = new Transaction(amount, details, date);
    return transaction;
}

module.exports = Income;