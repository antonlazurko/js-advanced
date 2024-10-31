'use strict'

Promise.resolve('Promise resolved2!').then((res) => {
    console.log(res)
})
const promise = new Promise((resolve) => {
    console.log('Promise created!');
    //for (let i = 0; i < 1000000000; i++) {}
    setTimeout(() => {
        resolve('Promise resolved!')
    }, 1000)
})
promise.then((res) => {
    console.log(res)
})

Promise.reject(new Error('Promise rejected!')).catch((res) => {
    console.log(res)
})