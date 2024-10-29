'use strict'

const baseUrl = 'https://dummyjson.com/'
const path = 'products/'

const res = fetch(baseUrl + path + 1).then(res => res.json())

res.then(data => console.log(data))