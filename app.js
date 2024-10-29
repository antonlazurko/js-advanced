'use strict'

const baseUrl = 'https://dummyjson.com/'
const path = 'products/'

function req(id) {
    const request = new XMLHttpRequest()
    request.open('GET', baseUrl + path + (id))
    request.send()

    request.addEventListener('load', () => {
        const {products =  [], limit} = JSON.parse(request.response)
        const price = products.reduce((acc, product) => acc + product.price, 0)
        console.log(price / limit)
        return price
    })
}
req('')