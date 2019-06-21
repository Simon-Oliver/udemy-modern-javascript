require('dotenv').config();
const fetch = require('node-fetch');

const getLocation = () => {
  return fetch(`https://ipinfo.io/json?=token=${process.env.MY_API_KEY} `).then(res => res.json());
};

const getCountry = countryCode => {
  return fetch('https://restcountries.eu/rest/v2/all')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Could not get country');
    })
    .then(data => {
      return data.find(item => item.alpha2Code === countryCode);
    });
};

getLocation()
  .then(data => getCountry(data.country))
  .then(country => console.log(country.name));
