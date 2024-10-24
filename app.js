'use strict'

const User = {
    init(email, password){
        this.email = email;
        this.password = password;
    },
    log(){
        console.log('log');
    }
}
const user = Object.create(User); // has User as prototype
const admin = {...User}; // copy of User
console.log(user.__proto__ === User);
user.log();
user.init('a', 'b');
admin.init('c', 'd');

console.log(user);
console.log(admin);