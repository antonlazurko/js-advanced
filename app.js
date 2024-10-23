'use strict'

const User = function (email, password){
    this.email = email
    this.password = password
}
const user1 = new User('abc@gmail.com', '123')
const user2 = new User('abc2@gmail.com', '1234')
console.log(user1);
console.log(user1 instanceof User);

