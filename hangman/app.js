const game1 = new Hangman('Hello Chicka', 4);

const stringDIV = document.querySelector('.string');
stringDIV.textContent = game1.displayString();

const guessesDIV = document.querySelector('.guesses');
guessesDIV.textContent = game1.remainingGuesses;

window.addEventListener('keydown', e => {
  game1.play(e.key);
  console.log(game1);
  stringDIV.textContent = game1.displayString();
  guessesDIV.textContent = game1.remainingGuesses;
});

getPuzzle('1');

getCountry('CH').then(data => console.log(data.name));
