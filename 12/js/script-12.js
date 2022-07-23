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

