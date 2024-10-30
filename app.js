'use strict'

const baseUrl = 'https://dummyjson.com/'
const path = 'productsr'

fetch(baseUrl + path)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        console.log(response);
        return response.json()
    })
    .then((products) => {
        console.log(products)
        return fetch(baseUrl + path + '/' + products.products[0].id)
    })
    .catch(({message}) => {
        console.log(message)
        const app = document.getElementById('app')
        app.innerHTML = message
        app.style.color = 'red'
    })
    .finally(() => console.log('finally'))