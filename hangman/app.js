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

getPuzzle(word => {
  console.log(word);
});

// HTTP request

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', e => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     console.log(JSON.parse(e.target.response).puzzle);
//   } else if (e.target.readyState === 4) {
//     console.log(e.target.response);
//   }
// });

// request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3');
// request.send();

// const countries = new XMLHttpRequest();
// const countryCode = 'CH';

// countries.addEventListener('readystatechange', e => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.response).filter(item => item.alpha2Code === countryCode);
//     console.log(data[0]);
//   } else if (e.target.readyState === 4) {
//     console.log(e.target.response);
//   }
// });

// countries.open('GET', 'https://restcountries.eu/rest/v2/all');
// countries.send();
