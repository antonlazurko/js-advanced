'use strict'
const array = ['Test', 'Test1', 'Test2', 'Test', 1, false, null]
const set = new Set(array)
console.log(set);
console.log(set.size);
set.has('Test')
set.add('Test3')
set.add(undefined)
set.delete(null)
console.log(set.has(null))
console.log(set);

for (const el of set) {
    console.log(el);
}

console.log([...set]);

const setObj = new Set([{a: 1}, {b: 2}, {b: 2}])
console.log(setObj);

const setStr = new Set('abcd')
console.log(setStr);
// const setFromObj = new Set({a: 1}) //Error not iterable
// const setFromBoolean = new Set(false) //Error not iterable