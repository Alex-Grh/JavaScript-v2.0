/*
!String.prototype.split()
Сводка
Метод split() разбивает объект String на массив строк путём разделения строки указанной 
подстрокой.

Синтаксис
str.split([separator[, limit]])
Параметры
separator
Необязательный параметр. Указывает символы, используемые в качестве разделителя внутри 
строки. Параметр separator может быть как строкой, так и регулярным выражением. 
Если параметр опущен, возвращённый массив будет содержать один элемент со всей строкой. 
Если параметр равен пустой строке, строка str будет преобразована в массив символов.
limit
Необязательный параметр. Целое число, определяющее ограничение на количество найденных 
подстрок. Метод split() всё равно разделяет строку на каждом сопоставлении с разделителем 
separator, но обрезает возвращаемый массив так, чтобы он содержал не более limit элементов.
Описание
Метод split() возвращает новый массив.

Если разделитель separator найден, он удаляется из строки, а подстроки возвращаются 
в массиве. Если разделитель опущен, массив будет содержать только один элемент, состоящий 
из всей строки. Если разделитель является пустой строкой, строка str будет преобразована 
в массив символов.
*/
//! Метод split() применяется чтобы разбить строку и превратить в массив
// Строку можно разбить на массив с помощью метода split()

let a = 'hello, hi, mahai';
console.log(a);
console.log(a.split(',')); // это метод и необходимо указывать круглые скобки split()

let str = 'hello';
// let a01 = str.split(); // () без пробела и с пробелом (' ') вернет просто [hello]. Пререгнали строку в массив
let a01 = str.split(''); // добавим '' без пробела и получим ['h', 'e', 'l', 'l', 'o'] разбитие строки по элементам 
let a02 = str.split('', 3); // Можно указать ('',3) количество выводимых элементов 3 первых ['h', 'e', 'l'] используется редко
console.log(a01);
console.log(a02);

let str02 = 'hello hi world test';
let a03 = str02.split(' '); // может принимать нетолько пробел но и регулярное вырвжение ['hello', 'hi', 'world', 'test']
console.log(a03);

let str03 = 'hello, hi, world, test';
let a04 = str03.split(','); // укажем в качестве разделителя (',') получаем ['hello', ' hi', ' world', ' test']
console.log(a04);


//!-----------------------------------------------------------------------------------
/*
!Array.prototype.join()
Сводка
Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
Синтаксис
arr.join([separator])
Параметры
separator Необязательный
Определяет строку, разделяющую элементы массива. В случае необходимости тип разделителя 
приводится к типу Строка. Если он не задан, элементы массива разделяются запятой ','. 
Если разделитель - пустая строка, элементы массива ничем не разделяются в возвращаемой строке.
Возвращаемое значение
Строка, содержащая все элементы массива. Если arr.length == 0, то будет возвращена 
пустая строка.

Описание
Преобразует все элементы массива в строки и объединяет их в одну большую строку. 
Элемент массива с типом undefined или null преобразуется в пустую строку.
Примеры
Соединение массива четырьмя различными способами
В следующем примере создаётся массив a с тремя элементами, затем они четыре раза 
объединяются в строку: с использованием разделителя по умолчанию, запятой с пробелом, 
плюса, окружённого пробелами, и пустой строки.

var a = ['Ветер', 'Дождь', 'Огонь'];
var myVar1 = a.join();      // присвоит 'Ветер,Дождь,Огонь' переменной myVar1
var myVar2 = a.join(', ');  // присвоит 'Ветер, Дождь, Огонь' переменной myVar2
var myVar3 = a.join(' + '); // присвоит 'Ветер + Дождь + Огонь' переменной myVar3
var myVar4 = a.join('');    // присвоит 'ВетерДождьОгонь' переменной myVar4
*/

let b = [1, 2, 3];
console.log(b);
console.log(b.join('-'));

//!метод join() превращает массив в строку

let b02 = ['h', 'e', 'l', 'l', 'o'];
let c01 = b02.join() // если () получим h,e,l,l,o
let c02 = b02.join('') // если ('') получаем hello
let c03 = b02.join(' ') // если (' ') получаем h e l l o
let c04 = b02.join('-') // если ('-') получаем h-e-l-l-o
console.log(c01);
console.log(c02);
console.log(c03);
console.log(c04);


