'use strict'

class ProductREpository {
    async getProducts() {
        const response = await fetch('https://dummyjson.com/products');
        const { products } = await response.json();
        console.log(products);

    }
}

const repo = new ProductREpository();
repo.getProducts();

const arrowAsync = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const { products } = await response.json();
    console.log(products);
}

arrowAsync();