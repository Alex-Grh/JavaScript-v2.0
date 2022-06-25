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