'use strict'
const mark1 = performance.now()

setTimeout(() => {
    const mark2 = performance.now()
    console.log(mark2 - mark1);
}, 1000);
console.log(performance.now());


const intervalId = setInterval(() => {
    console.log(new Date());

}, 1000);

setTimeout(() => {
    clearInterval(intervalId)
}, 5000);