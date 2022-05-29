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
         console.log (r[i].value); 
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
for (let i = 0; i <= 50; i++){
  out1 += i + " ";
}
document.querySelector(".out-1").innerHTML = out1;
}
document.querySelector(".b-1").onclick = t1;