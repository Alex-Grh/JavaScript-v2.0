
document.querySelector('.block-1').addEventListener('touchstart', myTouch);
document.querySelector('.block-1').addEventListener('touchend', myTouchEnd);
document.querySelector('.block-2').addEventListener('touchmove', myTouchMove);// событие двигаем пальцем


function myTouch(event) {
   console.log(event);
   console.log('touch');
   document.querySelector('.out-01').innerHTML = event.touches.lenght;
   document.querySelector('.out-02').innerHTML += 'work' + " ";
}

function myTouchEnd(event) {
    document.querySelector('.out-03').innerHTML += 'end' + " ";
}

function myTouchMove(event) {
   event.preventDefault();
   console.log(event);
   document.querySelector('.out-01').innerHTML = event.touches.lenght;   
   document.querySelector('.out-03').innerHTML += 'move' + " ";
   return false;
}

//!------------------------------------------------------------------------------------
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch 
если событие сработает. */

function t1() {
   document.querySelector('.out-1').innerHTML += "touch" + " ";
}

// ваше событие здесь!!!
document.querySelector('.div-1').addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число 
срабатываний события. */

function t2(event) {
   document.querySelector('.out-2').innerHTML = event.touches.lenght; 
}

// ваше событие здесь!!!
document.querySelector('.div-2').addEventListener('touchstart', t2);

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер 
блока 1 или 2 на котором сработало событие. */
let out3 = document.querySelector('.out-3');
function t3() {   
      out3.innerHTML = this.innerHTML;   
}

// ваше событие здесь!!!
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart 
на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
   
   document.querySelector('.out-4').innerHTML += "touch" + " ";
}

// ваше событие здесь!!!
let b4 = document.querySelector('.b-4').onclick = t4;
b4 = document.querySelector('.div-4').addEventListener('touchstart', t4);

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
   document.querySelector('.div-4').removeEventListener('touchstart', t4);
}

document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите 
в out-6 слово touchend. */

function t6() {
   document.querySelector('.out-6').innerHTML += "touchend" + " ";
   // document.querySelector('.out-6').innerHTML = 'ontouchend';
}

// ваше событие здесь!!!
document.querySelector('.div-4').addEventListener('touchstart', t6);


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого 
окрашивайте блок в красный цвет. */

function t7() {
   document.querySelector('.div-7').style.backgroundColor = 'red';
}

// ваше событие здесь!!!
document.querySelector('.div-7').addEventListener('touchstart', t7);

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании 
окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, 
   pink, yellow] */

   let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
function t8() {
   let randomColor = Math.floor(Math.random() * a8.length);
   document.querySelector('.div-8').style.backgroundColor = a8[randomColor];
}

// ваше событие здесь!!!
document.querySelector('.div-8').addEventListener('touchstart', t8);

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных 
касаний в out-9. */

function t9(event) {
   document.querySelector('.out-9').innerHTML = event.touches.length;
}

// ваше событие здесь!!!
document.querySelector('.div-9').addEventListener('touchstart', t9);

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании 
события - увеличивайте его ширину на 1. */
let a10 = 75;
function t10() {
   a10++;
  document.querySelector('.div-10').style.width = a10 + 'px';
}

// ваше событие здесь!!!
document.querySelector('.div-10').addEventListener('touchstart', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. 
При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
   let x = event.touches[0].radiusX;
   let y = event.touches[0].radiusY;
   document.querySelector('.out-11').innerHTML = `radiusX = ${x}.  radiusY = ${y}`;
}

// ваше событие здесь!!!
document.querySelector('.div-11').addEventListener('touchstart', t11);