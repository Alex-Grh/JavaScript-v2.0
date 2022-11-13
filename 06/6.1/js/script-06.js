let out01 = document.querySelector('.out-01');
// Вложеные цыклы. Цыкл в цыкле
for (let i = 0; i < 2; i++) {
   for (let k = 0; k < 10; k++) {
      // console.log('*');
      out01.innerHTML += "*";
   }
   out01.innerHTML += '<br>';
}

// Таблица умножения
/*
let out02 = document.querySelector('.out-02');
for (let i = 1; i < 10; i++) {
   for (let k = 1; k < 10; k++) {
      //Конкантенация строк
      // out02.innerHTML += '3*' + i + '=' + (i * 3) + '<br>'; //Конкантенация строк
      // Интерполяция строк
      out02.innerHTML += `${i}*${k}=${k * i}<br>`;  // Интерполяция строк
   }
   out02.innerHTML += '<hr> '
}
*/
//! 6.1 JavaScript признание! Я редкий _______




//! ------------------------------------------------------------------------------------------

//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
   let out1 = document.querySelector('.out-1');
   for (let i = 1; i <= 3; i++) {
      for (let k = 1; k <= 3; k++) {
         out1.innerHTML += '*'
      }
      out1.innerHTML += '_'
   }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос 
// строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
   let out2 = document.querySelector('.out-2');
   for (let i = 1; i <= 3; i++) {
      out2.innerHTML += `${i}<br>`;
      for (let k = 1; k <= 3; k++) {
         out2.innerHTML += `*_`;
      }
      out2.innerHTML += `<br>`;
   }
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  
// внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
   let out3 = document.querySelector('.out-3');
   for (let i = 1; i <= 4; i++) {
      for (let k = 1; k <= 3; k++) {
         out3.innerHTML += '*_';
      }
      out3.innerHTML += '<br>';
   }

}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
   let out4 = document.querySelector('.out-4');
   for (let i = 1; i <= 3; i++) {
      out4.innerHTML += `${i}_`;
      for (let k = 1; k <= 5; k++) {
         out4.innerHTML += `${k} `;
      }

   }
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
// function t5() {
//    let out5 = document.querySelector('.out-5');
//    for (let i = 1; i <= 3; i++) {
//       for (let k = 1; k <= 3; k++) {
//          out5.innerHTML += '10';
//       }
//       out5.innerHTML += '<br>';
//    }  
// }

// document.querySelector('.b-5').onclick = t5;
function t5() {
   let out5 = document.querySelector('.out-5');
   for (let i = 1; i <= 3; i++) {
      for (let k = 1; k <= 6; k++) {
         if (k % 2 == 0) {
            out5.innerHTML += '0';
         }
         else {
            out5.innerHTML += '1';
         }
      }
      out5.innerHTML += '<br>';
   }
}

document.querySelector('.b-5').onclick = t5;



//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
   let out6 = document.querySelector('.out-6');
   for (let i = 1; i <= 3; i++) {
      for (let k = 1; k <= 6; k++) {
         if (k == 3 || k == 6) {
            out6.innerHTML += 'x';
         } else if (k % 2 == 0) {
            out6.innerHTML += '0';
         } else {
            out6.innerHTML += '1';
         }
      }
      out6.innerHTML += '<br>';
   }
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и 
// рисует звездочку.</p>
// function t7() {
// let out7 = document.querySelector('.out-7');
// let a = 2;
// for (let i = 1; i <= 4; i++) {
//    for (let k = 1; k <= 4; k++) {
//       if (k < a) {
//          out7.innerHTML += "*";
//       }      
//    }
//    out7.innerHTML += '<br>';
//    a++;
// }

// }

// document.querySelector('.b-7').onclick = t7;

function t7() {
   let out7 = document.querySelector('.out-7');
   for (let i = 1; i <= 4; i++) {
      for (let k = 1; k <= i; k++) {
         out7.innerHTML += '*';
      }
      out7.innerHTML += '<br>';

   }

}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
   let out8 = document.querySelector('.out-8');
   for (let i = 5; i >= 1; i--) {
      for (let k = 1; k <= i; k++) {
         out8.innerHTML += '*';
      }
      out8.innerHTML += '<br>';
   }
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
   let out9 = document.querySelector('.out-9');
   for (let i = 1; i <= 5; i++) {
      for (let k = 1; k <= i; k++) {
         out9.innerHTML += `${k} `;
      }
      out9.innerHTML += '<br>'
   }
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть 
// ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
   let out10 = document.querySelector('.out-10');
   let a = 0;
   for (let i = 0; i < 5; i++) {
      for (let k = 1; k <= 10; k++) {
         a++;
         if (a < 10) {
            out10.innerHTML += `0${a} `;
         } else if (a <= 50) {
            out10.innerHTML += a + ' ';
         }

      }

      out10.innerHTML += '<br>';
   }
}

