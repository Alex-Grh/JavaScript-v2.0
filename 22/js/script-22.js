//  Task 0
let a001 = 5;
a001 = a001 * 2;
// пытаемся запустить (попробовать чтото выполнить)
try {
   document.querySelector('.test').innerHTML = a001; //!операция с ошибкой
}
//ловить ошибки. Если блок try выполнится то блок catch пропустится. Если в блоке try
// возникает ошибка то выполнение кода переходит в блок catch.
catch (err) {
   // alert('ошибка!');
   console.log(err);
   console.log('1');
}
//Если необходимо гарантировано выполнить в независимости была ошибка или нет какойто блок то создаем finally
finally {
console.log('Программа работает');
}

console.log(a001);
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
   try {
      let a = 22;
      let c = a + d;
      document.querySelector('.out-1').innerHTML = с;
   }
   catch (err) {
      // тут catch
      // .. и вывод
      document.querySelector('.out-1').innerHTML = 12;
      console.log('Ошибка');
   }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата 
// в out-2.

function t2() {
   
      let a = 4;
      let b = 5;
      try {
      document.querySelector('.out-2222222').innerHTML = a * b;
   }
   catch (err) {
      // тут catch
      // .. и вывод
      document.querySelector('.out-2').innerHTML = a * b;
      console.log('Ошибка');
   }
}

document.querySelector('.b-2').onclick = t2;

//  Task 3
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод 
// результата в out-3. Если его нет - создавайте в коде. 
// т.е. вы не знаете будет или нет он в html.

function t3() {
   let a = 4;
   let b = 5;
   try {
   document.querySelector('.out-3').innerHTML = a * b;
   }
   catch (err) {
      console.log(err);
      let out3 = document.createElement('div');
      out3.innerHTML = a * b;
      out3.classList.add('out-3');
      document.querySelector('.s-3').append(out3);
  }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Дана переменная a. В переменную делается push. Используя try catch 
// отловите ошибки если они есть. Если ошибка вывести в out-4 число 0. 
// Если не ошибка - то результирующий массив через пробел.

let a04 = [2,3,4];
let result = '';
// a04 = 5;

function t4() {
   try{
      a04.push(7);
  }
  catch (error) {
      a04 = 0;
      document.querySelector('.out-4').innerHTML = a04;
  }
  document.querySelector('.out-4').innerHTML = a04;
}

document.querySelector('.b-4').onclick = t4;

//  Task 5
// Добавьте try, catch, finnaly так, чтобы в out-5 выводился 0 при ошибки. 
// А в out-5-1 всегда выводилось слово 'finnaly';

function t5() {
   try{
   let p = document.querySelectorAll('p');
   p.push(3);
   }
   catch (err05) {
      a05 = 0;
      document.querySelector('.out-5').innerHTML = a05;
  }
  finally {
  document.querySelector('.out-5-1').innerHTML = 'finally';
  }
}

document.querySelector('.b-5').onclick = t5;