//!-----------------------------------------------------------------------------------
/*
!Array.prototype.forEach()
Интерактивный пример
Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

Синтаксис
arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);
Параметры
callback
Функция, которая будет вызвана для каждого элемента массива. Она принимает от 
одного до трёх аргументов:
currentValue
Текущий обрабатываемый элемент в массиве.
indexНеобязательный
Индекс текущего обрабатываемого элемента в массиве.
arrayНеобязательный
Массив, по которому осуществляется проход.
thisArg
Необязательный параметр. Значение, используемое в качестве this при вызове 
функции callback.
Возвращаемое значение
undefined.

Описание
Метод forEach() выполняет функцию callback один раз для каждого элемента, 
находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых 
или пропущенных элементов массива. Однако, она будет вызвана для элементов, 
которые присутствуют в массиве и имеют значение undefined.

Функция callback будет вызвана с тремя аргументами:

значение элемента (value)
индекс элемента (index)
массив, по которому осуществляется проход (array)
Примеры
Нет операции для неинициализированных значений (разреженные массивы)
const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach((element) => {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// комментарий: как вы видите пропущенное значение между 3 и 7 не вызывало функцию callback.
*/
// forEach невозвращает нового массива как map и filter он просто применяет функцию а как располагаете данные уже решаем сами
// forEach дает возможность перебора массива и преминения к нему функции
// forEach неизменяет предыдущий массив а просто манипулирует им и преминяем его к нужным нам элементам
let b01 = [8, 9, 7];
b01.forEach(function (elem, index) {
   console.log(index); // выводим индекс массива
   console.log(elem * 2); // выводим элемент массива
   console.log('--');
});
console.log(b01);

//! метод forEach относится к функция высшего порядка которая в виде аргумента принимает другую функцию
//! всегда принимает colbek function функцию обратного вызова
//! после того как переберем массив с ним можно делать все что угодно
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = [];
array.forEach(function (elem, index, arr) {  // принимает три параметра элемент, индекс и изначальный массив
   console.log(elem);
   newArray.push(elem += elem); // метод forEach применяет к каждому объекту функцию выполняет действие
   // return неработает вернуть результат получим undefined. Метод невозращает

});
console.log(newArray);

//! реальный пример применения forEach необходимо получить email

// есть список данных
const date = [
   {
      id: 1,
      name: 'Mario',
      age: 35,
      isActive: true,
      email: 'mario@gmail.com',
   },
   {
      id: 2,
      name: 'Ivan',
      age: 22,
      isActive: true,
      email: 'ivan@gmail.com',
   },
   {
      id: 3,
      name: 'Irina',
      age: 48,
      isActive: false,
      email: 'irina@gmail.com',
   },
   {
      id: 4,
      name: 'Egor',
      age: 26,
      isActive: true,
      email: 'egor@gmail.com',
   },
   {
      id: 5,
      name: 'Diana',
      age: 24,
      isActive: false,
      email: 'diana@gmail.com',
   },
]
// создаем пустой массив
const getEmail = [];
const getUserName = [];
// получим данные и переберем их
date.forEach(function (elem) {
   getEmail.push(elem.email)
   getUserName.push(elem.name)
});
console.log(getEmail);
console.log(getUserName);

//!----------------------------------------------------------------------------------
//!----------------------------------------------------------------------------------
//!----------------------------------------------------------------------------------

// Task 1 ============================================
/* <p>Дан массив a1 = [4,5,6,7,12,34,56,78,90,11] - с помощью forEach переберите 
массив и создайте новый массив a1_res куда добавьте элементы данного массива 
умноженные на 2. Действия должны запускаться при вызове функции t1.</p> */

let a1_res = [];

