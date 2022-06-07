"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?!', '');

        if ( a != null && b != null && a.length < 50 && a != '' && b != '') {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms();




function detectpersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало фильмов просмотрено!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Среднестатистический зритель');
    } else if (personalMovieDB.count >= 50) {
        console.log('Киноман');
    } else {
        console.log('Ошибка');
    }
}
// detectpersonalLevel();



function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDb(personalMovieDB.private);




function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres();



















