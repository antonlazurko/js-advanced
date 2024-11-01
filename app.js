'use strict'

const app = document.querySelector('#app');
app.addEventListener('mouseenter', (event) => {
    console.log('enter');
})
app.addEventListener('mouseleave', (event) => {
    console.log('leave');
})
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        console.log('Escape key pressed');
    }
});
const btn = document.querySelector('button');
btn.addEventListener('click', generate);
function generate(event) {
    console.log(this);

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
    btn.removeEventListener('click', generate);
}