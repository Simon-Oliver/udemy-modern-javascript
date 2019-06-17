// Callback

const getDataCallBack = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2);
    } else {
      callback('Number must be provided');
    }
  }, 3000);
};

getDataCallBack(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Promise

const getDataPromise = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Success Data:${data}`);
      // reject('This a promise error');
    }, 3000);
  });
};

const myPromise = getDataPromise('Test123');
myPromise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
