'use strict'
const weatherMap = new Map()
const arrayInMap = [1,2,3]
weatherMap
    .set('London', 10)
    .set('Kyiv', 5)
    .set('Vinnytsia', 11)
    .set('Vinnytsia', 11)
    .set('Rome', 11)
    .set([1,2,3], 11)
    .set({a: 1}, 11)
    .set(arrayInMap, 11)

console.log(weatherMap.get('Kyiv'))
console.log(weatherMap.get('test'))
console.log(weatherMap.get('test'))
console.log(weatherMap.get([1,2,3]))// search only by link
console.log(weatherMap.has({a: 1}))// search only by link
console.log(weatherMap.get(arrayInMap))
console.log(weatherMap.has(arrayInMap))
console.log(weatherMap.has('Kyiv'))
console.log(weatherMap.size);
console.log(weatherMap);
weatherMap.delete('Vinnytsia')
console.log(weatherMap);
weatherMap.clear()
console.log(weatherMap);

