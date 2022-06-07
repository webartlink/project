"use strict";

// ЦИКЛЫ.

// 1. Вывести в консоль числа от 5 до 10 в консоль.

// function firstTask() {
//     for ( let i = 5; i <= 10; i++) {
//         console.log(i);
//     }
// }
// firstTask();

// 2. Вывести в консоль числа от 20 до 10 в обратном порядке. Когда цикл дойдет до 13 остановить весь цикл.

// function secondTask() {
//    for (let i = 20; i >= 10; i--) {
//      if (i === 13) {
//            break;
//        }
//        console.log(i);
//    }
// }
// secondTask();

// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) break;
//        console.log(i);
//     }
// }
// secondTask();

// 3. Вывести в консоль только четные от 2 до 10 включительно.

// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if(i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// thirdTask();

// 4. Переписать цикл for на while.

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//          console.log(i);
//      }
//     i++;
// }


// 5. Заполнить массив числами от 5 до 10.
// let arr = [];
// for (let i = 5; i <= 10; i++) {
//     arr[i - 5] = i;
// }
// console.log(arr);
// return arr;


// Functions

// Task 1.
// const hello = document.querySelector('.hello');

// function sayHello(name) {
//   return ('Привет, ' + name + '!');
// }
//
// console.log(sayHello('Антон'));
//
// // Task 2
// function returnNeighboringNumbers(num) {
//  return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers(20));

// Task 3.

// function getMathResult(num, count) {
//     if (typeof (count) !== 'number' || count <= 0) {
//         return num;
//      }
//     let str = '';
//     for (let i = 1; i <= count; i++) {
//         if (i === count) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }
//
//
// console.log(getMathResult(5, 0));


// Циклы **

// Место для первой задачи
// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//
//     for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//     }
//
//     return result;
// }
// console.log(firstTask());

// function secondTask() {
//
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof (data[i]) === 'string') {
//             data[i] += ' - done';
//         }
//     }
//     return data;
// }
// console.log(secondTask());

// function thirdTask() {
//
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//
//     for (let i = 1; i < data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }
//     console.log(result);
//     return result;
// }
//
// thirdTask();



// function input() {
//     for (let i = 20; i >= 10; i--) {
//
//         hello.innerHTML += i + ' ';
//         if (i === 13) break;
//     }
//
// }
// input();

// function two() {
//     // for(let i = 2; i <= 10; i = i + 2) {
//     //     hello.innerHTML += i + ' ';
//     // }
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             hello.innerHTML += i + ' ';
//         }
//     }
// }
// two();

// function three() {
//     let arr = [];
//     for(let i = 5; i <= 10; i++) {
//         arr[i - 5] = i;
//     }
//     console.log(arr);
// }
//
// three();


// function four() {
//     let arr = [1, 2, 3, 4, 5, 6];
//     let result = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     return result;
// }
// console.log(four())

//
// const hello = document.querySelector('.hello');
// function five() {
//     const arr = [3, 5, 8, 'bag',  16, 20, 23, 50];
//     for(let i = 0; i <= arr.length; i++) {
//         if (typeof (arr[i]) === 'number') {
//             arr[i] = arr[i] * 2;
//         } else if (typeof (arr[i]) === 'string') {
//             arr[i] += ' -done';
//         }
//     }
//  return arr;
// }
// five();

// function six() {
//     const arr = [3, 5, 8, 'bag',  16, 20, 23, 50];
//     const result = [];
//
//     for (let i = 1; i <= arr.length; i++) {
//         result[i - 1] = arr[arr.length - i];
//     }
//
//     console.log(result);
//     return result;
// }
// six();


// function sayHello(name) {
//  return  'Привет, '  + name + '!';
// }
// console.log(sayHello('Сергей'));



// function returnNeighboringNumbers(num) {
//   return  [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers(10));

// function getMathResult(num, count) {
//  if (typeof(count) !== 'number' || count <= 0) {
//      return num;
//  }
//  let str = '';
//  for (let i = 1; i <= count; i++) {
//      if (i === count) {
//          str += `${num * i}`;
//      } else {
//          str += `${num * i}---`;
//      }
//  }
//     return str;
// }
// console.log(getMathResult(5, 0));


// function getMathResult(num, count) {
//     if (typeof (count) !== 'number' || count <= 0) {
//         return num;
//     }
//     let str = '';
//     for (let i = 1; i <= count; i++) {
//         if (i === count) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }
// console.log(getMathResult(5, 3));








