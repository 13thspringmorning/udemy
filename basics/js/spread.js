"use strict";

let a = 5, 
    b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
    a: 5, 
    b: 1,
};

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key; 
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 1, 
    b: 6,
    c: {
        x: 7,
        y: 9
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

let add = {
    d: 17, 
    e: 20
};

const clone = Object.assign({}, add);
clone.d = 13;
console.log(add);
console.log(clone);

let arr = [1, 2, 3, 4, 5, 6, 7];
// let newArr = arr.slice();
let newArr = [...arr];

newArr[2] = 'what';
console.log(arr);
console.log(newArr);

const video = ['youtube', 'vimeo', 'vine'],
            blogs = ['wordpress', 'livejournal', 'medium'],
            internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 3, 7];
log(...num);

const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = [...array];

const q = {
    one: 1, 
    two: 2
};

const newObj = {...q};