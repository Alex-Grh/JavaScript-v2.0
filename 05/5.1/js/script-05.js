// Усть три вида циклов for, whilw, do while
// for (старт; работаем пока верно; счетчик) {
// }
console.log('----------------- Увеличиваем -----------------');
// Увеличиваем
for (let i = 0; i < 5; i++) {
   console.log(i);
}
console.log('----------------- Уменьшаем -----------------');
// Уменьшаем
for (let i = 5; i > 0; i--) {
   console.log(i);
}
console.log('----------------- Увеличиваем на + 2 -----------------');
// Увеличиваем
for (let i = 0; i < 6; i = i + 2) {
   console.log(i);
}

// Из цикла можно выйти зарание с помощью команды break
console.log('------Из цикла можно выйти зарание с помощью команды break-----');
for (let i = 0; i < 6; i = i + 1) {
   if (i == 4) break;
   console.log(i);
   // if (i == 4) break; // Если переместим сюда то условие небудет выполнено. Логика все по порядку.
}
console.log('------ ******** -----');
for (let i = 0; i < 6; i = i + 1) {
   console.log('*************');
   // if (i == 4) break; // Если переместим сюда то условие небудет выполнено. Логика все по порядку.
}


console.log('------ Выведем на страницу один элемент класса querySelector-----');
// Выведем на страницу
let out0 = document.querySelector('.out-0');
console.log(out0);
out0.style.background = 'green';


console.log('------ Выведем на страницу множество одинаковых класов querySelectorAll-----');
// Выведем на страницу необходимо запускать цикл
let out01 = document.querySelectorAll('.out-01'); // Чтобы перебрать все одинаковые класы нам нужно querySelectorAll 
console.log(out01);
// В консоле получаем NodeList с набором нашего класса 0, 1, 2 это массив
// out01.style.background  = 'red'; // будет ошибка данные несчитываются
// Необходимо сделать перебор получившегося массива данных 0, 1, 2 
for (let i = 0; i < out01.length; i = i + 1) {
   console.log(i);
   // Обратимся к каждому элементу нашего массива out01[i]
   console.log(out01[i]);
   out01[i].style.background = 'red';
   out01[i].onclick = two; // При нажатии на out01 сработает функция two
}

// К элементам можно применять события
function two() {
   console.log('Work!!!')
}

//! Еще один способ обращения к класам getElementsByClassName
let b01 = document.getElementsByClassName('out-01');
console.log(b01);
// Получаем вывод HTMLCollection все такое как и в NodeList также можем перебрать массив 0, 1, 2
for (let i = 0; i < b01.length; i++) {
   b01[i].style.border = '3px solid yellow'
}

//! Еще можно получить елемент по имени тега getElementsByTagName Получили все div на странице
let c01 = document.getElementsByTagName('div'); // Получили все div на странице
console.log(c01);

// Необходимо получить какое значение выбрано в input type="radio"
document.querySelector('.b-0').onclick = () => {
   // Важно чередовать скобки
   let r = document.querySelectorAll('input[type="radio"]');
   console.log(r);
   // Делаем проверку что выбрано
   for (let i = 0; i < r.length; i++) {
      if (r[i].checked) {
         console.log(r[i].value);
      }
   }
}

// Еще один вариант использования циклов. Создаем пустую переменную. В цикли с ней работаем
// И выводим ее после цыкла. В цикли размещеть document.querySelector('#out-01').innerHTML ненадо 
// это замедляет работу компа. И за пределами цикла выводим все накопленные данные в переменную out011
// Такой вариант ускоряет работу програмы

let out011 = '';
for (let i = 0; i < 10; i++) {
   // Приреваем текущий круг цикла с помощью continue
   if (i == 3) continue; // 3 пропустит и пойдет дальше
   out011 += i + ' ';
   // Остановка цикла в заданом месте
   if (i == 8) break;
}
document.querySelector('#out-011').innerHTML = out011;

//! 05.1 Не бойтесь ошибок в JavaScript
//Для чистоты кода переменные объявдляем внутри функции в этом случае торможения 
// небудет как из циклами

document.querySelector('.b-01').onclick = function () {
   //Сперва пишим объекты
   let out012 = document.querySelector('#out-012');
   // Получаем числа значения
   let num1 = +document.querySelector('#num-1').value; // ставим + преобраз у числа и получ value
   let num2 = +document.querySelector('#num-2').value; // ставим + преобраз у числа и получ value
   //Пишем операцию
   if (num1 > num2) {
      out012.innerHTML = num1 + '- больше';
   }
   else if (num2 > num1) {
      out012.innerHTML = num2 + '- больше';
   }
   else {
      out012.innerHTML = 'равны';
   }
}


// --------------------------------------------------------------------------------------

//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let out1 = document.querySelector('.out-1');

