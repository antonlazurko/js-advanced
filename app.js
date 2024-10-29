'use strict'

class Treasure {
    value = 0
}

class Coin extends Treasure {
    value = 1
}

class Diamond extends Treasure {
    value = 10
}
class Crystal extends Treasure {
    value = 100
}

class Inventory {
    #score
    pick(treasure) {
        this.#score += treasure.value
        console.log(`Score: ${this.#score}`)
    }
}