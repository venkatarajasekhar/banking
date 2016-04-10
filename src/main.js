function Money(value, currencyCode) {
    return {
        value: value,
        currency: currencyCode
    };
}

var a = new Money(23, "usd");
var b = new Money(15, "pln");

function Expense(amount, date, details) {
    return {
        amount: amount,
        details: details,
        date: date
    };
}

function Income(amount, date, details) {
    return {
        amount: amount,
        details: details,
        date: date
    };
}

var c1 = new Income(new Money(3000, 'pln'), '06/04/2016', 'salary');
var c2 = new Expense(new Money(75, 'pln'), '07/04/2016', 'patrol');
var c3 = new Expense(new Money(150, 'pln'), '07/04/2016', 'food');
var c4 = new Income(new Money(60, 'pln'), '08/04/2016', 'adidas');

function Account(startBalance) {
    function ConvertToUsd(money) {
        return money;
    }

    function ConvertFromUsd(amount, currency) {
        return new Money(amount, 'usd');
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

var d = new Account(new Money(0, 'pln'));

module.exports = {
    Money: Money,
    Income: Income,
    Expense: Expense,
    Account: Account
};
