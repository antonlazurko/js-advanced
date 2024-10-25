'use strict'

class Enemy {
    #health
    constructor(health){
        this.#health = health
    }
    receiveDamage(damage){
        this.#health -= damage
    }
    get health(){
        return this.#health
    }
}

class Sword {
    #force
    constructor(force) {
        this.#force = force
    }
    kick(enemy){
        enemy.receiveDamage(this.#force)
    }
}

class Orc extends Enemy {
    constructor(health) {
        super(health)
    }
    receiveDamage(damage){
        if(Math.random() > 0.5){
            super.receiveDamage(damage)
        }
    }
}
class Troll extends Enemy {
}

const orc = new Orc(100)
const troll = new Troll(80)
const sword = new Sword(10)

sword.kick(orc)
sword.kick(orc)
sword.kick(orc)
sword.kick(orc)
sword.kick(troll)
sword.kick(troll)
console.log(orc.health)
console.log(troll.health)