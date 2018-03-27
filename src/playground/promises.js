const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //     name: 'Logan',
    //     age: 36
    // });
    reject('Something went wrong.');
  }, 5000);
});

promise
  .then(data => {
    console.log('1: ', data);
  })
  .catch(error => {
    console.log('error: ', error);
  });
