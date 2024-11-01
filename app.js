'use strict'

const url = 'https://dummyjson.com/products/'

async function getProductsById() {
    const response = await fetch(url + Math.floor(Math.random() * 100));
    return await response.json();
}

async function generate() {
    try {
        const wrapper = document.querySelector('.wrapper');
        const data = await Promise.all([
            getProductsById(),
            getProductsById(),
            getProductsById(),
            getProductsById(),
        ]);
        console.log(data);
        for(const product of data) {
            createProductElement(product, wrapper);
        }
    } catch (error) {

    }
}
function createProductElement(product, wrapper) {
    const productDiv = document.createElement('div');

    productDiv.classList.add('product');
    productDiv.innerHTML = `<span>${product.title}</span>`;
    wrapper.appendChild(productDiv);
}