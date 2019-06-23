const getDataPromise = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
    }, 2000);
  });
};

const processData = async () => {
  const data = await getDataPromise('abc');
  return data;
};

processData()
  .then(data => {
    console.log('Data', data);
  })
  .catch(err => {
    console.log(err);
  });
