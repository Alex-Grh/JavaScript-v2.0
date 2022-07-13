const a01 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b01 = ['a', 'b', 'c', 'd', 'e', 'f'];


//! Метод push() 
// Метод push позволяет добавить элементы в конец массива
// Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
// arr.push(element1, ..., elementN) - arr наш массив, метод push, может принимать несколько элементов (element1, ..., elementN)
// Что возвращает? Возвращает Новое значение свойства length объекта, для которого был вызван данный метод.

console.log(a01.length); // длинна массива 9

console.log(a01.push(10)); // добавим значение с помощью метода push
// такой вывод равняктся как
// let c = a.push(10);
// console.log(c);

// добавим несколько чисел
console.log(a01.push(11, 44, 55, 66));

console.log(a01); // выведим весь массив


// тоже самое будет с массивом b
// Метод push позволяет добавить элементы в конец массива
b01.push('j', 'e');
console.log(b01);


//! Метод pop() 
// Метод pop() удаляет последний элемент из массива и возвращает его значение.
// Метод pop удаляет последний элемент из массива и возвращает удалённое значение.
// Последний элемент массива или undefined, если массив пуст.
// arr.pop() - нету параметров это просто метод со скобочками
// Это все манипуляции в конце массива

const a02 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b02 = ['a', 'b', 'c', 'd', 'e', 'f'];
b02.pop(); // удаляет последний элемент = ['a', 'b', 'c', 'd', 'e'];
b02.pop(); // еще раз удаляет последний элемент = ['a', 'b', 'c', 'd';
console.log(b02);
console.log(b02.pop());
console.log(b02.pop());


//! Как удалить элемент внутри массива с помощью опе0ратора delete
const a03 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete a03[3];
console.log(a03); // Появился пропуск под третим индексом empty (пустой)
// лучше неудалять массив а создать новый

//! Метод splice() (соединение)
// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) - start Индекс, по которому начинает изменять массив.
const b04 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

// Начинаем с 3 элемента 'd' (индекс 3 включительно) и заденим 2 элемента 'd' и 'e'
// Есть еще третий параметр добавление элемента. Удаляет и на его место ставит новый элемент 'hi'
b04.splice(3, 2, 'hi');

console.log(b04); // Таким образом метод splice() позволяет удалить массив и ерещитывать его индексы

//!! Существуют еще два опрератора shift и unshift которые позволяют удалять и добавлять элементы 
//! в начало массива
// Логика их действий идентичная операторам pop и push


//------------------------------------------------------------------------------------------------

// Task 1
// Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и 
// добавляем его в массив. После чего выводит массив в .out-1. Поскольку мы будем выводить 
// массив d1 неоднократно, то давайте вывод массива сделаем отдельной функцией, showArr - она 
// подготовлена. Изучите ее - это хороший способ оптимизировать код.

function showArr(domElem, arr) {
   let out = '';
   for (let i = 0; i < arr.length; i++) {
      out += arr[i] + ', ';
   }
   document.querySelector(domElem).innerHTML = out;
}

let d1 = [33, 'best', 66, 'best'];

function f1() {
   // ваш код здесь
   d1.push(document.querySelector(".i-1").value); // Метод push позволяет добавить элементы в конец массива
   console.log(d1); // Метод push позволяет добавить элементы в конец массива
   // ваш код здесь
   showArr('.out-1', d1);
}
document.querySelector('.b-1').onclick = f1;

// Task 2
//Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) 
// в .out-2 функция выполняется при нажатии кнопки b-2

function f2() {
   d1.pop(); // Метод pop удаляет последний элемент из массива и возвращает удалённое значение.
   showArr('.out-2', d1);
}

document.querySelector('.b-2').onclick = f2;

// Task 3
// Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит 
// его (showArr) в .out-3
// функция выполняется при нажатии кнопки b-3

function f3() {
   d1.shift(); // shift удаляет элемент вначале массива
   showArr('.out-3', d1);
}

document.querySelector('.b-3').onclick = f3;