function t1() {
   let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
   a1.forEach(elem => {
      a1_res.push(elem * 2);
   });
   document.querySelector('.out-1').innerHTML = a1_res;
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/*  Дан массив a1 = [2,3,4,5,10,11,12] - с помощью forEach переберите массив и
 создайте новый массив a2_res куда добавьте элементы данного массива деленные на 2. 
 Действия должны запускаться при вызове функции t2.*/

let a2_res = [];

function t2() {
   let a1 = [2, 3, 4, 5, 10, 11, 12];
   a1.forEach(function (elem) {
      a2_res.push(elem / 2);
   });
   document.querySelector('.out-2').innerHTML = a2_res;
}

document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  Дан массив a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'] - с помощью forEach 
переберите массив и создайте новый массив a3_res куда добавьте элементы данного 
массива являющиеся числом. Запускаться решение должно при вызове функции t3.*/

let a3_res = [];

function t3() {
   let a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'];
   a3.forEach(function (elem) {
      if (typeof elem == 'number') {
         a3_res.push(elem);
      }
   });
   document.querySelector('.out-3').innerHTML = a3_res;
}

document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  На странице созданы 3 span.task-4 c атрибутом data. С помощью forEach 
переберите их и добавьте атрибуты в массив a4_res  Запускаться решение должно 
при вызове функции t4.*/

let a4_res = [];

function t4() {
   let a4 = document.querySelectorAll('.task-4');
   // console.log(a4);
   a4.forEach(function (elem) {
      let attr = elem.getAttribute('data');
      a4_res.push(attr);
   });
   document.querySelector('.out-4').innerHTML = a4_res;
}
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  На странице созданы 3 p.task-5 c атрибутом data. С помощью forEach переберите 
их и добавьте событие клик. Напишите функцию t5, которая будет запускаться при 
клике и добавлять атрибут data элемента, по которому кликнули в массив a5_res.*/

let a5_res = [];

function t5() {
   a5_res.push(this.getAttribute('data'));
   console.log(a5_res);
   document.querySelector('.out-5').innerHTML = a5_res;
}

document.querySelectorAll('.task-5').forEach(elem => {
   elem.onclick = t5;
});


// Task 6 ============================================
/*  Дана строка str6='helloworld' - преобразуйте ее в массив и присвойте a6_res. 
Выведите на страницу. Запускаться решение должно при вызове функции t6. */

let a6_res = [];

function t6() {
   let str6 = 'helloworld';
   console.log(str6);
   a6_res = str6.split();
   console.log(a6_res);
   document.querySelector('.out-6').innerHTML = a6_res;
}

document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  Дана строка str7='hello world hi mazai' - преобразуйте ее в массив и разбейте 
по словам. Причем слова не должны содержать пробелов и присвойте a6_res. выведите 
на страницу.  Запускаться решение должно при вызове функции t7. */

let a7_res = [];

function t7() {
   let str7 = 'hello world hi mazai';
   console.log(str7);
   a7_res = str7.split(' ');
   console.log(a7_res);
   document.querySelector('.out-7').innerHTML = a7_res;
}

document.querySelector('.b-7').onclick = t7;


// Task 8 ============================================
/*  Дан массив a8 = [1,2,66,77,15] - преобразуйте ее в строку. Разделитель - дефис. 
Результат присвойте a8_res. Запускаться решение должно при вызове функции t8. */

let a8_res;

function t8() {
   let a8 = [1, 2, 66, 77, 15];
   console.log(a8);
   a8_res = a8.join('-');
   console.log(a8_res);
   document.querySelector('.out-8').innerHTML = a8_res;
}

document.querySelector('.b-8').onclick = t8;

// Task 9 ============================================
/*  Дан массив a9 = [[hi, mahai], [test, best]] - преобразуйте его в строку. 
Разделитель - дефис. Результат присвойте a9_res. Запускаться решение должно при 
вызове функции t9. Допускается лишний дефис в конце строки!!! */


//! Вар 1
let a9_res = '';

function t9() {
   let a9 = [['hi', 'mahai'], ['test', 'best']];
   let a91 = a9.join().split(",");
   console.log(a91);
   a9_res = a91.join('-');
   console.log(a9_res);

   document.querySelector('.out-9').innerHTML = a9_res;
}

document.querySelector('.b-9').onclick = t9;


//! Вар 2
// let a9_res = '';

// function t9() {
//    let a9 = [['hi', 'mahai'], ['test', 'best']];
//    let a91 = [];
//    for (let i = 0; i < a9.length; i++) {
//            for (let k = 0; k < a9[i].length; k++) {
//         a91.push(a9[i][k]);       
//       }
//    }
//    console.log(a91);
//          a9_res = a91.join('-');
//          console.log(a9_res);

//    document.querySelector('.out-9').innerHTML = a9_res;
// }

// document.querySelector('.b-9').onclick = t9;


//! Вар 3
// let a9 = [[`hi`, `mahai`], [`test`, `best`]];
// let a9_res = ``;
// function t9() {

//     a9_res = ``;
//     for (let item of a9) {
//         for (let i = 0; i < item.length; i++) {
//             a9_res += item[i] + '-'
//         }
//     } 
//     console.log(a9_res);
// }

// document.querySelector('.b-9').onclick = t9;



/*
//! Перебор двумерных массивов 1
let a011 = [4, 5, 6]; // простой массив
let b011 = [     // двумерный массив
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
];
console.log(b011);


// Перебор двумерных массивов

for (let i = 0; i < b011.length; i++) {
   // console.log(b011[i]);
   let c011 = b011[i]; //сначала c01 массив [1, 2, 3], [4, 5, 6], [7, 8, 9],
   for (let k = 0; k < c011.length; k++) {
      console.log(c011[k]); // выводит массив в виде [1, 2, 3, 4, 5, 6, 7, 8, 9]
   }
}
*/

/*
//! Перебор двумерных массивов 2
var arr = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
 ];
 var arr2 = [];
 for (i = 0; i < arr.length; i++) {
   for (j = 0; j < arr[i].length; j++) {
     arr2.push(arr[i][j]);
     //console.log(arr[i][j]);
   }
 }
 
 console.log(arr2);

 */

/*
//! Перебор двумерных массивов 3

var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(arr.join().split(","));

*/

// Task 10 ============================================
/*  Дан массив a10 = {name: ivan, age: 15, sex: 1, id: 45} - преобразуйте его в query 
строку ( так передаются GET параметры). Найдите описание что такое query строка 
самостоятельно. Разделитель - амперсанд (&). Результат присвойте a10_res. Запускаться 
решение должно при вызове функции t10. Допускается лишний амперсанд в конце строки!!! */

/*
Одним из способов передачи данных в приложение представляет использование параметров 
строки запроса. Строка запроса (query) - фактически это часть запрошенного адреса, 
которая идет после знака вопроса. Например, в запросе 
http://localhost:3000/about?id=3&name=Tome часть id=3&name=Tome представляет строку запроса.
*/

// //!Вар 1
let a10_res = '';
function t10() {
   let a10 = { name: 'ivan', age: 15, sex: 1, id: 45 }
   a10_res = '?';
   for (let key in a10) {
      a10_res += key + '=' + a10[key] + '&';
   }
   console.log(a10_res);// ?name=ivan&age=15&sex=1&id=45&
   document.querySelector('.out-10').innerHTML = a10_res; //?name=ivan&age=15&sex=1&id=45&
}

document.querySelector('.b-10').onclick = t10;

// !Вар 2
// let a10_res = '';
// function t10() {
//    let a10 = {
//       name: 'ivan',
//       age: 15,
//       sex: 1,
//       id: 45
//    };
//    a10_res = new URLSearchParams(a10);
//       //   console.log(params.toString());
//       //   console.log('/a9?' + params);
//    console.log(a10_res.toString()); // name=ivan&age=15&sex=1&id=45
//    document.querySelector('.out-10').innerHTML = a10_res; //name=ivan&age=15&sex=1&id=45
// }

// document.querySelector('.b-10').onclick = t10;


//!Вар 3
// let a10_res = '';

// function t10() {
//    let a10 = {
//       name: 'ivan',
//       age: 15,
//       sex: 1,
//       id: 45
//    }
//    for (key in a10) {
//       a10_res += key + '=' + a10[key] + '&';
//    }
//    console.log(a10_res); //name=ivan&age=15&sex=1&id=45&
//    document.querySelector('.out-10').innerHTML = a10_res; //name=ivan&age=15&sex=1&id=45&
// }

// document.querySelector('.b-10').onclick = t10;

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!  https://ruseller.com/lessons.php?rub=32&id=2780
!  Извлечение GET параметров через JavaScript
Параметры в URL могут содержать кучу полезной информации: данные о товаре, пользовательские настройки, идентификатор партнёра. В этой статье посмотрим как через JS можно извлечь данную информацию.

Итак, начнём!

Извлечение параметров из URL
Скажем, у нас есть следующий URL:

http://example.com/?product=shirt&color=blue&newuser&size=m

А вот функция с помощью которой мы сможем извлечь параметры из URL:


function getAllUrlParams(url) {

  // извлекаем строку из URL или объекта window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // объект для хранения параметров
  var obj = {};

  // если есть строка запроса
  if (queryString) {

    // данные после знака # будут опущены
    queryString = queryString.split('#')[0];

    // разделяем параметры
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // разделяем параметр на ключ => значение
      var a = arr[i].split('=');

      // обработка данных вида: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // передача значения параметра ('true' если значение не задано)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // преобразование регистра
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // если ключ параметра уже задан
      if (obj[paramName]) {
        // преобразуем текущее значение в массив
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // если не задан индекс...
        if (typeof paramNum === 'undefined') {
          // помещаем значение в конец массива
          obj[paramName].push(paramValue);
        }
        // если индекс задан...
        else {
          // размещаем элемент по заданному индексу
          obj[paramName][paramNum] = paramValue;
        }
      }
      // если параметр не задан, делаем это вручную
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}



Теперь мы сможем извлекать параметры следующим образом:

getAllUrlParams().product; // 'shirt'

getAllUrlParams().color; // 'blue'

getAllUrlParams().newuser; // true

getAllUrlParams().nonexistent; // undefined

getAllUrlParams('http://test.com/?a=abc').a; // 'abc'


Особенности
Наша функция рассчитана на работу с URL где параметры разделены знаком & согласно спецификации W3C. Однако существуют и другие варианты, где параметры разделяются знаками ; или &.
Наша функция работает в случае отсутствия знаков равенства или пустых значений параметров.
Дублирующие параметры преобразуются в массив.
Принципы работы
Функция извлекает строку запроса: между знаками ? и #.

Если представлена строка запроса, то будет анализироваться именно она. В противном случае извлекаем URL объекта window.


var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
Далее создаём объект куда будем складывать параметры.


var obj = {};
Начинаем разбор строки запроса. Отсекаем всё что находится после знака #.


queryString = queryString.split('#')[0];
Далее разделяем параметры.


var arr = queryString.split('&');
В результате получим массив следующего вида:


['product=shirt', 'color=blue', 'newuser', 'size=m']
Далее проходимся по элементам данного массива, разделяем ключи и значения.


var a = arr[i].split('=');
Далее нам нужно научить функции работать с дублирующимися параметрами или массивами:


colors=red&colors=green&colors=blue
colors[]=red&colors[]=green&colors[]=blue
colors[0]=red&colors[2]=green&colors[5]=blue
Для начала задаём индекс по умолчанию: undefined. Далее разбираем значения между []. Записываем индекс если он задан.


var paramNum = undefined;
var paramName = a[0].replace(/\[\d*\]/, function(v){
  paramNum = v.slice(1,-1);
  return '';
});
Далее задаём значение параметра. Если значение отсутствует, то записываем true.


var paramValue = typeof(a[1])==='undefined' ? true : a[1];
Далее мы преобразуем параметры и значения к нижнему регистру чтобы избежать непредвиденных ситуаций:


paramName = paramName.toLowerCase();

paramValue = paramValue.toLowerCase();
Если название текущего параметра уже задано, то помещаем его в массив:


if (obj[paramName]) { 

  if (typeof obj[paramName] === 'string') {
    obj[paramName] = [obj[paramName]];
  }
  if (typeof paramNum === 'undefined') {
    obj[paramName].push(paramValue);
  }
  else {
    obj[paramName][paramNum] = paramValue;
  }
}
Если же такой параметр ещё не задан, то просто напросто передаём значение.


obj[paramName] = paramValue;
Если в URL были переданы закодированные символы, то мы из декодируем:


// test=a%20space 

var original = getAllUrlParams().test; // 'a%20space'

var decoded = decodeURIComponent(original); // 'a space'
Поздравляем! Теперь вы знаете как извлечь параметры из URL.

Итог
Данная функция пригодится в большинстве случаев. Если же вам нужно обрабатывать URL с другими разделителями, то можете свободно поменять код.

Так же существует немало специализированных плагинов: jQuery URL или Medialize URI.js.
*/