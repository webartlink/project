// Функции.

'use strict';


// let num = 20;
// function showFirstMes(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMes('Hi!');
// console.log(num);

//Аргументы

// function calc(a, b) {
//     return(a + b);
// }
// console.log(calc(5, 5));
// console.log(calc(5, 8));
// console.log(calc(5, 3));
//
// function ret() {
//     let num = 5;
//     return num;
// }
//
// const anotherNun = ret();
// console.log(anotherNun);


// Function declaration.

// console.log(calc(5, 5));
// console.log(calc(5, 8));
// console.log(calc(5, 3));
// function calc(a, b) {
//     return(a + b);
// }


//Function expression.

// const logger = function() {
//     console.log('Hi');
// };
// logger();


// Function arrow.

// const calc = (a, b) => {
//   return  (a + b);
// };
//
// let f1 = document.querySelector('.f-1'); //button
// function one() {
//     console.log('work');
// }
//
// one();
// // f1.onclick = one; // Без скобок!;
//
//
//
// console.log(1 + one());
// console.log(one());// undefined/
//
// function two () {
//     console.log('func two');
//     return 22;
// }
// two();
//
// console.log(1 + two());
//
// let a = 8,
//     b = 9;
//
// function multy() {
//     console.log(a * b);
//     return a * b;
// }
// let c1 = multy();
// let c2 = multy();
//
// console.log(c1, c2);
//
// // Аргументы.
//
// function multy2(x, y) {
//     return x * y;
// }
// multy2();
//
// console.log(multy2(4,5));
// console.log(multy2(50,5));
// console.log(multy2(4,a));
//
// // Анонимная функция.
//
// f1.onclick = function () {
//     console.log('hello');
// };
//
// document.querySelector('.f-2').onclick = function () {
//     console.log('++++++++');
// };
//
// document.querySelector('.f-2').onclick =  () => {
//
//     console.log('arrow');
// };

// Варианты записи стрелочных функций.

// С аргументами.

// (a,b) => {
//
// };
// // - если один параметр.
// а => {
//
// }


const usdCourse = 28;
const eurCourse = 32;

function convert (amount, curr) {
    return (curr * amount);
}
convert(500, usdCourse);
convert(500, eurCourse);

//retutn

const discount = 0.9;
function promo(result) {
    console.log(result * discount);
}

const res = convert(500, usdCourse)
promo(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i ===3) return
    }
    console.log('done');
}
test();

function doNothing() {}
console.log(doNothing() === undefined);































