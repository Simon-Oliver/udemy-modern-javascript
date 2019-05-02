const account = {
  name: 'Max Muster',
  expenses: [
    {
      description: 'Coffe',
      ammount: 2
    }
  ],
  addExpense(description, amount) {
    const newExpense = { description, amount };
    account.expenses.push(newExpense);
  },
  getAccountAmount() {
    return this.expenses.reduce((a, b) => a.ammount + b.amount);
  },
  getAccountSummary() {
    return `${this.name} has $${this.getAccountAmount()} in expenses`;
  }
};

account.addExpense('Food', 59);

console.log(account.getAccountSummary());
