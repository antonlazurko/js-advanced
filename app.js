'use strict'

const now = new Date()
console.log(`Hello World, it is ${now}.`)
console.log(new Date('2020-01-01').toUTCString());
console.log(new Date('2020-01-01'));
console.log(new Date('Wed Jan 01 2020 02:00:00 GMT+0200'));

console.log(new Date(2022, 1, 29))
console.log(new Date(2 * 24 * 60 * 60 * 1000));// 2 days

console.log('----------------------------------');

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log('----------------------------------');

console.log(new Date(now.setFullYear(2025)));



