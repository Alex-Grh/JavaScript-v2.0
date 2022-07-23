let a01 = [4, 5, 6]; // простой массив
let b01 = [     // двумерный массив
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
];
console.log(b01);


// Перебор двумерных массивов

// for (let i = 0; i < b01.length; i++) {
//    // console.log(b01[i]);
//    let c01 = b01[i]; //сначала c01 массив [1, 2, 3], [4, 5, 6], [7, 8, 9],
//    for (let k = 0; k < c01.length; k++) {
//       console.log(c01[k]); // выводит массив в виде [1, 2, 3, 4, 5, 6, 7, 8, 9]
//    }
// }

// выводим в обратном порядке массив [1, 2, 3]
for (let i = 0; i < b01.length; i++) {
   // console.log(b01[i]);
   let c01 = b01[i]; //сначала c01 массив [1, 2, 3], [4, 5, 6], [7, 8, 9],
   for (let k = c01.length - 1; k >= 0; k--) {
      console.log(c01[k]); // выводит массив в виде [1, 2, 3, 4, 5, 6, 7, 8, 9]
   }
}

let out01 = '';
for (let i = 0; i < b01.length; i++) {
   for (let k = 0; k < b01[i].length; k++) {
      console.log(b01[i][k]);
      out01 += b01[i][k] + ' ';
   }
   out01 += '<br>';
}
document.querySelector('.out-01').innerHTML = out01;

// Выведем только те массивы которые больше 4
out01 = ''; // очищаем переменную (перезаписываем)
for (let i = 0; i < b01.length; i++) {
   for (let k = 0; k < b01[i].length; k++) {
      console.log(b01[i][k]);
      if (b01[i][k] > 4) {
         out01 += b01[i][k] + ' ';
      }
   }
   out01 += '<br>';
}
console.log(out01);

// Задача нажимая кнопку передвигать еденицу без использования циклов
let d01 = [1, 0, 0, 0, 0];
document.querySelector('.out-02').innerHTML = d01;
let k01 = 0;
document.querySelector('button').onclick = () => {
   if (k01 + 1 < 5) { //делаем проверку
      d01[k01] = 0;
      d01[k01 + 1] = 1;
      k01++;
   }
   document.querySelector('.out-02').innerHTML = d01;
}

//-------------------------------------------------------------------------------------


// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение 55 
// из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

function f1() {
   let a1 = [12, [45, 87], [55, 13]];
   document.querySelector('.out-1').innerHTML = a1[2][0];
   return a1[2][0];
}
document.querySelector('.b-1').onclick = f1;

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi 
// из массива a2. Возвратите это значение.
function f2() {
   let a2 = [[12, 'hi'], [45, 87], [55, 13]];
   document.querySelector('.out-2').innerHTML = a2[0][1];
   return a2[0][1];
}
document.querySelector('.b-2').onclick = f2;

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 
// значение my из массива a3. Возвратите это значение.


function f3() {
   let a3 = [[1, 2, 3], [3, 4, 5], [6, [7, 'my']]];
   document.querySelector('.out-3').innerHTML = a3[2][1][1];
   return a3[3][1][1];
}
document.querySelector('.b-3').onclick = f3;

// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна вывести в out-4 значение go 
// из массива a4. Возвратите это значение.

function f4() {
   let a4 = [[1, 2, 3], 'go', [3, 4, 5], [6, [7, 'my']]];
   document.querySelector('.out-4').innerHTML = a4[1];
   return a4[1];
}
document.querySelector('.b-4').onclick = f4;

// Task 5
// При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 четные 
// значения из массива a5. Для перебора используем цикл.

function f5() {
   let out5 = '';
   let a5 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
   for (let i = 0; i < a5.length; i++) {
      if (a5[i][0] % 2 == 0) out5 += a5[i][0] + ' ';
      if (a5[i][1] % 2 == 0) out5 += a5[i][1] + ' ';
   }
   document.querySelector('.out-5').innerHTML = out5;
}
document.querySelector('.b-5').onclick = f5;

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 нечетные 
// значения из массива a6. Для перебора используем цикл. Делаем по образу предыдущей задачи.

function f6() {
   let out6 = '';
   let a6 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
   for (let i = 0; i < a6.length; i++) {
      if (a6[i][0] % 2) out6 += a6[i][0] + ' ';
      if (a6[i][1] % 2) out6 += a6[i][1] + ' ';
   }
   document.querySelector('.out-6').innerHTML = out6;
}

document.querySelector('.b-6').onclick = f6;


// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна вывести в out-7 четные значения 
// из массива a7. Как видите, вложенные массивы имеют разную длину, значит, предыдущий 
// вариант уже не работает. Используем цикл. Вывод - через пробел.

function f7() {
   let out = '';
   let a7 = [
       [1, 2, 3, 9],
       [3, 4, 7],
       [5, 6, 8, 32],
       [21, 34, 43],
       [44, 56]
   ];
   for (let i = 0; i < a7.length; i++) {
       for (let k = 0; k < a7[i].length; k++) {
           if (a7[i][k] % 2 == 0) out += a7[i][k] + ' ';
       }
   }
   document.querySelector('.out-7').innerHTML = out;

}

document.querySelector('.b-7').onclick = f7;

