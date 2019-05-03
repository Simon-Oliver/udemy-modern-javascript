const account = {
  name: 'Max Muster',
  expenses: [],
  income: [],
  addExpense(description, amount) {
    const newExpense = { description, amount };
    this.expenses.push(newExpense);
  },
  addIncome(description, amount) {
    const newIncome = { description, amount };
    this.income.push(newIncome);
  },
  getAccountAmount() {
    const init = 0;
    const expenses = this.expenses.reduce((acc, curr) => {
      return acc + curr.amount;
    }, init);
    const income = this.income.reduce((acc, curr) => {
      return acc + curr.amount;
    }, init);

    return income - expenses;
  },
  getAccountSummary() {
    return `${this.name} has $${this.getAccountAmount()} in his account`;
  }
};

account.addIncome('Salary', 100);
account.addExpense('Food', 59);

console.log(account.getAccountSummary());
