"use strict";

const box = document.getElementById('box'), 
            btns = document.getElementsByTagName('button'),   // HTML collection 
            wrapper = document.querySelector('.wrapper'),
            circles = document.getElementsByClassName('circle'), 
            hearts = wrapper.querySelectorAll('.heart'), 
            oneHeart = wrapper.querySelector('.heart');


let num = 500;


// const btn2 = document.getElementsByTagName('button')[1];  // HTML collection 
// hearts.forEach(item => console.log(item));


console.dir(box); // log as an object 

box.style.backgroundColor = '#245498';
box.style.width = '500rem';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = `background-color: blue; width: ${num}px`;

// for(let i =0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'pink';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'pink';
});

const div = document.createElement('div');
// const text = document.createTextNode(`Hello, it's me`);

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div); -- old
// wrapper.prepend(div);

// document.body.insertBefore(div, circles[0]);

// hearts[2].before(div);
// hearts[1].after(div);

// circles[0].remove();
hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello world</h1>';

// div.textContent = 'Whatever';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');