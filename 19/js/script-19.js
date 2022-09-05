// Task 0 ============================================

// Вешаем событие onclick на one
document.querySelector('.one').onclick = function (event) {
   console.log(event); //содержит всю информацию о событии
   console.log('click');
}

// Вешаем событие onclick на two
document.querySelector('.two').onclick = function () {
   console.log('ckick2');
}

// Вешаем событие двойной клик ondblclick на three
document.querySelector('.three').ondblclick = function () {
   console.log('ckick3');
}

// Событие oncontextmenu (вызывается меню правой кнопркой мыши)
document.querySelector('.three').oncontextmenu = function () {
   console.log('right button');
   return false; //блокируем меню браузера
}

// Событие мыши onmousemove. Пока происходит движение мыши в заданом квадрате выводим в консоль количество действий
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
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна 
возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется 
в out-1.  */

function t1() {
   document.querySelector('.out-1').innerHTML = document.querySelector('.div-1').innerHTML;  
   
   // let text = document.querySelector(".div-1").textContent;
   //  document.querySelector(".out-1").textContent = text;
   //  return text;
}
// ваше событие здесь!!!
document.querySelector('.div-1').onclick = t1;

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. 
Функция должна возвращать true или false в зависимости от того, нажата ли 
клавиша alt или нет в момент клика. Также, выводите на экран результат. 
Вывод осуществляется в out-2. */

function t2() {
   let a2 = document.querySelector('.out-2').innerHTML;
   let b2 = document.querySelector('.div-2').innerHTML;
   a2 = b2.altKey;
}

// ваше событие здесь!!!
document.querySelector('.div-2').onclick = t2;