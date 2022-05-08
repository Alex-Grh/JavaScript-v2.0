// let a = 6;
// if (a > 9) {
//    console.log('Yes');
// } else {
//    console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');
button.onclick = () => {
   let num = +input.value;
   if (num >= 16 && num < 60) {
      console.log('Welcom');
   } else if (num > 60) {
      console.log('Ты точно сюда?');
   }
   else {
      console.log('Ты не пройдешь!');
   }
   switch (num) {
      case 15:
         console.log('Потерпи');
         break;
      case 16:
         console.log('Можно');
         break;
      default:
         console.log('Ok');
   }
}

// Домашнее задание
// Task 1
/*
При нажатии кнопки b-1 срабатывает функция f1. 
Функция должна прочитать содержимое i-1 и сравнить 
его с числом 4 (сравнение ==). Результат сравнения - true 
или false выведите в out-1.
*/