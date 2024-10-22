'use strict'
const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

const bigNumber = 123436234234034534534592354234
console.log(typeof 123436234234034534534592354234n);
console.log(bigNumber === 123436234234034534534592354234n); // false
console.log(bigNumber == 123436234234034534534592354234n); // true
console.log(BigInt(bigNumber));
console.log(BigInt(bigNumber) + 10);// Error
console.log(BigInt(bigNumber)  * BigInt(bigNumber));// 123436234234034541096924610560n

console.log(10n / 3n);  // 3n



