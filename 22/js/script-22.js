//  Task 0
let a = 5;
a = a*2;
try { // пытаемся запустить (попробовать чтото выполнить)
   document.querySelector('.test').innerHTML = a; //!
}
catch(err) { //ловить ошибки
console.log('1');
}


//!-----------------------------------------------------------------------------
//  Task 1
// Добавьте в код функции try catch так, чтобы вместо ошибки выводилось 
// в out-1 цифра 1.


function t1() {
   // тут добавляете try
   let a = 22;
   let c = a + d;
   // тут catch
   // .. и вывод
}

document.querySelector('.b-1').onclick = t1;