'use strict'

class Test {
    static a = 1
    static hello() {
        console.log('hello')
    }
    static {//static block
        let b = 5
        this.a = b
    }

}
Test.hello()
console.log(Test.a);


// const Test2 = function() {
// }
// Test2.hello = function() {
//     console.log('hello')
// }
// Test2.hello()