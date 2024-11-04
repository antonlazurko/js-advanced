'use strict'
const App = {};

(function () {
    function add(first, second) {
        return first + second
    }

    function sub(first, second) {
        return first - second
    }
    App.calc = { add, sub }
})()