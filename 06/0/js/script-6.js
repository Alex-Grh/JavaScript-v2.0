//  Task 0

// Пример 1
let out0 = document.querySelector(".out-0");
for (let i = 0; i < 5; i++) {
   for (let k = 0; k < 10; k++) {
      out0.innerHTML += "*";
   }
   out0.innerHTML += "<br>";
}

// Пример 2
// for (let i = 1; i < 10; i++) {
// // out0.innerHTML += "3*" + i + "=" + (i * 3) + "<br>"; // Конкатенация строк
// out0.innerHTML += `3*${i}=${3*i}<br>`; // Интерполяция строк
// }

// Пример 3
for (let i = 1; i < 10; i++) {
   for (let k = 1; k < 10; k++) {
      out0.innerHTML += `${i}*${k}=${k * i}<br>`; // Интерполяция строк
   }
   out0.innerHTML += "<hr>";
}

//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>
let out1 = document.querySelector(".out-1");
function t1() {
   for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
         out1.innerHTML += "*";
      }
      out1.innerHTML += "_";
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
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит 
// цифру и перенос строки br, внутренний - *_, и после этого 
// внешний - знак переноса.</p>

let out2 = document.querySelector(".out-2");

function t2() {

   for (let i = 1; i <= 3; i++) {
      out2.innerHTML += `${i}<br>`;
      for (let k = 1; k <= 3; k++) {
         out2.innerHTML += "*_";
      }
      // out2.innerHTML += i + "<br>";
      // out2.innerHTML += `<br>${i}<br>`;
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
// <p>Решить задачу с помощью вложенных циклов. 
// Внешний цикл выводит перенос строки br,  внутренний -  звездочки, 
// знак подчеркивания.</p>

let out3 = document.querySelector(".out-3");

function t3() {
   for (let i = 1; i <= 4; i++) {
      for (let k = 1; k <= 3; k++) {
         out3.innerHTML += "*_";
      }
      out3.innerHTML += "<br>";
   }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>

let out4 = document.querySelector(".out-4");

function t4() {
   for (let i = 1; i <= 3; i++) {
      out4.innerHTML += i + "_";
      for (let k = 1; k <= 5; k++) {
         out4.innerHTML += k + " ";
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
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 
// выводит либо 0 либо 1.</p>

let out5 = document.querySelector(".out-5");

function t5() {
   for (let i = 1; i <= 3; i++) {

      for (let k = 0; k < 6; k++) {
         //    if (k == 2 || k == 5) {
         //       out5.innerHTML += 1;
         //   }
         if (k % 2 == 0) {
            out5.innerHTML += 1;
         }
         else {
            out5.innerHTML += 0;
         }
      }
      out5.innerHTML += "<br>";
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

let out6 = document.querySelector(".out-6");

function t6() {
   for (let i = 1; i <= 3; i++) {
      for (let k = 0; k < 6; k++) {
         if (k == 2 || k == 5) {
            out6.innerHTML += 'x';
         }
         else if (k % 2 == 0) {
            out6.innerHTML += 1;
         }
         else {
            out6.innerHTML += 0;
         }
      } out6.innerHTML += "<br>";
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
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается 
// от нуля до i и рисует звездочку.</p>

let out7 = document.querySelector(".out-7");

function t7() {
   for (let i = 0; i < 4; i++) {
      for (let k = 0; k <= i; k++) {
         out7.innerHTML += "*";
      }
      out7.innerHTML += "<br>";
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

let out8 = document.querySelector(".out-8");

function t8() {
   for (let i = 5; i >= 0; i--) {
      for (let k = 1; k <= i; k++) {
         out8.innerHTML += "*";
      }
      out8.innerHTML += "<br>";
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
let out9 = document.querySelector(".out-9");
function t9() {
   for (let i = 1; i <= 5; i++) {
      for (let k = 1; k <= i; k++) {
         out9.innerHTML += k + " ";
      }
      out9.innerHTML += "<br>";
   }
}

document.querySelector('.b-9').onclick = t9;

// Вариант 2
// let out9 = document.querySelector(".out-9");
// function t9() {
// for (let i = 1; i <= 5; i++) {
//    for (let k = 1; k <= i; k++){
//       out9.innerHTML += i;
//    }
//    out9.innerHTML += "<br>";
// }
// }

// document.querySelector('.b-9').onclick = t9;



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
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый 
// ряд - есть ведущий нуль. Здесь все просто - проверили, если число 
// меньше 10 - то конкатенируем нуль.</p>
/*
let out10 = document.querySelector(".out-10");
// let a10 = 10;

function t10() {
   for (let i = 0; i < 5; i++) {
      for (let k = 1; k < 10 || k <= 50; k++) {
         if (k < 10 ){
            out10.innerHTML += "0"+ k + " ";
         } else if (k <= 50 ){
            out10.innerHTML += k + " ";
          }         
      }
      out10.innerHTML += "<br>";
   }

}

document.querySelector('.b-10').onclick = t10;
*/

/*

let out10 = document.querySelector(".out-10");
let a10 = 10;

function t10() {
   for (let i = 0; i < 5; i++) {
      for (let k = 1; k <= a10; k++) {
         if (k < 10 ){
            out10.innerHTML += "0"+ k + " ";
         } else if (k <= 50 ){
            out10.innerHTML += k + " ";
          }         
      }
      out10.innerHTML += "<br>";
   }

}

document.querySelector('.b-10').onclick = t10;
*/
/*
let out10 = document.querySelector(".out-10");
// let a10 = 10;

function t10() {
   for (let i = 0; i < 50; i++) {
      for (let k = 1; k <= i; k++) {
         if (k < 10 ){
            out10.innerHTML += "0"+ k + " ";
         } else if (k <= 50 ){
            out10.innerHTML += k + " ";
          }         
      }
      if (i < 5){
      out10.innerHTML += "<br>";
   } else {
      out10.innerHTML += "<br>";
   }
   }

}

document.querySelector('.b-10').onclick = t10;
*/

/*!!!
let out10 = document.querySelector(".out-10");
let a10 = 10;
let c10 = 1;

function t10() {
   for (let i = 0; i < 5; i++) {
      for (let k = 1; k <= a10; k++, c10++) {
         if (c10 < 10) {
            out10.innerHTML += "0" + c10 + " ";
         } else if (c10 <= 50) {
            out10.innerHTML += c10 + " ";
         }
      }
      out10.innerHTML += "<br>";
   }
}

document.querySelector('.b-10').onclick = t10;
*/

/*!!!
let out10 = document.querySelector(".out-10");
let c10 = 1;

function t10() {
   for (let i = 0; i < 5; i++) {
      for (let k = 1; k <= 10; k++, c10++) {
         if (c10 < 10) {
            out10.innerHTML += "0" + c10 + " ";
         } else if (c10 <= 50) {
            out10.innerHTML += c10 + " ";
         }
      }
      out10.innerHTML += "<br>";
   }
}

document.querySelector('.b-10').onclick = t10;
*/
// function t10() {
//    let out10 = "";
//    for (let i = 0; i < 5; i++) {
//      for (let k = 1; k <= 10; k++) {
//        let start = i * 10;
//        out10 += k < 10 && i == 0 ? `0${k} ` : `${+start + k} `;
//      }
//      out10 += "<br>";
//    }
//    document.querySelector(".out-10").innerHTML = out10;
//  }
 
//  document.querySelector(".b-10").onclick = t10;
 
let out10 = document.querySelector(".out-10");

function t10() {
   let c10 = 1;
   for (let i = 0; i < 5; i++) {      
      for (let k = 1; k <= 10; k++, c10++) {
         if (c10 < 10) {
            out10.innerHTML += "0" + c10 + " ";
         } else if (c10 <= 50) {
            out10.innerHTML += c10 + " ";
         }
      }
      out10.innerHTML += "<br>";
   }
}
document.querySelector('.b-10').onclick = t10;


// Задачи на прокачку 1
	
// Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. 
// вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. 
// Оформить в виде столбцов где выводятся множители и результат.

let out11 = document.querySelector(".out-11");

function t11() {
   for (let i = 1; i < 10; i++) {
      for(let k = 1; k < 10; k++) {
         out11.innerHTML += `${i}*${k}=${k*i}<br>`;
      }
      out11.innerHTML += "<hr>"
   }
}
document.querySelector('.b-11').onclick = t11;

// Задачи на прокачку 2
// С помощью вложенных циклов и символа * нарисуйте:

//    *****
//    *****
//    *****
let out12 = document.querySelector(".out-12");
function t12() {
   for (let i = 1; i <= 3; i++) {
      for (let k = 1; k <= 5; k++) {
         out12.innerHTML += "*";
      }
      out12.innerHTML += "<br>";
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

let out14 = document.querySelector(".out-14");
function t14() {
for (let i = 5; i >= 0; i--) {
   for (let k = 1; k <= i; k++){
      out14.innerHTML += "* ";
   }
   out14.innerHTML += "<br>";
}

}
document.querySelector('.b-14').onclick = t14;

// Задачи на прокачку 5
// С помощью вложенных циклов и символа * нарисуйте:

//   *****
//  *****
// *****

let out15 = document.querySelector(".out-15");
function t15() {
   
for (let i = 1; i <= 3; i++) {
   if (i <= 1){
      out15.innerHTML += "&nbsp &nbsp &nbsp";
   } else if (i <= 2){
      out15.innerHTML += "&nbsp &nbsp";
   }
   else if (i <= 3){
      out15.innerHTML += "&nbsp";
   } 
   for (let k = 1; k <= 5; k++) {
      out15.innerHTML += "*";
   } 
   
   out15.innerHTML += "<br>"; 
}
}
document.querySelector('.b-15').onclick = t15;

// Задачи на прокачку 6
	
// С помощью вложенных циклов и символа * нарисуйте:

// *
// **
// ***
// **
// *

let out16 = document.querySelector(".out-16");
function t16()  {
for (let i = 1; i <= 5; i++) {  
   for (let k = 1; k <= i; k++){   
      if (i <= 3) {          
         out16.innerHTML += "*";
      } 
      else if (k <= 2) {         
         out16.innerHTML += "*";
      }  
      else if (i <= 1)  {         
         out16.innerHTML += "*";
      }       
}
out16.innerHTML += "<br>";
}
}

document.querySelector('.b-16').onclick = t16;


















// Задачи на прокачку 4

let out114 = document.querySelector(".out-114");
function t114() {

}
document.querySelector('.b-114').onclick = t114;