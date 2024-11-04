'use strict'

export function add(first, second) {
    return first + second
}
export function sub(first, second) {
    return first - second
}
console.log('test');

setTimeout(() => {
    add = function (first, second) {
        return first * second
    }
}, 1500);

async function getProducts() {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
}
export const res = await getProducts();