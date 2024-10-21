'use strict'

const weatherMap = new Map([
    ['London', 10],
    ['Rome', 11],
    ['Mexico', 12]
])

console.log(weatherMap);

const obj = {
    london: 10,
    rome: 15,
    mexico: 13,
}

console.log(Object.entries(obj));

const weatherMapFromObj = new Map(Object.entries(obj))
console.log(weatherMapFromObj);


