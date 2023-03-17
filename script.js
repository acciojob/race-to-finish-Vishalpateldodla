window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
const randomTime = Math.floor(Math.random() * 5) + 1; // random time between 1 and 5 seconds
const promise = new Promise((resolve) => {
setTimeout(() => {
resolve(randomTime);
}, randomTime * 1000); // convert to milliseconds
});
window.promises.push(promise);
}

Promise.any(window.promises)
.then((result) => {
const outputDiv = document.getElementById("output");
outputDiv.innerText = `Promise resolved with result ${result}`;
})
.catch((error) => {
console.log(error);
});





