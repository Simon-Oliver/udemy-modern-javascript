const Hangman = function(word, guesses) {
  this.word = word;
  this.guesses = guesses;
  this.attempts = 0;
  this.guessedLetters = [];
  this.letterArray = this.word.split('');
};

Hangman.prototype.play = function(letter) {
  const string = '';
};

Hangman.prototype.initGame = function() {
  const string = '';
  this.guessedLetters.forEach(guessedLetter => {
    this.letterArray.forEach(letter => {});
  });
};

const game1 = new Hangman('game play', 2);
const game2 = new Hangman('silly', 3);

console.log(game1.play('m'));
console.log(game1.play('e'));
