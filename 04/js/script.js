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
}

