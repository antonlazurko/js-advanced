'use strict'

const input = document.querySelector('input')
const inner = document.querySelector('.inner')

for (let i = 0; i < 30; i++) {
    const box = document.createElement('div')
    box.textContent = i + 'test text'

    box.classList.add('box')
    inner.append(box)
}

function search(e) {
    const searchValue = e.target.value
    const boxes = [...inner.children]

    boxes.forEach((box) => {
        if (!searchValue) {
            box.classList.remove('active')
            return
        }
        if (box.textContent.includes(searchValue)) {
            box.classList.add('active')
            return
        }
        box.classList.remove('active')
    })
}

input.addEventListener('input', search)