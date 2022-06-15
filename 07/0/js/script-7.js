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
return a + b;
}
document.querySelector(".b-3-1").onclick = function () {
   document.querySelector(".out-3-1").textContent = t3(3, 4);
}
document.querySelector(".b-3-2").onclick = function () {
   document.querySelector(".out-3-2").textContent = t3(5, 6);
}