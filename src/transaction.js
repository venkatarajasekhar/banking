/**
 * Created by oksanatunik on 13.04.2016.
 */
/**
 * An transaction.
 * @constructor
 * @param {!Money} amount Expense amount
 * @param {string} details The additional information about transaction
 * @param {!string} date The date transaction was created
 */
function Transaction(amount, details, date) {
    return {
        amount: amount,
        details: details,
        date: date
    };
}

module.exports = Transaction;
