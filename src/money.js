function Money(value, currencyCode) {
    return {
        value: value,
        currency: currencyCode
    };
}

module.exports = Money;
