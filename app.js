'use strict'

const promise = new Promise((resolve, reject) => {
    console.log('promise initialize');
    if (Math.random() > 0.5) {
        reject(new Error('error'))
    }
    resolve('success')
})

promise
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

function timeout(sec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sec)
        }, sec * 1000)
    })
}
timeout(1)
    .then((data) => {
        console.log(data)
        return timeout(2)
    }).then((data) => console.log(data))