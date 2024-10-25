'use strict'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.map(num => num * 2).filter(num => num > 10).find(num => num === 12)

class Wallet {
    balance = 0
    add(amount) {
        this.balance += amount
        return this
    }
    remove(amount) {
        this.balance -= amount
        return this
    }
}
const wallet = new Wallet()
wallet
    .add(10)
    .remove(5)
    .add(15)
    .remove(10)
    .add(20)
    .remove(5)
console.log(wallet.balance)

class Builder {
    house = {}
    setDoor(door) {
        this.house.door = door
        return this
    }
    setWindow(window) {
        this.house.window = window
        return this
    }
    setRoof(roof) {
        this.house.roof = roof
        return this
    }
    setStage(stage) {
        this.house.stage = stage
        this.setWindow(this.house.window  * stage)
        return this
    }
    build() {
        return this.house
    }
}
const house = new Builder()
    .setDoor(1)
    .setWindow(2)
    .setRoof(3)
    .setStage(4)
    .build()
console.log(JSON.stringify(house))