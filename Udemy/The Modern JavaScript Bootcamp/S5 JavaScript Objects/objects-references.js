let myAccount = {
  name: "Amira Yousef",
  expenses: 0,
  income: 0,
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

//challenge

let addIncome = function (account, income) {
  account.income = account.income + income
}

let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = function (account) {
  let balance = account.income + account.expenses
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)

addExpense(myAccount, 1.5)

addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
