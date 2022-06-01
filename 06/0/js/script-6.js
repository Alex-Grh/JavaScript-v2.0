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