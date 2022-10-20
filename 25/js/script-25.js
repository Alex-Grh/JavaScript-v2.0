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