const btns = document.querySelectorAll('button'), 
            overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('hello');
// };

// btn.addEventListener('click', function() {
//     alert('click');
// });

// let i = 0;

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if(i === 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
// btn.removeEventListener('mouseenter', deleteElement);

btns.forEach(item => item.addEventListener('click', deleteElement, {once: true}));


const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});
