const stringDIV = document.querySelector('.string');
const guessesDIV = document.querySelector('.guesses');

let game1;

const render = () => {
  stringDIV.textContent = game1.displayString();
  guessesDIV.textContent = game1.remainingGuesses;
};

const startGame = async () => {
  const data = await getPuzzle('2');
  game1 = new Hangman(data.puzzle, 4);
  render();
};

startGame();

window.addEventListener('keydown', e => {
  game1.play(e.key);
  render();
});

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', startGame);

getCountry('CH')
  .then(data => console.log(data.name))
  .catch(err => console.log(err));

// fetch('http://puzzle.mead.io/puzzle')
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     }
//     throw new Error('Unable to fetch the puzzle');
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
