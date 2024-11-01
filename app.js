'use strict'

const btn = document.querySelector('button')
const wrapper = document.querySelector('.wrapper')
const inner = document.querySelector('.inner')

btn.addEventListener('click', function (event) {
    console.log('i am button');

    if (this.style.backgroundColor === 'blue') {
        this.style.backgroundColor = 'red'
    } else {
        this.style.backgroundColor = 'blue'
    }
    if (this === btn) {
        // event.stopPropagation();

    }
})

wrapper.addEventListener('click', function (event) {
    console.log('i am wrapper');

    this.style.backgroundColor = 'green'
}, true)

inner.addEventListener('click', function (event) {
    console.log('i am inner');
    console.log(event.currentTarget);

    this.style.backgroundColor = 'yellow'
})