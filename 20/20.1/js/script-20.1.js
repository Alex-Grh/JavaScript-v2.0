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
   console.log(event);
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
   console.log(event);
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


//!----------------------------------------------------------------------------------------

// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и 
возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
   document.querySelector('.out-1').innerHTML = document.querySelector('.i-1').value;
}

// ваше событие здесь!!!
document.querySelector('.i-1').oninput = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа 
и возвращает его. */

function t2(event) {
   document.querySelector('.out-2').innerHTML = event.charCode;

}

// ваше событие здесь!!!
document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true 
если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(event) {
   let out3 = document.querySelector('.out-3');
   if (event.charCode >= 48 && event.charCode <= 57) {
      out3.innerHTML = false;
   } else {
      out3.innerHTML = true;
   }
}

// ваше событие здесь!!!
document.querySelector('.i-3').onkeypress = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только 
символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
   // let out4 = document.querySelector('.out-4');
   // out4.innerHTML = document.querySelector('.i-4').value.toLowerCase();

   let out = event.key.toLowerCase(); // key - событие показывает какая клавиша нажата
   //Метод toLowerCase() возвращает значение строки, на которой он был вызван, 
   //преобразованное в нижний регистр.
   document.querySelectorAll('.i-4').value = out;
   document.querySelector('.out-4').innerHTML += out;
}

// ваше событие здесь!!!
document.querySelector('.i-4').onkeypress = t4; // onkeypress это событие происходит когда клавиша нажата.


// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все 
вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
   let out = event.key.toUpperCase(); // key - событие показывает какая клавиша нажата
   //Метод toUpperCase() возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр.
   //Метод toLocaleUpperCase() возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр согласно правилам преобразования регистра локали.
   document.querySelectorAll('.i-5').value = out;
   document.querySelector('.out-5').innerHTML += out;
}

// ваше событие здесь!!!
document.querySelector('.i-5').onkeypress = t5;


// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только 
символы в нижнем регистре.  */

/*
Метод preventDefault () интерфейса Event сообщает User agent, что 
если событие не обрабатывается явно, его действие по умолчанию не 
должно выполняться так, как обычно.
*/

function t6(event) {
   event.preventDefault();

   let lowCases = event.key.toLowerCase();
   event.target.value += lowCases;
}

// ваше событие здесь!!!
document.querySelector('.i-6').onkeypress = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 
случаный символ из массива a7 при каждом вводе символа. */

function t7() {
   const a7 = ['q', 2.3, 'w', 0, 'r', 'd', 'p', 'm', 9, 'h', 'x', 'b', 'z', 7];
   let out = document.querySelector('.out-7');
   out.innerHTML += a7[Math.floor(Math.random() * a7.length)];
}

// ваше событие здесь!!!
document.querySelector('.i-7').onkeypress = t7;


// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый 
в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
   const a = {
      i: '1',
      o: '0',
      l: '7'
   }
   let out = event.key;
   for (let key in a) {
      if (key === event.key) {
         out = a[key]
      }
   }
   document.querySelector(".out-8").innerHTML += out;
}

// ваше событие здесь!!!
document.querySelector('.i-8').onkeypress = t8;

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество 
нажатых клавиш стрелка вниз. */

//key:ArrowDown 
//keyCode:40

let out9 = 0;
function t9(event) {
   if (event.code === 'ArrowDown') {
      out9++;
   }
   // if (event.keyCode === 40) {
   //    out9++      
   // } 
   document.querySelector('.out-9').innerHTML = out9;
}

// ваше событие здесь!!!
document.querySelector(".i-9").onkeydown = t9;

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии 
клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. 
Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

// code: ArrowUp
// code: ArrowDown
// code: ArrowLeft
// code: ArrowRight

let countWidth = 64;
let countHeight = 64;

function t10(event) {
   let div10 = document.querySelector('.div-10 img');
   if (event.code == 'ArrowUo' || event.code == 'ArrowDown') {
      countHeight++;
      div10.height = countHeight;
   } else if (event.code == 'ArrowLeft' || event.code == 'ArrowRight') {
      countWidth++;
      div10.width = countWidth;
   }
}

// ваше событие здесь!!!
document.querySelector('.i-10').onkeydown = t10;


// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {

}

// ваше событие здесь!!!

