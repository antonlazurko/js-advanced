'use strict'

const timer = setTimeout((...val) => {
    val.forEach((value) => {
        console.log(value);
    })
}, 1000, 'Test', 'Test1', 'Test2', 'Test3');
console.log(timer);
// clearTimeout(timer);
console.log('test');

