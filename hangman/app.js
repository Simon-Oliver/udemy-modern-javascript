const Hangman = function(word, guesses) {
  this.word = word;
  this.guesses = guesses;

  this.remainingGuesses = guesses;
  this.guessedLetters = [];
  this.letterArray = this.word.toLowerCase().split('');
  this.isGameOver = false;
};

Hangman.prototype.play = function(guessedLetter) {
  guessedLetter = guessedLetter.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guessedLetter);
  const isBadGuess = !this.letterArray.includes(guessedLetter);
  this.isGameOver = this.remainingGuesses <= 0;

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
  }
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

  if (!this.isGameOver) {
    if (string.includes('*')) {
      return string;
    }
    return `${string}
    YOU WIN!!!`;
  }
  if (this.isGameOver) {
    return 'GAME OVER!!!';
  }
};

const game1 = new Hangman('game', 4);
const game2 = new Hangman('silly', 3);

const stringDIV = document.querySelector('.string');
stringDIV.textContent = game1.displayString();

window.addEventListener('keydown', e => {
  console.log(game1.play(e.key));
  stringDIV.textContent = game1.displayString();
});
