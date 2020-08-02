let numberOfFilms = prompt("How many you  watch films?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//==========LOOP DO...WHILE======
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
if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
}else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    alert("Вы класический зритель"); 
}else if(personalMovieDB.count >= 30) {
    alert("Вы киноман");
}else{
    alert("Проиошла ошибка");
}
console.log(personalMovieDB);