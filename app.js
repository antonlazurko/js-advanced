'use strict'

const product = {
    id: 1,
    name: 'laptop',
    price: 1000
}

const Cart = function() {
    this.products = []
    this.count = 0
}
Cart.prototype.addProduct = function(product) {
    if (this.products.find(p => p.product.id === product.id)) {
        return
    }
    this.products.push({product})
    this.count++
}
Cart.prototype.removeProduct = function(product) {
    const index = this.products.indexOf(product)
    if (index > -1) {
        this.products.splice(index, 1)
        this.count--
    }
}
const cart = new Cart(product)
cart.addProduct(product)
cart.removeProduct(product)
cart.addProduct({...product, id: 2})
console.log(cart)

