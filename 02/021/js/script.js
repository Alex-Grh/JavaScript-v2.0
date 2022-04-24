let a = 6;
let b = "Hello";
console.log(a);
console.log(b);

let inputIn = document.querySelector(".input-in");
let button = document.querySelector("button");
let div = document.querySelector(".out");

// Чтобы устранить ошибку «Не удается установить свойство onclick со значением null», поместите тег сценария JS в конец тега body. Сценарий должен запускаться после создания элементов DOM.

button.onclick = function () {
   // кнопка будет нажата
   console.log("Работает!");
   // console.log(inputIn.value); //то что введено в input
   let b = +inputIn.value; //+ перевести в число
   console.log(b + 2);
   div.innerHTML = b;
   inputIn.value = "";
}

// Task 1
// Создайте две переменные a1 = 7 и b1 = 9. Выведите в консоль результа умножения a на b.
let a1 = 7;
let b1 = 9;
console.log(a1 * b1);

// Task 2
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.