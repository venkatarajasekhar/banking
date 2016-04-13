/**
 * Created by oksanatunik on 13.04.2016.
 */
function Transaction(amount, details, date) {
    return {
        amount: amount,
        details: details,
        date: date
    }
}

module.exports = Transaction;