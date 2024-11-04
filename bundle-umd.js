(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    function add(first, second) {
        return first + second
    }
    function sub(first, second) {
        return first - second
    }

    const a$1 = 5;
    console.log(a$1);

    const a = 2;
    console.log(a);
    console.log(sub(7, 0));
    console.log(add(7, 0));

}));
