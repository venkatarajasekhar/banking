function PlannedExpense(amount, description, plannedDate) {
    return {
        amount: amount,
        description: description,
        plannedDate: plannedDate,
        date: null
    }
}

module.exports = PlannedExpense;