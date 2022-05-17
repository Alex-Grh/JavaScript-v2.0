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
alert (`Номер задачи ${task1.value}`);
}
document.querySelector(".b-1").onclick = f1
