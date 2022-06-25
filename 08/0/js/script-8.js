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