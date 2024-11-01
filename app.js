'use strict'

console.log(document);
const element = document.querySelector('#app');
const elements = document.querySelectorAll('meta');
console.log(element);
console.log(elements);

element.classList.add('active');
element.textContent = 'Hello World';

const subElement = document.createElement('h1');
const subElement2 = document.createElement('h1');
const subElement3 = document.createElement('h1');
subElement.textContent = 'Hello World';
subElement2.textContent = 'Hello';
subElement3.textContent = 'World';
element.append(subElement);
element.prepend(subElement2);
element.after(subElement3);

function generate(event) {

    console.log(event.target.getBoundingClientRect());

    console.log('X offset: ', window.scrollX);
    console.log('Y offset: ', window.scrollY);
    console.log('client width: ', document.documentElement.clientWidth);
    console.log('client height: ', document.documentElement.clientHeight);

    const downEl = document.querySelector('.down');
    const rect = downEl.getBoundingClientRect();

    window.scrollTo({
        left: window.scrollX + rect.left,
        top: window.scrollY + rect.top,
        behavior: 'smooth'
    })

}