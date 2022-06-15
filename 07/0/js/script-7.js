// Task 0
let f0 = document.querySelector(".f-0");//кнопка
function one() {
console.log("Work");
}
// f0.onclick = one; // one без круглых скобок

//Анонимная функция. У нее нет имени. Можно использовать один раз.
f0.onclick = function () {
   console.log("Hello");
}
//Аналог (один из способов) анонимной функции это стрелочная функция
f0.onclick = () => {
   console.log("Hello1");
}


function two() {
   console.log("work 2222");
   return 54;
}
two(); 
console.log(1 + two());

let a = 8;
let b = 9;
function multi() {
   console.log(a * b);
   return a * b;
}
multi()
let c1 = multi();
let c2 = 10 * multi();
console.log (c1, c2);

function multi2 (x = 9, y = 8) { //можно задавать параметры по умолчанию. Срабатывают когда незаданно других значений
   return x * y;
   // Все что ниже return срабатывать небудет
}
console.log(multi2(4, 5));
console.log(multi2(20, 5));
console.log(multi2(20, a));
console.log(multi2()); // срабатывают параметры по умолчанию
console.log(multi2(10)); //х = 10 второй по умолчанию y = 8

// сделать анонимную функцию и стрелочную f01
//анонимная функция
document.querySelector(".f-01").onclick = function(){
   console.log("+++++++")
};
//стрелочная функция
document.querySelector(".f-01").onclick = ()=> {
   console.log("arrow")
   console.log("+++++++")
};

// Сокращение в стрелочных функциях
// Анонимная функция
// function(a01, b01) {

// }
// Запишем ее стрелочной функцией
(a01, b01) => {

}
// Запишем ее стрелочной функцией если только один параметр а можно упустить скобки
a01 => {
   
}

// Task 1
// Напишите функцию t1, которая при нажатии кнопки выводит в out - 1 переменную a1.
let out1 = document.querySelector(".out-1");
let a1 = 8;
function t1() {
out1 .innerHTML = a1;
}

document.querySelector('.b-1').onclick = t1;

// Task 2.
// Изменим задачу 1. Сейчас она только выводит переменную в заранее 
// заданный блок.Давайте сделаем так, чтобы функция, была более гибкой.
// Пусть теперь функция t2 возвращает переменную a2.Поскольку 
// функция возвращает переменную, то имя функции со скобками(вызов функции) 
// можно встраивать в выражения.Обратите внимание, как изменяется 
// вызов функции теперь.
let a2 = 8;
function t2() {
   return a2
}
document.querySelector(".b-2").onclick = function(){
   document.querySelector(".out-2").textContent = t2()
}

// Task 3.
// Наша предыдущая функция, сильно все еще зависима от внешних переменных.
// Давайте сделаем ее более универсальной.Пусть функция t3 принимает 2 
// параметра и выводит их произведение.Допишите код функции так, чтобы она 
// возвращала произведение двух чисел, переданных ей в качестве параметра a, b.
// Протестируем функцию на двух примерах, с помощью кнопок b-3-1 и b-3-2.
function t3(a, b) {
return a +" "+ b;
}
document.querySelector(".b-3-1").onclick = function () {
   document.querySelector(".out-3-1").textContent = t3(3, 4);
}
document.querySelector(".b-3-2").onclick = function () {
   document.querySelector(".out-3-2").textContent = t3(5, 6);
}

// Task 4
// Напишите функцию t4 которая принимает ваш год рождения  и 
// вычисляет ваш возраст. 
function t4(year) {
return 2022 - year;
}
document.querySelector(".b-4").onclick = function () {
   document.querySelector(".out-4").textContent = t4(1983);
}
// Task 5
// Напишите функцию t5, которая принимает ваше имя в 
// качестве параметра и возвращает строку Hello name, 
// где name - принятое в качестве параметра имя.
function t5(yourName) {
return "Hello " + yourName;
}
document.querySelector(".b-5").onclick = function() {
   document.querySelector(".out-5").textContent = t5("Alex")
}

// Task 6
// Напишите функцию t6, которая принимает 2 числа и возвращает 
// случайное целое число от первого до второго принятого параметра.

function t6(a, b) {
   return Math.floor(Math.random() * (b - a + 1) ) + a;
}
document.querySelector(".b-6").onclick = function () {
   document.querySelector(".out-6").textContent = t6(1, 7);
}

// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в 
// формате rgb(x, y, z)(строка).Где x, y, z - случайные числа 
// в диапазоне[0, 255]. 

function t7() {
   return `rgb(${t6(0, 255)}, ${t6(0, 255)}, ${t6(0, 255)})`  //....допишите сами
}
document.querySelector(".b-7").onclick = function() {
   document.querySelector(".out-7").style.background = t7();
}

// Task 8
// Напишите функцию t8, которая принимает строку в качестве параметра 
// и возвращает результат с очищенными пробелами в начале и вконце 
// строки.Т.е.принимает _hello_(где знак _ символизирует пробел), 
// а возвращает hello.Для удаления пробелов - используйте trim.

