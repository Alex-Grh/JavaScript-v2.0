
const one = document.querySelector('.one');

// Как добавить CSS свойства

one.style.width = '150px';
one.style.paddingBottom = '40px';
console.log(one.style);

//Как присвоить класс

one.classList.add('two'); // Таким способом можно добавлять любые CSS классы
one.classList.add('two', 'three'); // Добавим несколько классов одновременно

// Как удалить класс
one.classList.remove('three');

//  Получим кнопку
const togg1 = document.querySelector('.toggle');

togg1.onclick = function () {
   this.classList.toggle('three');
}

// Атрибуты кнопки ('.toggle') это style, content....
// Перед атрибутами должна быть приставка data.
// Можно создавать атрибуты и читать

// ---Читаем атрибут data класса one со значение privet (data = "privet")---
console.log(one.getAttribute('data'));

// Читаем атрибут href ссылки link / Берет первую попавшеюся ссылку
console.log(document.querySelector('link').getAttribute('href'));

// Чтобы получить вторую ссылку необходимо поставить querySelectorAll и индекс необходимой ссылки ('link')[1]
console.log(document.querySelectorAll('link')[1].getAttribute('href'));

// ---Создаем атрибут data-num класса one со значением 6 (data-num = "6")---
one.setAttribute('data-num', 6);

// Что дает возможность самому добавлять (создавать) атрибуты
// Задача необходимо посчитать стоимость бензина

let gas = document.querySelectorAll('.gas');// получаем массив кнопок
//вешаем событие
for (let i = 0; i < gas.length; i++) {
   gas[i].onclick = function () {
      // получаем input значения что вводит пользователь
      let gallons = document.querySelector('.gallons').value;
      // получаем стоимость
      let amount = this.getAttribute('data');
      console.log(gallons * amount);
   }
}

// Создаем елементы. Например добавим елемент div
let a011 = document.createElement('div');
// добавляем текст в созданный елемент div
a011.innerHTML = 'Hello';
//добавляем класс в созданный елемент div
a011.classList.add('one-1');

console.log(a011);

// Элемент создан но его нет на странице
// Добавляем елемент на страницу с методом для добавления appendChild
// Нужен елемент куда мы будем его добавлять создадим <div class="test"></div>

document.querySelector('.test').appendChild(a011);

// Можно добавить на клик изменение елемента или удаления
a011.onclick = function () {
   alert('Hello');
}


//!-----------------------------------------------------------------------------------


//  Task 1
// Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 
// ширину 200px, высоту 40px.
let out1 = document.querySelector('.out-1');

function f1() {
out1.style.width = '150px';
// out1.style.height = '40px';
out1.style.paddingBottom = '40px';
}

document.querySelector('.b-1').onclick = f1;

//  Task 2
// По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.
let out2 = document.querySelector('.out-2');

function f2() {
out2.classList.add('bg-2');
}

document.querySelector('.b-2').onclick = f2;


//  Task 3
// По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3.
let out3 = document.querySelector('.out-3');

function f3() {
out3.classList.remove('bg-3');
}

document.querySelector('.b-3').onclick = f3;

//  Task 4
// По нажатию кнопки b-4 запускайте функцию f4, которая делает toggle класса bg-4 
// для блока out-4.
let out4 = document.querySelector('.out-4');

function f4() {
out4.classList.toggle('bg-4');
}

document.querySelector('.b-4').onclick = f4;


//  Task 5
// По нажатию b-5 запускайте функцию f5, которая проверяет наличие класса bg-4 у 
// блока out-4 (да, именно bg-4 у out-4 ). Результат - true или false, выводите в out-5.
let out5 = document.querySelector('.out-5');

function f5() {
if (out4 == document.querySelector('.bg-4')){
   out5.innerHTML = true;
} else {
   out5.innerHTML = false;
}
}

document.querySelector('.b-5').onclick = f5;


