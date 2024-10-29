'use strict'

const baseUrl = 'https://dummyjson.com/'
const path = 'products/'

function req(id) {console.log(id);

    const request = new XMLHttpRequest()
    request.open('GET', baseUrl + path + id)
    request.send()

    request.addEventListener('load', () => {
        const {products =  [], limit} = JSON.parse(request.response)
            const price = products.reduce((acc, product) => acc + product.price, 0)
            console.log(price / limit)

            const requestProduct = new XMLHttpRequest()
            requestProduct.open('GET', baseUrl + path + products[0].id)
            requestProduct.send()

            requestProduct.addEventListener('load', () => {
            const product = JSON.parse(requestProduct.response)
            console.log(product)

    })
    })
}
req('')