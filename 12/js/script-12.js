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
   for (let k = 0; k < b01[i].length; k++){
      console.log (b01[i][k]);
      out01 += b01[i][k];
   }
}
document.querySelector('.out-01').innerHTML = out01;