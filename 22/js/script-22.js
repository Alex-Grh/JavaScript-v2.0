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

//  Task 2
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-2.

function t2() {
   let a = 4;
   let b = 5;
   document.querySelector('.out-2222222').innerHTML = a*b;

}

document.querySelector('.b-2').onclick = t2;