function t1() {
   for (let i = 1; i <= 50; i++) {
      out1.innerHTML += i + ' ';
   }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

let out2 = document.querySelector('.out-2');
function t2() {
   for (let i = 2; i <= 122; i = i + 2) {
      out2.innerHTML += i + ' ';
   }
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.
let out3 = document.querySelector('.out-3');
function t3() {
   for (let i = 25; i >= 7; i--) {
      out3.innerHTML += i + ' ';
   }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

let out4 = document.querySelector('.out-4');
function t4() {
   for (let i = 77; i >= 35; i = i - 3) {
      out4.innerHTML += i + '_';
   }
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, 
// и две звездочки если четное). Задача решается с помощью цикла.
let out5 = document.querySelector('.out-5');
function t5() {
   for (let i = 1; i <= 17; i++) {
      if (i % 2 == 0) {
         out5.innerHTML += i + '_**';
      }
      else {
         out5.innerHTML += i + '_*';
      }
   }
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов. 
// Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//


let out6 = document.querySelector('.out-6');

function t6() {
   let i6 = document.querySelector('.i-6').value;
   for (let i = 1; i <= i6; i++) {
      out6.innerHTML += '******<br>';
   }
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, 
// принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в out-7 числа от 
// введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1 0
// Задача решается с помощью цикла.
let out7 = document.querySelector('.out-7');

function t7() {
   let i7 = document.querySelector('.i-7').value;
   for (let i = i7; i >= 0; i--) {
      out7.innerHTML += i + ' ';
   }
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, 
// принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция t8, которая выводит в out-8 числа от 
// первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.
let out8 = document.querySelector('.out-8');
function t8() {
   let i81 = document.querySelector('.i-81').value;
   let i82 = document.querySelector('.i-82').value;
   for (let i = i81; i <= i82; i++) {
      out8.innerHTML += i + ' ';
   }
}

document.querySelector('.b-8').onclick = t8;


// ! Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от 
// меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один
let out9 = document.querySelector('.out-9');
function t9() {
   let i91 = document.querySelector('.i-91').value;
   let i92 = document.querySelector('.i-92').value;

   // вначале делаем проверку
   if (i91 > i92) {
      // Меняем местами значения
      let a = i92; // Записываем в новую переменную (а) меньшее значение i92
      i92 = i91; // Перезаписываеи меньшее значеиние i92 значением которое больше i91. Теперь и i92 равно i91
      i91 = a; // Перезаписываем значение i91 меньшим значением которое сохранили в a.
   }

   //а потом запускаем цикл. цикл - один
   for (let i = i91; i <= i92; i++) {
      out9.innerHTML += i + ' ';
   }
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 
// до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
let out10 = document.querySelector('.out-10');

function t10() {
   for (let i = 1950; i <= 2000; i = i + 2) {
      out10.innerHTML += i + ' ';
   }
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two

let out11 = document.querySelector('.out-11');

function t11() {
   let div11 = document.querySelectorAll('.div-11');
   console.log(div11);
   for (let i = 0; i < div11.length; i++) {
      console.log(div11[i]);
      out11.innerHTML += div11[i].innerHTML + ' ';
   }
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

let out12 = document.querySelector('.out-12');
function t12() {
   let div12 = document.querySelectorAll('.div-12');
   for (let i = 0; i < div12.length; i++) {
      div12[i].style.background = 'orange';
   }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
// получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, 
// второго - 2, третьего - 3...

function t13() {
   let i13 = document.querySelectorAll('.i-13');
   console.log(i13);
   for (let i = 0; i < i13.length; i++) {
      i13[i].value = i + 1;
      console.log(i13[i].value);
   }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
// получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с 
// помощью elem[i].checked.

let out14 = document.querySelector('.out-14');
function t14() {
   let i14 = document.querySelectorAll('.i-14');
   for (let i = 0; i < i14.length; i++) {
      if (i14[i].checked) {
         out14.innerHTML = i14[i].value;
      }
   }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность 
// в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i
let out15 = document.querySelector('.out-15');
function t15() {
   for (let i = 0; i <= 10; i++) {
      out15.innerHTML += (10 - i) + ' ' + i + ' '; // 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10

      // Последняя запись Конец
      // (10 - 10 = 0) + ' ' + 10 + ' ' // 0 10
      // (10 - 9 = 1) + ' ' + 9 + ' ' // 1 9
      // (10 - 8 = 2) + ' ' + 8 + ' ' // 2 8
      // (10 - 7 = 3) + ' ' + 7 + ' ' // 3 7
      // (10 - 6 = 4) + ' ' + 6 + ' ' // 4 6
      // (10 - 5 = 5) + ' ' + 5 + ' ' // 5 5
      // (10 - 4 = 6) + ' ' + 4 + ' ' // 6 4
      // (10 - 3 = 7) + ' ' + 3 + ' ' // 7 3
      // (10 - 2 = 8) + ' ' + 2 + ' ' // 8 2
      // (10 - 1 = 9) + ' ' + 1 + ' ' // 9 1
      // (10 - 0 = 10) + ' ' + 0 + ' ' // 10 0
      //Первая запись Начало
   }
}

document.querySelector('.b-15').onclick = t15;
