/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

Объекты Set позволяют вам сохранять уникальные значения любого типа, 
как примитивы, так и другие типы объектов.
Синтаксис
 new Set([iterable]);
*/

let a = new Set();

// Добавляем
a.add(1); // add добавляет значение в Set
a.add(2);
a.add('Hello');
a.add(1); // это значение недобавится так как проверяяется строгая проверка === и остаются только уникальные элементы
a.add('1'); // этот элемент как строка он будет добавлен в Set

// Удаляем
//a.clear(); // очищает полностью Set
//a.delete('Hello'); //удаляет отдельные элементы с набора Set 

console.log(a);
//!console.log(a[0]); //!!! no !!! Обращение по индексу непроходит дает undefined
//!console.log(a.lenght); //!!! no !!! Обращение по lenght непроходит дает undefined
console.log(a.size); // выводит количество элементов

// Проверяем наличие
console.log(a.has(2)); // проверяем есть такой элемент в Set. Есть выводит true. Нет выводит false

// Как перебрать содержимое в Set
for (let item of a) {
   console.log(item);
}

// Как применять на практике
// Есть массив. Задача найти в нем уникальные элементы
let arr = [1, 2, 3, 1, 4, 5, 'hello', 5, 1, 3];
let b01 = new Set(arr); // выводим только уникальные элементы
console.log(b01);
console.log(b01.size); // выводит количество элементов

// Попробуем преобразовать наш набор в массив
let b01Arr = Array.from(b01);
console.log(b01Arr);
console.log(b01Arr[2]); // Это уже массив и все обращения к массиву уже работают

//---------------------------------------------------------------------------------

// В данной работе и далее под определением набор понимают Set. 

// Task 1
// Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'. 
// Добавление делайте через add. Выведите в консоль получившийся набор (set) s1.

// let s1 = new ...

let s1 = new Set();
s1.add('h');
s1.add('b');
s1.add('o');
s1.add('h');
console.log(s1);

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы,
//  которые пользователь вводит в i-2. Функция должна выводить в консоль s2 после 
//  каждого добавления элемента.

// let s2 =
let s2 = new Set();
const f2 = () => {
   let i2 = document.querySelector(".i-2").value;
   s2.add(i2);
   console.log(s2);
}

document.querySelector('.b-2').onclick = f2;

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3 строку, 
// которую пользователь вводит в i-3. Функция должна выводить в консоль s3 после 
// каждого удаления элемента.

let s3 = new Set(['one', 'two', 'four']); // обратите внимание, как просто можно добавить массив в набор!

const f3 = () => {
   let i3 = document.querySelector(".i-3").value;
   s3.delete(i3);
   console.log(s3);
}

document.querySelector('.b-3').onclick = f3;

// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие 
// в наборе s4 строки введенной пользователем в i-4. Если строка есть - то 
// вывести в out-4 true. Если нет - false.

let s4 = new Set(['a', 'b', 'c', 'z']);

const f4 = () => {
   let i4 = document.querySelector('.i-4').value;
   console.log(s4.has(i4));
}

document.querySelector('.b-4').onclick = f4;

// Task 5
//  При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 
// количество элементов в наборе s5.


let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);
let out5 = document.querySelector('.out-5');
const f5 = () => {
   out5.innerHTML = s5.size; // выводит количество элементов
   console.log(s5.size); // выводит количество элементов
}

document.querySelector('.b-5').onclick = f5;

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число 
// уникальных элементов в массиве a6. Решение должно использовать set.

let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];
let out6 = document.querySelector('.out-6');
const f6 = () => {

   // let a61 = new Set(a6); // выводим только уникальные элементы
   // out6.innerHTML = a61;
   // console.log(a61);

   let a61 = Array.from(new Set(a6)) // преобразуем в массив и выводим только уникальные элементы
   out6.innerHTML = a61;
   console.log(a61);

}

document.querySelector('.b-6').onclick = f6;

// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение 
// пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся 
// символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 
// число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. 
// Для проверки уникальности символов используйте Set.
/*
let out7 = document.querySelector('.out-7');
const f7 = () => {
   let i7 = document.querySelector('.i-7').value;
   
   let a7 = Array.from(new Set(i7)) // преобразуем в массив и выводим только уникальные элементы
 for (let i = 0; i < a7.length; i++){
   if (a7[i] > 6) {
out7.innerHTML = 1;
   } else {
      out7.innerHTML = 0;
   }
 }
}

document.querySelector('.b-7').onclick = f7;
*/

const f7 = () => {
   let i7 = document.querySelector('.i-7').value;
   let s7 = new Set(i7);
   if (i7.length == s7.size && i7.length > 6) {
      document.querySelector('.out-7').innerHTML = 1;
   }
   else {
      document.querySelector('.out-7').innerHTML = 0;
   }
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна перебрать набор s8 и 
// добавить в массив ar8 только числа больше 5. Выведите массив в консоль.
/*
let s8 = new Set([[1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]]);

function f8() {
    let res8 = [];
    let out  = document.querySelector('.out-8');
    let arr = Array.from(s8);
       for (let i = 0; i < arr.length; i++) {
          if(arr[i]>5){
              res8.push(arr[i]);
          }
       }
          return res8  
        }
document.querySelector('.b-8').onclick = () => {
    console.log(f8());
}
*/

let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => {
   let arr = Array.from(s8);
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 5) {
         ar8 = arr[i];
         console.log(ar8);
      }
   }
}
document.querySelector('.b-8').onclick = f8;


// Task 9
//  При нажатии b-9 выполняете функцию f9. Функция должна принимать набор our_set 
// в качестве параметра, преобразовывать его в строку, причем после каждого символа 
// строки должен быть пробел. Функция должна возвращать результирующую строку. 
// В нашем примере результат должен быть 9 8 7 6 5 

const f9 = our_set => {
   return Array.from(our_set).join(' ');
}

document.querySelector('.b-9').onclick = () => {
   let s9 = new Set([9, 8, 7, 6, 5]);
   document.querySelector('.out-9').innerHTML = f9(s9);
}



/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.

Примеры
Соединение массива четырьмя различными способами
В следующем примере создаётся массив a с тремя элементами, затем они четыре раза объединяются в строку: с использованием разделителя по умолчанию, запятой с пробелом, плюса, окружённого пробелами, и пустой строки.

var a = ['Ветер', 'Дождь', 'Огонь'];
var myVar1 = a.join();      // присвоит 'Ветер,Дождь,Огонь' переменной myVar1
var myVar2 = a.join(', ');  // присвоит 'Ветер, Дождь, Огонь' переменной myVar2
var myVar3 = a.join(' + '); // присвоит 'Ветер + Дождь + Огонь' переменной myVar3
var myVar4 = a.join('');    // присвоит 'ВетерДождьОгонь' переменной myVar4
*/

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set 
// в качестве параметра и выводить его в указанный элемент. Элемент указывается 
// как второй параметр функции f10. Вывод значений - через пробел.

const f10 = (out_set, elem) => {   
   // Array.from(out_set).join(' ');
   // document.querySelector(elem).innerHTML;
   out10 = document.querySelector(elem);
  let q10 = Array.from(out_set);
  for (let i = 0; i < q10.length; i++){
out10.innerHTML += q10[i] + ' ';
  }
}

document.querySelector('.b-10').onclick = () => {
   let a10 = new Set(['4', '5', '6']);
   f10(a10, '.out-10');
};

// Task 11
//  При нажатии b-11 выполняете функцию f11. Функция должна преобразовать массив a11 
// в набор. И выводить в консоль. Изучите вывод получившегося набора. Разберитесь почему 
// так происходит.
// Да, эта задача решена! Просто разберитесь.

const f11 = () => {
   let s = new Set();
   s.add([1]);
   s.add([1]);
   console.log(s);
}

document.querySelector('.b-11').onclick = f11; 

// Task 12
//   При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 
// в массив, так, что каждая буква - отдельный элемент массива. Потом создать набор на 
// основе массива и возвратить его.

let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f12 = () => {
   
   let a12 = str12.split([]); //.join('')
   let s12 = Array.from(new Set([a12]));  
   return s12;
}

document.querySelector('.b-12').onclick = () => {
    console.log(f12());
    document.querySelector('.out-12').innerHTML = f12();
}

