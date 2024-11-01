'use strict'

const arrowAsync = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const { products } = await response.json();
        return products
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// console.log('1');

// arrowAsync().then(products => console.log(products)).catch(error => console.log(error));

// console.log('2');

(async () => {
    console.log('1');
    try {

        const products = await arrowAsync();
        console.log(products);
    } catch (error) {
        console.log(error);

    }
    console.log('2');

})();