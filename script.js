window.promises = [];

for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(randomTime), randomTime * 1000);
  });
  window.promises.push(promise);
}

Promise.any(window.promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = `The first promise resolved with result: ${result}`;
  })
  .catch(error => console.error(error));