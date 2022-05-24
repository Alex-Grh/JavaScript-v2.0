document.querySelector(".but1").onclick = () => {
   console.log(document.querySelector("#one").value);
   document.querySelector(".but1").style.backgroundColor =
      document.querySelector("#one").value
}
document.querySelector("#one").oninput = () => {
   console.log(document.querySelector("#one").value);
   document.querySelector(".span1").innerHTML = document.querySelector("#one").value
}

document.querySelector(".but2").onclick = () => {
   console.log(document.querySelector("#i2").value);
   let myCheckBox = document.querySelector("#i2");
   console.log(myCheckBox.checked);
   if (myCheckBox.checked) {
      console.log("Нажат");
   } else {
      console.log("Не Нажат");
   }
}

document.querySelector(".but3").onclick = (event) => {
   event.preventDefault();
   // let text1 = document.querySelector("#two");
   // console.log(text1.value);
   // text1.value = "one";
   let form = document.querySelector("form");
   console.log(form);
   console.log(form.elements.two.value);
   console.log(form.elements.three.value);
}

// Task 1
// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.
function f1() {
   let task1 = document.querySelector("#one_1");
   alert(`Номер задачи ${task1.value}`);
}
document.querySelector(".b-1").onclick = f1;

// Task 2
// Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.
function f2() {
   let task2 = document.querySelector("#one_2");
   alert(`Номер задачи ${task2.value}`);
}
document.querySelector(".b-2").onclick = f2;

// Task 3
// Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.
function f3() {
   let task3 = document.querySelector("p.p-3");
   alert("Номер задачи Task 3");
}
document.querySelector(".p-3").onclick = f3

// Task 4. 
/* Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку 
выводите true если checkbox выбран и false если не выбран. 
Вывод везде в задачах, где не указано другое, осуществляется 
в div.out-номер задачи. В данном случае div.out-4
*/
innerHTML = (document.querySelector(".i-4").value);
let myCheckBox11 = document.querySelector(".i-4");
innerHTML = (myCheckBox11.checked);
let task4 = document.querySelector(".out-4");

function f4() {
   if (myCheckBox11.checked) {
      task4.innerHTML = ("Нажат (true)");
   } else {
      task4.innerHTML = ("Не Нажат (false)");
   }
}
document.querySelector(".b-4").onclick = f4;

// Task 5. 
/* 
Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте 
value="task-5" - при нажатии на кнопку b-5 выводите value checkbox 
если checkbox выбран и false если не выбран. Вывод везде в задачах, 
где не указано другое, осуществляется в div.out-номер задачи. 
В данном случае div.out-5
*/
innerHTML = (document.querySelector("task-5"));
let myCheckBox5 = document.querySelector(".i-5");
innerHTML = (myCheckBox5.checked);
let task5 = document.querySelector(".out-5");
function f5() {
   if (myCheckBox5.checked) {
      task5.innerHTML = ("Нажат (true)");
   } else {
      task5.innerHTML = ("Не Нажат (false)");
   }
}
document.querySelector(".b-5").onclick = f5;

// Task 6. 
/* 
Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку 
выводите value из input в div.out-6.
*/
// let myCheckBox6 = document.querySelector(".i-6");
// let task6 = document.querySelector(".out-6");

// function f6() {
//   let a6 =  +myCheckBox6.value;
//   task6.innerHTML = a6;
// }
// document.querySelector(".b-6").onclick = f6;

let myCheckBox6 = document.querySelector(".i-6").value;
let task6 = document.querySelector(".out-6");
function f6() {
   task6.innerHTML = myCheckBox6;
   console.log(myCheckBox6);
}
document.querySelector(".b-6").onclick = f6;


// Task 7. 
/*
Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку 
выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 
если длина пароля больше или равна 6 или 0 если меньше. Для подсчета 
количества символов в строке используйте length.
*/
let myCheckBox7 = document.querySelector(".i-7");
let task71 = document.querySelector(".out-71");
let task72 = document.querySelector(".out-72");
let task73 = document.querySelector(".out-73");

function f7() {
   let a71 = (task71.innerHTML = myCheckBox7.value);
   if (a71.length >= 6) {
      task72.innerHTML = "1";
      task73.innerHTML = `Количество символов ${a71.length}`;
   } else if (a71.length <= 6) {
      task72.innerHTML = "0";
      task73.innerHTML = `Количество символов ${a71.length}`;
   }
}
document.querySelector(".b-7").onclick = f7;

//! Task 8. 
/*
Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте 
внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). 
Добавьте на созданную кнопку событие клик и запуск функции f81. 
Функция должна в .out-81 выводить value созданного input.i-81.
*/
let task80 = document.querySelector(".out-8");
let task81 = document.querySelector(".out-81");
// let in81 = ("<input type=\"text\" class=\"i-81\" value=\"task-8\">");
// let but81 = ("<button class=\"button-primary b-81\"> Task-8 </button>");
// let in81 = ("<input type='text' class='i-81' value='task-8'>");
// innerHTML = "<input type='text' class='i-81' value='task-8'>".value;
// let in811 = document.querySelector(".i-81");
// innerHTML = "<input type='text' class='i-81' value='task-8'></input>";
let but81 = "<button class='button-primary b-81'> Task-8 </button>";

function f8() {
   // кнопку создаем через ....innerHTML = '<button....</button>
   // т.е. как строку и в ставляем на страницу
   //  потом получаем кнопку со страницы и вешаем событие
   //    вашасозданная кнопка.onclick = f81;

   // task80.innerHTML = in81.value;
   task80.innerHTML = but81;
   document.querySelector(".b-81").onclick = f81;
}

function f81() {
   // innerHTML = (document.querySelector(".i-81").value);
   // let a811 = document.querySelector(".i-81").value;
   // let in81 = document.querySelector(".i-81");
   // document.querySelector(".i-81");
   // let in81 = document.querySelector(".i-81");
   // task81.innerHTML = in81.value;
   // innerHTML = "<input type='hidden' class='i-81' value='1234'></input>"; 
   // innerHTML = document.querySelector("1234");
   // let in81 = document.querySelector(".i-81");
   let in81 ="<input type='text' class='i-81' value='1234'></input>";
   task81.innerHTML = in81;
   console.log(in81);   
}
document.querySelector(".b-8").onclick = f8;

// Task 9. 
/*
Создайте один input(radio).r-9 и button.b-9 - при нажатии на 
button если radio.r-9 выбран (активен, checked) выводите 
в .out-9 - value прописанное в r-9, либо 0 если не активен.
*/
innerHTML = (document.querySelector(".r9").value);
let myRadio11 = document.querySelector(".r9");
innerHTML = (myRadio11.checked);
let div9 = document.querySelector(".out-9");

function f9() {
if (myRadio11.checked) {
   div9.innerHTML = innerHTML = (document.querySelector(".r9").value);
} else {
   div9.innerHTML = ("0");
}
}
document.querySelector(".b-9").onclick = f9;



