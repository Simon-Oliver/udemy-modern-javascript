const game1 = new Hangman('Hello Chicka', 4);

const stringDIV = document.querySelector('.string');
stringDIV.textContent = game1.displayString();

const guessesDIV = document.querySelector('.guesses');
guessesDIV.textContent = game1.remainingGuesses;

window.addEventListener('keydown', e => {
  game1.play(e.key);
  stringDIV.textContent = game1.displayString();
  guessesDIV.textContent = game1.remainingGuesses;
});

getPuzzle('1');

getCountry('CH').then(data => console.log(data.name));

fetch('http://puzzle.mead.io/puzzle')
  .then(response => {
    if (response.status === 200) {
      console.log(response.status);
    } else {
      throw new Error('Unable to fetch the puzzle');
    }
  })
  .catch(err => console.log(err));
