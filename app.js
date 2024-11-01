'use strict'

const btn = document.querySelector('button')
const wrapper = document.querySelector('.wrapper')
const inner = document.querySelector('.inner')
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div')
    div.classList.add('box')
    div.textContent = i
    div.setAttribute('data-id',i)
    // div.addEventListener('click',function (params) {
    //     this.remove()
    // })
    wrapper.appendChild(div)
}
wrapper.addEventListener('click',function (event) {
    console.log(event.target.dataset.id + ' was deleted');
    if (event.target.classList.contains('box')) {
        event.target.remove()
    }
})