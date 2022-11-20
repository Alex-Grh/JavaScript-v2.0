//!Именнованные функции

let b01 = document.querySelector('.b-01'); //кнопка

function one() {
   console.log('work');
}
one();

// b01.onclick = one; //без круглых скобок

console.log(1 + one());
console.log(one()); // underfined

function two() {
   console.log('work 2222');
   return 54; // метка функции прекратить работу
}

two();
console.log(1 + two());

let a = 8;
let b = 9;
let c;

function multi() {
   console.log(a + b);
   // c = a * b;
   return a * b;
}
// multi();
// console.log(c);

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);


console.log('Вводим параметры функции---------------------------------------------------------');
//Вводим параметры функции. Пререпишем умножение с помощью параметров.
// Параметры это теже переменныее водимые в нутри функции.
// Функция стала универсальной
// Функция это способ повторного использования кода


// function multi2(x, y) {
//    return x * y;
// }
// console.log(multi2(4, 5));
// console.log(multi2(20, 5));
// console.log(multi2(20, a));

// Можно использовать авраметры по умолчанию

function multi2(x = 9, y = 8) {
   return x * y;
   // все что после return выполнятся небудет
}
console.log(multi2(4, 5));
console.log(multi2(20, 5));
console.log(multi2(20, a));
// Если параметры непередвать то запишутся параметры по умолчанию
console.log(multi2()); //9 * 8 = 72
console.log(multi2(10)); //если передать один параметр то заменить х и будет 10 * 8 = 80

//! Анонимные функции
// Вызываются только один раз

// b01.onclick = function () {
//    console.log('Hello');
// };

//! Стрелочная функция. Это один из способов написания анонимных функций

b01.onclick = () => {
   console.log('Hello');
};

// Если написать две анонимных или стрелочных функций то сработает последняя (Вызываются только один раз)
// Если надо написать две и более функции то необходимо использовать именную функцию

document.querySelector('.b-02').onclick = () => {
   console.log('arrow');
   console.log('+++++++++');
}
// --------------------------------------------------------------------------------------
console.log('07.2 Функции. Return - это просто!---------------------------------------------------------');
//! 07.2 Функции. Return - это просто!

// Процедура
// let a01 = 9;
// function f1() {
//    document.querySelector('.out-01').textContent = a01;
// }
// document.querySelector('.b-03').onclick = f1;


// Реальная функция гибкий подход
let a01 = 9;
function f1(b) {
   // document.querySelector('.out-01').textContent = b;
   return 100 * b

}
document.querySelector('.b-03').onclick = () => {  // функция обертка
   document.querySelector('.out-01').textContent = f1(90) / 2;
   // console.log(f1(10));
   let a = f1(10);
}

console.log('7.3 Хитрые скобки в стрелочных функциях JavaScript---------------------------------------------------------');
//7.3 Хитрые скобки в стрелочных функциях JavaScript
const z01 = n01 => (n01 >= 0 ? n01 : 0);
console.log(z01(-5));
console.log(z01(35));

const w01 = n01 => ({ 'temo': n01 });
console.log(w01(5));


console.log('7.4 Готовим_ стрелочные функции JavaScript. Небольшие хитрости---------------------------------------------------------');
//7.4 Готовим_ стрелочные функции JavaScript. Небольшие хитрости

function t01() {
   console.log(1);
   console.log(2);
   console.log(3);
}
t01();

console.log(t01.name); // Получаем имя функции

// СТрелочная функция

let count = 0;

// document.querySelector('.b-04').addEventListener('click', () => {
   // setTimeout(()=>{
   //    debugger;
   //    count++;
   //    console.log(count);
   // }, 1000)
   // })

   console.log('7.5 9 минут про чистые функции ---------------------------------------------------------');
   //7.5 9 минут про чистые функции
   // входными параметрами -> выходные
   //side эффекты 
   // Читстая функция это функция которая принимает параметр и всегда возвращает 
   // один и тот же результат в зависимости от этого параметра
   // Запустив много раз получаем тот же ответ

   function a02(b02) {
      return b02 * 5;
   }
console.log(a02(5));
console.log(a02(5));

//Свойства чистых функций
// 1 Уменшает колличество багов
// 2 Легче тестируется
// 3 Легче понимать

// Пример функции которая неявляется чистой
// Функция зависит от внешних данных

