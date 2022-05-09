// let a = 6;
// if (a > 9) {
//    console.log('Yes');
// } else {
//    console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');
button.onclick = () => {
   let num = +input.value;
   if (num >= 16 && num < 60) {
      console.log('Welcom');
   } else if (num > 60) {
      console.log('Ты точно сюда?');
   }
   else {
      console.log('Ты не пройдешь!');
   }
   switch (num) {
      case 15:
         console.log('Потерпи');
         break;
      case 16:
         console.log('Можно');
         break;
      default:
         console.log('Ok');
   }
}

// Домашнее задание

// Task 1
/*
При нажатии кнопки b-1 срабатывает функция f1. 
Функция должна прочитать содержимое i-1 и сравнить 
его с числом 4 (сравнение ==). Результат сравнения - true 
или false выведите в out-1.
*/
let i1 = document.querySelector(".i-1"); //введите число Input i-1
let div1 = document.querySelector(".out-1"); //вывести сравнения - true или false
let div11 = document.querySelector(".out-11"); //вывести результат число

function f1() {
   let b11 = i1.value
   div11.innerHTML = b11;
   if (b11 == 4) {
      div1.innerHTML = true;
      console.log(true);
   } else {
      div1.innerHTML = false;
      console.log(false);
   }
}
document.querySelector(".b-1").onclick = f1; //срабатывает кнопка после клика

// Task 2.
/*
Даны две переменные a21 и a22. При нажатии кнопки b-2, 
запускается функция f2. Функция должна сравнить переменные 
с помощью if else и вывести в out-2 число, которое больше. 
Вариант равенства переменных не рассматриваем.*/
let i21 = document.querySelector(".i-21");
let i22 = document.querySelector(".i-22");
let div2 = document.querySelector(".out-2"); //вывести в out-2 число, которое больше

function f2() {
let a21 = i21.value;
let a22 = i22.value;
if (a21 > a22 ){
div2.innerHTML = a21;
} else if (a21 < a22){
div2.innerHTML = a22;
} else {
   div2.innerHTML = "Значения равны!";
}
}
document.querySelector(".b-2").onclick = f2;

// Task 3.
/*
Даны 2 input - i-31 и i-32, оба - input[type=number]. 
При нажатии кнопки b-3 срабатывает функция f3. 
Функция должна прочитать содержимое i-31 и i-32 в переменные 
и сравнить их, вывести в out-3 большее число.
Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.
*/
let i31 = document.querySelector(".i-31");
let i32 = document.querySelector(".i-32");
let div3 = document.querySelector(".out-3");

function f3() {
let a31 = i31.value;
let a32 = i32.value;
if (a31 > a32) {
   div3.innerHTML = a31;
} else if (a31 < a32){
   div3.innerHTML = a32;
} else {
   div3.innerHTML = "Значения равны!";
}
}
document.querySelector(".b-3").onclick = f3;