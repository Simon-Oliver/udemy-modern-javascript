const getPuzzle = wordCount => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Could not get puzzle');
    })
    .catch(err => console.log(err));
};

// const getPuzzle = wordCount =>
//   new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', e => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         resolve(JSON.parse(e.target.response).puzzle);
//       } else if (e.target.readyState === 4) {
//         reject(JSON.parse(e.target.response).error);
//       }
//     });
//     request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
//   });

// Callback example

// const getPuzzle = (wordCount, callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener('readystatechange', e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       callback(undefined, JSON.parse(e.target.response).puzzle);
//     } else if (e.target.readyState === 4) {
//       callback(JSON.parse(e.target.response).error, undefined);
//     }
//   });
//   request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// };

const getCountry = country =>
  new Promise((resolve, reject) => {
    const countries = new XMLHttpRequest();
    const countryCode = country;

    countries.addEventListener('readystatechange', e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.response).find(item => item.alpha2Code === countryCode);
        resolve(data);
      } else if (e.target.readyState === 4) {
        reject(e.target.response);
      }
    });

    countries.open('GET', 'https://restcountries.eu/rest/v2/all');
    countries.send();
  });
