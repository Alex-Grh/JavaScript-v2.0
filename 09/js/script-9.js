const one = document.querySelector(".one");
one.style.width = "150px";
one.style.paddingBottom = "40px";

console.log(one.style);
one.classList.add('two', 'three');// Добавляем любые CSS класы в файл JS
one.classList.remove("three");

const toggle = document.querySelector(".toggle");

toggle.onclick = function() {
   this.classList.toggle("three");
}

// Атрибуты data
console.log(one.getAttribute("data"));
// console.log(document.querySelector('link').getAttribute('href'));
console.log(document.querySelectorAll('link')[1].getAttribute('href'));

one.setAttribute("data-num", 6);

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
   gas[i].onclick = function () {
      let gallons = document.querySelector('.gallons').value;
      let amount = this.getAttribute('data');
      console.log(gallons * amount);
      }

}

let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add = ('one');
a.onclick = function () {
   alert('hello');
}
document.querySelector('.test').appendChild(a);
console.log(a); 

//  Task 1
// Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает
//  блоку .out-1 ширину 200px, высоту 40px.

let out1 = document.querySelector('.out-1');

function f1() {
   out1.style.width = '200px';
   // out1.style.height = '40px';
   out1.style.paddingBottom = '40px';
}
document.querySelector('.b-1').onclick = f1;

//  Task 2
// По нажатию кнопки b-2 запускайте функцию f2, которая присваивает 
// блоку out-2 класс .bg-2.

let out2 = document.querySelector('.out-2');

function f2() {
out2.classList.add('bg-2');
}
document.querySelector('.b-2').onclick = f2;

//  Task 3
// По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у 
// блока out-3 класс .bg-3.
let out3 = document.querySelector('.out-3');

function f3() {
out3.classList.remove('bg-3');
}
document.querySelector('.b-3').onclick = f3;

//  Task 4
// По нажатию кнопки b-4 запускайте функцию f4, которая делает 
// toggle класса bg-4 для блока out-4.

let out4 = document.querySelector('.out-4');

function f4() {
   out4.classList.toggle('bg-4');
}
document.querySelector('.b-4').onclick = f4;

//  Task 5
// По нажатию b-5 запускайте функцию f5, которая проверяет наличие 
// класса bg-4 у блока out-4 (да, именно bg-4 у out-4 ). Результат - true 
// или false, выводите в out-5.

let out5 = document.querySelector('.out-5');
let out51 = "";

function f5() {
if (out4 == document.querySelector('.bg-4')){
   out5.innerHTML = true;
}else {
   out5.innerHTML = false;
}
}
document.querySelector('.b-5').onclick = f5;

//  Task 6
// По нажатию b-6 запускайте функцию f6, которая выводит в out-6 
// количество параграфов с классом p-6.

let out6 = document.querySelector('.out-6');

function f6() {
out6.innerHTML = document.querySelectorAll('.p-6').length;
}
document.querySelector('.b-6').onclick = f6;

//  Task 7
// По нажатию кнопки b-7 запускайте функцию f7, которая присваивает 
// блокам out-7 класс .bg-7. Обратите внимание, что данных блоков 
// больше одного, следовательно нужен цикл.

let blocks7 = document.querySelectorAll('.out-7');

function f7() {
   //внутри цикла blocks7[i].classList....
   for (let i = 0; i < blocks7.length; i++) {
      blocks7[i].classList.add('bg-7');
   }
}

document.querySelector('.b-7').onclick = f7;

//  Task 8
// По нажатию кнопки b-8 запускайте функцию f8, которая делает toggle 
// блокам out-8 класс .bg-8. Обратите внимание, что данных блоков больше 
// одного, следовательно нужен цикл.

let blocks8 = document.querySelectorAll('.out-8');

function f8() {
    //внутри цикла blocks8[i].classList....
}

document.querySelector('.b-8').onclick = f8;



