// Task 0 ============================================

// Вешаем событие onclick на one
document.querySelector('.one').onclick = function (event) {
   console.log(event); // event (событие) содержит всю информацию о событии
   console.log('click');
}

// Вешаем событие onclick на two
document.querySelector('.two').onclick = function () {
   console.log('click2');
}

// Вешаем событие двойной клик ondblclick на three
document.querySelector('.three').ondblclick = function () {
   console.log('ckick3');
}

// Событие oncontextmenu (вызывается меню правой кнопркой мыши)
document.querySelector('.three').oncontextmenu = function () {
   console.log('right button');
   return false; // блокируем меню браузера
}

// Событие мыши onmousemove. Пока происходит движение мыши в заданом квадрате 
// выводим в консоль количество действий
// С ним очень акуратно сильно грузит комп

// document.querySelector('.four').onmousemove = function () {
//    console.log("+");
// }

// Увеличиваем квадрат при движении мыши
// let w = 75;
// document.querySelector('.four').onmousemove = function () {
//    document.querySelector('.four').style.width = w + 'px';
//    w++;
// }

// Навидение на блок onmouseenter и меняем цвет квадрата
document.querySelector('.four').onmouseenter = function () {
   document.querySelector('.four').style.background = 'red';
   console.log(1);
}
document.querySelector('.four').onmouseleave = function () {
   document.querySelector('.four').style.background = 'green';
   console.log(2);
}

// Пока нажатая клавиша цвет неменяется
document.querySelector('.four').onmousedown = function () {
   document.querySelector('.four').style.background = 'orange';
   console.log(3);
}

// После нажатия отпустить клавишу в квадрате поменяет цвет
document.querySelector('.four').onmouseup = function () {
   document.querySelector('.four').style.background = 'blue';
   console.log(4);
}

// Вешаем событие onclick на кнопку but01 при нажатии кнопки меняется прогрес 
let p = 10;
document.querySelector('.but01').onclick = function (event) {
   p++; // увеличиваем p и присваиваем его в progress
   document.querySelector('progress').value = p;  // увеличиваем p и присваиваем его в progress
}


//!----------------------------------------------------------------------------------------
//!----------------------------------------------------------------------------------------
//!----------------------------------------------------------------------------------------

// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция 
должна возвращать и выводить на экран содержимое блока (только текст). 
Вывод осуществляется в out-1.  */

function t1() {
   document.querySelector('.out-1').innerHTML = document.querySelector('.div-1').innerHTML;
}
document.querySelector('.div-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. 
Функция должна возвращать true или false в зависимости от того, нажата ли 
клавиша alt или нет в момент клика. Также, выводите на экран результат. 
Вывод осуществляется в out-2. */

function t2() {
   let out2 = document.querySelector('.out-2');
   let b2 = document.querySelector('.div-2');
   b2.onclick = function (event) {
      if (event.altKey) {
         out2.innerHTML = true;
         console.log(true);
      } else {
         out2.innerHTML = false;
         console.log(false);
      }
   }
}

// ваше событие здесь!!!
document.querySelector('.div-2').onclick = t2;

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину 
блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. 
Ширину выводите в out-3. */

let w3 = 75;

function t3() {
   let a3 = document.querySelector('.out-3');
   document.querySelector('.div-3').onclick = function () {
      document.querySelector('.div-3').style.width = w3 + 'px';
      // w3 += 5; // увеличиваем на 5px
      w3 = w3 + 5; // увеличиваем на 5px
      a3.innerHTML = w3;
   }
}

// ваше событие здесь!!!
document.querySelector('.div-3').onclick = t3;

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. 
Функция должна возвращать и выводить на экран содержимое блока (только текст). 
Вывод осуществляется в out-4. */

function t4() {
   document.querySelector('.out-4').innerHTML = document.querySelector('.div-4').innerHTML;
}

// ваше событие здесь!!!
document.querySelector('.div-4').ondblclick = t4;

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому 
удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
   document.querySelector('.div-5').classList.toggle('active');
}

// ваше событие здесь!!!
document.querySelector('.div-5').ondblclick = t5;


// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли 
он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление 
класса .hide */

function t6() {
   // add – добавление класса;
   // remove – удаление класса;
   // toggle – переключение класса;
   // contains – проверка наличия класса у элемента.
   document.querySelector('.ul-6').classList.toggle('hide');
}

// ваше событие здесь!!!
document.querySelector('.div-6').ondblclick = t6;

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. 
При повторном клике - удаляйте. */

function t7() {
   // document.querySelector('.div-7').classList.toggle('active');
   this.classList.toggle('active');
}

// ваше событие здесь!!!
document.querySelector('.div-7').oncontextmenu = t7;


// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе 
отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
let ch8 = document.querySelector('.ch-8');
function t8() {
   if (ch8.checked) {
      oncontextmenu = t8;
      return false;
   }
}
// ваше событие здесь!!!
document.querySelector('.ch-8').onchange = t8;

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой 
мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
   document.querySelector('.div-9 img').setAttribute('src', 'img/2.png')
}

// ваше событие здесь!!!
document.querySelector('.div-9').oncontextmenu = t9;

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении 
мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
   document.querySelector('.div-10 img').setAttribute('src', 'img/2.png')
}

// ваше событие здесь!!!
document.querySelector('.div-10').onmouseenter = t10;

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении 
мыши (mouseenter)  - меняйте изображение на 2.png. При уведении 
мыши - mouseleave - возвращайте исходное изображение. */

function t11() {
   document.querySelector('.div-11 img').src = 'img/2.png';
   this.onmouseleave = () => {
      document.querySelector('.div-11 img').src = 'img/1.png';
   }
}
// ваше событие здесь!!!
document.querySelector('.div-11').onmouseenter = t11;

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки 
мыши - добавляйте ему класс active. */

function t12() {
   document.querySelector('.div-12').classList.add('active');
}

// ваше событие здесь!!!
document.querySelector('.div-12').onmousedown = t12;

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки 
мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при 
отпускании мыши - удаляйте класс active. */

document.querySelector('.div-13').onmousedown = () => {
   document.querySelector('.div-13').classList.add('active');
}

document.querySelector('.div-13').onmouseup = () => {
   document.querySelector('.div-13').classList.remove('active');
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему 
событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
   document.querySelector('.div-14').classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении 
мыши увеличивайте число внутри на 1. */

function t15() {
   let div15 = document.querySelector('.div-15').innerHTML;
   div15++;
   document.querySelector('.div-15').innerHTML = div15;
}
// ваше событие здесь!!!
document.querySelector('.div-15').onmousemove = t15;

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении 
мыши увеличивайте ширину блока на 1px. */

let w16 = 75;

function t16() {

   document.querySelector('.div-16').style.width = w16 + 'px';
   w16++;
}
// ваше событие здесь!!!
document.querySelector('.div-16').onmousemove = t16;

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые 
включают и отключают событие move в задании 16. */

function t17On() {
   document.querySelector('.div-16').onmousemove = t16;
}
function t17Off() {
   document.querySelector('.div-16').onmousemove = false;
}
// ваше событие здесь!!!
document.querySelector('.b-17_on').onclick = t17On;
// ваше событие здесь!!!
document.querySelector('.b-17_off').onclick = t17Off;


// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок 
его ширину при событии onmouseenter. */

function t18() {
   // получаем ширину 
   let w18 = document.querySelector('.div-18').offsetWidth;
   // выводим
   document.querySelector('.div-18').innerHTML = w18;
}
// ваше событие здесь!!!
document.querySelector('.div-18').onmouseenter = t18;

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок 
его классы при событии onmouseout. */

function t19() {
   document.querySelector('.div-19').innerHTML = document.querySelector('.div-19').className;
}
// ваше событие здесь!!!
document.querySelector('.div-19').onmouseout = t19;

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value 
на 1 при каждом событии mousemove внутри progress. */
let p20 = 25;
function t20() {
   p20++;
   document.querySelector('.progress-20').value = p20;
   document.querySelector('.out-20').innerHTML = p20;
}
// ваше событие здесь!!!
document.querySelector('.progress-20').onmousemove = t20;