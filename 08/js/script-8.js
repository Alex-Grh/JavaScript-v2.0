for (let i = 0; i < 6; i++) {
   console.log (i);
}

let k = 0;
while (k < 15) {   
   k++;
   console.log ("k: " + k);  
   // k++;
}
// Задача 1
// Найти сумму чисел от 0 +...+ 10 // Проверяем делаем р до 3 (p <= 3) // 1+2+3 = 6 Все правильно

let sum = 0; // за пределами цикла чтобы внутрицикла можно было менять
let p = 0;
while (p <= 10) {
   sum = sum + p;
   p++;
}
console.log("sum = " + sum);

// Задача 2
// ****
// ****
// ****

let out0 = document.querySelector(".out-0");
p = 0; // перезаписываем переменную p
let outStr = "";
let flag = 3; // чтобы сделать сдвиги необходимо создать еще одну переменную

while (p < 4) {
   let p1 = 0;
   while(p1 < 4) {
      if (p1 < flag) {
         outStr += "0"; // пробел &nbsp
      } else{
         outStr += "*";
      }      
      p1++
   }
   flag--;
   outStr += "<br>"; 
   p++
}
out0.innerHTML = outStr;

//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла while.

let out101 = document.querySelector(".out-1");
let out102 = "";

function t1() {
  let p = 0; 
while(p < 50){
   p++;
   out102 += p + " ";
}
out101.innerHTML = out102;
}
document.querySelector(".b-1").onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

let out201 = document.querySelector(".out-2");
let out202 = "";

function t2() {
let p = 0;
while(p < 122) {
   p += 2;
   out202 += p + " ";
}
out201.innerHTML = out202;
}

document.querySelector('.b-2').onclick = t2;

//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.
let out301 = document.querySelector(".out-3");
let out302 = "";
function t3() {
   k = 25;
while(k >= 7) {  
   out302 += k + " ";
   k--;
}
out301.innerHTML = out302;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.

let out401 = document.querySelector(".out-4");
let out402 = "";
function t4() {
   let k = 77;
while(k >= 35) {
   
   out402 += k + "_";
   k -=3;
}
out401.innerHTML = out402;
}

document.querySelector('.b-4').onclick = t4;

//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.
let out501 = document.querySelector(".out-5");
let out502 = "";
function t5() {
let k = 0 ;
while (k < 17) {  
   k++;
   if(k % 2 == 0) {
      out502 += k + "_**";
   } 
  if(k % 2 == 0) continue;  
   out502 += k + "_*";
   
}  
out501.innerHTML = out502;
}

document.querySelector('.b-5').onclick = t5;

//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.
let out601 = document.querySelector(".out-6");
let out602 = "";
let i6 = document.querySelector(".i-6");
function t6() {
let k = 1;
while (k <= i6.value) {
   out602 += "******<br>";
   k++;
}
out601.innerHTML = out602;
}

document.querySelector('.b-6').onclick = t6;

//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.
let out701 = document.querySelector(".out-7");
let out702 = "";
let i7 = document.querySelector(".i-7");
function t7() {
  
let k = i7.value;   
while (k >= 0){   
out702 += k + " ";
k--;
out701.innerHTML = out702;

}

}

document.querySelector('.b-7').onclick = t7;

//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.
let out801 = document.querySelector(".out-8");
let out802 = "";
let i81 = document.querySelector(".i-81");
let i82 = document.querySelector(".i-82");
function t8() {
   let k = i81.value;
   while(k <= i82.value) {
      
      out802 += k + " ";
      k++;
   } out801.innerHTML = out802;
}

document.querySelector('.b-8').onclick = t8;

//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.
let out901 = document.querySelector(".out-9");
let out902 = "";
let i91 = document.querySelector(".i-91");
let i92 = document.querySelector(".i-92");
function t9() {
   if (i91.value < i92.value) {
      let k = i91.value; 
      while(k <= i92.value){
    
         out902 += k + " ";
         k++;
      }
      
   }
   else if (i91.value > i92.value) {
      let k = i92.value; 
      while(k <= i91.value)  {
         
         out902 += k + " ";
         k++;
      }
      
   }
   out901.innerHTML = out902;
}

document.querySelector('.b-9').onclick = t9;

//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
let out1001 = document.querySelector(".out-10");
out110 = "";
function t10() {
   let k = 1950;
   while(k <= 2000) {
      
      out110 += k + " ";
      k += 2;
   }
   out1001.innerHTML = out110;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two
let out11 = document.querySelector(".out-11"); //вывод
let div11 = document.querySelectorAll("div.div-11"); //перебор
let out1101 = "";

function t11() {
   let i = 0;
   while(i <= div11.length) {
      
      b = div11[i].innerHTML;
      out1101 += b + " ";
      out11.innerHTML = out1101;
      i++;
   }
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’
let out12 = document.querySelector(".out-12");
let div12 = document.querySelectorAll("div.div-12");
let out120 = "";

function t12() {
   let i = 0; 
   while(i <= div12.length) {
      div12[i].style.background = "orange"; // покрасить исходный div
      b = div12[i].innerHTML;
      out120 += b + " ";
      out12.innerHTML = out120;
      i++;
   }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let i13 = document.querySelectorAll("input[type='text']");
function t13() {
   let i = 0; 
   while(i < i13.length) {
      i13[i].value = i + 1;
      i++;
   }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
let i14 = document.querySelectorAll(".i-14");
let div14 = document.querySelector(".out-14")


function t14() {
   let i = 0; 
   while(i < i14.length) {
      if (i14[i].checked) {
         div14.innerHTML = i14[i].value;
      } i++;
   }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.
let div15 = document.querySelector(".out-15");
let out15 ="";
function t15() {
   let i = 0; 
   while(i <= 10){  
     
   out15 += `${10 - i} ${i} `;
   i++;
} 
div15.innerHTML = out15;
console.log(out15);

}

document.querySelector('.b-15').onclick = t15;