//  Task 6
// По нажатию b-6 запускайте функцию f6, которая выводит в out-6 количество 
// параграфов с классом p-6.
let out6 = document.querySelector('.out-6');
let p6 = document.querySelectorAll('.p-6');

function f6() {
   out6.innerHTML = p6.length;
}

document.querySelector('.b-6').onclick = f6;


//  Task 7
// По нажатию кнопки b-7 запускайте функцию f7, которая присваивает 
// блокам out-7 класс .bg-7. Обратите внимание, что данных блоков больше одного, 
// следовательно нужен цикл.

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
// блокам out-8 класс .bg-8. Обратите внимание, что данных блоков больше одного, 
// следовательно нужен цикл.

let blocks8 = document.querySelectorAll('.out-8');

function f8() {
   //внутри цикла blocks8[i].classList....
   for (let i = 0; i < blocks8.length; i++) {
      blocks8[i].classList.toggle('bg-8');
   }
}

document.querySelector('.b-8').onclick = f8;


//  Task 9
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-9 событие 
// клик. По клику должна выполняться функция f9. Функция, должна добавлять 
// класс bg-9 тому out-9 на котором кликнули.

function f9() {
   //this.classList...  // все решается одной строкой
   this.classList.add('bg-9');
}

let div9 = document.querySelectorAll('.out-9');

for (let i = 0; i < div9.length; i++) {
   div9[i].onclick = f9;
}


//  Task 10
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-10 
// событие клик. По клику должна выполняться функция f10. Функция, должна 
// делать toggle класса bg-10 тому out-10 на котором кликнули.

//let div10 = тут получите все out-10
let out10 = document.querySelectorAll('.out-10');

function f10() {
this.classList.toggle('bg-10');
}
// а тут цикл, похожий на предыдущее задание


for (let i = 0; i < out10.length; i++) {
   out10[i].onclick = f10;
}


//  Task 11
// Добавьте кнопку .b-11, которая запускает функцию f11. 
// Функция создает через createElement div c текстом 25 и добавляет его 
// через append в out-11.
/*
Метод append
Метод append позволяет вставить в конец какого-либо элемента другой элемент. 
Параметром метод принимает элемент, как правило созданный через createElement, 
либо строку. Можно добавить сразу несколько элементов или строк, перечислив 
их через запятую.

Синтаксис
родитель.append(элемент или строка)
Пример 
Давайте создадим абзац, установим ему текст и поместим на страницу в конец 
блока #parent:
let parent = document.querySelector('#parent');

let p = document.createElement('p');
p.innerHTML = '!';

parent.append(p);
*/

let out11 = document.querySelector('.out-11');

function f11() {
let div11 = document.createElement('div');
div11.innerHTML = '25';
out11.append(div11);
}

document.querySelector('.b-11').onclick = f11;

//  Task 12
// Добавьте кнопку .b-12, которая запускает функцию f12. Функция 
// создает через createElement div c текстом 12 и добавляет ему класс bg-12. 
// Созданный div добавляется в out-12.
let out12 = document.querySelector('.out-12');

function f12() {
let div12 = document.createElement('div');
div12.innerHTML = '12';
div12.classList.add('bg-12');
out12.append(div12);
}

document.querySelector('.b-12').onclick = f12;

//  Task 13
// Добавьте кнопку .b-13, которая запускает функцию f13. Функция создает 
// через createElement div c текстом pushMe и добавляет ему класс bg-13. 
// Также, созданному div добавляется событие onclick, по которому выполняется 
// функция f13_1. Созданный div добавляется в out-13.

let out13 = document.querySelector('.out-13');

function f13() {
let div13 = document.createElement('div');
div13.innerHTML = 'pushMe';
div13.classList.add('bg-13');
div13.onclick = f13_1;
out13.append(div13);
}

function f13_1() {
   document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}


document.querySelector('.b-13').onclick = f13;