// Task 4
// Напишите функцию f4, которая применяет метод push к массиву d1, данные для массива берите 
// из i-4, а затем выводит его (showArr) в .out-4
// функция выполняется при нажатии кнопки b-4


function f4() {
   d1.push(document.querySelector(".i-4").value); // Метод push позволяет добавить элементы в конец массива
   showArr('.out-4', d1);
}

document.querySelector('.b-4').onclick = f4;

// Task 5
// Напишите функцию f5, которая применяет метод unshift к массиву d1, данные для массива 
// берите из i-5, а затем выводит его (showArr) в .out-5
// функция выполняется при нажатии кнопки b-5

function f5() {
   d1.unshift(document.querySelector(".i-5").value); // unshift добавляет элемент вначале массива
   showArr('.out-5', d1);
}

document.querySelector('.b-5').onclick = f5;


// Task 6
// Напишите функцию f6, которая эмулирует работу метода push применительно к массиву d6. Т.е. 
// добавляет значение из i-6 как последний элемент в массив d6. Эмуляция, значит, что мы 
// получим результат аналогичный методу push без применения его. Эмуляция заключается в 
// присвоение значения как последнего элемента массива. Как вычислить индекс последнего 
// элемента используя длину массива - вы знаете из предыдущего урока. Повторный запуск 
// функции должен также приводить к добавлению элемента.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

let d6 = ['test', 5, 12];

function f6() {
   d6[d6.length] = document.querySelector(".i-6").value;
   showArr('.out-6', d6);
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Напишите функцию f7, которая эмулирует метод pop, т.е. удаляет последний элемент массива d7. 
// Эмулировать - получать результат аналогичный pop, но без применения pop. Функция может быть 
// вызвана много раз, при этом каждый раз должен удаляться последний элемент d7.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
   d7.length = d7.length - 1;
   showArr('.out-7', d7);
}

document.querySelector('.b-7').onclick = f7;


// Task 8
// Напишите функцию f8, которая эмулирует работу метода unShift - добавляем значение из i-8 
// в начало массива d8. Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let d8 = [2, '4', 12, 67, 'hello'];

function f8() {
   // d8.unshift(document.querySelector(".i-8").value); // unshift добавляет элемент вначале массива
   // d8[0] = (document.querySelector(".i-8").value); // Меняет нулевой индекс d8[0] на (".i-8").value);
   let t8 = []; // создаем новую переменную с пустым массивом
   t8[0] = document.querySelector(".i-8").value; // задаем нулевой элемент как (".i-8").value; // значения вводит пользователь
   for (let i = 0; i < d8.length; i++) { // делаем перебор массива d8 от нуля let i = 0; по всей длинне до последнего элемента i < d8.length;
      t8[t8.length] = d8[i]; //! записываем в t8 последний элемент перебор из массива d8[i]. Нулевой элемент уже занят ...(".i-8").value; Получилось что после value добавили весь перебор с d8[i].
      //! Как работает длинна массива t8[t8.length] 
      //! индекс [0] для значения (".i-8").value, а длинна length массива 1
      //!t8[t8.length] здесь присваеваем значение не нулевому индексу а индексу [1] которого несуществует. Тоесть перезаписали тот индекс которого нет.
   }
   d8 = t8; // присваеваем в d8 значения с t8. Записан 0 элемент как ...(".i-8").value; и дальше весь перебор элементов с d8[i].
   console.log(d8) // Выводим d8 с добавленным первым элементом как (".i-8").value;
   showArr('.out-8', d8);
}

document.querySelector('.b-8').onclick = f8;

// Все просто посчитайте длину массива t8 перед началом цикла. Она равна 1 
// а если указать i переменную то она начинается с 0 так вас и получается затирание, 
// если хотите без t8[t8.length] то подставьте i+1. t8[i+1] = d8[i]

//! Объяснение как работает длинна массива t81[t81.length]
let t81 = []; // создаем новую переменную с пустым массивом
console.log(t81); // длинна массива 0
t81[0] = 'a'; // задаем нулевой элемент
console.log(t81); // индекс [0] для значения 'a', а длинна length массива 1
t81[t81.length] = "b"; // здесь присваеваем значение не нулевому индексу а индексу [1] которого несуществует. Тоесть перезаписали тот индекс которого нет.
console.log(t81); // индекс [0], [1], а длинна массива 2



