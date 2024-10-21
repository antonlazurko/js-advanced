'use strict'
console.log(10 === 10.0);
console.log(0.1 + 0.2 === 0.3);

console.log(Number('10') === 10);
console.log(+'10' === 10);
console.log(Number.parseInt('10') === 10);
console.log(Number.parseInt('10 seconds') === 10);
console.log(Number.parseInt('seconds 10')); // NaN
console.log(Number.parseFloat('10.5') === 10.5);
console.log(Number.parseInt('10.5') === 10);
console.log(Number.isNaN(Number('10asd')));
console.log(Number.isFinite(10 / 0));// false
console.log(Number.isInteger(10.5));// false








