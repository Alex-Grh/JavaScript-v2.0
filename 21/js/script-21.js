
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
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */
document.querySelector('.div-1').addEventListener('touchstart', myTouch);
function t1() {
   document.querySelector('.out-1').innerHTML += "touch";
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

function t2() {

}

// ваше событие здесь!!!