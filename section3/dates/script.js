"use strict";

// const now = new Date('2022-03-06');
// const now = new Date(-9999999999999); // before 1970 

const now = new Date('2022-03-06');
// new Date.parse('2022-03-06');

// Getter methods

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());

// // UTC 
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime()); // ms passed since 1970 


// // Setter methods 
// console.log(now.setHours(41));
// console.log(now);

// let start = new Date(); // start time  

// for(let i = 0; i < 10000000000; i++) {
//     let some = i ** 3;
// }

// let end = new Date(); // finish time

// alert(`Loop worked within ${end - start} ms`);

let date = new Date(2022, 2, 7);

console.log(date.getDay());

function getWeekDay(date) {
    
        switch(date.getDay()) {
            case 0: 
             return 'Sun';
 
            case 1: 
             return 'Mon';

            case 2: 
             return 'Tue';
 
            case 3: 
             return 'Wed';
    
            case 4: 
             return 'Thu';

            case 5: 
             return 'Fri';

            case 6: 
            return 'Sat';

            default: 
            return 'Nope';
        }
}

console.log(getWeekDay(date));

