'use strict'

let a = { a: 1}
let b = { b: 1}

const weakSet = new WeakSet([a, b])
weakSet.add({a: 'test'}, 1)
a = null
console.log(weakSet);

setTimeout(() => {
    console.log(weakSet);

}, 1000);