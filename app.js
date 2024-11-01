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
async function getProductByIdWithError(id) {
    const response = await fetch(`https://dummyjson.com/productss/${id}`);
    const product = await response.json();
    return product;
}

async function main() {
    const products = await allProducts();

    const promises = products.map(({id}) => getProductById(id));

    // const productsWithDetails = await Promise.all([...promises, getProductByIdWithError()]);
    // console.log(productsWithDetails);

    const productsWithDetails2 = await Promise.allSettled([...promises, getProductByIdWithError()]);
    // console.log(productsWithDetails2.map(({status, value}) => ({status, value})));
    const productsWithDetails3 = await Promise.race([getProductByIdWithError(), ...promises, allProducts()]);
    console.log(productsWithDetails3);
}

main()