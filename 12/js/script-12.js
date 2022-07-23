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