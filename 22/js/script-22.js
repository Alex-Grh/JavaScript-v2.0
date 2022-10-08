//  Task 0
let a = 5;
a = a * 2;
// пытаемся запустить (попробовать чтото выполнить)
try {
   document.querySelector('.test').innerHTML = a; //!
}
//ловить ошибки
catch (err) {
   console.log(err);
   console.log('1');
}

console.log(a);
t1();
function t1() {
   console.log('hello');
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