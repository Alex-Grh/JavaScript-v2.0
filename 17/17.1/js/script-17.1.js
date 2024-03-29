//! 17 JavaScript v2.0 Изучаем map, filter

/*
!Сводка
Метод map() создаёт новый массив с результатом вызова указанной функции 
для каждого элемента массива.

!Синтаксис
const new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Возвращает элемент для new_array
}[, thisArg])
*/

/*
!Примеры
Пример: отображение массива чисел на массив квадратных корней
Следующий код берёт массив чисел и создаёт новый массив, содержащий квадратные корни 
чисел из первого массива.

const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]

!Пример: отображение массива чисел с использованием функции, содержащей аргумент
Следующий код показывает, как работает отображение, когда функция требует один аргумент. 
Аргумент будет автоматически присваиваться каждому элементу массива, когда map проходит 
по оригинальному массиву.

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);
// теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]
*/

//!Функция map заменяет цикл. Просто перебирает массив. 
//! Метод map и filter НЕменяют исходный массив перебирают и выдают результат

// Создаем массив
let a = [4, 5, 12, 200, 1, 0, -2];

let b = a.map(function (item, index) { //item - текущее значение; index - индекс; array - весь массив если это необходимо
   console.log(item);
   // return item * 5; // Можно сразу умножать на число
   return item;
})

console.log(b);


//! Метод filter() создает новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
/*
Параметры
callbackFn
Функция-предикат, которая будет вызвана для проверки каждого элемента массива. 
Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется.

Принимает три аргумента

element
Текущий обрабатываемый элемент в массиве.

index Необязательный
Индекс текущего обрабатываемого элемента в массиве.

array Необязательный
Обрабатываемый массив, на котором был вызван метод filter().

thisArg Необязательный
Значение, используемое в качестве this при вызове колбэк-функции callbackFn.
*/

let c = a.filter(function (item, index) { //item - текущий элемент, index - индекс элемента, array - весь массив если это необходимо
   return true; // возвращает копию массива а
   // return false; // возвращает пустой массив
})
console.log(c);

//! С Методом filter() Сами решаем что попадет в массив. Зададим условие. Пусь в массив "с" попадают только четные элементы массива "а".

let c1 = a.filter(function (item, index) { //item - текущий элемент, index - индекс элемента, array - весь массив если это необходимо
   if (item % 2 == 0) {
      return true;
   }
})
console.log(c1);

// выведим элементы больше 0
// let d03 = a02.filter(function (item, index) {
//    if (item > 0) {
//       return true;
//    }
// });
// console.log(d03);

//! если хотим перебрать только числа включаем typeof
let a03 = [41, 51, 'aaa', 121, true, 2001, 'bbb', 11, false, 0, -21];
console.log(a03);
let d04 = a03.filter(function (item, index) {
   if (typeof item == 'number') {
      return true;
   }
})
console.log(d04);

//!-------------------------------------------------------------------------------
//! 17.1 Методы массивов javascript. MAP

console.log('-------------------17.1 Методы массивов javascript. MAP-------------------');



// Реальный пример
const temp1 = [0, 4, 4, 6, 8, 10, 6, 4, 3, -1, -2, -2];
// F = C * 1.8 + 32
const z1 = [];

let tF = temp1.map(item1 => {
   console.log(item1);
   return 10 + item1 * 1.8;
});

console.log(tF);


// Задача 2

let a11 = [33, 44, 55];
a11[10] = 90;
let b22 = a11.map((item, index, array) => {
   if (index == 1) {
      array[index + 1] = 66
   }
   return item;
});
console.log(b22);

// Задача 3 перебрать массив от менеджера
const z11 = [
   { 'name': ' Ivan', 'order': 12, 'sum': '123,5' },
   { 'name': ' Sergey     ', 'order': 12, 'sum': '123.5' },
   { 'name': 'matilda  ', 'order': 12, 'sum': '123, 5' },
   { 'name': 'Ivanov Petr  ', 'order': 12, 'sum': '124,50' },
]
console.log(z11);
const zBack = z11.map(item => {
   item.name = item.name.trim().toLocaleLowerCase(); // Убрали пробелы и все строчные
   return item;
});
console.log(zBack);



