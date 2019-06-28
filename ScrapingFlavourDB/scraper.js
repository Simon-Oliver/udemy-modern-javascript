const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const filePath = path.resolve((__dirname, './flavourData.js'));

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
  const topValues = pairing.sort((a, b) => b.common_molecules - a.common_molecules).slice(0, 100);
  flavourPairing = { ...ingredient, pairing: topValues };

  return flavourPairing;
};

// combine(78).catch(err => console.log('Whooops', err));

const scrapeFlavourDB = async num => {
  const dataArr = [];
  for (let index = 0; index < num; index++) {
    const item = await combine(index);
    dataArr.push(item);
  }

  // console.log(dataArr);
  writeFile(dataArr);
};

const writeFile = data => {
  const json = JSON.stringify(data);

  fs.writeFile(filePath, json, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
  });
};

const read = callback => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    callback(JSON.parse(data));
  });
};

scrapeFlavourDB(2)
  .then(() => read(data => console.log(data)))
  .catch(err => console.log(err));

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
