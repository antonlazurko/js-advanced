'use strict'

const wrapper = document.querySelector('.wrapper')
const inner = document.querySelector('.inner')
const btn = document.querySelector('.button')

console.log(inner.children);

console.log(inner.parentElement);

console.log(btn.closest('.wrapper'));

console.log(btn.previousElementSibling);
console.log(btn.nextElementSibling);

console.log(btn.parentElement.children[btn.parentElement.children.length - 1]);




