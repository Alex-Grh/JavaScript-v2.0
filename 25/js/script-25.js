//! https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
/*
XMLHttpRequest это API, который предоставляет клиенту функциональность для 
обмена данными между клиентом и сервером. Данный API предоставляет простой 
способ получения данных по ссылке без перезагрузки страницы. Это позволяет 
обновлять только часть веб-страницы не прерывая пользователя. XMLHttpRequest 
используется в AJAX запросах и особенно в single-page приложениях.
*/
//XMLHttpRequest – это встроенный в браузер объект, который даёт возможность 
//делать HTTP-запросы к серверу без перезагрузки страницы.
/*
Обработчик события который вызывается всякий раз, когда изменяется состояние свойства readyState.
Свойство XMLHttpRequest.onreadystatechange содержит обработчик события, 
вызываемый когда происходит событие readystatechange (en-US), всякий раз 
когда свойство readyState запроса XMLHttpRequest изменяется. Колбэк-функция 
запускается из потока пользовательского интерфейса.
*/
/*	
Callback - функция, которая вызывается всякий раз, когда поле readyState 
меняет своё значение. Callback выполняется в потоке работы приложения.
*/
/*
response - Тело сущности запроса. Согласно полю responseType, может 
быть ArrayBuffer, Blob, Document, JavaScript объектом (для "json"), 
или строкой. Равно null если запрос не завершён или окончен с ошибкой.

responseText - Ответ на запрос в виде строки или null в случае если запрос 
не успешен или ответ ещё не получен.
*/


// GET запрос
let xhttp = new XMLHttpRequest();
let a = 0;
xhttp.onreadystatechange = function () {
   if (this.readyState == 4 && this.status == 200) {
      myFunction(this.responseText)
   }
}

xhttp.open('GET', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1', true)
xhttp.send();

function myFunction(data) {
   console.log('GET');
   a = data;
   // все манипуляции надо прописывать в этой функции
   console.log(data);
}
console.log(a); // здесь манипуляции ненадо использовать

//-------------------------------------------------------------------------------------------

// POST запрос
let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
   if (this.readyState == 4 && this.status == 200) {
      myFunction2(this.responseText)
   }
}

xhttp2.open('POST', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1', true)
xhttp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhttp2.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1')

function myFunction2(data) {
   console.log('POST');
   a = data;
   // все манипуляции надо прописывать в этой функции
   console.log(data);
}


// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
let out1 = document.querySelector('.out-1');
function t1() {
   // GET запрос
   let xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         myFunction(this.responseText)
      }
   }

   xhttp.open('GET', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1', true)
   xhttp.send();

   function myFunction(data) {
      console.log('GET');
      // все манипуляции надо прописывать в этой функции
      console.log(data);
      out1.innerHTML = data;
   }
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;


// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, 
сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция 
должна по нажатию b-2. */

let out2 = document.querySelector('.out-2');
function t2() {
   // GET запрос
   let xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         myFunction(this.responseText)
      }
   }
   xhttp.open('GET', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=Alex', true)
   xhttp.send();
   function myFunction(data) {
      console.log('GET');
      console.log(data);
      out2.innerHTML = data;
   }
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер 
вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */
let out3 = document.querySelector('.out-3');
function t3() {
   // GET запрос
   let xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         myFunction(this.responseText)
      }
   }
   xhttp.open('GET', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=3&num1=100&num2=200', true)
   xhttp.send();
   function myFunction(data) {
      console.log('GET');
      console.log(data);
      out3.innerHTML = data;
   }
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер 
вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth 
(ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

let out4 = document.querySelector('.out-4');
function t4() {
 // GET запрос
 let xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
       myFunction(this.responseText)
    }
 }
 xhttp.open('GET', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=4&num1=100&num2=200', true)
 xhttp.send();
 function myFunction(data) {
    console.log('GET');
    console.log(data);
    out4.innerHTML = data;
 }
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать 
параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна 
по нажатию b-5. */

let out5 = document.querySelector('.out-5');
function t5() {
 // GET запрос
 let xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
       myFunction(this.responseText)
    }
 }
 xhttp.open('GET', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=5', true)
 xhttp.send();
 function myFunction(data) {
    console.log('GET');
    console.log(data);
    out5.innerHTML = data;
 }
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер 
вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 
результат. Запускаться функция должна по нажатию b-6. */

let out6 = document.querySelector('.out-6');
function t6() {
 // GET запрос
 let xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
       myFunction(this.responseText)
    }
 }
 xhttp.open('GET', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=6&num1=100&num2=200', true)
 xhttp.send();
 function myFunction(data) {
    console.log('GET');
    console.log(data);
    out6.innerHTML = data;
 }
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте 
указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция 
должна по нажатию b-7. */

let out7 = document.querySelector('.out-7');
function t7() {
 // GET запрос
 let xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
       myFunction(this.responseText)
    }
 }
 xhttp.open('GET', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=7', true)
 xhttp.send();
 function myFunction(data) {
    console.log('GET');
    console.log(data);
    out7.innerHTML = data;
 }
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. 
Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр 
auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

let out8 = document.querySelector('.out-8');
function t8() {
 // GET запрос
 let xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
       myFunction(this.responseText)
    }
 }
 xhttp.open('GET', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=8&year=2000', true)
 xhttp.send();
 function myFunction(data) {
    console.log('GET');
    console.log(data);
    out8.innerHTML = data;
 }
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, 
сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). 
Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

let out9 = document.querySelector('.out-9');
function t9() {
 // GET запрос
 let xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
       myFunction(this.responseText)
    }
 }
 xhttp.open('GET', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=9&m=1&d=1&y=1', true)
 xhttp.send();
 function myFunction(data) {
    console.log('GET');
    console.log(data);
    out9.innerHTML = data;
 }
}

