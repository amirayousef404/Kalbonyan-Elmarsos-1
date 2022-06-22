const account = {
  name: "Amira Yousef",
  expenses: [],
  income: [],
  addExpenses: function (description, ammount) {
    this.expenses.push({
      description: description,
      ammount: ammount,
    })
  },
  addIncome: function (description, ammount) {
    this.income.push({
      description: description,
      ammount: ammount,
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0
    let accountBalance = 0
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.ammount
    })
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.ammount
    })
    accountBalance = totalIncome - totalExpenses

    return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
  },
}

account.addExpenses("Rent", 950)
account.addExpenses("Coffee", 2)
account.addIncome("Job", 1000)
console.log(account.getAccountSummary())
