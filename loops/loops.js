// ЦИКЛЫ!!!

"use strict";



// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// let num = 50;
// for (let i = 1; i < 8; i++) {
//  if (i === 6) {
//      //break;
//      continue;
//  }
//  console.log(i);
// }

// ЦИКЛ В ЦИКЛЕ И МЕТКИ.

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }
//
// let result = '';
// const length = 7;
//
// for (let i = 1; i < length; i++) {
//
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);



// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k ===2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }
// console.log('Hello');

// let div = document.querySelectorAll('.one');
// console.log(div);
// // div.style.background = 'red';
// // for (let i = 0; i < div.length; i = i + 1) {
// //     console.log(div[i]);
// //     div[i].style.background = 'red';
// //     div[i].onclick = two;
// // }
// //
// // function two() {
// //     console.log('work');
// // }
// //
// // let b = document.getElementsByClassName('one');
// // let c = document.getElementsByTagName('div');
// // console.log(b);
// // console.log(c);
// //
// // for (let i = 0; i < b.length; i++) {
// //     b[i].style.border = '3px solid black';
// // }
//
// document.querySelector('button').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (let i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// };
// let out = '';
// for (let i = 0; i < 10; i++) {
//     if (i == 6) continue;
//    out += i + ' ';
//    // if (i == 6) break;
// }
// document.querySelector('#out').innerHTML = out;
//

// ВЛОЖЕННЫЕ ЦИКЛЫ.

let out = document.querySelector('.out');

// for (let i = 0; i < 5; i++) {
//     for(let k = 0; k < 10; k++) {
//         out.innerHTML += '*';
//     }
//  out.innerHTML += '<br>';
// }

for (let i = 1; i < 10; i++) {
    // out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';

    for (let k = 1; k <  10; k++) {
        out.innerHTML += `${i}*${k}=${k * i} <br>`;
    }
    out.innerHTML += '<hr>';

}



























































