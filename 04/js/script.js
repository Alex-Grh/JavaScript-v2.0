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

