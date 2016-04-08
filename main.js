//var incomeObj =  {amount: Money, title: Title, details: RichText, timestamp: DateTime };
//var expenseObj =  {amount: Money, title: Title, details: RichText, timestamp: DateTime };
//
//function Money(value, currency) { 
//	value: Decimal, currency: String };
//
//function Title(icon, text) { 
//	icon: Image, text: String };
//
//function RichText(markdown, attachments) { 
//	markdown: String, attachments: List<File> };
//	

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
		getBalance: function(currency) {
			var totalIncomeInUsd= this.incomes.map(function(i){return ConvertToUsd(i.amount);}).sum()
			var totalExpenseInUsd = this.expenses.map(function(a){return ConvertToUsd(a.amount);}).sum();
			return ConvertFromUsd(totalIncomeInUsd - totalExpenseInUsd, currency);
		},
		trackIncome: function(income) {
			this.incomes.push(income);
		},
		trackExpense: function(e) {
			this.expenses.push(e);
		}
	}
}

var d = new Account(new Money(0, 'pln'));
console.log(d.incomes);

