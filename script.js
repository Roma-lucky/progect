let numberOfFilms = prompt("How many you  watch films?", "");
console.log(numberOfFilms);

//---------------------
let whatFilms = prompt("What films you watch in last?", "");

let ratingFilm  = prompt("What is rating of the moive?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
personalMovieDB.movies[whatFilms] = ratingFilm;

console.log(personalMovieDB);