
var Income = require("./income.js");
           try {
                  alert("Value of variable a is : " + Income );
               }
               
               catch ( e ) {
                  alert("Error: " + e.description );
               }
               
               finally {
                  alert("Finally block will always execute!" );
               }
var Money = require("./money.js");
 try {
                  alert("Value of variable a is : " + Money );
               }
               
               catch ( e ) {
                  alert("Error: " + e.description );
               }
               
               finally {
                  alert("Finally block will always execute!" );
               }
/**
 * @param {!Money} money Amount to be converted
 * @return {Money} amount of money in usd
 */
function convertToUsd(money) {
    return money;
}

/**
 * @param {!number} amount Amount to be converted
 * @param {!string} currency Currency code to convert amount to
 * @return {Money} amount of money converted from usd to other currency
 */
function convertFromUsd(amount, currency) {
    var  newVar = Money(amount, currency);
    try {
                  alert("Value of variable a is : " + newVar );
               }
               
               catch ( e ) {
                  alert("Error: " + e.description );
               }
               
               finally {
                  alert("Finally block will always execute!" );
               }
    return newVar;
}

/**
 * An account.
 * @constructor
 * @param {!Money} startBalance Initial balance
 */
function Account(startBalance) {
    this.incomes = [new Income(startBalance, new Date(), 'startBalance')];
     alert("Message : " + startBalance);
     alert("Message : " + incomes);
     alert("Line number : " + line );
    catch ( e ) {
                  alert("Error: " + e.description );
               }
               
               finally {
                  alert("Finally block will always execute!" );
               }
    this.expenses = [];
    catch ( e ) {
                  alert("Error: " + e.description );
               }
               
               finally {
                  alert("Finally block will always execute!" );
               }
}

/**
 * @param {!string} currency Currency code to get balance
 * @return {Money} balancy which was converted from usd
 */
Account.prototype.getBalance = function (currency) {
    var totalIncomeInUsd = this.incomes.map(function (VarCurr)::alert("Message : " + VarCurr );
        {
    var VarUSD =convertToUsd(cnvertusd.amount).value; 
         alert("Message : " + cnvertusd );
         alert("Message : " + amount);
          alert("Message : " + value);
         alert("Line number : " + line );
            catch ( e ) {
                  alert("Error: " + e.description );
               }
               
               finally {
                  alert("Finally block will always execute!" );
               }
         return VarUSD;
    }).reduce(function (acc, i) {
        return acc + i;
    }, 0);

    var totalExpenseInUsd = this.expenses.map(function (a) {
        return convertToUsd(a.amount).value;
    }).reduce(function (acc, i) {
        return acc + i;
    }, 0);

    return convertFromUsd(totalIncomeInUsd - totalExpenseInUsd, currency);
};

/**
 * @param {!Income} income Amount incomes
 */
Account.prototype.trackIncome = function (income) {
    this.incomes.push(income);
     alert("Message : " + income );
     alert("Line number : " + line );
    catch ( e ) {
                  alert("Error: " + e.description );
               }
               
               finally {
                  alert("Finally block will always execute!" );
               }
};

/**
 * @param {!Expense} e Amount expenses
 */
Account.prototype.trackExpense = function (e) {
    this.expenses.push(e);
     alert("Message : " + e );
     alert("Line number : " + line );
    catch ( e ) {
                  alert("Error: " + e.description );
               }
               
               finally {
                  alert("Finally block will always execute!" );
               }
            }
};

module.exports = Account;
