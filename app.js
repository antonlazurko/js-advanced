'use strict'

const baseUrl = 'https://dummyjson.com/'
const path = 'products/'

function req(id) {
    const request = new XMLHttpRequest()
    request.open('GET', baseUrl + path + (id))
    request.send()

    request.addEventListener('load', () => {
        const product = JSON.parse(request.responseText)
        console.log(product)
    })
}
req(2)
req(3)
req('')
req(4)

console.log('end');// will be executed before the request
