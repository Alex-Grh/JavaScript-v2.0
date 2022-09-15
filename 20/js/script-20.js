// вешаем событие на инпут
// для input подходит onchange или oninput
// onchange сработает когда input потеряет фокус
// oninput сработает при любом изменении 

document.querySelector('.i-1').oninput = function (event) {
   console.log(1);
   console.log(event);
}
