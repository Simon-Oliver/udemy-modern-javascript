getPuzzle('1', (error, word) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(word);
    const game1 = new Hangman(word, 4);

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
  }
});

getCountry('CH', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.name);
  }
});
