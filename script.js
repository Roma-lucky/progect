"use strict";
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:  function() {
        personalMovieDB.count = +prompt("How many you  watch films?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many you  watch films?", "");
        }
    },
    rememberMyFilms: function() {
        let omm = 0;
        do {
            const a = prompt("What films you watch in last?", ""),
                b = prompt("What is rating of the moive?", "");
            omm++;
            if (a != null && a != '' && a.length < 50 && b != null && b != '' && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                omm--;
            }
        } while (omm < 2);
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы класический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Проиошла ошибка");
        }
    },
    
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    showMyDB: hidden => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYouGenres: () => {
        for (let k = 1; k < 2; k++) {
            
            let genres =  prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
           
            if (genres == null || genres === "") {
                console.log('Вы ввели некоректные данные или не ввели вовсе...');
                k--;
            }else{
                personalMovieDB.genres = genres.split(', ');                    
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, k) => {
            console.log(`love genres ${k+1} is ${item}`);
        });
    }
};


