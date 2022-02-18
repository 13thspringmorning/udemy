'use strict'

// Function declaration

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10; 
}

showFirstMessage('hello');
console.log(num);

function calc(a, b) {
    return a + b;
    // console.log(a); // unreachable 
}

console.log(calc(88,2));

function ret() {
    let num = 10;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Function expression

let foo = function() {
    console.log('hello');
};

foo();

// Arrow function

const arrow = (a, b) => a + b;

console.log(arrow(1,2));
