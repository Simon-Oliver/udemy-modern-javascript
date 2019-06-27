const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const filePath = path.resolve((__dirname, '../falvourData.js'));

const urlIngredient = 'https://cosylab.iiitd.edu.in/flavordb/entity_details?id=978';
const urlPairing = 'https://cosylab.iiitd.edu.in/flavordb/food_pairing_analysis?id=978';

const getIngredient = async id => {
  const ingredient = {};

  const response = await axios.get(`https://cosylab.iiitd.edu.in/flavordb/entity_details?id=${id}`);
  const $ = cheerio.load(response.data);
  const name = $(
    'div.col-md-3:nth-child(1) > h5:nth-child(2) > strong:nth-child(1) > a:nth-child(1)'
  );
  const category = $(
    'div.col-md-3:nth-child(1) > h5:nth-child(3) > strong:nth-child(1) > span:nth-child(1)'
  );

  name.each((i, e) => {
    ingredient.name = $(e).text();
    ingredient.link = $(e).attr('href');
  });

  category.each((i, e) => {
    ingredient.category = $(e).text();
  });

  return ingredient;
};

const getPairing = async id => {
  const matchingFlavour = [];
  const response = await axios.get(
    `https://cosylab.iiitd.edu.in/flavordb/food_pairing_analysis?id=${id}`
  );
  const data = JSON.parse(response.data);
  const dataArr = Object.values(data);

  dataArr.forEach(e => {
    const pairing = {};

    pairing.name = e.entity_details.name;
    pairing.common_molecules = e.common_molecules.length;

    matchingFlavour.push(pairing);
  });

  return matchingFlavour;
};

// getIngredient(977).catch(err => console.log('Whooops', err.response.status));
// getPairing(977).catch(err => console.log('Whooops', err.response.status));

const combine = async id => {
  let flavourPairing = {};

  const ingredient = await getIngredient(id);
  const pairing = await getPairing(id);

  flavourPairing = { ...ingredient, pairing };
  console.log(flavourPairing);
  return flavourPairing;
};

combine(800).catch(err => console.log('Whooops', err));

// JSON.parse(validJson)

// axios
// .get(urlPairing)
// .then(res => {
//   return JSON.parse(res.data);
// })
// .then(data => {
//   // for (let i = 0; i < 977; i++) {
//   //   console.log(data[i.toString()]);
//   // }
//   return data;
// })
// .catch(err => console.log(err));
