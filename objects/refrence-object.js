const myAccount = {
  name: 'Max Muster',
  expenses: 0,
  income: 0
};

function addExpense(account, amount) {
  account.expenses += amount;
}

function addIncome(account, amount) {
  account.income += amount;
}

function resetAccount(account) {
  account.income = 0;
  account.expenses = 0;
  return account;
}

function getAccountSum(account) {
  return {
    accountSummary: `Account for ${account.name} has $${account.income -
      account.expenses}. $${account.income} in income. $${
      account.expenses
    } in expenses.`
  };
}

addExpense(myAccount, 2.5);
addIncome(myAccount, 500);
addExpense(myAccount, 100);
console.log(getAccountSum(myAccount).accountSummary);
console.log(resetAccount(myAccount));
