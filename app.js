'use strict'

const baseUrl = 'https://dummyjsons.com/'
const path = 'products/'

fetch(baseUrl + path)
    .then(response => {
        console.log(response);
        return response.json()
    },
    // error => console.log(error)
    )
    .then(({products}) => {
        console.log(products)
        return fetch(baseUrl + path + products[0].id)
    },
    // error => console.log(error)
)
    .then(response => response.json())
    .then(product => {
        console.log(product)
    }).catch(error => console.log(error), )