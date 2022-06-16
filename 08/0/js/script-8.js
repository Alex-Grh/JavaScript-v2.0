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
// Найти сумму чисел от 0 +...+ 10 // Проверка до p <= 3 // 1+2+3 = 6 Все правильно
let sum = 0;
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
let flag = 3;

while (p < 4) {
   let p1 = 0;
   while(p1 <4) {
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