let a01 = 'Ivan';
let b01 = '37';
let z01 = 'Oven'
//Массив это способ представления данных в связаном виде (набор данных, объединенные данные)

let c01 = ['Иван', 37, 'Овен'];
// Все что внутри массива это значение.
// Чтобы обратится к значению используется индекс. Индекс начинает с 0.
// Индекс это порядковый номер элемента в массиве

//Можно создать пустой массив
let d01 = [];

console.log(c01[0]);
console.log(c01[1]);
// Элемента 5 нет
console.log(c01[5]);
// При обращении к несуществующему элементу выводится undefined

//выведим весь массив
console.log(c01);
// выводим длину массива length
console.log(c01.length);

//--------------------------------------------------------------
let zodiak = ['Kozerog', 1, 1, 19];
let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
console.log(zodiak);
console.log(man);
console.log('-------------Длина массива-------------');
console.log(zodiak.length);
console.log(man[4]);

console.log('-------------Если необходимо ЗАМЕНИТЬ имя Ivan в массиве man-------------');
// Если необходимо ЗАМЕНИТЬ имя 'Ivan' в массиве man 
man[0] = 'Sergey';
console.log(man);

console.log('-------------Как поменять местами значения в масиве-------------');
// Как поменять местами значения в масиве
let a02 = [1, 2, 3, 4];
console.log(a02);
// Создаем временную переменную куда кладем значения 0-го елемента [0];
let t02 = a02[0]; // Записали 1
// Записываем 4 индекс [3] на место 1 индекс [0]
a02[0] = a02[3];
a02[3] = t02;
console.log(a02);

console.log('-------------Как поменять местами значения в масиве незная колличества елементов массиве-------------');
// Как поменять местами значения в масиве незная колличества елементов массиве
let a03 = [1, 2, 3, 4];
console.log(a03);
// Создаем временную переменную куда кладем значения 0-го елемента [0];
let t03 = a03[0]; // Записали 1
// Записываем 4 индекс [3] на место 1 индекс [0]

a03[0] = a03[a03.length - 1];
// Если неставить -1 то будет обращение не к последнему элементу а к неизвестному. Из за того что индекс считает м 0.
a03[a03.length - 1] = t03;
console.log(a03);

// Как вывести массив на страницу

// Способ 1
// Если массив очень большой то будет нагружать комп так как дергает каждый раз страницу
for (let i = 0; i < a03.length; i++) {
   document.querySelector('.out-01').innerHTML += a03[i] + ' ';
}


//! Способ 2. Использовать этот способ
// Сперва записываем потом выводим на страницу
let out02 = ''; // Создаем пустую переменную
for (let i = 0; i < a03.length; i++) {
   // Выводим только четные
   if (a03[i] % 2 == 0) {
      out02 += a03[i] + '_ _';
   }
}
document.querySelector('.out-02').innerHTML = out02;

//! Как найти минимальный или максимальный елемент в массиве. Делается всегда одинаково
//Нахождения минимума отличается только знаком if (b02[i] < max) 
let b02 = [45, 2, 5, 23, 43, 1, 2, 6, 12];
let max = b02[0]; // 4  Сравниваем с первым елементом все остальные
for (let i = 0; i < b02.length; i++) {
   if (b02[i] > max) {
      max = b02[i];
   }
}
console.log('max = ' + max);

// Как найти сумму всех элементов массива
let sum01 = 0;
for (let i = 0; i < b02.length; i++) {
   sum01 = sum01 + b02[i];
}
console.log('sum = ' + sum01);


//!----------------------------------------------------------------------------------------

//! 10.1 Почему все тупят на массивах - ошибки учителя
//!!!!!
// Есть массив m = [7, 3, 21]. Умножьте каждый его элемент на 2, и выведите
// в .out. Вывод через пробел. Вывод по нажатию кнопки b-0.
// Задача решается циклом

// Необходимо изменить массив и вывести в первоначальном виде m = [14, 6, 42]

let out03 = document.querySelector('.out-03');
let m = [7, 3, 21];

