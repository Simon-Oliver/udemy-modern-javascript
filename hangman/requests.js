const getPuzzle = async wordCount => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw new Error('Unable to get Puzzle');
};

const getPuzzleOld = wordCount => {
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

const getCountry = async countryCode => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');

  if (response.status === 200) {
    const data = await response.json();
    return data.find(item => item.alpha2Code === countryCode);
  }
  throw new Error('Could not get country');
};

// const getCountry = countryCode => {

//   return fetch('https://restcountries.eu/rest/v2/all')
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       }
//       throw new Error('Could not get country');
//     })
//     .then(data => {
//       return data.find(item => item.alpha2Code === countryCode);
//     });
// };
