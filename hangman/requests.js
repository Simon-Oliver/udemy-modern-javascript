const getPuzzle = callback => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      callback(JSON.parse(e.target.response).puzzle);
    } else if (e.target.readyState === 4) {
      console.log(e.target.response);
    }
  });
  request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3');
  request.send();
};