function t1() {
   // for (let i = 0; i < m.length; i++) {
   //    out03.innerHTML += m[i] * 2 + ' '; //! Добавляется в массив строка из пробела
   // }
   //операции - изменение значений, структуры, кол-ва элементов
   let p = [];
   //!Операция. Здесь меняем данные неменяя структуры массива. 
   for (let i = 0; i < m.length; i++) {
      //p.push(m[i]* 2 + ' '); //! Добавляется в массив строка из пробела
      p[i] = m[i] * 2;
   }
   console.log(p);
   //! Вывод. Здесь делаем вывод на страницу через пробел неменяя cтруктуру самого массива
   for (let i = 0; i < m.length; i++) {
      //p.push(m[i]* 2 + ' '); //! Добавляется в массив строка из пробела
      out03.innerHTML += `${p[i] + ' '}`;
   }

}
document.querySelector('.b-0').addEventListener('click', t1);


//!----------------------------------------------------------------------------------------

//! 10.2 Удаляем дубликаты из массива по красоте. JavaScript

console.log('-------------10.2 Удаляем дубликаты из массива по красоте. JavaScript-------------');

const arr = [1, 2, 3, 4, 1, 5, 6, 1, 7, 2];
console.log(arr);

// Задача сделать этот массив без дубликатов

//! Способ 1 применение Set. Используем этот способ
// Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.

// let aq1 = new Set(arr); // получился набор
/*
Spread оператор [... ] – это три точки перед именем переменной (или константы), 
внутри определения объекта. Он раскладывает соответствующий объект 
внутри нового объекта. С его помощью можно получить только копию, 
он не может изменять существующие объекты.

Метод Array.from() создаёт новый экземпляр Array из массивоподобного 
или итерируемого объекта.
*/
// Spread оператор [... ]
// let aq1 = [...new Set(arr)]; // получился массив

// Метод Array.from() этод метод предпочтительный
let aq1 = Array.from(new Set(arr));
console.log(aq1);

//! Способ 2 применение filter(). Можно получить еще массив дубликатов
/*
Метод filter() создаёт новый массив со всеми элементами, прошедшими 
проверку, задаваемую в передаваемой функции.
*/
// Параметр item - тот элемент который перебирается в текущий момент
// Параметр index - номер элемента в массиве
let aq2 = arr.filter((item, index) => {
   return arr.indexOf(item) === index; // Удаляет дубликаты
   // return arr.indexOf(item) !== index; // Получаем массив дубликатов
})
console.log(aq2);

//! Способ 3 применение reduce()
/*
Метод reduce() применяет функцию reducer к каждому элементу 
массива (слева-направо), возвращая одно результирующее значение.

Возвращаемое значение
Вернётся новый массив с элементами, которые прошли проверку. 
Если ни один элемент не прошёл проверку, то будет возвращён пустой массив.

Описание
Метод filter() вызывает переданную функцию callback один раз для 
каждого элемента, присутствующего в массиве, и создаёт новый массив 
со всеми значениями, для которых функция callback вернула значение, 
которое может быть приведено к true.
*/
let aq3 = arr.reduce((result, item) => { //result- накапливаем данные; item - текущий элемент
   return result.includes(item) ? result : [...result, item];
}, []);
console.log(aq3);


//!-----------------------------------------------------------------------------------------

//!10.3 9 способов клонировать массив JavaScript

// Способ_0 
//(делает ссылку на массив но некопирует)
let aw0 = [1, 2, 5];
let bw0 = aw0;
aw0.push('test');

console.log('array aw0');
console.log(aw0);

console.log('array bw0');
console.log(bw0);


// Способ_1 
// Spread оператор [... ]. Скопировали и получили два разных массива
// получился массив Только для одномерных массивов. Для двухмерных будет некоректно срабатывать
// let aq4 = [1, 2, 5, [6, 7]];
//можно применять цыкд он срабатывает также как и оператор Spread вложенные массивы остаются по ссылке
let aw1 = [1, 2, 5];
// let bw1 = aw1;
let bw1 = [...aw1];
aw1.push('test');

console.log('array aw1');
console.log(aw1);

console.log('array bw1');
console.log(bw1);


// Способ_2 // Цикл
//можно применять цыкд он срабатывает также как и оператор Spread вложенные массивы остаются по ссылке
let aw2 = [1, 2, 5];
// let bw2 = aw2;
// aw2.push('test');
let bw2 = [];
for (let i = 0; i < aw2.length; i++) {
   bw2[i] = aw2[i];
}

console.log('array aw2');
console.log(aw2);

console.log('array bw2');
console.log(bw2);


// Способ_3 // Применим Map
//  Логика работы такаяже как и предыдущие способы. Простые норм а вложиные некопирует они будут по ссылке

let aw3 = [1, 2, 5, [6, 7]];

let bw3 = aw3.map(x => x);
aw3.push('test');
aw3[3].push(999);

