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
innerHTML = (document.querySelector(".i-5").value);
let task6 = document.querySelector(".out-5");
function f6() {

}
document.querySelector(".b-6").onclick = f6