window.addEventListener('storage', function (e) {
   console.log('change');
   document.querySelector('.out').textContent = localStorage.getItem('b1');
});

// LocaL Storage - хранилище данных которое присутствует в браузере
localStorage.setItem('data', 5) //Ключ (Key) = 'data' / Значение  (Value)  = 5
console.log(localStorage.getItem('data'));

const a = [3, 4, 5];
// localStorage.setItem('a', a); // даем ключ 'a' и имя массива a
localStorage.setItem('a', JSON.stringify(a));
let b = localStorage.getItem('a'); // получаем его в переменную b
b = JSON.parse(b);
console.log(b);
console.log(b[0]);
// Проверим тип полученных данных
console.log(typeof b); // Получаем string
console.log(b[1]);
// Когда сохраняем массив в localStorage он преобразуется в строку
// Чтобы получить массив необходимо преобразовать в JSON строку

// Тоже самое будет если работать с массивом ассициативным
const c = {
   hello: 5,
   k: 2,
   4: 'hi'
};
// localStorage.setItem('a', a); // даем ключ 'a' и имя массива a
localStorage.setItem('c', JSON.stringify(c));
let d = localStorage.getItem('c'); // получаем его в переменную b
d = JSON.parse(d);
console.log(d);
// Проверим тип полученных данных
console.log(typeof d); // Получаем string

//localStorage можно делать еорзину  интернет магазина. 
// Получаем возможность манипулировать данными с другой страницы.
// Подьзователь изменил корзину на одной странице а поменялось на всех
// Получаем возможность связывать страницы через такое взаемодействие localStorage
// Очистка remuve перезаписать localStorage.clear();




// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. 
Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
   localStorage.setItem('5', 11);
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. 
Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */
a2 = [7, 6, 5];
function t2() {
   localStorage.setItem('a2', a2);
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 
в формате ключ пробел значение перенос строки.  */
// let out3 = document.querySelector('.out-3');
// function t3() {
//    let out = '';
// localStorage.setItem('a2',JSON.stringify(a2));
// let b3 = localStorage.getItem('a2'); // получаем его в переменную b3
// b3 = JSON.parse(b3);
// console.log(b3);
// for (let key in b3) {
//    out += `${key} ${b3[key]}<br>`;
//  }
//  out3.innerHTML = out;
// }

// // ваше событие здесь!!!
// document.querySelector('.b-3').onclick = t3;

function t3() {
   let a3 = localStorage.getItem('a2');
   a3 = JSON.parse(a3);
   let out = '';
   for (let item in a3) {
      out += `${item} ${a3[item]} <br>`
   }
   document.querySelector('.out-3').innerHTML = out;
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. 
Ключ a4. Проверьте что происходит при повторном вызове функции. 
Запускается ф-я по кнопкуе b-4.*/
a4 = {
   hello: 'world',
   hi: 'mahai'
};
function t4() {
localStorage.setItem('a4', JSON.stringify(a4));
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. 
Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
let a5 = localStorage.getItem('a4');
a5 = JSON.parse(a5);
let out = '';
for (let item in a5) {
   out += `${item} ${a5[item]} <br>`
}
document.querySelector('.out-5').innerHTML = out;
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
   localStorage.clear();
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. 
Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. 
Массив должен сохраняться в LS с ключем a7.*/
let a7 = [];
function t7() {
let i7 = document.querySelector('.i-7').value;
a7.push(i7);
console.log(a7);
localStorage.setItem('a7', JSON.stringify(a7));
document.querySelector('.i-7').value = '';//чистит строку после ввода числа
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;