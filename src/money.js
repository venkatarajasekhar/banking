/**
 * An money.
 * @constructor
 * @param {!number} value Amount of money
 * @param {!number} currencyCode The international currency code
 */
function Money(value, currencyCode) {
    return {
        value: value,
        currency: currencyCode
    };
}

module.exports = Money;