console.log('array aw3');
console.log(aw3);

console.log('array bw3');
console.log(bw3);

// Способ_4 // Применим filter
//  Логика работы такаяже как и предыдущие способы. Простые норм а вложиные некопирует они будут по ссылке

let aw4 = [1, 2, 5, [6, 7]];

let bw4 = aw4.filter(() => true);
aw4.push('test');
aw4[3].push(999);

console.log('array aw4');
console.log(aw4);

console.log('array bw4');
console.log(bw4);

// Способ_5 // Применим reduce
//  Логика работы такаяже как и предыдущие способы. Простые норм а вложиные некопирует они будут по ссылке

let aw5 = [1, 2, 5, [6, 7]];

let bw5 = aw5.reduce((c, elem) => {
   c.push(elem);
   return c;
}, []);

aw5.push('test');
aw5[3].push(999);

console.log('array aw5');
console.log(aw5);

console.log('array bw5');
console.log(bw5);


// Способ_6 // Применим slice()
//  Логика работы такаяже как и предыдущие способы. Простые норм а вложиные некопирует они будут по ссылке

let aw6 = [1, 2, 5, [6, 7]];

let bw6 = aw6.slice();

aw6.push('test');
aw6[3].push(999);

console.log('array aw6');
console.log(aw6);

console.log('array bw6');
console.log(bw6);

// Способ_7 // Применим JSON. Все получчилочь
// Очень ресурснозатратный метод если много масивов
// Здесь получается записать в aw7. Но непрактичто если будут не цыфры а строки то ламает код.
let aw7 = [1, 2, 5, [6, 7]];

let bw7 = JSON.parse(JSON.stringify(aw7)); // Парсим и засовываем в строку

aw7.push('test');
aw7[3].push(999);

console.log('array aw7');
console.log(aw7);

console.log('array bw7');
console.log(bw7);


// Способ_8 // Конкатинация массивов
// Получаем клон массива но проблемы с вложеными массивами остались
let aw8 = [1, 2, 5, [6, 7]];

let bw8 = aw8.concat([]);

aw8.push('test');
aw8[3].push(999);

console.log('array aw8');
console.log(aw8);

console.log('array bw8');
console.log(bw8);


// Способ_9 // Конкатинация массивов
// Получаем клон массива но проблемы с вложеными массивами остались
let aw9 = [1, 2, 5, [6, 7]];

let bw9 = Array.from(aw9);

aw9.push('test');
aw9[3].push(999);

console.log('array aw9');
console.log(aw9);

console.log('array bw9');
console.log(bw9);

//! Все решается просто с помощью рекурсии


//!-----------------------------------------------------------------------------------------

//!10.4 Конвертер в римские числа. Что лучше 2 массива или 1 объект_ JavaScript

const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanValue = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

const romes = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 };

// Метод 1
// const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const romanValue = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function romanConventerOne(a) {
   let result = '';
   decimalValue.map((item, index) => {
      while (item <= a) {
         result += romanValue[index];
         a = a - item;
         // Просто вывод в консоль
         // console.table({
         //    'a': a + item,
         //    'item': item,
         //    'a = a - item': a,
         //    'result': result
         // });
         // debugger;
      }
   });
   return result;
}

document.querySelector('.b-01').onclick = () => {
   let num01 = +document.querySelector('.i-01').value;
   document.querySelector('.out-001').innerHTML = romanConventerOne(num01);
}


// Метод 2
// const romes = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 };

function romanConventerTwo(a) {
   let result = '';
  for (let key in romes) {
   while (romes[key] <= a) {
      result += key;
      a = a - romes[key]; 
   }
  }
   return result;
}

document.querySelector('.b-02').onclick = () => {
   let num01 = +document.querySelector('.i-02').value;
   document.querySelector('.out-002').innerHTML = romanConventerTwo(num01);
}


//!----------------------------------------------------------------------------------------------------

// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. 
// Вывод - по нажатию кнопки b-1

// let ar1 = // переменную обьявляем здесь!!!!
let out1 = document.querySelector('.out-1');
let ar1 = ['one', 2, 3, 'two', 5, true, 7, 8, false, 10];

function f1() {
   //ваш_элемент.innerHTML = ar1; // да так можно выводить!!!!
   out1.innerHTML = ar1;
   console.log(ar1);
}

document.querySelector('.b-1').onclick = f1;

// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. 
// Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

// let ar2 = // переменную обьявляем здесь!!!!
let out2 = document.querySelector('.out-2');
let ar2 = ['one', 2, 3, 'two', 5, true, 7, 8, false, 10];

