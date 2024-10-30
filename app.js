'use strict'

const baseUrl = 'https://dummyjson.com/'
const path = 'products/categories'
const app = document.getElementById('app')

function createAndAppendSelect(entityArray) {
    const select = document.createElement('select')
    entityArray.forEach(({name, url}) => {
        const option = document.createElement('option')
        option.textContent = name
        option.value = url
        select.appendChild(option)
    })
    app.appendChild(select)
    document.querySelector('select').addEventListener('change', (event) => {
        console.log(event.target.value)
        const message = `Selected category: ${event.target.value}`;

        const h1 = document.createElement('h1')
        h1.textContent = message
        h1.style.color = 'blue'
        app.appendChild(h1)
    })
}

fetch(baseUrl + path)
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then((categories) => {
        console.log(categories)
        createAndAppendSelect(categories)
    })
    .catch(({message}) => {
        const h1 = document.createElement('h1')
        h1.textContent = message
        h1.style.color = 'red'
        app.appendChild(h1)
    })
    .finally(() => console.log('finally'))