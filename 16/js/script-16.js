let arr = [4, 7, 9];


// // Способ 1
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// // Способ 2
// for (let key in arr) {
//    console.log(arr[key]);
// }

// // Способ 3
// for (let item of arr) {
//    console.log(item);
// }

let allP = document.getElementsByTagName('p');
console.log(allP);

// // // Способ 1
// for (let i = 0; i < allP.length; i++) {
//    console.log(allP[i]);
// }

// // Способ 2 Неподходит для перебора html элементов
// for (let key in allP) {
//    console.log(allP[key]);
// }

// // Способ 3
// for (let item of allP) {
//    console.log(item);
// }

let qP = document.querySelectorAll('p');
console.log(qP);

// // // Способ 1
// for (let i = 0; i < qP.length; i++) {
//    console.log(qP[i]);
// }

// // Способ 2 Неподходит для перебора html элементов
// for (let key in qP) {
//    console.log(qP[key]);
// }

// // Способ 3
// for (let item of qP) {
//    console.log(item);
// }

//---------------------------------------------------------------------------

// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  
// c помощью цикла for (let i. Выведите на страницу в .out-1 формате 
//    значение+пробел.

let a1 = [5, 7, 9, 11, 13, 15];
let out1 = document.querySelector('.out-1');
function f1() {
   for (let i = 0; i < a1.length; i++) {

      out1.innerHTML += a1[i] + " ";
   }
}
document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  
// c помощью цикла for (let i. Выведите на страницу в .out-2 формате 
//    индекс+пробел+значение+пробел.

let a2 = [5, 7, 9, 11, 13, 15];
out2 = document.querySelector('.out-2');
function f2() {
   for (let i = 0; i < a2.length; i++) {
      out2.innerHTML += a2.indexOf(a2[i]) + ' ' + a2[i] + ' ';
   }
}

document.querySelector('.b-2').addEventListener('click', f2);

// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со 
// страницы с помощью getElementsByClassName и в каждый записывает число 3, 
// перезаписывая содержимое div.


function f3() {
   let out3 = document.getElementsByClassName('out-3');
   for (let item of out3) {
      item.innerHTML = 3;
      console.log(item);
   }
}

document.querySelector('.b-3').addEventListener('click', f3);

// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со 
// страницы с помощью querySelectorAll и в каждый дописывает число 4.

function f4() {
   let out4 = document.querySelectorAll('.out-4');
   for (let item of out4) {
      item.innerHTML = 4;
      console.log(item);
   }
}

document.querySelector('.b-4').addEventListener('click', f4);


// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of 
// перебрать массив a5 и возвратить новый массив куда входят элементы из a5 
// большие 7.

let a5 = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];

function f5() {
   let res = [];

   for (item of a5) {
      if (item > 7) {
         res.push(item + ' ');
         console.log(item);
      }

   }
   return res;
}

document.querySelector('.b-5').addEventListener('click', () => {
   document.querySelector('.out-5').innerHTML = f5();
});

//!!!!!!!!!!!! Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 
// в одномерный. Результат вывести в out-6 через пробел.

let a6 = [[1, 2], [3, 4], [5, 6]];
console.log(a6);
let out6 = document.querySelector('.out-6');
function f6() {
   for (i = 0; i < a6.length; i++) {
      let c6 = a6[i];
      // out6.innerHTML += a6[i];
      //    console.log(a6[i]);
      for (let k = 0; k < c6.length; k++) {
         out6.innerHTML += c6[k] + " ";
         console.log(c6[k]);
      }
   }
}

document.querySelector('.b-6').addEventListener('click', f6);

// let a01 = [4, 5, 6]; // простой массив
// let b01 = [     // двумерный массив
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9],
// ];
// console.log(b01);


// // Перебор двумерных массивов

// for (let i = 0; i < b01.length; i++) {
//    // console.log(b01[i]);
//    let c01 = b01[i]; //сначала c01 массив [1, 2, 3], [4, 5, 6], [7, 8, 9],
//    for (let k = 0; k < c01.length; k++) {
//       console.log(c01[k]); // выводит массив в виде [1, 2, 3, 4, 5, 6, 7, 8, 9]
//    }
// } 

// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать 
// массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который 
// содержит вложенные объекты. Вам необходимо сделать из a7 объект, 
// где ключи - значения id из вложенных массивов, а значения - имя 
// (т.е { 23 : Ivan, 45 : Petr}. Функция должна возвращать результирующий 
//    массив.

let a7 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];

function f7() {

   const result = {};
   for (const obj of a7) {
      result[obj.id] = obj.name;
   }
   return result;
}

document.querySelector('.b-7').addEventListener('click', () => {
   console.log(f7());
});

//!!!!!!!!!!! Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. 
// Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. 
// Вам необходимо сделать из a8 массив, который будет содержать только 
// числовые id. Т.е. [23, 45]. Функция должна возвращать результирующий массив.
/*
let a8 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f8() {
let res8 = [];
for (let obj of a8) {
    res8 += obj.id + ", ";     
               
}
return res8;
// let res8 = [];
// let arr = Array.from(a8);
// for (let i = 0; i < arr[0].length; i++) {
//     if(arr[0][i]>5){
//         res8.push(arr[0][i]);
//     }
// }
// return res8;

}

document.querySelector('.b-8').addEventListener('click', ()=>{
    console.log(f8());
});
*/

let a8 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];

function f8() {

   let res8 = [];
   for (let obj of a8) {

      res8.push(obj.id);
   }
   return res8;
   //    if (a8.id !== undefined) {
   //       var arr = []
   //       Object.keys(a8.id).forEach(function(key) {
   //           var child = a8.id[key];
   //           f8(child);
   //           child.id = key;
   //           arr.push(child);
   //       }) 

   //       a8.id = arr;

   //   }
   //   return arr;
}

document.querySelector('.b-8').addEventListener('click', () => {
   console.log(f8());
});

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в out-9 самый 
// большой индекс из вложенных в a9 массивов. В данном случае это 4. Т.е. самый большой 
// вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.

let a9 = [[4, 3, 2], [2, 5], [0, 0, 0, 0, 0]];

function f9() {
   let max = '';
   for (let key in a9) {
      for (let i = 0; i < a9.length; i++) {
         if (a9[i].length > a9[key].length) {
            max = a9[i].length - 1;
         }
      }
   }
   console.log(max);
   return max;

   // let max9 = a9[0];
   // let out9 = '';
   // for (let i = 0; i < a9.length; i++) {

   //    if (a9[i].length > max9) {
   //       max9 = a9[i].length;
   //       out9 = 'max = ' + max9;

   //    }
   // }
   // document.querySelector('.out-9').innerHTML = out9;
   // console.log(out9);
   // return out9;
}

document.querySelector('.b-9').addEventListener('click', () => {
   document.querySelector('.out-9').innerHTML = f9();
});

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 
// в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный 
// массив.

let a10 = [4, 6, 9, 'Hello'];

function f10() {
   let result = {};
   for (let obj of a10) {
      result[obj] = obj;
   }
   return result;
}

document.querySelector('.b-10').addEventListener('click', () => {
   console.log(f10());
});


// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать 
// объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через 
// пробел.

let a11 = {
   one : 11,
   two : 7,
   three: 13,
   four: 0
}
let out11 = document.querySelector('.out-11');
function f11() {
for (let key in a11) {
   // console.log(a11[key]);
   if (a11[key] > 10) {
      out11.innerHTML += a11[key] + ' ';
   }
}
}

document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of 
// перебрать a12 и вывести в out-12 через пробел.

let a12 = [4,5,6,7];
let out12 = document.querySelector('.out-12');
function f12() {
for (let obj of a12) {
   out12.innerHTML += obj + ' ';
}
}

document.querySelector('.b-12').addEventListener('click', f12);

// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of 
// перебрать a13 и вывести по символу в out-13 через пробел.

let a13 = 'testone';
let out13 = document.querySelector('.out-13');
function f13() {
for (let obj of a13) {
   out13.innerHTML += obj + '<br>';
}
}

document.querySelector('.b-13').addEventListener('click', f13);