document.querySelector('.b-10').onclick = t10;


//!------------------------------------------------------------------------------------------

// Задачи на прокачку 1

// Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. 
// вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. 
// Оформить в виде столбцов где выводятся множители и результат.


function t11() {
   // Таблица умножения

   let out11 = document.querySelector('.out-11');
   for (let i = 1; i < 10; i++) {
      for (let k = 1; k < 10; k++) {
         //Конкантенация строк
         // out02.innerHTML += '3*' + i + '=' + (i * 3) + '<br>'; //Конкантенация строк
         // Интерполяция строк
         out11.innerHTML += `${i}*${k}=${k * i}<br>`;  // Интерполяция строк
      }
      out11.innerHTML += '<hr> '
   }

}
document.querySelector('.b-11').onclick = t11;

// Задачи на прокачку 2
// С помощью вложенных циклов и символа * нарисуйте:

//    *****
//    *****
//    *****

function t12() {
   let out12 = document.querySelector('.out-12');
   for (let i = 1; i <= 3; i++) {
      for (let k = 1; k <= 5; k++) {
         out12.innerHTML += '*';
      }
      out12.innerHTML += '<br>';
   }
}
document.querySelector('.b-12').onclick = t12;


// Задачи на прокачку 4
// С помощью вложенных циклов и символа * нарисуйте:

//    *****
//    ****
//    ***
//    **
//    *


function t14() {
   let out14 = document.querySelector('.out-14');
   for (let i = 5; i >= 1; i--) {
      for (let k = 1; k <= i; k++) {
         out14.innerHTML += '*';
      }
      out14.innerHTML += '<br>';
   }
}
document.querySelector('.b-14').onclick = t14;

// Задачи на прокачку 5
// С помощью вложенных циклов и символа * нарисуйте:

//   *****
//  *****
// *****


function t15() {
   let out15 = '';
   let q = 3;
   let q2 = 7;

   for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 8; k++) {
         if (k < q || k > q2) {
            // out15 += '_ ';
            out15 += '&nbsp;';
         } else {
            out15 += '*';
         }

      }
      q--;
      q2--;
      out15 += '<br>';
   }
   document.querySelector('.out-15').innerHTML = out15;
}
document.querySelector('.b-15').onclick = t15;

// Задачи на прокачку 6

// С помощью вложенных циклов и символа * нарисуйте:

// *
// **
// ***
// **
// *


function t16() {
   let out16 = document.querySelector('.out-16')
   let a = 6;
   for (let i = 1; i < a; ++i) {
      if (i < 3) {
         for (let k = 0; k < i; k++) {
            out16.innerHTML += '* ';
         }
      }
      else {
         for (let j = a; j > i; j--) {
            out16.innerHTML += '* ';
         }
      }
      out16.innerHTML += '<br>';
   }


}

document.querySelector('.b-16').onclick = t16;

// Задачи на прокачку 7
//С помощью вложенных циклов и символа * нарисуйте:
// ******
// *       *
// *       *
// *       *
// ******

function t17() {
   let out17 = document.querySelector('.out-17');
   for (let i = 1; i <= 5; i++) {
      for (let k = 1; k <= 6; k++) {
         if (i == 1) {
            out17.innerHTML += '*';
         } else if (i >= 1 && i <= 4) {
            if (k <= 1) {
               out17.innerHTML += '*&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp*';
            }
         } else if (i >= 5) {
            out17.innerHTML += '*';
         }
      }
      out17.innerHTML += '<br>';
   }
}

document.querySelector('.b-17').onclick = t17;


// Задачи на прокачку 8
//С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
function t18() {
   let out18 = document.querySelector('.out-18');
   for (let i = 5; i >= 1; i--) {
      for (let k = i; k >= 1; k--) {
         out18.innerHTML += `${k} `;
      }
      out18.innerHTML += '<br>';
   }
}

document.querySelector('.b-18').onclick = t18;


// Задачи на прокачку 9
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