// Task 9
// Напишите функцию f8, которая эмулирует работу метода shift - на примере массива d9.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let d9 = [100, 200, 300, 400, 700, 121];

function f9() {
   let p9 = [];
   for (let i = 1; i < d9.length; i++) {
      p9[i - 1] = d9[i]
   }
   d9 = p9;
   showArr('.out-9', d9);
}

document.querySelector('.b-9').onclick = f9;

//! Как работает этот цикл https://qna.habr.com/q/695074
// let a = [4,5,6];
// function funcShift() {
//     let b = [];
//     for (let i = 1; i < a.length; i++) {
//        b[i-1] = a[i]
//     }
//     a = b;
//     document.querySelector('.out-8').innerHTML = a;
// }

// document.querySelector('.result-8').onclick = funcShift;

/*
Идём по массиву a до конца, начиная с элемента с индексом 1, в данном случае это 5-рка. 
Записываем эту пятёрку в массив b на первую(нулевую) позицию. Повторяем всё то же самое ещё 
одну итерацию. Таким образом получаем массив b = [5, 6].
Далее заменяем исходный массив a новым массивом b, в котором на один элемент у нас меньше. 
При следующем клике всё повторится и в массиве a станет на ещё один элемент меньше. 
Ребят, это очень просто.
*/

/*
1) у вас создается массив а с элементами 4, 5, 6
2) при запуске функции создается пустой массив b
3) запускается цикл от 1 до конца массива а (то есть, от второго до последнего элемента массива а)
4) но, благодаря [i-1], в массив b записываются элементы массива а со сдвигом 1 (то есть, b[0] = a[1], b[1] = a[2])
*/



// Task 10
// Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный 
// массив в out-10.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let d10 = [3, 14, 15, 92, 6];

