var Income = require("./income.js");
var Money = require("./money.js");

/**
 * An account.
 * @constructor
 * @param {!Money} startBalance Initial balance
 */
function Account(startBalance) {
    /**
     * @param {!Money} money Amount to be converted
     */
    function ConvertToUsd(money) {
        return money;
    }

    /**
     * @param {!Money} amount Amount to be converted
     * @param {string} currency Currency code to convert amount to
     */
    function ConvertFromUsd(amount, currency) {
        return new Money(amount, currency);
    }

    return {
        incomes: [new Income(startBalance, new Date(), 'startBalance')],
        expenses: [],
        getBalance: function (currency) {
            var totalIncomeInUsd = this.incomes.map(function (i) {
                return ConvertToUsd(i.amount).value;
            }).reduce(function (acc, i) { return acc + i; }, 0)

            var totalExpenseInUsd = this.expenses.map(function (a) {
                return ConvertToUsd(a.amount).value;
            }).reduce(function (acc, i) { return acc + i; }, 0);

            return ConvertFromUsd(totalIncomeInUsd - totalExpenseInUsd, currency);
        },
        trackIncome: function (income) {
            this.incomes.push(income);
        },
        trackExpense: function (e) {
            this.expenses.push(e);
        }
    }
}


module.exports=Account;