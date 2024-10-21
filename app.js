'use strict'
console.log(15 / 2);// 7.5
console.log(15 % 2);// 1
console.log(14 % 2);// 0

function isEven(n) {
    if (n % 2 === 0) return true
    return false
}
function isOdd(n) {
    if (n % 2 === 1) return true
    return false
}

console.log(isEven(15));// false
console.log(isOdd(15));// true

