// for (let i = 0; i < 5; i++) { //бесконечный цикл (let i =0; i >= 0; i++)
//    console.log(i);
// }

// for (let i = 5; i > 0; i--) { 
//    console.log(i);
// }

// for (let i = 0; i < 10; i = i + 2) { 
//    console.log(i);
// }

// Выход из цикла заранее

// for (let i = 0; i < 6; i++) {
//    if (i == 4) break;
//    console.log(i);
// } // выводит до 3

// for (let i = 0; i < 6; i++) {

//    console.log(i);
//    if (i == 4) break;
// } // выводит до 4


// let div0 = document.querySelector(".one");
// console.log(div0);
// for (let i = 0; i < 6; i++) {
// div0.innerHTML = ('***********');
//    console.log('***********');
// }

// Вариант 1
let div0 = document.querySelectorAll(".out-0");
console.log(div0);
// div0.style.background = "red";

// for (let i = 0; i < div0.length; i += 1) {
//    console.log(div0[i]);
//    div0[i].style.background = "red";
//    div0[i].onclick = two;
// }
// function two() {
//    console.log("work!!!");
// }

// // Вариант 2
// let b = document.getElementsByClassName("out-0");
// console.log(b);
// for (let i = 0; i < b.length; i++) {
//    b[i].style.border = "3px solid black";
// }

// // Вариант 3
// let c = document.getElementsByTagName("div");
// console.log(c);

// // Вариант 4
document.querySelector(".but-0").onclick = () => {
   let r = document.querySelectorAll("input[type='radio']");
   console.log(r);
   for (let i = 0; i < r.length; i++) {
      if (r[i].checked) {
         console.log(r[i].value);
      }
   }
}

// Подход 1 не правильный
for (let i = 0; i < 10; i++) {
   document.querySelector(".out-01").innerHTML += i + " ";
}

// Правильный подход

let out01 = "";
for (let i = 0; i < 10; i++) {
   if (i == 6) continue; //Пропускаем операцию с 6
   out01 += i + " ";
   // if (i == 6) break;

}
document.querySelector(".out-01").innerHTML = out01;

//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let out1 = "";
function t1() {
   for (let i = 0; i <= 50; i++) {
      out1 += i + " ";
   }
   document.querySelector(".out-1").innerHTML = out1;
}
document.querySelector(".b-1").onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.
let out2 = "";
function t2() {
   for (let i = 0; i <= 122; i += 2) {
      out2 += i + " ";
   }
   document.querySelector(".out-2").innerHTML = out2;
}
document.querySelector(".b-2").onclick = t2;

//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.
let out3 = "";
function t3() {
   for (let i = 25; i >= 7; i--) {
      out3 += i + " ";
   }
   document.querySelector(".out-3").innerHTML = out3;
}
document.querySelector(".b-3").onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

let out4 = "";
function t4() {
   for (let i = 77; i >= 35; i -= 3) {
      out4 += i + "_";
   }
   document.querySelector(".out-4").innerHTML = out4;
}

document.querySelector('.b-4').onclick = t4;

//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.
let out5 = "";
function t5() {
   for (let i = 1; i <= 17; i++) {
      if (i % 2 == 0) {
         out5 += i + "_**";
      }
      if (i % 2 == 0) continue;
      out5 += i + "_*";
   }
   document.querySelector(".out-5").innerHTML = out5;
}

document.querySelector('.b-5').onclick = t5;

//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек 
// без пробелов. Перенос строки - br. Количество строк (итераций, повторений) 
// цикла вводит пользователь в i-6.
let div6 = document.querySelector(".out-6");
let i6 = document.querySelector(".i-6");
let out6 = "";
function t6() {
   for (let i = 1; i <= i6.value; i += 1) {

      // out6 += i + "******<br>";
      out6 += "******<br>";
   }
   div6.innerHTML = out6;
}

document.querySelector('.b-6').onclick = t6;

//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля 
// (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция t7, которая выводит 
// в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1 0
// Задача решается с помощью цикла.
let div7 = document.querySelector(".out-7");
let i7 = document.querySelector(".i-7");
out7 = "";
function t7() {
   for (let i = i7.value; i >= 0; i--) { // от вписаного числа value до 0
      out7 += i + " ";
   }
   // for (let i = 0; i <= i7.value; i++) { // от 0 и до вписаного числа value
   //    out7 += i + " ";
   // }
   div7.innerHTML = out7;
}

