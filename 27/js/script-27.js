// PROMISE позволяет работать с асинхронными данными
// Объект Promise используется для отложенных и асинхронных вычислений.
//!https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
/*
Синтаксис
new Promise(executor);
new Promise(function(resolve, reject) { ... });
Copy to Clipboard
Параметры
executor
Объект функции с двумя аргументами resolve и reject. Функция executor получает оба аргумента и выполняется сразу, ещё до того как конструктор вернёт созданный объект. Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его. Обычно функция executor описывает выполнение какой-то асинхронной работы, по завершении которой необходимо вызвать функцию resolve или reject. Обратите внимание, что возвращаемое значение функции executor игнорируется.

Описание
Интерфейс Promise (промис) представляет собой обёртку для значения, неизвестного на момент создания промиса. Он позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными: вместо конечного результата асинхронного метода возвращается своего рода обещание (дословный перевод слова "промис") получить результат в некоторый момент в будущем.

Promise может находиться в трёх состояниях:

ожидание (pending): начальное состояние, не исполнен и не отклонён.
исполнено (fulfilled): операция завершена успешно.
отклонено (rejected): операция завершена с ошибкой.

Свойства
Promise.length
Значение свойства всегда равно 1 (количество аргументов конструктора).

Promise.prototype (en-US)
Представляет прототип для конструктора Promise.

Методы
Promise.all(iterable)
Ожидает исполнения всех промисов или отклонения любого из них.

Возвращает промис, который исполнится после исполнения всех промисов в iterable. В случае, если любой из промисов будет отклонён, Promise.all будет также отклонён.

Promise.allSettled(iterable)
Ожидает завершения всех полученных промисов (как исполнения так и отклонения).

Возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.

Promise.race(iterable)
Ожидает исполнения или отклонения любого из полученных промисов.

Возвращает промис, который будет исполнен или отклонён с результатом исполнения первого исполненного или отклонённого промиса из .iterable.

Promise.reject(reason)
Возвращает промис, отклонённый из-за reason.

Promise.resolve(value)
Возвращает промис, исполненный с результатом value.

Создание промиса
Объект Promise создаётся при помощи ключевого слова new и своего конструктора. Конструктор Promise принимает в качестве аргумента функцию, называемую "исполнитель" (executor function). Эта функция должна принимать две функции-колбэка в качестве параметров. Первый из них (resolve) вызывается, когда асинхронная операция завершилась успешно и вернула результат своего исполнения в виде значения. Второй колбэк (reject) вызывается, когда операция не удалась, и возвращает значение, указывающее на причину неудачи, чаще всего объект ошибки.

const myFirstPromise = new Promise((resolve, reject) => {
  // выполняется асинхронная операция, которая в итоге вызовет:
  //
  //   resolve(someValue); // успешное завершение
  // или
  //   reject("failure reason"); // неудача
});
Copy to Clipboard
Чтобы снабдить функцию функциональностью промисов, нужно просто вернуть в ней объект Promise:

function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
*/


// GET запрос с помощью fetch Promise
//Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его
let a = new Promise((resolve, reject) => {
   fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
      .then(data => {
         resolve(data.text());
      })
});
let b = new Promise((resolve, reject) => {
   fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=Alex')
      .then(data => {
         resolve(data.text());
      })
});
// Promise.all () позволяет работать с двумя промисами сразу
Promise.all([a, b]).then(value => {
   console.log(value);
   console.log(value[0]);
   console.log(value[1]);
})

// a.then(data => {
//    console.log(data); 
// })
// b.then(data => {
//    console.log(data); 
// })


//!---------------------------------------------------------------------------------

// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/
out1 = document.querySelector('.out-1');
function t1() {
   // GET запрос с помощью fetch Promise
   //Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его
   //resolve - решать; reject - отклонять;
   //fetch - принести, получить
   //then - тогда, затем, потом
   let a1 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
         .then(data => {
            resolve(data.text());
         })
   });
   //resolve - решать; reject - отклонять;
   //fetch - принести, получить
   //then - тогда, затем, потом
   let b1 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=Alex')
         .then(data => {
            resolve(data.text());
         })
   });
   // Promise.all () позволяет работать с двумя промисами сразу
   Promise.all([a1, b1]).then(value => {
      console.log(value);
      console.log(value[0]);
      console.log(value[1]);
      out1.innerHTML = value;
      // out1.innerHTML = value +'_'+ value[0] +'_'+ value[1];
   })
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;



// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/
out2 = document.querySelector('.out-2');
function t2() {
   // GET запрос с помощью fetch Promise
   //Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его
   //resolve - решать; reject - отклонять;
   //fetch - принести, получить
   //then - тогда, затем, потом
   let a2 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=3&num1=100&num2=200')
         .then(data => {
            resolve(data.text());
         })
   });
   //resolve - решать; reject - отклонять;
   //fetch - принести, получить
   //then - тогда, затем, потом
   let b2 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=4&num1=100&num2=200')
         .then(data => {
            resolve(data.text());
         })
   });
   // Promise.all () позволяет работать с двумя промисами сразу
   Promise.all([a2, b2]).then(value => {
      console.log(value);
      console.log(value[0]);
      console.log(value[1]);
      out2.innerHTML = value;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
*/

out3 = document.querySelector('.out-3');
function t3() {
   // GET запрос с помощью fetch Promise
   //Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его
   //resolve - решать; reject - отклонять;
   //fetch - принести, получить
   //then - тогда, затем, потом
   let a3 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=5')
         .then(data => {
            resolve(data.text());
         })
   });
   //resolve - решать; reject - отклонять;
   //fetch - принести, получить
   //then - тогда, затем, потом
   let b3 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=6&num1=100&num2=200')
         .then(data => {
            resolve(data.text());
         })
   });
   // Promise.all () позволяет работать с двумя промисами сразу
   Promise.all([a3, b3]).then(value => {
      console.log(value);
      console.log(value[0]);
      console.log(value[1]);
      out3.innerHTML = value;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/
out4 = document.querySelector('.out-4');
function t4() {
   // GET запрос с помощью fetch Promise
   //Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его
   //resolve - решать; reject - отклонять;
   //fetch - принести, получить
   //then - тогда, затем, потом
   let a4 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=7')
         .then(data => {
            resolve(data.text());
         })
   });
   //resolve - решать; reject - отклонять;
   //fetch - принести, получить
   //then - тогда, затем, потом
   let b4 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=8&year=2000')
         .then(data => {
            resolve(data.text());
         })
   });
   // Promise.all () позволяет работать с двумя промисами сразу
   Promise.all([a4, b4]).then(value => {
      console.log(value);
      console.log(value[0]);
      console.log(value[1]);
      out4.innerHTML = value;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;
// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/
/*
out5 = document.querySelector('.out-5');
function t5() {
   // GET запрос с помощью fetch Promise
   //Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его
   //resolve - решать; reject - отклонять;
   //fetch - принести, получить
   //then - тогда, затем, потом
   let a5 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
         .then(data => {
            resolve(data.text());
         })
   });
   //resolve - решать; reject - отклонять;
   //fetch - принести, получить
   //then - тогда, затем, потом
   let b5 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2')
         .then(data => {
            resolve(data.text());
         })
   });
   // Promise.all () позволяет работать с двумя промисами сразу
   Promise.all([a5, b5]).then(value => {
      console.log(value);
      console.log(value[0]);
      console.log(value[1]);
      out5.innerHTML = value;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;
*/

let out5 = document.querySelector('.out-5');
function t5() {
   // POST запрос с помощью fetch Promise
   let a5 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1', {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'           
      })
      .then(data => {
         resolve(data.text());
      })
   });

   let b5 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=Alex', {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'

      })
      .then(data => {
         resolve(data.text());
      })
   });
      // Promise.all () позволяет работать с двумя промисами сразу
      Promise.all([a5, b5]).then(value => {
         console.log(value);
         console.log(value[0]);
         console.log(value[1]);
         out5.innerHTML = value;
         // out1.innerHTML = value +'_'+ value[0] +'_'+ value[1];
      })
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;



// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/
out6 = document.querySelector('.out-6');
function t6() {
   // POST запрос с помощью fetch Promise
   //Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его
   let a6 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=3&num1=100&num2=200', {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'           
      })
      .then(data => {
         resolve(data.text());
      })
   });

   let b6 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=4&num1=100&num2=200', {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'

      })
      .then(data => {
         resolve(data.text());
      })
   });
      // Promise.all () позволяет работать с двумя промисами сразу
      Promise.all([a6, b6]).then(value => {
         console.log(value);
         console.log(value[0]);
         console.log(value[1]);
         out6.innerHTML = value;
         // out1.innerHTML = value +'_'+ value[0] +'_'+ value[1];
      })
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/
out7 = document.querySelector('.out-7');
function t7() {
   // POST запрос с помощью fetch Promise
   //Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его
   let a7 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=5', {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'           
      })
      .then(data => {
         resolve(data.text());
      })
   });

   let b7 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=6&num1=100&num2=200', {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'

      })
      .then(data => {
         resolve(data.text());
      })
   });
      // Promise.all () позволяет работать с двумя промисами сразу
      Promise.all([a7, b7]).then(value => {
         console.log(value);
         console.log(value[0]);
         console.log(value[1]);
         out7.innerHTML = value;
         // out1.innerHTML = value +'_'+ value[0] +'_'+ value[1];
      })
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;
// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/
out8 = document.querySelector('.out-8');
function t8() {
   // POST запрос с помощью fetch Promise
   //Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его
   let a8 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=7', {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'           
      })
      .then(data => {
         resolve(data.text());
      })
   });

   let b8 = new Promise((resolve, reject) => {
      fetch('http://unit27.promise/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=8&year=2000', {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'

      })
      .then(data => {
         resolve(data.text());
      })
   });
      // Promise.all () позволяет работать с двумя промисами сразу
      Promise.all([a8, b8]).then(value => {
         console.log(value);
         console.log(value[0]);
         console.log(value[1]);
         out8.innerHTML = value;
         // out1.innerHTML = value +'_'+ value[0] +'_'+ value[1];
      })
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;
