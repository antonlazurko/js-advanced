'use strict'
class Car {
    #vin = 6
    #changeVin(newVin) {
        this.#vin = newVin
        console.log('vin changed to ', newVin);

    }
    test(newVin) {
        const answer = prompt('?')
        if (newVin && answer === '?') {
        this.#changeVin(newVin)
    }
    }
    get vin() {
        return this.#vin
    }
}
const car = new Car()
car.test(123)
console.log(car.vin);
