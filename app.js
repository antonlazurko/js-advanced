'use strict'

function myFetch(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open('GET', url)
        request.send()
        request.addEventListener('load', function () {
            this.status === 200 ? resolve(request.response) : reject(new Error(request.statusText))
        })
        request.addEventListener('error', () => {
            reject(new Error(request.statusText))
        })
        request.addEventListener('timeout', () => {
            reject(new Error('timeout'))
        })
    })
}

myFetch('https://dummyjson.com/products').then((response) => {
    console.log('response', JSON.parse(response))
}).catch((error) => {
    console.error('error', error)
})