//!-------------------------------------------------------------------------------
//17.2 Собеседование - задача с map и filter, допиши строку. 30 вопросов собеседования JavaScript
console.log('----------17.2 Собеседование - задача с map и filter, допиши строку. 30 вопросов собеседования JavaScript---------');

const VALID_STATUSES = new Set(['SUCCESS', 'FINAL', 'DONE'])

const people = [
   { name: 'Max', age: 20, status: 'IN_PROGRESS' },
   { name: 'Sam', age: 21, status: 'DONE' },
   { name: 'Dan', age: 30, status: 'SUCCESS' },
]

const peopleWithValidStatus = people

   // ?
   .filter(person => VALID_STATUSES.has(person.status)) // Правельный ответ ['Sam', 'Dan'];
   // .filter(person => person.status in VALID_STATUSES) // Неправильно []
   // .filter(person => VALID_STATUSES.entries(person.status)) // Неправильно ['Max', 'Sam', 'Dan']
   // ?

   .map(person => person.name)

console.log(peopleWithValidStatus); //['Sam', 'Dan'];



//-------------------------------------------------------------------------------

// для решения задач используйте эти переменные
let a1_res = [],
   a2_res = [],
   a3_res = [],
   a4_res = [],
   b1_res = [],
   b6_res = [],
   b7_res = [],
   b8_res = [],
   b9_num = [],
   b9_string = [],
   b10_res;

// Task 1 ============================================
/* Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью map переберите массив 
и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. 
Возвратите массив  a1_res. */

let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function t1() {
   //    a1_res = a1.map(elem => {
   //       return elem * 2;
   //    });
   //    return a1_res;
   // }

   // document.querySelector('.b-1').onclick = () => {
   //    console.log(t1());


   let a1_res = a1.map(function (item, index) {
      return item * 2;
   });
   return a1_res;
}

document.querySelector('.b-1').onclick = () => {
   console.log(t1());
}

// Task 2 ============================================
/*  Дан массив a2= [2,3,4,5,10,11,12] - с помощью map переберите массив и 
создайте массив a2_res куда добавьте элементы данного массива возведенные во 
вторую степень. Возвратите массив a2_res. Действия должны запускаться при вызове функции t2.*/

let a2 = [2, 3, 4, 5, 10, 11, 12];

function t2() {
   a2_res = a2.map(function (item, index) {
      return item ** 2;
   });
   return a2_res;
}

document.querySelector('.b-2').onclick = () => {
   console.log(t2());
}


// Task 3 ============================================
/*  Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите 
массив и создайте массив a3_res куда добавьте все элементы приведенные к числу. 
Возвратите a3_res.
Действия должны запускаться при вызове функции t3. */

let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t3() {
   // Вариант 1
   // a3_res = a3.map(Number);
   // return a3_res;
   // Вариант 2
   a3_res = a3.map(function (item, index) {
      return +item;
   });
   return a3_res;
}

document.querySelector('.b-3').onclick = () => {
   console.log(t3());
}


// Task 4 ============================================
/*  Следующая задача проще будет решаться через метод forEach, который 
мы изучим во второй части урока! Сейчас мы делаем костыль, для 
отработки навыков работы с map. Дан массив 
a4 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и 
создайте массив a4_res куда добавьте ТОЛЬКО числа из массива a4. 
Возвратите a4_res. Действия должны запускаться при вызове функции t4. */

let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t4() {
   a4_res = a4.map(function (item, index) {
      if (typeof item == 'number') {
         return item;
      }
   }).filter(function (i) {
      return !isNaN(i);
   });
   return a4_res;
}

document.querySelector('.b-4').onclick = () => {
   console.log(t4());
}



// Task 5 ============================================
/*  Дан массив b1 = [3, 14, 15, 92]. C помощью filter переберите массив и 
создайте b1_res, который содержит только четные числа из b1. 
Возвратите b1_res. Действия должны запускаться при вызове функции t5. */

let b1 = [3, 14, 15, 92];

function t5() {
   b1_res = b1.filter(function (item) {
      if (item % 2 == 0) {
         return true;
      }
   });
   return b1_res;
}

