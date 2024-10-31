'use strict'

console.log('start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve('promise').then((res) => {
    console.log(res);
    // for (let i = 0; i < 1000000000; i++) {
    // }
});

console.log('end');

// for (let i = 0; i < 1000000000; i++) {
// }