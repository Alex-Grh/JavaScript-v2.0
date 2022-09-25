
document.querySelector('.block-1').addEventListener('touchstart', myTouch);
document.querySelector('.block-1').addEventListener('touchstart', myTouch);

function myTouch(event) {
   console.log(event);
   console.log('touch');
   document.querySelector('.out-1').innerHTML = event.touches.lenght;
   document.querySelector('.out-2').innerHTML += 'work' + " ";
}


//!------------------------------------------------------------------------------------
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

function t2() {

}

// ваше событие здесь!!!