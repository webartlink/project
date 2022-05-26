// Урок 2. Классификация типов данных.
"use strict";

// Числа:
let number = 4;

console.log(4/0);
console.log('string' * 9);

// Строки
const person = "Alex";

// Логический тип данных.
const bool = true;

// null

//console.log(something); //null

// undefined
let und;
console.log(und);

// ОБЪЕКТЫ.
const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};
// console.log(obj.name);
console.log(obj.name);

// МАССИВЫ.

let arr = ['plum.png', 'orange.jpg', 'apple.svg', 6, {}, []];
console.log(arr[1]);

// Разница между Mассивами и Объектами.

const array = [1, 2, 3];
const arrObj = {
    0: 1,
    1: 2,
    2: 3,

};
// Массив - это перечень сущностей ПО ПОРЯДКУ и частный случай Объекта.

arrObj.b = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);

// const object = {a: 1, b: 2};

const object = {
    'Anna': 500,
    'Alice': 800
};








