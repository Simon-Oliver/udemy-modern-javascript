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

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is the promise data');
    reject('This a promise error');
  }, 3000);
});

myPromise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
