// multiple arguments
const add = function(a, b, c) {
  return a + b + c;
};

const result = add(2, 3, 3);
console.log(result);

// Default arguemnts
const leaderBoard = function(name = 'Anonymous', score = 0) {
  return `${name} has ${score} points`;
};

console.log(leaderBoard());
console.log(leaderBoard('Max', 100));

const getTip = function(billTotal, percent = 0.2) {
  const tip = billTotal * percent;
  return `You need to tip ${tip}$`;
};

console.log(getTip(100, 0.1));
