'use strict';

// 1. Обычная функция: this  == window but if 'use strict' -- undefined 

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// 2. Если мы используем метод внутри объекта, то контекст вызова this будет ссылаться на этот объект

// const obj = {
//     a: 20,
//     b: 15, 
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };




// 3. This В конструкторах и классах – это новый экземпляр объекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello " + this.name);
//     };
// }

// let ivan = new User('Ivan', 23);



// 4. Ручная привязка this: call, apply, bind

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + " " + surname);
// }

// const user = {
//     name: 'Ivan',
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(4));
// console.log(double(13));


const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';
//     console.log(this); // == to e.target
// });

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
    console.log(this); // == to e.target
});

const obj = {
    num: 5, 
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(5));