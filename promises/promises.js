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
    getDataCallBack(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Callback ------>`, data);
      }
    });
  }
});

// Promise

const getDataPromise = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
    }, 2000);
  });
};

getDataPromise('2')
  .then(res => {
    return getDataPromise(res);
  })
  .then(data => console.log('Promise data ----->', data))
  .catch(err => console.log('Whooops ---------->', err));
