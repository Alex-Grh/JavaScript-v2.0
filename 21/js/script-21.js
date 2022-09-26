
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
   if (div31){
      out3.innerHTML = div31.innerHTML;
   }   else if (div32) {
      out3.innerHTML = div32.innerHTML;
   }   
}

// ваше событие здесь!!!
let div31 = document.querySelector('.div-3_1').addEventListener('touchstart', t3);
let div32 = document.querySelector('.div-3_2').addEventListener('touchstart', t3);