function f2() {
   // Пример
   // let out = '';
   // for (let i = 0; i < ar2.length; i++) {
   //     out +=arr2[i]+' ';
   // }
   // document.querySelector('.out-2').innerHTML = out;

   //--------------------------------------------
   // Ришение 1
   // console.log(ar2);
   // let out2 = '';
   // for (let i = 0; i < ar2.length; i++) {
   //    out2 += ar2[i] + ' ';
   // }
   // document.querySelector('.out-2').innerHTML = out2;
   // console.log(out2);
   // console.log(ar2);
   //--------------------------------------------

   // Ришение 2
   //! Операция. Здесь меняем данные неменяя структуры массива. 
   let p2 = [];
   for (let i = 0; i < ar2.length; i++) {
      p2[i] = ar2[i];
   }
   console.log('p2-----', p2);

   //! Вывод. Здесь делаем вывод на страницу через пробел неменяя cтруктуру самого массива
   let out2 = '';
   for (let i = 0; i < ar2.length; i++) {
      out2 += p2[i] + ' ';
   }
   document.querySelector('.out-2').innerHTML = out2;
   console.log('out2-----', out2);
   console.log('ar2-----', ar2);
   console.log('p2-----', p2);
}

document.querySelector('.b-2').onclick = f2;

// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

// let ar3 =  // переменную обьявляем здесь!!!!
let out3 = document.querySelector('.out-3');
let ar3 = ['one', 2, 3, 'two', 5, true, 7, 8, false, 10];

function f3() {
   out3.innerHTML = ar3.length;
}

document.querySelector('.b-3').onclick = f3;

// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 9

// let ar4 =  // переменную обьявляем эту здесь!!!!
let out4 = document.querySelector('.out-4');
let ar4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function f4() {
   out4.innerHTML = ar4[0] + ' ' + ar4[3] + ' ' + ar4[8];
   // let t4 = [ar4[0], ar4[3], ar4[8]];
   // for (let i = 0; i < t4.length; i++) {
   //    out4.innerHTML += t4[i] + ' ';
   // }
}

document.querySelector('.b-4').onclick = f4;

// Task 5
//Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего 
// элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

// let ar5 =

let out5 = document.querySelector('.out-5');
let ar5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function f5() {

   out5.innerHTML = ar5[0] + ar5[2] + ar5[3];

   //    sum = 0;
   //    let t5 = [ar5[0], ar5[2], ar5[3]];
   //    for (let i = 0; i < t5.length; i++) {
   //       sum = sum + t5[i];
   // out5.innerHTML = 'sum = ' + sum;
   //    }
}

document.querySelector('.b-5').onclick = f5;

// Task 6
// Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. 
// Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

// let ar6 =

let out6 = document.querySelector('.out-6');
let ar6 = ['Alex', 'Skorp', 1, 12];

function f6() {

   for (let i = 0; i < ar6.length; i++) {
      out6.innerHTML += ar6[i] + '_';
   }

}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 
// 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на 
// страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! 
// Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7
let out7 = document.querySelector('.out-7');
let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
   ar7[7] = 'vietnam';
   ar7[6] = 'turkey';
   ar7[5] = 'italy';
   console.log(ar7);
   for (let i = 0; i < ar7.length; i++) {
      out7.innerHTML += ar7[i] + '_';
   }

}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) 
// элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. 
// Разделитель - дефис. В .out-8-1 выведите длину массива ar8.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8
let out8 = document.querySelector('.out-8');
let out81 = document.querySelector('.out-8-1');
let ar8 = [];

