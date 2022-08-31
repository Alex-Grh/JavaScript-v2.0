/*
!Сводка
Метод map() создаёт новый массив с результатом вызова указанной функции для каждого 
элемента массива.

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
//! Метод map и filter неменяют исходный массив перебирают и выдают результат

// Создаем массив
let a01 = [4, 5, 12, 200, 1, 0, -2];

let b01 = a01.map(function (item, index) {
   console.log(item);
   return item; //перебрал весь массив и вернул
});
console.log(b01);


let c01 = a01.map(function (item, index) {
   console.log(index);
   return index; //вернет индекс элемента 0, 1, 2, 3, 4, .....
});
console.log(c01);

// Стоит задача умножить каждый элемент массива на 5
let b02 = a01.map(function (item, index) {
   console.log(item * 5);
   return item * 5; //перебрал весь массив и вернул
});
console.log(b02);

// Можно упростить запись заменить на стрелочную функцию
let b03 = a01.map((item, index) => {
   console.log(item * 5);
   return item * 5; //перебрал весь массив и вернул
});
console.log(b03);

// Можно еще упростить если только необходимо выводить один return. Удаляем слово return
let b04 = a01.map((item, index) => item * 5) //перебрал весь массив и вернул
console.log(b04);

// Можно еще упростить если используется только один параметр item можно убирать скобки()
let b05 = a01.map(item => item * 5) //перебрал весь массив и вернул
console.log(b05);


//---------------------------------------------------------------------------------------

/*
!Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, 
задаваемую в передаваемой функции.

Интерактивный пример
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


!Синтаксис
// Стрелочная функция
filter((element) => { ... } )
filter((element, index) => { ... } )
filter((element, index, array) => { ... } )

// Колбэк-функция
filter(callbackFn)
filter(callbackFn, thisArg)

// Встроенная колбэк-функция
filter(function callbackFn(element) { ... })
filter(function callbackFn(element, index) { ... })
filter(function callbackFn(element, index, array){ ... })
filter(function callbackFn(element, index, array) { ... }, thisArg)

!Возвращаемое значение
Вернётся новый массив с элементами, которые прошли проверку. Если ни один элемент не 
прошёл проверку, то будет возвращён пустой массив.

!Параметры
callbackFn
Функция-предикат, которая будет вызвана для проверки каждого элемента массива. 
Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется.

Принимает три аргумента

element
Текущий обрабатываемый элемент в массиве.

!Возвращаемое значение
Вернётся новый массив с элементами, которые прошли проверку. Если ни один элемент не 
прошёл проверку, то будет возвращён пустой массив.

!Описание
Метод filter() вызывает переданную функцию callback один раз для каждого элемента, 
присутствующего в массиве, и создаёт новый массив со всеми значениями, для которых 
функция callback вернула значение, которое может быть приведено к true. 
Функция callback вызывается только для индексов массива с уже определёнными значениями; 
она не вызывается для индексов, которые были удалены или которым значения никогда 
не присваивались. Элементы массива, не прошедшие проверку функцией callback, 
просто пропускаются и не включаются в новый массив.

Функция callback вызывается с тремя аргументами:

значение элемента;
индекс элемента;
массив, по которому осуществляется проход.

!Примеры
Фильтрация всех маленьких значений
Следующий пример использует filter() для создания отфильтрованного массива, все элементы 
которого больше или равны 10, а все меньшие 10 удалены.

function isBigEnough(value) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// массив filtered теперь содержит [12, 130, 44]
Copy to Clipboard
Найти все простые числа в массиве
Следующий пример возвращает все простые числа в массиве:

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
*/
console.log('filter------------------------------------------------------------------filter');

//! в методе filter мы сами решаем что попадет в массив
//! Используем filter если необходимо выбрать элементы больше когогото, больше 0, по условию... Заменяем вместо циклов
//! Отличие от циклов быстрее и короче запись и сразу понятно что хотите сделать. Это просто удобнее чем циклы.
//! Метод map и filter неменяют исходный массив перебирают и выдают результат
// Создаем массив
let a02 = [4, 5, 12, 200, 1, 0, -2];
let d01 = a02.filter(function (item, index) {
   /*
callbackFn
Функция-предикат, которая будет вызвана для проверки каждого элемента массива. 
Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется.
   */
   return true; // true вернет весь массив. false вернет пустой массив
})
console.log(d01);


// выведим только четные элементы массива a02
let d02 = a02.filter(function (item, index) {
   if (item % 2 == 0) {
      return true;
   }

   // else {            // else можно неписать 
   //    return false;
   // }

})
console.log(d02);

// выведим элементы больше 0
let d03 = a02.filter(function (item, index) {
   if (item > 0) {
      return true;
   }
})
console.log(d03);

//! если хотим перебрать только числа включаем typeof
let a03 = [41, 51,'aaa', 121, true, 2001, 'bbb', 11, false, 0, -21];
console.log(a03);
let d04 = a03.filter(function (item, index) {
   if (typeof item  == 'number') {
      return true;
   }
})
console.log(d04);



//---------------------------------------------------------------------------------------

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
/* Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью map переберите 
массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные 
на 2. Возвратите массив  a1_res. */

let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function t1() {
   a1_res = a1.map(elem => {
      return elem * 2;
   });
   return a1_res;
}

document.querySelector('.b-1').onclick = () => {
   console.log(t1());
}

// Task 2 ============================================
/*  Дан массив a2= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте 
массив a2_res куда добавьте элементы данного массива возведенные во вторую степень. 
Возвратите массив a2_res. Действия должны запускаться при вызове функции t2.*/

let a2 = [2, 3, 4, 5, 10, 11, 12];

function t2() {

}

document.querySelector('.b-2').onclick = () => {
   console.log(t2());
}

// Task 3 ============================================
/*  Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив 
и создайте массив a3_res куда добавьте все элементы приведенные к числу. Возвратите a3_res.
Действия должны запускаться при вызове функции t3. */

let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t3() {

}

document.querySelector('.b-3').onclick = () => {
   console.log(t3());
}