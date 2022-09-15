// вешаем событие на инпут
// для input подходит onchange или oninput
// onchange сработает когда input потеряет фокус
// oninput сработает при любом изменении 


// Срабатывает только для букв и цифр
// onkeypress это событие происходит когда клавиша нажата. 
// charCode - событие показывает код нажатой клавиши 
// code - событие показывает какая клавиша нажата
// key - событие показывает какая клавиша нажата
// keyCode - событие показывает код нажатой клавиши


document.querySelector('.i-01').oninput = function (event) {
   console.log(1);
   console.log(event);
}

document.querySelector('.i-02').onkeypress = function (event) {
   console.log('---------- onkeypress ----------');
   console.log('charCode:' + event.charCode); // charCode - событие показывает код нажатой клавиши
   console.log('code:' + event.code); // code - событие показывает какая клавиша нажата
   console.log('key:' + event.key); // key - событие показывает какая клавиша нажата
   console.log('keyCode:' + event.keyCode); // keyCode - событие показывает код нажатой клавиши
   // console.log(event);
}


// onkeydown событие фиксируется когда клавиша нажата но еще неотпущена
// срабативает при нажатии других клавиш верх, вниз, влево, вправо, контрл, шифт, CapsLock 

document.querySelector('.i-02').onkeydown = function (event) {
   console.log('---------- onkeydown ----------');
   console.log('charCode:' + event.charCode); // charCode - событие показывает код нажатой клавиши
   console.log('code:' + event.code); // code - событие показывает какая клавиша нажата
   console.log('key:' + event.key); // key - событие показывает какая клавиша нажата
   console.log('keyCode:' + event.keyCode); // keyCode - событие показывает код нажатой клавиши
   // console.log(event);
   if (event.key == 'CapsLock ') {
      document.querySelector('.ch-01').checked = true;
   } else {
      document.querySelector('.ch-01').checked = false;
   }
}

// событие onkeyup
document.querySelector('.i-02').onkeydown = function (event) {
   console.log('---------- onkeyup ----------');
   console.log('charCode:' + event.charCode); // charCode - событие показывает код нажатой клавиши
   console.log('code:' + event.code); // code - событие показывает какая клавиша нажата
   console.log('key:' + event.key); // key - событие показывает какая клавиша нажата
   console.log('keyCode:' + event.keyCode);
}

document.querySelector('.i-03').onkeypress = function (event) {
   console.log('---------- onkeypress ----------');
   console.log('charCode:' + event.charCode); // charCode - событие показывает код нажатой клавиши
   console.log('code:' + event.code); // code - событие показывает какая клавиша нажата
   console.log('key:' + event.key); // key - событие показывает какая клавиша нажата
   console.log('keyCode:' + event.keyCode); // keyCode - событие показывает код нажатой клавиши
   // console.log(event);
const a = {
q: 'w',
w: 'e'
}
document.querySelector('.i-03').value += a[event.key];
   return false;
}

// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. 
Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
   let out1 = document.querySelector('.out-1');
   out1.innerHTML = document.querySelector('.i-1').value;  
   
}

// ваше событие здесь!!!
document.querySelector('.i-1').oninput = t1;

//Вар2
// function t1(event) {
// 	console.log(event);
// 	document.querySelector('.out-1').textContent += event.key;
// 	return event.key;
// }

// document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и 
возвращает его. */

function t2(event) {
   let out2 = document.querySelector('.out-2');
   out2.innerHTML = event.charCode;
   // out2.innerHTML += event.charCode + ' ';
}

// ваше событие здесь!!!
document.querySelector('.i-2').onkeypress = t2;

//Вар 2
// function t2(event) {
// 	console.log(event);
// 	document.querySelector('.out-2').textContent += event.key;
// }

// document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен 
символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3() {

}

// ваше событие здесь!!!