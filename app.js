'use strict'

class User {
    #role = 'user'
    getRole() {
        return this.#role
    }
}

class Admin extends User {
    #role = ['user', 'admin']
    getRole() {
        return this.#role.join(', ')
    }
}

function logRole(user) {
    console.log('User role: ', user.getRole().toUpperCase())

}

console.log(logRole(new User()));
console.log(logRole(new Admin()));
