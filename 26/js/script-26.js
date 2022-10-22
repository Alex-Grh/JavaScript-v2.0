/*
https://learn.javascript.ru/fetch

Fetch
JavaScript может отправлять сетевые запросы на сервер и подгружать новую информацию по мере необходимости.

Например, мы можем использовать сетевой запрос, чтобы:

Отправить заказ,
Загрузить информацию о пользователе,
Запросить последние обновления с сервера,
…и т.п.
Для сетевых запросов из JavaScript есть широко известный термин «AJAX» (аббревиатура от Asynchronous JavaScript And XML). XML мы использовать не обязаны, просто термин старый, поэтому в нём есть это слово. Возможно, вы его уже где-то слышали.

Есть несколько способов делать сетевые запросы и получать информацию с сервера.

Метод fetch() — современный и очень мощный, поэтому начнём с него. Он не поддерживается старыми (можно использовать полифил), но поддерживается всеми современными браузерами.

Базовый синтаксис:

let promise = fetch(url, [options])
url – URL для отправки запроса.
options – дополнительные параметры: метод, заголовки и так далее.
Без options это простой GET-запрос, скачивающий содержимое по адресу url.

Браузер сразу же начинает запрос и возвращает промис, который внешний код использует для получения результата.

Использование Fetch
https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. 
Он также предоставляет глобальный метод fetch() (en-US), который позволяет легко и логично 
получать ресурсы по сети асинхронно.
*/

// GET запрос
let xhttp = new XMLHttpRequest();
let a = 0;
xhttp.onreadystatechange = function () {
   if (this.readyState == 4 && this.status == 200) {
      myFunction(this.responseText)
   }
}

xhttp.open('GET', 'http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1', true)
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

xhttp2.open('POST', 'http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1', true)
xhttp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhttp2.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1')

function myFunction2(data) {
   console.log('POST');
   a = data;
   // все манипуляции надо прописывать в этой функции
   console.log(data);
}

//-------------------------------------------------------------------------------------------
// GET запрос с помощью fetch
fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
   .then(data => {
      console.log(data);
      // data.text().then(data2 => {
      //    console.log(data2);
      // })
      return data.text();
   })
   .then(data => {
      console.log(data);
   });

//-------------------------------------------------------------------------------------------
// POST запрос с помощью fetch

fetch('http://unit26.fetch/index2.php', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   // mode: 'cors', // no-cors, *cors, same-origin
   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
   // credentials: 'same-origin', // include, *same-origin, omit
   headers: {
      //'Content-Type': 'application/json'
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   // redirect: 'follow', // manual, *follow, error
   // referrerPolicy: 'no-referrer', // no-referrer, *client
   // body: JSON.stringify(data) // body data type must match "Content-Type" header
   body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
})
   //  return await response.json(); // parses JSON response into native JavaScript objects
   // .then(response => response.json());
   .then(response => response.text())
   .then(response => {
      console.log(response);
   });


//!------------------------------------------------------------------------------------------

// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна 
по нажатию b-1. */
let out1 = document.querySelector('.out-1');
function t1() {
   // GET запрос с помощью fetch
   fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
      .then(data => {
         console.log(data);
         return data.text();
      })
      .then(data => {
         console.log(data);
         out1.innerHTML = data;
      });
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. 
Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 
результат. Запускаться функция должна по нажатию b-2. */
let out2 = document.querySelector('.out-2');
function t2() {
   // GET запрос с помощью fetch
   fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=Alex')
      .then(data => {
         console.log(data);
         return data.text();
      })
      .then(data => {
         console.log(data);
         out2.innerHTML = data;
      });
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. 
Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. 
Запускаться функция должна по нажатию b-3. */
let out3 = document.querySelector('.out-3');
function t3() {
   // GET запрос с помощью fetch
   fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=3&num1=100&num2=200')
      .then(data => {
         console.log(data);
         return data.text();
      })
      .then(data => {
         console.log(data);
         out3.innerHTML = data;
      });
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. 
Если все сделано верно, сервер вернет случайное число в заданном диапазоне. 
Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. 
Запускаться функция должна по нажатию b-4. */
let out4 = document.querySelector('.out-4');
function t4() {
   // GET запрос с помощью fetch
   fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=4&num1=100&num2=200')
      .then(data => {
         console.log(data);
         return data.text();
      })
      .then(data => {
         console.log(data);
         out4.innerHTML = data;
      });
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время 
и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. 
Запускаться функция должна по нажатию b-5. */
let out5 = document.querySelector('.out-5');
function t5() {
   // GET запрос с помощью fetch
   fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=5')
      .then(data => {
         console.log(data);
         return data.text();
      })
      .then(data => {
         console.log(data);
         out5.innerHTML = data;
      });
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. 
Если все сделано верно, сервер вернет большее число. Не забывайте указывать 
параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция 
должна по нажатию b-6. */
let out6 = document.querySelector('.out-6');
function t6() {
   // GET запрос с помощью fetch
   fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=6&num1=100&num2=200')
      .then(data => {
         console.log(data);
         return data.text();
      })
      .then(data => {
         console.log(data);
         out6.innerHTML = data;
      });
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку 
на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите 
в out-7 результат. Запускаться функция должна по нажатию b-7. */
let out7 = document.querySelector('.out-7');
function t7() {
   // GET запрос с помощью fetch
   fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=7')
      .then(data => {
         console.log(data);
         return data.text();
      })
      .then(data => {
         console.log(data);
         out7.innerHTML = data;
      });
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 8. В качестве параметра по очереди укажите year 
равный году вашего рождения. Если все правильно сервер вернет ваш возраст. 
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. 
Запускаться функция должна по нажатию b-8.*/
let out8 = document.querySelector('.out-8');
function t8() {
   // GET запрос с помощью fetch
   fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=8&year=2000')
      .then(data => {
         console.log(data);
         return data.text();
      })
      .then(data => {
         console.log(data);
         out8.innerHTML = data;
      });
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;

// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. 
Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте 
указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться 
функция должна по нажатию b-9. */
let out9 = document.querySelector('.out-9');
function t9() {
   // GET запрос с помощью fetch
   fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=9&m=1&d=1&y=1')
      .then(data => {
         console.log(data);
         return data.text();
      })
      .then(data => {
         console.log(data);
         out9.innerHTML = data;
      });
}

// ваше событие здесь!!!
document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. 
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. 
Запускаться функция должна по нажатию b-10.
*/
let out10 = document.querySelector('.out-10');
function t10() {
// POST запрос с помощью fetch
fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
})
   .then(response => response.text())
   .then(response => {
      console.log(response);
      out10.innerHTML = response;
   });
}

// ваше событие здесь!!!
document.querySelector('.b-10').onclick = t10;


// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. 
Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте 
указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться 
функция должна по нажатию b-11. */
let out11 = document.querySelector('.out-11');
function t11() {
// POST запрос с помощью fetch
fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=Alex', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
})
   .then(response => response.text())
   .then(response => {
      console.log(response);
      out11.innerHTML = response;
   });
}

// ваше событие здесь!!!
document.querySelector('.b-11').onclick = t11;

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. 
Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр 
auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна 
по нажатию b-12.*/
let out12 = document.querySelector('.out-12');
function t12() {
// POST запрос с помощью fetch
fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=3&num1=100&num2=200', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
})
   .then(response => response.text())
   .then(response => {
      console.log(response);
      out12.innerHTML = response;
   });
}

// ваше событие здесь!!!
document.querySelector('.b-12').onclick = t12;

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. 
Если все сделано верно, сервер вернет случайное число в заданном диапазоне. 
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. 
Запускаться функция должна по нажатию b-13.*/
let out13 = document.querySelector('.out-13');
function t13() {
// POST запрос с помощью fetch
fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=4&num1=100&num2=200', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
})
   .then(response => response.text())
   .then(response => {
      console.log(response);
      out13.innerHTML = response;
   });
}

// ваше событие здесь!!!
document.querySelector('.b-13').onclick = t13;

// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время 
и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 
результат. Запускаться функция должна по нажатию b-14.*/
let out14 = document.querySelector('.out-14');
function t14() {
// POST запрос с помощью fetch
fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=5', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
})
   .then(response => response.text())
   .then(response => {
      console.log(response);
      out14.innerHTML = response;
   });
}

// ваше событие здесь!!!
document.querySelector('.b-14').onclick = t14;

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. 
Если все сделано верно, сервер вернет большее число. Не забывайте указывать 
параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция 
должна по нажатию b-15. */
let out15 = document.querySelector('.out-15');
function t15() {
// POST запрос с помощью fetch
fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=6&num1=100&num2=200', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
})
   .then(response => response.text())
   .then(response => {
      console.log(response);
      out15.innerHTML = response;
   });
}

// ваше событие здесь!!!
document.querySelector('.b-15').onclick = t15;

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку 
на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите 
в out-16 результат. Запускаться функция должна по нажатию b-16. */
let out16 = document.querySelector('.out-16');
function t16() {
// POST запрос с помощью fetch
fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=7', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
})
   .then(response => response.text())
   .then(response => {
      console.log(response);
      out16.innerHTML = response;
   });
}

// ваше событие здесь!!!
document.querySelector('.b-16').onclick = t16;

// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 8. В качестве параметра по очереди укажите year равный 
году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте 
указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться 
функция должна по нажатию b-17. */
let out17 = document.querySelector('.out-17');
function t17() {
// POST запрос с помощью fetch
fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=8&year=2000', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
})
   .then(response => response.text())
   .then(response => {
      console.log(response);
      out17.innerHTML = response;
   });
}

// ваше событие здесь!!!
document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. 
Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте 
указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться 
функция должна по нажатию b-18. */
let out18 = document.querySelector('.out-18');
function t18() {
// POST запрос с помощью fetch
fetch('http://unit26.fetch/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=9&m=1&d=1&y=1', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
})
   .then(response => response.text())
   .then(response => {
      console.log(response);
      out18.innerHTML = response;
   });
}

// ваше событие здесь!!!
document.querySelector('.b-18').onclick = t18;