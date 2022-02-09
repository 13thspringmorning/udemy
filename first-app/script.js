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
const movie = prompt("What was the last movie you've watched?", ""),
            score = +prompt("How would you rate it?", ""),
            movie2 = prompt("What was the last movie you've watched?", ""),
            score2 = +prompt("How would you rate it?", "");

personalMovieDB.movies[movie] = score;
personalMovieDB.movies[movie2] = score2;

console.log(personalMovieDB);
