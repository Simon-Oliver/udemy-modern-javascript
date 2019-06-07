const getPuzzle = callback => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      callback(undefined, JSON.parse(e.target.response).puzzle);
    } else if (e.target.readyState === 4) {
      callback(JSON.parse(e.target.response).error, undefined);
    }
  });
  request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3');
  request.send();
};