//  Task 14
// Добавьте кнопку .b-14, которая запускает функцию f14. 
// Функция создает через createElement div c текстом 14 и добавляет ему 
// класс bg-14. Созданный div добавляется в out-14 с помощью prepend.
/*
Метод prepend
Метод prepend позволяет вставить в начало какого-либо элемента другой элемент. Параметром метод принимает элемент, как правило созданный через createElement, либо строку. Можно добавить сразу несколько элементов или строк, перечислив их через запятую.

Синтаксис
родитель.prepend(элемент или строка)
Пример 
Давайте создадим абзац, установим ему текст и поместим на страницу в начало блока #parent:

let parent = document.querySelector('#parent');

let p = document.createElement('p');
p.innerHTML = '!';

parent.prepend(p);
*/

let out14 = document.querySelector('.out-14');

function f14() {
let div14 = document.createElement('div');
div14.innerHTML = '14';
div14.classList.add('bg-14');
out14.prepend(div14);
}

document.querySelector('.b-14').onclick = f14;

//  Task 15
// Добавьте кнопку .b-15, которая запускает функцию f15. Функция создает 
// через createElement div c текстом 15 и добавляет ему класс bg-15. 
// Созданный div добавляется в out-15 с помощью before.

/*
.before()
Вставляет контент ПЕРЕД каждым выбранным элементом.
.before( content [, content] 
   Перед выбранными элементами будет добавлен content, который может быть 
   задан html, объектом jQuery, DOM-объектом.
*/

let out15 = document.querySelector('.out-15');

function f15() {
let div15 = document.createElement('div');
div15.innerHTML = '15';
div15.classList.add('bg-15');
out15.before(div15);
}

document.querySelector('.b-15').onclick = f15;

//  Task 16
// Добавьте кнопку .b-16, которая запускает функцию f16. Функция создает 
// через createElement div c текстом 16 и добавляет ему класс bg-16. 
// Созданный div добавляется в out-16 с помощью after.

/*
.after()
Вставляет контент ПОСЛЕ каждого выбранного элемента.
.after( content [, content] )
Cразу после выбранных элементов будет добавлен content, который может быть 
задан html, объектом jQuery, DOM-объектом.
*/

function f16() {

}

document.querySelector('.b-16').onclick = f16;

//  Task 17
// Добавьте кнопку .b-17, которая запускает функцию f17. Функция создает 
// через createElement div c текстом 17 и добавляет ему класс bg-17. 
// Созданный div заменяет  out-17 с помощью replaceWith.

/*
Метод replaceWith
Метод .replaceWith() заменяет одни элементы другими.

См. метод replaceAll, который также заменяет одни элементы другими.

См. также урок манипулирование элементами страницы через jQuery для более полного понимания.

Синтаксис
Параметром метода может служить текст (возможно с тегами), DOM элемент или объект jQuery:

$(что заменить).replaceWith(чем заменить)
Выбранные элементы будут заменены на содержимое, заданное текстом, который возвратит пользовательская функция. Функция вызывается отдельно, для каждого из выбранных элементов:

$(селектор).replaceWith(function(){})
Примеры
Пример 
Давайте заменим все абзацы с классом .www на <div>!!!</div>:


$('p.www').replaceWith('<div>!!!</div>');

*/

function f17() {

}

document.querySelector('.b-17').onclick = f17;

//  Task 18
// Добавьте кнопку .b-18, которая запускает функцию f18. Функция с 
// помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.

function f18() {

}

document.querySelector('.b-18').onclick = f18;

//  Task 19
// Добавьте кнопку .b-19, которая запускает функцию f19. Функция с 
// помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит 
// в out-19 через пробел. Обратите внимание, что элементов p-19 больше одного.

function f19() {

}

document.querySelector('.b-19').onclick = f19;

//  Task 20
// Добавьте кнопку .b-20, которая запускает функцию f20. Функция с 
// помощью setAttribute присваивает атрибут title="go" в div.out-20.

function f20() {

}

document.querySelector('.b-20').onclick = f20;