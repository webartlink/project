"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

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

if (personalMovieDB.count < 10) {
    console.log('Мало фильмов просмотрено!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Среднестатистический зритель');
} else if (personalMovieDB.count >= 50) {
    console.log('Киноман');
} else {
    console.log('Ошибка');
}
console.log(personalMovieDB);




















