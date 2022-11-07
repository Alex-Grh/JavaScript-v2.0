let a = 6;
let b = 'Hello';
console.log(a);

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out-0');

button.onclick = function () {
   console.log('Работает!!!!');
   // console.log(inputIn.value); // value - то, что введено в input 
   let b = +inputIn.value; //Чтобы переобразовать строку в число поставим +
   console.log(b + 10);
   div.innerHTML = b;
   inputIn.value = '';  // Как очистить строку

   //! Мы манипулируем свойствами объекта (выбрать объект button в console (Elements) - в правой части выбрать вкладку Properties)
   //! Находим все его свойства button допустим onclock и манипулируем ими
   //! Также для div свойство innerHTML, а для input свойства value
}


//------------------------------------------------------------------------------------

// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a1 = 7;
let b1 = 9;
console.log(a1 * b1);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления 
// c на d.
let c2 = 7;
let d2 = 9;
document.querySelector('.out-2').innerHTML = c2 / d2;
// document.querySelector('.out-2').textContent = 

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат 
// сложения e + f.
let e3 = 3;
let f3 = 5;

document.querySelector('.out-3').textContent = e3 + f3;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат 
// сложения e1 + f1. Объясните разницу.
let e4 = '3';
let f4 = 5;

document.querySelector('.out-4').textContent = e4 + f4;

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат 
// деления e2 на f2.
let e5 = 3;
let f5 = 0;

document.querySelector('.out-5').textContent = e5 / f5;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 
// результат сложения двух переменных.
let e6 = 3;
let f6 = 'Hello'

document.querySelector('.out-6').textContent = e6 + f6;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 
// результат умножения двух переменных.
let e7 = 3;
let f7 = 'Hello';

document.querySelector('.out-7').textContent =  e7 * f7;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит 
// в консоль то, что пользователь ввел в input.
let i8 = document.querySelector('.i-8');
let out8 = document.querySelector('.out-8');
function t8() {
   let i81 = i8.value;
console.log(i81);
out8.innerHTML = i81;
i8.value = '';
}

document.querySelector('.b-8').onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит 
// на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let i9 = document.querySelector('.i-9');
let out9 = document.querySelector('.out-9');

function t9() {
let i91 = i9.value;
out9.innerHTML = i91;
i9.value = '';
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит 
// на страницу число, которое ввел пользователь умноженное на 10.

let i10 = document.querySelector('.i-10');
let out10 = document.querySelector('.out-10');

function t10() {
let i101 = i10.value;
out10.innerHTML = i101 * 10;
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит 
// на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.
let i11 = document.querySelector('.i-11');
let out11 = document.querySelector('.out-11');
function t11() {
let i111 = i11.value;
out11.innerHTML = i111 + 10;
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит 
// имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 
// строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let i121 = document.querySelector('.i-12_1');
let i122 = document.querySelector('.i-12_2');
let out12 = document.querySelector('.out-12');

function t12() {
let i121_1 = i121.value;
let i122_2 = i122.value;
out12.innerHTML = "Hello" +' '+ i121_1 +' '+ i122_2;
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки 
// выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let i131 = document.querySelector('.i-13_1');
let i132 = document.querySelector('.i-13_2');
let out13 = document.querySelector('.out-13');

function t13() {
let i131_1 = i131.value;
let i132_1 = i132.value;
out13.innerHTML = +i131_1 + +i131_1;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value 
// на 'Hello'.

// document.querySelector('.i-14').value = 

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

// let y = 
// y.style.border = 

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

function t16() {

}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t17() {


}

document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t18() {

}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

function t19() {

}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

function t20() {

}

document.querySelector('.b-20').onclick = t20;