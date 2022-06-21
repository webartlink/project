"use strict";




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                b = prompt('На сколько оцените его?!', '');

            if ( a != null && b != null && a.length < 50 && a != '' && b != '') {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectpersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Мало фильмов просмотрено!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Среднестатистический зритель');
        } else if (personalMovieDB.count >= 50) {
            console.log('Киноман');
        } else {
            console.log('Ошибка');
        }
    },
    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные!');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((elem, i) => {
            console.log (`Ваш любимый жанр ${i + 1} - это ${elem}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
        personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }

    },
};





























