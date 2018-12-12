const myAccount = {
  name: 'Max Muster',
  expenses: 0,
  income: 0
};

function addExpense(account, amount) {
  account.expenses += amount;
}

addExpense(myAccount, 2.5);
console.log(myAccount);
