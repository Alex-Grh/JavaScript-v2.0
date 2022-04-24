let a = 6;
let b = "Hello";
console.log(a);
console.log(b);

let inputIn1 = document.querySelector(".input-in1");
let butTon1 = document.querySelector(".button1");
let div1 = document.querySelector(".out");

/*Чтобы устранить ошибку «Не удается установить свойство onclick со значением null», поместите тег сценария JS в конец тега body.
 Сценарий должен запускаться после создания элементов DOM.*/

butTon1.onclick = function () {
   // кнопка будет нажата
   console.log("Работает!1");
   // console.log(inputIn1.value); //то что введено в input
   let b = +inputIn1.value; //+ перевести в число
   console.log(b + 2);
   div1.innerHTML = b;
   inputIn1.value = "";
}

// Task 1
// Создайте две переменные a1 = 7 и b1 = 9. Выведите в консоль результа умножения a на b.
let a1 = 9;
let b1 = 3;
console.log(a1 * b1);

// Task 2
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
let c = 9;
let d = 3;
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
let e3 = 3;
let f3 = "Hello";
let result_e3f3 = (e3 + f3);
let div_e3f3 = document.querySelector(".e3f3");
div_e3f3.innerHTML = result_e3f3;

// Task 7
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
let e4 = 3;
let f4 = "Hello";
let result_e4f4 = (e4 * f4);
let div_e4f4 = document.querySelector(".e4f4");
div_e4f4.innerHTML = result_e4f4;

// Task 8
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let inputIn2 = document.querySelector(".input-in2");
let butTon2 = document.querySelector(".button2");
butTon2.onclick = function () {
   console.log("Работает!2");
}

// Task 9
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let inputIn3 = document.querySelector(".input-in3");
let butTon3 = document.querySelector(".button3");
let div3 = document.querySelector(".out3");

butTon3.onclick = function () {
   // кнопка будет нажата
   console.log("Работает!3");
   // console.log(inputIn3.value); //то что введено в input
   let b33 = +inputIn3.value; //+ перевести в число  
   div3.innerHTML = b33;
   inputIn3.value = "";
}

// Task 10
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let inputIn4 = document.querySelector(".input-in4");
let butTon4 = document.querySelector(".button4");
let div4 = document.querySelector(".out4");

butTon4.onclick = function () {
   // кнопка будет нажата
   console.log("Работает!4");
   // console.log(inputIn4.value); //то что введено в input
   let b44 = +inputIn4.value; //+ перевести в число
   console.log(b44 * 10);
   div4.innerHTML = b44;
   inputIn4.value = "";
}

// Task 11
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.
let inputIn5 = document.querySelector(".input-in5");
let butTon5 = document.querySelector(".button5");
let div5 = document.querySelector(".out5");

butTon5.onclick = function () {
   // кнопка будет нажата
   console.log("Работает!5");
   // console.log(inputIn5.value); //то что введено в input
   let b55 = inputIn5.value; //+ перевести в число
   console.log(b55 + 10);
   div5.innerHTML = b55 + 10;
   inputIn5.value = "";
}

// Task 12
/*Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. 
При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', 
где имя - имя пользователя и фамилия - введенная фамилия.*/
let inputIn6Name = document.querySelector(".input-name");
let inputIn6LastName = document.querySelector(".input-lastname");
let butTon6 = document.querySelector(".button6");
let div6 = document.querySelector(".out6");

butTon6.onclick = function () {
   // кнопка будет нажата
   console.log("Работает!6");
   // console.log(inputIn6.value); //то что введено в input
   let bName = inputIn6Name.value; //+ перевести в число
   let bLastName = inputIn6LastName.value; //+ перевести в число
   console.log("Hello," + " " + bName + " " + bLastName);
   div6.innerHTML = "Hello," + " " + bName + " " + bLastName;
   inputIn6Name.value = "";
   inputIn6LastName.value = "";
}

// Task 13
/*Создайте два input и кнопку. В input пользователь вводит числа. 
При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страниц */
let inputIn71 = document.querySelector(".input-in71");
let inputIn72 = document.querySelector(".input-in72");
let butTon7 = document.querySelector(".button7");
let div7 = document.querySelector(".out7");

butTon7.onclick = function () {
   // кнопка будет нажата
   console.log("Работает!7");
   // console.log(inputIn7.value); //то что введено в input
   let b71 = +inputIn71.value; //+ перевести в число
   let b72= +inputIn72.value; //+ перевести в число
   console.log(b71 + b72);
   div7.innerHTML = b71 + b72;
   inputIn71.value = "";
   inputIn72.value = "";
}

// Task 14
// Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello

let inputIn8 = document.querySelector("value");

inputIn8 = "Hello8";
inputIn8.innerHTML= "Hello8";
console.log(inputIn8);