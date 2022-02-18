'use strict'

// // 1 
let numberOfFilms;

// // console.log(numberOfFilms);

function start() {
    numberOfFilms = +prompt('How many films have you watched already?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you watched already?', ''); 
    }
}

// start();

// // 2 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    private: false
};

// // 3
// const movie = prompt("What was the last movie you've watched?", ""),
//             score = +prompt("How would you rate it?", ""),
//             movie2 = prompt("What was the last movie you've watched?", ""),
//             score2 = +prompt("How would you rate it?", "");


// personalMovieDB.movies[movie] = score;
// personalMovieDB.movies[movie2] = score2;

// console.log(personalMovieDB);

// 4
// while loop 

// let i = 0;

// while(i < 2) {
//     const movie = prompt("What was the last movie you've watched?", ""),
//     score = +prompt("How would you rate it?", "");
//         if(movie != null && score != null && 
//         movie != "" && score != "" && 
//         movie.length < 50) {
//         personalMovieDB.movies[movie] = score;
//         console.log('done');
//                 }
//     else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }

// do while loop 


function rememberMyFilms() {
    let i   = 0; 
    do {
        const movie = prompt("What was the last movie you've watched?", ""),
        score = +prompt("How would you rate it?", "");
            if(movie != null && score != null && 
            movie != "" && score != "" && 
            movie.length < 50) {
            personalMovieDB.movies[movie] = score;
            console.log('done');
                    }
        else {
            console.log('error');
            i--;
        }
        i++;
    } 
    while (i < 2);
}

// rememberMyFilms();

// for loop 

// for(let i = 0; i < 2; i++) {
//     const movie = prompt("What was the last movie you've watched?", ""),
//                 score = +prompt("How would you rate it?", "");
                
                
//     if(movie != null && score != null && 
//         movie != "" && score != "" && 
//         movie.length < 50) {
//         personalMovieDB.movies[movie] = score;
//         console.log('done');
//                 }
//     else {
//         console.log('error');
//         i--;
//     }
// }

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert('You watch too little movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('You are a typical viewer');
    } else if (personalMovieDB.count >= 30) {
        alert('Wow, that\'s a lot!');
    } else {
        alert('Error');
    }
}

// detectPersonalLevel();


function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);


function writeYourGenres(genre) {
    for(let i = 0; i < 3; i++) {
        genre[i] = prompt(`What\'s your fav genre #${i + 1}?`);
    }
}

writeYourGenres(personalMovieDB.genres);