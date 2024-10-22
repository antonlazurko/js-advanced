'use strict'

const date = new Date();

console.log(date);
console.log(new Intl.DateTimeFormat('en-US').format(date));
const options = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    year: '2-digit',
}

console.log(navigator.language);
console.log(new Intl.DateTimeFormat(navigator.language, options).format(date));// вт, 22 жовтня 24 р. о 12:25