function f10() {
   d10.reverse();
   showArr('.out-10', d10);
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// Напишите функцию, которая получает число из input i-11, переводит в число, и с помощью 
// метода indexOf проверяет наличие в массиве d11. Функция выводит в out-11 -1 если такого числа 
// нет в массиве, либо его индекс в массиве.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11


// Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый
// объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.
// Синтаксис str.indexOf(searchValue, [fromIndex])
// searchValue Строка, представляющая искомое значение.
// Символы в строке идут слева направо. Индекс первого символа равен 0, а последнего символа в строке stringName равен stringName.length - 1.

let d11 = [2, 3, 4, 5, 6, 7];
let out11 = document.querySelector('.out-11');
function f11() {
   let i11 = +document.querySelector('.i-11').value; //Чтобы перевести в число ставим +
   out11.innerHTML = d11.indexOf(i11); //indexOf проверяет число i11 есть ли оно в d11. Если число такое есть ставит его индекс если нет -1
}

document.querySelector('.b-11').onclick = f11;

//! Объяснение как работает код https://ru.stackoverflow.com/questions/1262849/%D0%9D%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8E-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D0%B0%D1%8F-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D0%B5%D1%82-%D1%87%D0%B8%D1%81%D0%BB%D0%BE-%D0%B8%D0%B7-input-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82-%D0%B5%D0%B3%D0%BE-%D0%B2-%D1%87%D0%B8%D1%81%D0%BB%D0%BE-%D0%B8-%D1%81-%D0%BF
// let d11 = [2, 3, 4, 5, 6, 7];

// function f11() {
//     let input = +document.querySelector('.i-11').value;
//     let out = d11.indexOf(input);
//     document.querySelector('.out-11').innerHTML = out;
// }
// document.querySelector('.b-11').onclick = f11;



// Task 12
// Напишите функцию f12, которая эмулирует работу метода indexOf - ищет введенное число в 
// массиве d12 (перебором). Если числа нет - выводит -1, если есть - его позицию в массиве.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12


let d12 = [6, 62, 60, 70, 1, 5];
let out12 = document.querySelector('.out-12');

function f12() {
   let i12 = +document.querySelector('.i-12').value;
   for (let i = 0; i < d12.length; i++) {
      if (d12[i] === i12) {
         out12.innerHTML = [i];
         break;
      } else {
         out12.innerHTML = -1;
      }
   }

}

document.querySelector('.b-12').onclick = f12;

//! Объяснение как работает код https://qna.habr.com/q/952135
// Разделите отображение результата от поиска: пусть функция f12() только ищет и возвращает позицию (или –1).
// Алгоритм: перебирать элементы, и как только нашёлся, всё – возвращать позицию, функция закончила работу.



// Task 13
// Напишите функцию f13, которая эмулирует работу метода reverse. Т.е. создает новый массив 
// на основе d13 с обратным порядком элементов и выводит в out-13.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13


let d13 = [6, 0, 22, 1, 4, 76];

function f13() {
   let t13 = []; // Создаем пустой массив

   for (let i = d13.length - 1; i >= 0; i--) { // Запускаем обратный цикл

      t13[t13.length] = d13[i]; // записываем в массив t13 с обратного цикла
   }
   d13 = t13;

   showArr('.out-13', d13);
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Напишите функцию, которая получает i-14, переводит в число, а потом заполняет массив d14 так, 
// что количество элементов равно введенному числу, и каждый элемент равен 1. Т.е. пользователь 
// ввел 5, массив будет [1,1,1,1,1]. Выведите массив в out-14.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let d14 = []; // создаем пустой массив

function f14() {
let t14 = +document.querySelector('.i-14').value; // + переобразование в число
let a14 = []; // создаем пустой массив
for (let i = 0; i < t14; i++) { // перебор веденого числа от 0 до введеного числа ('.i-14').value;
a14[i] = 1; // каждое выводимое число 'i' с перебора записываем в массив a14[i] и меняем на 1
}
d14 = a14; // в d14 записываем a14
    showArr('.out-14', d14);
}

document.querySelector('.b-14').onclick = f14;

//Вариант 2 
// function f14() {
//    let d14 = [];
//    let input14 = +document.querySelector('.i-14').value;

//    for (i = 0; i < input14; i++) {
//        d14.push(1);
//    }

//    showArr('.out-14', d14);
// }

// document.querySelector('.b-14').onclick = f14;



// Task 15
// Напишите функцию f15, которая вначале проверяет, есть ли элемент из i-15 в массиве d15  
// (переводим в число), а потом - если нет - добавляет его в массив.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let out15 = document.querySelector('.out-15');
function f15() {
let i15 = +document.querySelector('.i-15').value;
   if(d15.indexOf(i15) == -1) {
      d15.push(i15);
        } 
    showArr('.out-15', d15);
}

document.querySelector('.b-15').onclick = f15;

// Вариант 2 добавляет все числа
// let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// let out15 = document.querySelector('.out-15');
// function f15() {
//    let i15 = +document.querySelector('.i-15').value;
//    for (let i = 0; i < d15.length; i++) {
//       if (d15[i] !== i15) {
//           d15.push(i15);
//           break;
//       }
//   }
    
//     showArr('.out-15', d15);
// }

// document.querySelector('.b-15').onclick = f15;


// Task 16
// Даны два массива d161 и d162 - используя метод concat - добавьте в массив d16 
// результат применения concat между массивом d161 и d162.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

// Метод concat() возвращает новый массив, состоящий из массива, на котором он был 
// вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
/*
!Соединение двух массивов
Следующий код соединяет два массива:

var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]
Copy to Clipboard
!Соединение трёх массивов
Следующий код соединяет три массива:

var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums); // Результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Copy to Clipboard
!Соединение значений в массив
Следующий код соединяет три значения в массив:

var alpha = ['a', 'b', 'c'];

var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]
*/



let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

function f16() {
   d16 = d161.concat(d162);
    showArr('.out-16', d16);
}

document.querySelector('.b-16').onclick = f16;

