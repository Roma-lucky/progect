let numberOfFilms;


function start() {
    numberOfFilms = +prompt("How many you  watch films?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many you  watch films?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//==========LOOP DO...WHILE======


function rememberMyFilms() {
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
}
// rememberMyFilms();
//=========LOOP WHILE========
// let num = 0;
// while (num < 2) {
//     const a = prompt("What films you watch in last?", ""),
//         b = prompt("What is rating of the moive?", "");
//         num++;
//     if (a != null && a != '' && a.length < 50 && b != null && b != '' && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         num--;
//     }
// }
//=========LOOP FOR==========
// for (i = 0; i < 2; i++) {

//     const   a = prompt("What films you watch in last?", ""),
//             b = prompt("What is rating of the moive?", "");
//     if (a != null && a != '' && a.length < 50 && b != null && b != '' && b.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//     }else {
//         console.log("error");
//         i--;
//     };
    
// }

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        alert("Вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Проиошла ошибка");
    }
}
// detectPersonalLevel();

const showMyDB = hidden => {
    if (!hidden) {
        console.log(personalMovieDB);
    }
};
showMyDB(personalMovieDB.privat);

const writeYouGenres = () => {
    for (let k = 1; k <= 3; k++) {
        // const c = prompt(`Ваш любимый жанр под номмером ${k}`, '');
        personalMovieDB.genres[k - 1] = prompt(`Ваш любимый жанр под номмером ${k}`, '');
    }
    
};
writeYouGenres();
// console.log(personalMovieDB);