let a = 6;
let b = "Hello";
console.log(a);

let inputIn = document.querySelector(".input-in"); //input
let button = document.querySelector("button"); //button
let div = document.querySelector(".out");

button.onclick = function () {
   // кнопка будет нажата
   console.log("Работает!");
   // console.log(inputIn.value);
   let b = +inputIn.value;
   console.log(b + 10);
   div.innerHTML = b;
   inputIn.value = " ";
}