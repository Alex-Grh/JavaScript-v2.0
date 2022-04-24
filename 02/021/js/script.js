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

