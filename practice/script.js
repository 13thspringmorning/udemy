'use strict'

// // 1 

// // console.log(numberOfFilms);

// function start() {
//     numberOfFilms = +prompt('How many films have you watched already?', '');

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many films have you watched already?', ''); 
//     }
// }

// start();

// // 2 
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {}, 
    genres: [],
    private: false, 
    start: function() {
        personalMovieDB.count = +prompt('How many films have you watched already?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you watched already?', ''); 
        }
    }, 
    rememberMyFilms: function() {
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
    }, 
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            alert('You watch too little movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('You are a typical viewer');
        } else if (personalMovieDB.count >= 30) {
            alert('Wow, that\'s a lot!');
        } else {
            alert('Error');
        }
    }, 
    showMyDB: function() {
        if(!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i < 2; i++) {
            let genres = prompt(`What are you fav movie genres (write a list separated by commas)?`).toLowerCase();
            if(genres === '' || genres === null) {
                console.log('Try again');
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((genre, i) => (console.log(`Fav genre #${i+1} is ${genre}`)));
    }, 
    toggleVisibleMyDB: function() {
        if(personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
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


// function rememberMyFilms() {
//     let i   = 0; 
//     do {
//         const movie = prompt("What was the last movie you've watched?", ""),
//         score = +prompt("How would you rate it?", "");
//             if(movie != null && score != null && 
//             movie != "" && score != "" && 
//             movie.length < 50) {
//             personalMovieDB.movies[movie] = score;
//             console.log('done');
//                     }
//         else {
//             console.log('error');
//             i--;
//         }
//         i++;
//     } 
//     while (i < 2);
// }

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

// function detectPersonalLevel() {
//     if(personalMovieDB.count < 10) {
//         alert('You watch too little movies');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert('You are a typical viewer');
//     } else if (personalMovieDB.count >= 30) {
//         alert('Wow, that\'s a lot!');
//     } else {
//         alert('Error');
//     }
// }

// detectPersonalLevel();


// function showMyDB(hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.private);


// function writeYourGenres(genre) {
//     for(let i = 0; i < 3; i++) {
//         genre[i] = prompt(`What\'s your fav genre #${i + 1}?`);
//     }
// }
// 
// writeYourGenres(personalMovieDB.genres);