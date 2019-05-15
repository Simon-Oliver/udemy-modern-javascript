const Hangman = function(word, guesses) {
  this.word = word;
  this.guesses = guesses;

  this.remainingGuesses = guesses;
  this.guessedLetters = [];
  this.letterArray = this.word.toLowerCase().split('');
};

Hangman.prototype.play = function(guessedLetter) {
  guessedLetter = guessedLetter.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guessedLetter);
  const isBadGuess = !this.letterArray.includes(guessedLetter);
  const isGameOver = this.remainingGuesses <= 0;

  if (isGameOver) {
    return 'GAME OVER!!!';
  }

  if (isUnique && !isBadGuess) {
    console.log(
      `Well Done!!! ---- You have ${this.remainingGuesses} guess${
        this.remainingGuesses > 1 ? 'es' : ''
      } remaining`
    );
  }

  if (isUnique) {
    this.guessedLetters.push(guessedLetter);
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
    console.log(
      `WRONG!!! ---- You have ${this.remainingGuesses} guess${
        this.remainingGuesses > 1 ? 'es' : ''
      } remaining`
    );
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

const game1 = new Hangman('game', 4);
const game2 = new Hangman('silly', 3);

window.addEventListener('keydown', e => {
  console.log(game1.play(e.key));
});
