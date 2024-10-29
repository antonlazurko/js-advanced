'use strict'

class Character {
    #inventory = []
    #health = 10
    pickItem(item) {
        this.#inventory.push(item)
    }
    receiveDamage(damage) {
        this.#health -= damage
    }
}

class LocalStorage {
    save(item) {
        localStorage.setItem('item', JSON.stringify(item))
    }
    load() {
        const item = JSON.parse(localStorage.getItem('item'))
        return item
    }
}