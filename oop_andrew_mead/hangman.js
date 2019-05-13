const Hangman = function(word, guesses) {
  this.word = word;
  this.guesses = guesses;

  this.attempts = 0;
  this.guessedLetters = [];
  this.letterArray = this.word.split('');
};

Hangman.prototype.play = function(guessedLetter) {
  if (this.attempts > this.guesses) {
    return 'Game Over';
  }

  if (this.letterArray.includes(guessedLetter)) {
    this.guessedLetters.push(guessedLetter);
  } else if (!this.letterArray.includes(guessedLetter)) {
    this.attempts = this.attempts + 1;
  }

  return this.displayString().includes('*')
    ? this.displayString()
    : `
------------
${this.displayString()}
YOU WIN!!!
------------
`;
};

Hangman.prototype.displayString = function() {
  let string = '';
  this.letterArray.forEach(letter => {
    if (this.guessedLetters.includes(letter)) {
      string += letter;
    } else if (letter === ' ') {
      string += ' ';
    } else if (!this.guessedLetters.includes(letter)) {
      string += '*';
    }
  });
  return string;
};

const game1 = new Hangman('game', 2);
const game2 = new Hangman('silly', 3);

console.log(game1.play('m'));

console.log(game1.play('g'));
console.log(game1.play('a'));
console.log(game1.play('x'));
console.log(game1.play('x'));
console.log(game1.play('e'));
console.log(game1);
