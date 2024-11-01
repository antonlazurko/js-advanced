'use strict'

document.addEventListener('DOMContentLoaded', function(e) {
    console.log('content loaded', e);
    console.log(this);
})

window.addEventListener('load', function (e) {
    console.log(e);
    console.log(this);
})
window.addEventListener('beforeunload', function (e) {
    e.preventDefault()
})