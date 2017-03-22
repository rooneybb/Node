var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey. It Worked');
    reject('Unable to fulfill Promise');
  }, 2500);

});

somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.console.log('Error: ', errorMessage);
});
