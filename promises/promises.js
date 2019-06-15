// Callback

const getDataCallBack = callaback => {
  setTimeout(() => {
    callaback(undefined, 'This is the data');
  }, 3000);
};

getDataCallBack((err, data) => {
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
