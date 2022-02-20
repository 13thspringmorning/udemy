"use strict"

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Learning ${lang}`);
    callback();
} 

function done() {
    console.log('I\'m done');    
}

learnJS('JS', done);