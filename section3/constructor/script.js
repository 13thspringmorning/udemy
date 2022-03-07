"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello " + this.name);
    };
} 

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log("Hello " + this.name);
//     }
//     exit() {
//         console.log(`User ${this.name} is out`);
//     }
// }

User.prototype.exit = function() {
    console.log(`User ${this.name} is out`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 13);

ivan.exit();

alex.hello();
ivan.hello();

console.log(alex);
console.log(ivan);