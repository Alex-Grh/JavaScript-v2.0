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
// срабативает при нажатии других клавиш верх, вниз, влево, вправо, контрл, шифт

document.querySelector('.i-02').onkeydown = function (event) {
   console.log('---------- onkeydown ----------');
   console.log('charCode:' + event.charCode); // charCode - событие показывает код нажатой клавиши
   console.log('code:' + event.code); // code - событие показывает какая клавиша нажата
   console.log('key:' + event.key); // key - событие показывает какая клавиша нажата
   console.log('keyCode:' + event.keyCode); // keyCode - событие показывает код нажатой клавиши
   // console.log(event);
}