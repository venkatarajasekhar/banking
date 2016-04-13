module.exports = function (amount, description, plannedDate) {
    return{
        amount: amount,
        description: description,
        plannedDate: plannedDate,
        date: null
    }
};