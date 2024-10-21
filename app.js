'use strict'

let a = { a: 1}
let b = { b: 1}
const weakMap = new WeakMap()
weakMap.set(a, 'test')
weakMap.set(b, 'test')
console.log(weakMap);
a = null
console.log(weakMap);

setTimeout(() => {
    console.log(weakMap);

}, 1000);

let cache = new WeakMap()

function getValue(obj) {
    if (!cache.has(obj)) {
        const res =1
        cache.set(obj, res)
    }
    return cache.get(obj)
}

let result = getValue(b)