// ваше событие здесь!!!
document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать 
параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по 
нажатию b-10.*/

let out10 = document.querySelector('.out-10');
function t10() {
// POST запрос
let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
   if (this.readyState == 4 && this.status == 200) {
      myFunction2(this.responseText)
   }
}

xhttp2.open('POST', 'http://unit25.ajax/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1', true)
xhttp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhttp2.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1')

function myFunction2(data) {
   console.log('POST');
   a = data;
   // все манипуляции надо прописывать в этой функции
   console.log(data);
   out10.innerHTML = data;
}
}

// ваше событие здесь!!!
document.querySelector('.b-10').onclick = t10;

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер 
пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите 
в out-11 результат. Запускаться функция должна по нажатию b-11. */

let out11 = document.querySelector('.out-11');
function t11() {

}

// ваше событие здесь!!!
document.querySelector('.b-11').onclick = t11;

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер 
вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 
результат. Запускаться функция должна по нажатию b-12.*/

let out12 = document.querySelector('.out-12');
function t12() {

}

// ваше событие здесь!!!
document.querySelector('.b-12').onclick = t12;

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер 
вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth 
(ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

let out13 = document.querySelector('.out-13');
function t13() {

}

// ваше событие здесь!!!
document.querySelector('.b-13').onclick = t13;

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать 
параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по 
нажатию b-14.*/

let out14 = document.querySelector('.out-14');
function t14() {

}

// ваше событие здесь!!!
document.querySelector('.b-14').onclick = t14;

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action 
укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер 
вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите 
в out-15 результат. Запускаться функция должна по нажатию b-15. */

let out15 = document.querySelector('.out-15');
function t15() {

}

// ваше событие здесь!!!
document.querySelector('.b-15').onclick = t15;

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве 
action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. 
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. 
Запускаться функция должна по нажатию b-16. */

let out16 = document.querySelector('.out-16');
function t16() {

}

// ваше событие здесь!!!
document.querySelector('.b-16').onclick = t16;

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве 
action укажите 8. В качестве параметра по очереди укажите year равный году вашего 
рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать 
параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна 
по нажатию b-17. */

let out17 = document.querySelector('.out-17');
function t17() {

}

// ваше событие здесь!!!
document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве 
action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все 
сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать 
параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна 
по нажатию b-18. */

let out18 = document.querySelector('.out-18');
function t18() {

}

// ваше событие здесь!!!
document.querySelector('.b-18').onclick = t18;
