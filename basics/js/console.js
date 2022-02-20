"use strict";

function hello() {
    console.log('hello');
    debugger;
}

hello();

function hi() {
    console.log('hi');
}

hi();

const arr = [1, 12, 4, 20, 57],
            sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted);

