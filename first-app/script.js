// 1 
const numberOfFilms = +prompt('How many films have you watched already?', '');

console.log(numberOfFilms);

// 2 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    privat: false
};

// 3
const movie = prompt("What was the last movie you've watched?", "");
const score = +prompt("How would you rate it?", "");

personalMovieDB.movies[movie] = score;
console.log(personalMovieDB);
