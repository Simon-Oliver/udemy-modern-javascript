const getPuzzle = (wordCount, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      callback(undefined, JSON.parse(e.target.response).puzzle);
    } else if (e.target.readyState === 4) {
      callback(JSON.parse(e.target.response).error, undefined);
    }
  });
  request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
};

const getCountry = (country, callback) => {
  const countries = new XMLHttpRequest();
  const countryCode = country;

  countries.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.response).find(item => item.alpha2Code === countryCode);
      callback(undefined, data);
    } else if (e.target.readyState === 4) {
      callback(e.target.response);
    }
  });

  countries.open('GET', 'https://restcountries.eu/rest/v2/all');
  countries.send();
};