document.querySelector('.b-7').onclick = t7;

//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция t8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.
let div8 = document.querySelector(".out-8");
let i81 = document.querySelector(".i-81");
let i82 = document.querySelector(".i-82");
out8 = "";
function t8() {
   for (let i = i81.value; i <= i82.value; i++) {
      out8 += i + " ";
   }
   div8.innerHTML = out8;
}

document.querySelector('.b-8').onclick = t8;

//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, 
// а потом запускаем цикл.
// цикл - один
let div9 = document.querySelector(".out-9");
let i91 = document.querySelector(".i-91");
let i92 = document.querySelector(".i-92");
out9 = "";
function t9() {
   if (i91.value < i92.value) {
      for (let i = i91.value; i <= i92.value; i++) {
         out9 += i + " ";
      }
      // div9.innerHTML = out9;
   }
   else if (i91.value > i92.value) {
      for (let i = i92.value; i <= i91.value; i++) {
         out9 += i + " ";
      }
      // div9.innerHTML = out9;
   }
   div9.innerHTML = out9;
}

document.querySelector('.b-9').onclick = t9;

//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 
// четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через 
// шаг (равный 2).
let div10 = document.querySelector(".out-10");
out10 = "";
function t10() {
   for (let i = 1950; i <= 2000; i += 2) {
      out10 += i + " ";
   }
   div10.innerHTML = out10;
}
document.querySelector('.b-10').onclick = t10;

//!  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two
/*
let out11 = document.querySelector(".out-11"); //вывод
let div11 = document.querySelectorAll(".div-11"); //перебор
let out22 = "";

function t11() { 
   out11.innerHTML = div11.value;
   for (let i = 0; i < div11.length; i++) {
// div11[i] = div11.value;
      console.log(div11[i]);
      div11[i].style.background = "red";
      out22 += i + " ";   
}
//  out11.innerHTML = out22;
   }  
document.querySelector('.b-11').onclick = t11;
*/

let out11 = document.querySelector(".out-11"); //вывод
let div11 = document.querySelectorAll("div.div-11"); //перебор
let out110 = "";
// let b = "";
function t11() {

   for (let i = 0; i <= div11.length; i++) {
      b = div11[i].innerHTML;
      out110 += b + " ";
      out11.innerHTML = out110;
   }
   // out11.innerHTML = out22;
}
document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’
let out12 = document.querySelector(".out-12");
let div12 = document.querySelectorAll("div.div-12");
let out120 = "";
function t12() {
   for (let i = 0; i <= div12.length; i++) {
      div12[i].style.background = "orange"; // покрасить исходный div
      b = div12[i].innerHTML;
      out120 += b + " ";
      out12.innerHTML = out120;
   }
}
document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let i13 = document.querySelectorAll("input[type='text']");

function t13() {
   for (let i = 0; i < i13.length; i++) {
      i13[i].value = i + 1;
   }
}
document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с 
// помощью elem[i].checked.
let i14 = document.querySelectorAll(".i-14");
let div14 = document.querySelector(".out-14")

function t14() {
   for (i = 0; i < i14.length; i++) {
      if (i14[i].checked) {
         div14.innerHTML = i14[i].value;
      }
   }
}

document.querySelector('.b-14').onclick = t14;

//!  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую 
// последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i
let div15 = document.querySelector(".out-15");
let out15 ="";
function t15() {
for (let i = 0; i <= 10; i++){  
      // out15 += (10 - i) + ' ' + i;   
   out15 += `${10 - i} ${i} `;
}
div15.innerHTML = out15;
console.log(out15);
}

document.querySelector('.b-15').onclick = t15;

// function t15() {
//    let out = document.querySelector('.out-15');
//    let text = '';
 
//    for (let i = 0; i <= 10; ++i) {  
//      text += `${10 - i} ${i} `;
//    }
    
//    out.innerHTML = text;
//  }
 
//  document.querySelector('.b-15').addEventListener('click', () => {
//      t15();
//  });