document.querySelector('.b-5').onclick = () => {
   console.log(t5());
}



// Task 6 ============================================
/*  Дан массив b6 = [3, 14, 15, 92, "6", "5", "hello", 32]. C помощью filter 
переберите массив b6 и создайте массив b6_res, который содержит только числа из b6. 
Возвратите b6_res. Действия должны запускаться при вызове функции t6. */

let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t6() {
   b6_res = b6.filter(function (item) {
      if (typeof item == 'number') {
         return true;
      }
   });
   return b6_res;
}

document.querySelector('.b-6').onclick = () => {
   console.log(t6());
}


// Task 7 ============================================
/*  Дан массив b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]. 
C помощью filter переберите массив b7 и создайте  b7_res, который содержит 
только строки из b7, длина которых больше 3. Возвратите b7_res. 
Действия должны запускаться при вызове функции t7. */

let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32];

function t7() {
   b7_res = b7.filter(function (item) {
      if (typeof item == 'string' && item.length > 3) {
         return true;
      }
   });
   return b7_res;
}

document.querySelector('.b-7').onclick = () => {
   console.log(t7());
}

// Task 8 ============================================
/* Дан массив b8 = [3, 14, 15, 92, "6", "5", "hello", 32]. 
С помощью filter, переберите массив b8 и создайте массив b8_res, который 
содержит индексы четных элементов. Возвратите b8_res. Действия должны 
запускаться при вызове функции t8 */

let b8 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t8() {
   b8.filter(function (item, index) {
      if (item % 2 == 0 && typeof item == 'number') {
         b8_res.push(index);
      }
   });
   return b8_res;
}

document.querySelector('.b-8').onclick = () => {
   console.log(t8());
}



// Task 9 ============================================
/*  Дан массив b9 = [3, "hello", 4, "world", 5, "hi"]. С помощью filter, 
переберите массив b9 и создайте массив b9_num и b9_string, которые 
содержат первый - числа из b9, второй - строки. Задачу решите с помощью filter. 
Действия должны запускаться при вызове функции t9. */

let b9 = [3, "hello", 4, "world", 5, "hi"];

function t9() {

   //Вариант 1 
   b9_num = b9.filter((item) => {
      if (typeof item === "number") {
        return true;
      }
      b9_string = b9.filter((item) => {
        if (typeof item === "string") {
          return true;
        }
      });
    });

    //Вариант 2
   // b9.filter(function (item) {
   //    if (typeof item == 'number') {
   //       b9_num.push(item);
   //    } else if (typeof item == 'string') {
   //       b9_string.push(item);
   //    }
   // });

   return [b9_num, b9_string];
}

document.querySelector('.b-9').onclick = () => {
   console.log(t9());
}



// Task 10 ============================================
/*  Дан массив b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]. С помощью filter 
переберите массив и создайте  b10_res, в который входят вложенные массивы 
содержащие цифру 3.  Возвратите b10_res. Действия должны запускаться при 
вызове функции t10. */

/*
Метод includes() определяет, содержит ли массив определённый элемент, 
возвращая в зависимости от этого true или false.
Синтаксис
arr.includes(searchElement[fromIndex = 0])
Параметры
searchElement
Искомый элемент.

fromIndex Необязательный
Примеры
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
*/

let b10 = [[1, 2, 3], [3, 4, 6], [4, 5, 7], [8, 9, 3]]

function t10() {
   // Вариант 1
   let b10_res = b10.filter(array => array.includes(3));
   return b10_res;

    // Вариант 1.1
   // let b10_res = b10.filter(function(array){
   //    return array.includes(3);
   // });
   // return b10_res;

    // Вариант 2
   //  const b10_res = b10.filter(elem => elem.filter(el => el === 3).length);
   //  return b10_res;

    // Вариант 2.2
   //  const b10_res = b10.filter(function(elem) {
   //    return elem.filter(function(el) {
   //       return el === 3;
   //    }).length;
   //  });
   //  return b10_res;
}

document.querySelector('.b-10').onclick = () => {
   console.log(t10());
}

// P.S. Вы же точно использовали переменные в начале файла? Не меняли область видимости?