let c03 = 9;
function a03(b03) {
   return b03 * c03;
}
console.log(a03(5));
c03 = 88;
console.log(a03(5));


   //! --------------------------------------------------------------------------------------

   
   // Task 1
   // Напишите функцию t1, которая при нажатии кнопки выводит в out - 1 переменную a1.

   let a1 = 8;
   let out1 = document.querySelector('.out-1');
   function t1() {
      out1.innerHTML = a1;
   }

   document.querySelector('.b-1').onclick = t1;


   // Task 2.

   // Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок.
   // Давайте сделаем так, чтобы функция, была более гибкой.Пусть теперь функция t2 возвращает 
   // переменную a2.Поскольку функция возвращает переменную, то имя функции со скобками(вызов функции) 
   // можно встраивать в выражения.Обратите внимание, как изменяется вызов функции теперь.

   let a2 = 8;
   function t2() {

      return a2;
   }

   document.querySelector('.b-2').onclick = function () {
      document.querySelector('.out-2').textContent = t2();
   }

   // Task 3.
   // Наша предыдущая функция, сильно все еще зависима от внешних переменных.
   // Давайте сделаем ее более универсальной.Пусть функция t3 принимает 2 параметра 
   // и выводит их произведение.Допишите код функции так, чтобы она возвращала 
   // произведение двух чисел, переданных ей в качестве параметра a, b.Протестируем 
   // функцию на двух примерах, с помощью кнопок b-3-1 и b-3-2.

   function t3(a, b) {
      return a + ' ' + b;
   }

   document.querySelector('.b-3-1').onclick = function () {
      document.querySelector('.out-3-1').textContent = t3(3, 4);
   }
   document.querySelector('.b-3-2').onclick = function () {
      document.querySelector('.out-3-2').textContent = t3(5, 6);
   }

   // Task 4
   // Напишите функцию t4 которая принимает ваш год рождения  и вычисляет ваш возраст. 

   function t4(year) {
      return 2022 - year;
   }

   document.querySelector('.b-4').onclick = function () {
      document.querySelector('.out-4').textContent = t4(1983);
   }


   // Task 5
   // Напишите функцию t5, которая принимает ваше имя в качестве 
   // параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.


   function t5(yourName) {
      return 'Hello' + ' ' + yourName;
   }

   document.querySelector('.b-5').onclick = function () {
      document.querySelector('.out-5').textContent = t5('Alex');
   }



   // Task 6
   // Напишите функцию t6, которая принимает 2 числа и возвращает 
   // случайное целое число от первого до второго принятого параметра. 

   function t6(a, b) {
      // return Math.random() * (a - b) + b;
      return Math.floor(Math.random() * (b - a + 1)) + a;

   }

   document.querySelector('.b-6').onclick = function () {
      document.querySelector('.out-6').textContent = t6(1, 7);
   }


   // Task 7
   // Напишите функцию t7, которая возвращает случайный цвет в 
   // формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

   function t7() {
      //return `rgb(${t6(0,255)}....допишите сами
      return `rgb(${t6(0, 255)}, ${t6(0, 255)}, ${t6(0, 255)})`;
   }

   document.querySelector('.b-7').onclick = function () {
      document.querySelector('.out-7').style.background = t7();
   }


   // Task 8
   // Напишите функцию t8, которая принимает строку в качестве параметра 
   // и возвращает результат с очищенными пробелами в начале и вконце 
   // строки.Т.е.принимает _hello_(где знак _ символизирует пробел), а 
   // возвращает hello.Для удаления пробелов - используйте trim.

   function t8(str) {
      return str.trim();
   }

   document.querySelector('.b-8').onclick = function () {
      document.querySelector('.out-8').textContent = t8('  Hello  ');
      console.log(t8('  Hello  '));
   }


   // Task 9
   // Напишите функцию t9, которая принимает число и возвращает true, 
   // если число четное, и false если не четное. 

   function t9(num) {
      if (num % 2 == 0) {
         return true;
      } else {
         return false;
      }
   }

   document.querySelector('.b-9').onclick = function () {
      document.querySelector('.out-9').textContent = t9(15);
   }


   // Task 10
   // Создайте функцию t10, которая принимает 2 числа и возвращает 
   // большее из них.В случае равенства - любое из чисел.

   function t10(a, b) {
      // return (a > b) ? a : (b > a) ? b : (a == b) ? a : b;
      return (a > b) ? a : b;
   }

   document.querySelector('.b-10').onclick = function () {
      document.querySelector('.out-10').textContent = t10(3, 9);
   }
