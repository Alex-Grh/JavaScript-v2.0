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

let a1 = [5,7,9, 11, 13, 15];
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

let a2 = [5,7,9, 11, 13, 15];

function f2() {

}

document.querySelector('.b-2').addEventListener('click', f2);
