// create an array of 5 promises that resolve with a random time between 1 and 5 seconds
const promises = Array.from({ length: 5 }, () => {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  return new Promise(resolve => {
    setTimeout(() => resolve(randomTime), randomTime * 1000);
  });
});

// use Promise.any to wait for the first promise to resolve, and print its result to the output div
Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = `The first promise resolved with result: ${result}`;
  })
  .catch(error => console.error(error));
