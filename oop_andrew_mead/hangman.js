const Hangman = function(word, attempts) {
  this.word = word;
  this.attempts = attempts;
};

const game1 = new Hangman('game', 2);
const game2 = new Hangman('silly', 3);

console.log(game1);
console.log(game2);