function f8() {
   ar8[3] = 3.14;
   ar8[4] = 17;
   ar8[6] = 5;
   console.log(ar8);
   for (let i = 0; i < ar8.length; i++) {
      out8.innerHTML += ar8[i] + '_';
   }
   out81.innerHTML = 'length = ' + ar8.length;
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента  - реализуйте 
// по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let out9 = document.querySelector('.out-9');
let ar9 = [100, 200, 300, 400, 700, 121];

function f9() {
   out9.innerHTML = ar9[ar9.length - 1];
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. 
// Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10
let out10 = document.querySelector('.out-10');
let ar10 = [100, 200, 300, 400, 700, 121];

function f10() {
   out10.innerHTML = ar10[1] + ar10[ar10.length - 1];
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) 
// элемент массива ar11 и выводит его в out-11. Разделитель - пробел.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let out11 = document.querySelector('.out-11');
let ar11 = [2, 3, 4, 5, 6, 7];

function f11() {
   let t = ar11[2];
   ar11[2] = ar11[4];
   ar11[4] = t;
   for (let i = 0; i < ar11.length; i++) {
      out11.innerHTML += ar11[i] + ',';
   }

}

document.querySelector('.b-11').onclick = f11;


// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент 
// массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент 
// вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12
let out12 = document.querySelector('.out-12');
let ar12 = ['test', 'west', 'list', 'class', 'best'];

function f12() {
   let t = ar12[0];
   ar12[0] = ar12[ar12.length - 1];
   ar12[ar12.length - 1] = t;
   for (let i = 0; i < ar12.length; i++) {
      out12.innerHTML += ar12[i] + ', ';
   }
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3
let out13 = document.querySelector('.out-13');
let ar13 = ['test', 'west', 'list', 'class', 'best'];

function f13() {
   for (let i = 0; i < ar13.length; i++) {
      out13.innerHTML += ar13.indexOf(ar13[i]) + ' ' + ar13[i] + ' ';
   }
}

document.querySelector('.b-13').onclick = f13;

/*
indexOf
Метод indexOf() возвращает индекс первого вхождения указанного значения в 
строковый объект String, на котором он был вызван, начиная с индекса fromIndex. 
Возвращает -1, если значение не найдено.

Синтаксис
str.indexOf(searchValue, [fromIndex])

*/


// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let out14 = document.querySelector('.out-14');
let ar14 = [1, 2, 3, 'hello', 66];

function f14() {
   for (let i = ar14.length - 1; i >= 0; i--) {
      out14.innerHTML += ar14[i] + ', ';
   }
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. 
// Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15
let out15 = document.querySelector('.out-15');
let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
   for (let i = 0; i < ar15.length; i++) {
      if (ar15[i] > 0) {
         out15.innerHTML += ar15[i] + ', ';
      }
   }
}

document.querySelector('.b-15').onclick = f15;

//! Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, 
//! нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. 
// Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, 
// а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let out16odd = document.querySelector('.out-16-odd');
let out16even = document.querySelector('.out-16-even');

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

function f16() {
   for (let i = 0; i < ar16.length; i++) {
      // if (ar16[i] % 2 == 0) {
      //    ar16_even = ar16[i];
      //    out16even.innerHTML += ar16[i]+', ';
      // } else {
      //    ar16_odd = ar16[i];
      //    out16odd.innerHTML += ar16[i]+', ';
      // }
      //-----------------------------------------
      // if (ar16[i] % 2 == 0) {
      //    ar16_even = ar16[i];
      //    out16even.innerHTML += ar16_even + ', ';
      // } else {
      //    ar16_odd = ar16[i];
      //    out16odd.innerHTML += ar16_odd + ', ';
      // }
      //-----------------------------------------
      //! Добавление в массив - по индексу, а не +=!!!!!.

      if (ar16[i] % 2 == 0) {
         ar16_even[ar16_even.length] = ar16[i];
         out16even.innerHTML = ar16_even;
         console.log(ar16_even);
      } else {
         ar16_odd[ar16_odd.length] = ar16[i];
         out16odd.innerHTML = ar16_odd;
         console.log(ar16_odd);
      }
   }
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. 
// Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17
let out17 = document.querySelector('.out-17');
let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function f17() {
   let t = ''; // переменная счетчик
   for (let i = 0; i < ar17.length; i++) {
      if (ar17[i] > 3) {
         t += ar17[i];
      }
   }
   out17.innerHTML = t.length;
}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18
let out18 = document.querySelector('.out-18');
let ar18 = [151, 24, 13, 78, 211, 4, 45, 67];

function f18() {
   let t = ar18[0];
   for (let i = 0; i < ar18.length; i++) {
      if (ar18[i] >= t) {
         t = ar18[i];
         out18.innerHTML = t;
      }
   }
}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19
let out19 = document.querySelector('.out-19');
let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

function f19() {
   let t = ar19[0];
   for (let i = 0; i < ar19.length; i++) {
      if (ar19[i] <= t) {
         t = ar19[i];
         out19.innerHTML = t;
      }
   }
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20
let out20 = document.querySelector('.out-20');

let ar20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
   let t = 0;
   for (let i = 0; i < ar20.length; i++) {
      t += ar20[i];
      out20.innerHTML = t;
   }
}

document.querySelector('.b-20').onclick = f20;