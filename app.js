'use strict'

const baseUrl = 'https://dummyjson.com/'
const path = 'products/'

fetch(baseUrl + path)
    .then(response => response.json())
    .then(({products}) => {
        console.log(products)
        return fetch(baseUrl + path + products[0].id)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product)
    })