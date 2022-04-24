let a = 6;
let b = "Hello";
console.log(a);
console.log(b);

let inputIn = document.querySelector(".input-in");
let button = document.querySelector("button");
let div = document.querySelector(".out");

// Чтобы устранить ошибку «Не удается установить свойство onclick со значением null», поместите тег сценария JS в конец тега body. Сценарий должен запускаться после создания элементов DOM.

button.onclick = function () {
   // кнопка будет нажата
   console.log("Работает!");
   // console.log(inputIn.value); //то что введено в input
   let b = +inputIn.value; //+ перевести в число
   console.log(b + 2);
   div.innerHTML = b;
   inputIn.value = "";
}

// Task 1
// Создайте две переменные a1 = 7 и b1 = 9. Выведите в консоль результа умножения a на b.
let a1 = 7;
let b1 = 9;
console.log(a1 * b1);

// Task 2
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
let c = 7;
let d = 9;
let result_cd = (c / d);
let div_cd = document.querySelector(".cd");
div_cd.innerHTML = result_cd;

// Task 3
// Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
let e = 3;
let f = 5;
let result_ef = (e + f);
let div_ef = document.querySelector(".ef");
div_ef.innerHTML = result_ef;

// Task 4
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
let e1 = "3";
let f1 = 5;
let result_e1f1 = (e1 + f1);
let div_e1f1 = document.querySelector(".e1f1");
div_e1f1.innerHTML = result_e1f1;

// Task 5
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
let e2 = 3;
let f2 = 0;
let result_e2f2 = (e2 / f2);
let div_e2f2 = document.querySelector(".e2f2");
div_e2f2.innerHTML = result_e2f2;

// Task 6
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.