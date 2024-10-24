'use strict'

class User {
    #login
    #_password
    constructor(login, password) {
        this.#login = login
        this.#_password = this.#encryptPassword(password)
    }
    get login() {
        return this.#login
    }
    set #password (password){
        this.#_password = this.#encryptPassword(password)
    }
    get #password(){
        return this.#encryptPassword(this.#_password)
    }
    #encryptPassword(password) {
        return password.split('').reverse().join('')
    }
    #passwordValidation(oldPassword){
        console.log('correct password');

        return this.#password = oldPassword
    }
    changePassword(oldPassword, newPassword){
        if (this.#passwordValidation(oldPassword)) {

            this.#_password = this.#encryptPassword(newPassword)
            console.log('password changed');
        }

    }
}


const user = new User('t@t.com', '1234567')
console.log(user);

user.changePassword('1234567', '12345678')
console.log(user);
console.log(user.login);

