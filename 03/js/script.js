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
   if (a21 > a22) {
      div2.innerHTML = a21;
   } else if (a21 < a22) {
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
   } else if (a31 < a32) {
      div3.innerHTML = a32;
   } else {
      div3.innerHTML = "Значения равны!";
   }
}
document.querySelector(".b-3").onclick = f3;

// Task 4.
/*
Создайте на странице input[type=number] с классом i-4, 
куда пользователь может ввести год своего рождения. 
Есть кнопка b-4 которая запускает функцию f4. 
Функция должна вывести в .out-4 число 1 если пользователю 
больше или равно 18 лет, и 0 если меньше. 
*/
let i4 = document.querySelector(".i-4");
let div4 = document.querySelector(".out-4");

function f4() {
   let a4 = i4.value;
   if (a4 >= 18) {
      div4.innerHTML = "1";
   } else if (a4 < 18) {
      div4.innerHTML = "0";
   }
}
document.querySelector(".b-4").onclick = f4;

// Task 5.
/*
Создайте на странице input[type=number] с классом i-5,
куда пользователь может ввести число. Есть кнопка b-5 которая
запускает функцию f5. Функция должна вывести в .out-5 символ m
если число меньше нуля, 0 если число равно нулю и 1 если больше.
*/
let i5 = document.querySelector(".i-5");
let div5 = document.querySelector(".out-5");

function f5() {
   let a5 = i5.value;
   if (a5 < 0) {
      div5.innerHTML = "m";
   } else if (a5 == 0) {
      div5.innerHTML = "0";
   } else if (a5 > 0) {
      div5.innerHTML = "1";
   }
}
document.querySelector(".b-5").onclick = f5;

// Task 6.
/*
Создайте на странице input[type=number] с классом i-6, 
куда пользователь может ввести число. Есть кнопка b-6 которая запускает 
функцию f6. Функция должна вывести в .out-6 слово even если число 
четное и odd если нечетное. Для проверки четности используется 
целочисленный остаток от деления на 2 (оператор %). 
Если остаток равен нулю - четное, нет - нечетное.
*/
let i6 = document.querySelector(".i-6");
let div6 = document.querySelector(".out-6");

function f6() {
   let a6 = i6.value
   if (a6 % 2 == 0) {
      div6.innerHTML = "even"; //если число четное
   } else if (a6 % 2 != 0) {
      div6.innerHTML = "odd"; //если число нечетное
   }
}
document.querySelector(".b-6").onclick = f6;

// Task 7.
/*
Даны 2 input - i-71 и i-72, оба - input[type=number]. 
При нажатии кнопки b-7 срабатывает функция f7. Функция
должна число из i-71 возвести в степень i-72, вывести результат в out-7. 
Для возведения в степень можно использовать **, или Math.pow.
*/
let i71 = document.querySelector(".i-71");
let i72 = document.querySelector(".i-72");
let div7 = document.querySelector(".out-7");

function f7() {
   let a71 = i71.value;
   let a72 = i72.value;
   div7.innerHTML = a71 ** a72;
}
document.querySelector(".b-7").onclick = f7;

// Task 8.
/*
Дан select s-8, который содержит 3 значения: 1, 2, 3.
Дана кнопка b-8. При ее нажатии срабатывает функция f8.
Функция должна получить выбранное в select число, потом с
помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’.
И если число выбрано - 1, то вывести в out-8 строку one,
если 2 - two, если 3 - three.
*/
let div8 = document.querySelector(".out-8");
let s8 = document.querySelector(".s-8");

function f8() {
   let a81 = +s8.value;
   switch (a81) {
      case 1:
         div8.innerHTML = "one";
         break;
      case 2:
         div8.innerHTML = "two";
         break;
      case 3:
         div8.innerHTML = "three";
         break;
      default:
         div8.innerHTML = "Нет такого значения";
   }
}
document.querySelector(".b-8").onclick = f8;

