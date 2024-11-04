'use strict'

export function add(first, second) {
    return first + second
}
export function sub(first, second) {
    return first - second
}
console.log('test');

setTimeout(() => {
    add = function (first, second) {
        return first * second
    }
}, 1500);