function t19() {
   let out19 = document.querySelector('.out-19');
   let a = 1;
   for (let i = 1; i <= 5; i++) {
      for (let k = 5; k >= 1; k--) {
         if (k > a) {
            out19.innerHTML += '&nbsp;&nbsp;&nbsp ';
         } else {
            out19.innerHTML += `&nbsp${k} `;
         }

      }
      a++;
      out19.innerHTML += '<br>';
   }
}

document.querySelector('.b-19').onclick = t19;


// Задачи на прокачку 10
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1

function t20() {
   let out20 = document.querySelector('.out-20');
   let a = 1;
   for (let i = 1; i <= 5; i++) {
      for (let k = 5; k >= 1; k--) {
         if (k > a) {
            out20.innerHTML += 'X&nbsp; ';
         } else {
            out20.innerHTML += `${k}&nbsp; `;
         }
      }
      a++;
      out20.innerHTML += '<br>';
   }
}

document.querySelector('.b-20').onclick = t20;


// Задачи на прокачку 11
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 2  2
// 3  3  3
// 4  4  4  4
// 5  5  5  5  5

function t21() {
   let out21 = document.querySelector('.out-21');
   for (let i = 1; i <= 5; i++) {
      for (let k = 1; k <= i; k++) {
         out21.innerHTML += i + ' ';
      }
      out21.innerHTML += '<br>';
   }
}

document.querySelector('.b-21').onclick = t21;


// Задачи на прокачку 12
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):
// 5
// X  X
// 3  3  3
// X  X  X  X
// 1  1  1  1  1

function t22() {
   let out22 = document.querySelector('.out-22');
   for (let i = 5; i >= 1; i--) {
      for (let k = 5; k >= i; k--) {
         if (i == 2 || i == 4) {
            out22.innerHTML += 'x ';
         } else {
            out22.innerHTML += i + ' ';
         }
      }
      out22.innerHTML += '<br>';
   }
}

document.querySelector('.b-22').onclick = t22;

// Задачи на прокачку 13
// С помощью вложенных циклов и символа * нарисуйте:
//   *****
//  *******
// *********

// function t23() {
//    let out23 = '';
//    let q = 3;
//    for (let i = 0; i < 3; i++) {
//       for (let k = 0; k < 8; k++) {
//          if (k < q) {
//             // out23 += '_ ';
//             out23 += '&nbsp;';
//          } else {
//             out23 += '* ';
//          }

//       }
//       q--;
//       out23 += '<br>';
//    }
//    document.querySelector('.out-23').innerHTML = out23;
// }

// document.querySelector('.b-23').onclick = t23;

function t23() {
   let out23 = '';
   let q = 3;
   let q2 = 7;

   for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 12; k++) {
         if (k < q || k > q2) {
            // out23 += '_ ';
            out23 += '&nbsp;';
         } else {
            out23 += '*';
         }

      }
      q--;
      q2++;
      out23 += '<br>';
   }
   document.querySelector('.out-23').innerHTML = out23;
}

document.querySelector('.b-23').onclick = t23;


// Задачи на прокачку 14
// С помощью вложенных циклов и символа * нарисуйте:
//    **
//   ****
//  ******
//   ****
//    **

//Вариант 1
// function t24() {
//    let out24 = document.querySelector('.out-24');
//    let a = 3;
//    let b = 4;

//    for (let i = 1; i <= 5; i++) {
//       for (let k = 1; k <= 6; k++) {
//          if (k < a || k > b) {            
//             out24.innerHTML += '&nbsp;';
//          } else {
//             out24.innerHTML += '*';
//          }
//       }
//       a--;
//       b++;
//       out24.innerHTML += '<br>';
//    }
// }

// document.querySelector('.b-24').onclick = t24;

//Вариант 2
function t24() {
   let out24 = document.querySelector('.out-24');
   let a = 3;
   let b = 4;

   for (let i = 1; i <= 5; i++) {
      for (let k = 1; k <= 6; k++) {
         if (i == a) {            
            out24.innerHTML += '*';
         } else if( i % 2 == 0){
            (k == 1 || k == 6) ? 
            (out24.innerHTML += '&nbsp;'):
            (out24.innerHTML += '*');
         } else {
            (k == a || k == b) ? 
            (out24.innerHTML += '*'):
            (out24.innerHTML += '&nbsp;');
         }
      }     
      out24.innerHTML += '<br>';
   }
}

document.querySelector('.b-24').onclick = t24;