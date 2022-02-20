"use strict";

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

str.toUpperCase();

console.dir([1, 2, 3]);

const soldier = {
    health: 400, 
    armor: 100, 
    sayHello: function() {
        console.log('hi');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 200
// };

// john.prototype = soldier; 

Object.setPrototypeOf(john, soldier);

john.sayHello();
console.log(john.armor);