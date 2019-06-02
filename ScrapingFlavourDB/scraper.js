const axios = require('axios');
const fs = require('fs');
const path = require('path');

const filePath = path.resolve((__dirname, '../falvourData.js'));

const url = 'https://cosylab.iiitd.edu.in/flavordb/food_pairing_analysis?id=978';

axios
  .get(url)
  .then(res => {
    return JSON.parse(res.data);
  })
  .then(data => {
    // for (let i = 0; i < 977; i++) {
    //   console.log(data[i.toString()]);
    // }
    return data;
  })
  .catch(err => console.log(err));

// JSON.parse(validJson)
