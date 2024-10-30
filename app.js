'use strict'

const baseUrl = 'https://dummyjson.com/'
const path = 'products'
const app = document.getElementById('app')

function getData(url, errorMessage) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(errorMessage)
            }
            return response.json()
        })
}
getData(baseUrl + path, 'Something went wrong')
    .then(products => {
        console.log(products)
        const randomProduct = Math.floor(Math.random() * products.products.length)
        return getData(baseUrl + path + '/' + products.products[randomProduct].id, 'Something went wrong')
    })
    .then(product => {
        console.log(product)
        app.innerHTML = product.title
    })
    .catch(({message}) => {
        console.log(message)
        app.innerHTML = message
        app.style.color = 'red'
    })
    .finally(() => console.log('finally'))