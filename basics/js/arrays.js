"use strict";

const arr = [1, 4, 5, 6, 7, 8];
arr.sort(compare);
console.log(arr);

function compare(a, b) {
    return b - a;
}


// console.log(arr.pop());
// console.log(arr);
// console.log(arr.push(13));
// console.log(arr);


// for(let i of arr) {
//     console.log(i);
// }

// arr[99] = 0; 
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, index, arr) {
    console.log(`${index}: ${item} inside of an ${arr}`);
});

const str = prompt("", "");
const products = str.split(' ');
products.sort();
console.log(products.join('; '));