'use strict'

const weatherMap = new Map([
    ['London', 10],
    ['Rome', 11],
    ['Mexico', 12]
])
const reverseMap = new Map()
for (const [key, value] of weatherMap) {
    reverseMap.set(value, key)
}
console.log(reverseMap);
const reverseMap2 = new Map([...weatherMap].map(array => array.reverse()))
console.log(reverseMap2);

