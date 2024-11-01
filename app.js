'use strict'

async function getProducts() {
    try {
        const productsResponse = await fetch('https://dummyjson.com/products')
        if (!productsResponse.ok) {
            throw new Error('Products Error: ', productsResponse.status);
        }
        const { products } = await productsResponse.json();

        const productResponse = await fetch(`https://dummyjson.com/products/${products[0].id}`)
        if (!productResponse.ok) {
            throw new Error('Product Error: ', productResponse.status);
        }
        const product = await productResponse.json();
        console.log(product);

    } catch (error) {
        console.error(error);
    } finally {
        console.log('finally');
    }
}

getProducts();
console.log('end');
