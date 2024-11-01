'use strict'

async function allProducts () {
        const response = await fetch('https://dummyjson.com/products');
        const { products } = await response.json();
        return products
}

async function getProductById(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();
    return product;
}

async function main() {
    const products = await allProducts();
    console.log(products);
    // for (const {id} of products) {
    //     const product = await getProductById(id);
    //     console.log(product);
    // }
    const promises = products.map(({id}) => getProductById(id));
    const productsWithDetails = await Promise.all(promises);
    console.log(productsWithDetails);
}

main()