getPuzzle('1')
  .then(data => {
    const game1 = new Hangman(data.puzzle, 4);

    const stringDIV = document.querySelector('.string');
    stringDIV.textContent = game1.displayString();

    const guessesDIV = document.querySelector('.guesses');
    guessesDIV.textContent = game1.remainingGuesses;

    window.addEventListener('keydown', e => {
      game1.play(e.key);
      stringDIV.textContent = game1.displayString();
      guessesDIV.textContent = game1.remainingGuesses;
    });
  })
  .catch(err => console.log(err));

getCountry('CH').then(data => console.log(data.name));

// fetch('http://puzzle.mead.io/puzzle')
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     }
//     throw new Error('Unable to fetch the puzzle');
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
