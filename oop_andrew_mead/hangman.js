const Hangman = function(word, guesses) {
  this.word = word;
  this.guesses = guesses;

  this.attempts = 0;
  this.guessedLetters = [];
  this.letterArray = this.word.split('');
};

Hangman.prototype.play = function(guessedLetter) {
  this.letterArray.forEach(letter => {
    if (letter === guessedLetter) {
      this.guessedLetters.push(guessedLetter);
    }
  });
};

// Hangman.prototype.play = function(letter) {
//   let string = '';

//   this.letterArray.forEach(element => {
//     if (element === letter) {
//       this.guessedLetters.push(letter);
//       string += letter;
//     } else if (element === ' ') {
//       string += ' ';
//     } else {
//       string += '*';
//     }
//   });
//   return string;
// };

const game1 = new Hangman('game play', 2);
const game2 = new Hangman('silly', 3);

console.log(game1.play('m'));
console.log(game1.play('e'));
console.log(game1.guessedLetters);
