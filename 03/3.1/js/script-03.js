let a0 = 6;

// if (a0 > 9) {
// //true
// console.log('Yes');
// }
// else {
//    console.log('else');
// }

const b0 = document.querySelector('.b-0');
const age0 = document.querySelector('.age-0');

//Стрелочная функция () =>

b0.onclick = () => {
   // все что вводится в input оно итропретируется как строка
   // Чтобы перевести в число ставим +
   let num = +age0.value;
   if (num >= 16 && num < 60) {
      console.log('Welcom!!!');
   }
   else if (num > 60) {
      console.log('Ты точно сюда?');
   }
   else {
      console.log('Ты не пройдешь!!!');
   }

   // Перепишем все через switch
   switch (num) {
      case 15:
         console.log('Еще год потерпи!');
         break;
      case 16:
         console.log('Ураааа можно!!!');
         break;
      default:
         console.log('ooooooook')
   }
}

let b01 = 3;
console.log(b01 == 3 || b01 == 7);

//!---------------------------------------------------------------------------------------


// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить 
// его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.
let i1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');
function f1() {
   let i11 = i1.value;
   if (i11 == 4) {
      out1.innerHTML = true;
   }
   else {
      out1.innerHTML = false;
   }
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна 
// сравнить переменные с помощью if else и вывести в out-2 число, которое больше. 
// Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;
let out2 = document.querySelector('.out-2');
function f2() {
   if (a22 > a21) {
      out2.innerHTML = a22;
   } else {
      out2.innerHTML = a21;
   }
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает 
// функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, 
// вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.
let i31 = document.querySelector('.i-31');
let i32 = document.querySelector('.i-32');
let out3 = document.querySelector('.out-3');
function f3() {
   let i311 = +i31.value;
   let i321 = +i32.value;

   if (i311 > i321) {
      out3.innerHTML = i311;
   }
   else {
      out3.innerHTML = i321;
   }
}

document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может 
// ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна 
// вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.
let i4 = document.querySelector('.i-4');
let out4 = document.querySelector('.out-4');
function f4() {
   let i41 = +i4.value;
   if (i41 >= 18) {
      out4.innerHTML = 1;
   }
   else {
      out4.innerHTML = 0;
   }
}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь 
// может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести 
// в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.
let i5 = document.querySelector('.i-5');
let out5 = document.querySelector('.out-5');

function f5() {
   let i51 = +i5.value;
   if (i51 < 0) {
      out5.innerHTML = 'm';
   } else if (i51 == 0) {
      out5.innerHTML = 0;
   } else {
      out5.innerHTML = 1;
   }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь 
// может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести 
// в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности 
// используется целочисленный остаток от деления на 2 (оператор %). 
// Если остаток равен нулю  - четное, нет - нечетное.
let i6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');

function f6() {
   let i61 = +i6.value;
   if (i61 % 2 == 0) {
      out6.innerHTML = 'even';
   }
   else {
      out6.innerHTML = 'odd';
   }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает 
// функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат 
// в  out-7. Для возведения в степень можно использовать **, или Math.pow.

let i71 = document.querySelector('.i-71');
let i72 = document.querySelector('.i-72');
let out7 = document.querySelector('.out-7');

function f7() {
   let i711 = +i71.value;
   let i721 = +i72.value;

   out7.innerHTML = i711 ** i721;
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  
// нажатии срабатывает функция f8. Функция должна получить выбранное в select число, 
// потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число 
// выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.
let s8 = document.querySelector('.s-8');
let out8 = document.querySelector('.out-8');
function f8() {
   let s81 = +s8.value;
   switch (s81) {
      case 1:
         out8.innerHTML = 'one';
         break;
      case 2:
         out8.innerHTML = 'two';
         break;
      case 3:
         out8.innerHTML = 'three';
         break;
   }
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может 
// ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна 
// вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

let i9 = document.querySelector('.i-9');
let out9 = document.querySelector('.out-9');

function f9() {
   let i91 = +i9.value;
   if (i91 >= 1 && i91 <= 32) {
      out9.innerHTML = 1;
   }
   else if (i91 >= 33 && i91 <= 43) {
      out9.innerHTML = 2;
   }
   else if (i91 >= 44 && i91 <= 64) {
      out9.innerHTML = 3;
   }
   else {
      out9.innerHTML = 0;
   }

}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.
let s100 = document.querySelector('.s-100');
let out10 = document.querySelector('.out-10');

function f10() {
   let s1001 = s100.value;
   out10.innerHTML = s1001;
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) 
// выведите value выбранного option в out-11.
let s110 = document.querySelector('.s-110');
let out11 = document.querySelector('.out-11');

function f11() {
   let s1101 = s110.value;
   if (s110.onchange) {
      out11.innerHTML = s1101;
   }
}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, 
// а затем выведите в out-12 typeof полученной переменной. Typeof позволяет 
// определить тип данных. Обратите внимание, данная задача уже решена, 
// нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12() {
   let v = i120.value;
   document.querySelector('.out-12').innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. 
// По нажатию кнопки получите значение из input  в переменную, а затем выведите 
// в out-13 typeof полученной переменной. Typeof позволяет определить тип 
// данных. Если вы правильно все сделали - то удивительно, но тип данных 
// будет string! Подумайте почему так?
let i130 = document.querySelector('.i-130');
let out13 = document.querySelector('.out-13');
function f13() {
   let i1301 = i130.value;
   out13.innerHTML = typeof i1301;
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит 
// две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает 
// функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select 
// к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно 
// вывести результат операции 1+13 т.е.  14.

let i141 = document.querySelector('.i-141');
let i142 = document.querySelector('.i-142');
let s143 = document.querySelector('.s-143');
let out14 = document.querySelector('.out-14');

function f14() {
   let a = +i141.value;
   let b = +i142.value;
   let c = s143.value;

   switch (c) {
      case '+':
         out14.innerHTML = a + b;
         break;
      case '-':
         out14.innerHTML = a - b;
         break;
      case '*':
         out14.innerHTML = a * b;
         break;
      case '/':
         out14.innerHTML = a / b;
         break;
   }
}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, 
// который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую 
// срабатывает функция f15. Функция выводит в out-15 результат логических операций 
// выбранных в 3 select к числам выбранным в первом и втором select. Например 
// выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.
let s151 = document.querySelector('.s-151');
let s152 = document.querySelector('.s-152');
let s153 = document.querySelector('.s-153');
let out15 = document.querySelector('.out-15');
function f15() {
   let a = s151.value;
   let b = s152.value;
   let c = s153.value;
   // if (c == "&&") {
   // out15.innerHTML = a && b;
   // }
   // else if (c == "||") {
   //    out15.innerHTML = a || b;
   // }
   switch (c) {
      case '&&':
         out15.innerHTML = a && b;
         break;
      case '||':
         out15.innerHTML = a || b;
         break;
   }

}

document.querySelector('.b-15').onclick = f15;