// Task 9.
/*
Создайте на странице input[type=number] с классом i-9,
куда пользователь может ввести номер квартиры.
Есть кнопка b-9 которая запускает функцию f9.
Функция должна вывести в .out-9 номер подъезда,
в котором находится квартира.
если от 1 до 32 - то вывести цифру 1
если от 33 до 43 - то вывести 2
если от 44 до 64 - то 3.
В противном случае, вывести 0.
*/
let div9 = document.querySelector(".out-9");
let i9 = document.querySelector(".i-9");

function f9() {
   let a91 = i9.value;
   if (a91 >= 1 && a91 <= 32) {
      div9.innerHTML = 1;
   } else if (a91 >= 33 && a91 <= 43) {
      div9.innerHTML = 2;
   } else if (a91 >= 44 && a91 <= 64) {
      div9.innerHTML = 3;
   } else {
      div9.innerHTML = 0;
   }
}
document.querySelector(".b-9").onclick = f9;

// Task 10.
/*
Дан select s-100. По нажатию кнопки, выведите value
выбранного option в out-10.
*/
let div10 = document.querySelector(".out-10");
let s100 = document.querySelector(".s-100");

function f10() {
   let a101 = +s100.value;
   switch (a101) {
      case 6:
         div10.innerHTML = 6;
         break;
      case 7:
         div10.innerHTML = 7;
         break;
      case 11:
         div10.innerHTML = 11;
         break;
      case 9:
         div10.innerHTML = 9;
         break;
   }
}
document.querySelector(".b-10").onclick = f10;

// Task 11.
/*
Дан select s-110. По изменению состояния select
(событие onchange) выведите value выбранного option в out-11.
*/
let diveleven = document.querySelector(".out-eleven");
let s111 = document.querySelector(".s-eleven");

function f11() {
   let a111 = +s111.value;
   switch (a111) {
      case 6:
         diveleven.innerHTML = 6;
         break;
      case 7:
         diveleven.innerHTML = 7;
         break;
      case 11:
         diveleven.innerHTML = 11;
         break;
      case 9:
         diveleven.innerHTML = 9;
         break;
   }
}
document.querySelector(".s-eleven").onchange = f11;

// Task 12.
/* Дан input i-120. По нажатию кнопки получите значение из input 
в переменную, а затем выведите в out-12 typeof полученной переменной. 
Typeof позволяет определить тип данных. Обратите внимание, 
данная задача уже решена, нужно убрать комментарии и изучить работу.
*/

let i120 = document.querySelector(".i-120");

function f12() {
   let a120 = i120.value;
   document.querySelector(".out-12").innerHTML = (typeof a120);
}
document.querySelector(".b-12").onclick = f12;

// Task 13.
/*
Дан input i-130. В отличие от предыдущего задания - input type number. 
По нажатию кнопки получите значение из input в переменную, а затем 
выведите в out-13 typeof полученной переменной. 
Typeof позволяет определить тип данных. Если вы правильно 
все сделали - то удивительно, но тип данных будет string! 
Подумайте почему так?
*/
let i130 = document.querySelector(".i-130");

function f13() {
   let a130 = +i130.value;
   document.querySelector(".out-13").innerHTML = (typeof a130);

}
document.querySelector(".b-13").onclick = f13;

// Task 13.
/*
Дан input i-141 и input-142, type=number. Дан select s-143, 
который содержит две операции - +, -, *, / . 
Дана кнопка b-14, при нажатии на которую срабатывает 
функция f14. Функция выводит в out-14 результат 
операций выбранной в 3-м select к числам введенным в первом 
и втором input. Например выбрано 1 13 +, нужно вывести 
результат операции 1+13 т.е. 14.
*/
let i141 = document.querySelector(".i-141");
let i142 = document.querySelector(".i-142");
let div140 = document.querySelector(".out-14");
let s143 = document.querySelector(".s-143");

function f14() {
   let a141 = +i141.value;
   let a142 = +i142.value;
   let a144 = s143.value;
   switch (a144) {
      case "+":
         div140.innerHTML = a141 + a142;
         break;
      case "-":
         div140.innerHTML = a141 - a142;
         break;
      case "*":
         div140.innerHTML = a141 * a142;
         break;
      case "/":
         div140.innerHTML = a141 / a142;
         break;
   }
}

document.querySelector(".b-14").onclick = f14;