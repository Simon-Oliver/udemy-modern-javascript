const game1 = new Hangman('game', 4);

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

// HTTP request

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', e => {
  if (e.target.readyState === 4) {
    console.log(JSON.parse(e.target.response).puzzle);
  }
});

request.open('GET', 'https://puzzle.mead.io/puzzle');
request.send();
