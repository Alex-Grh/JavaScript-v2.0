window.addEventListener('storage', function (e) {
console.log('change');
document.querySelector('.out').textContent = localStorage.getItem('b1');
});

// LocaL Storage - хранилище данных которое присутствует в браузере
localStorage.setItem('data', 5) //Ключ (Key) = 'data' / Значение  (Value)  = 5
console.log(localStorage.getItem('data'));

const a = [3, 4, 5];
// localStorage.setItem('a', a); // даем ключ 'a' и имя массива a
localStorage.setItem('a', JSON.stringify(a)); 
let b = localStorage.getItem('a'); // получаем его в переменную b
b = JSON.parse(b);
console.log(b);
console.log(b[0]);
// Проверим тип полученных данных
console.log(typeof b); // Получаем string
console.log(b[1]);
// Когда сохраняем массив в localStorage он преобразуется в строку
// Чтобы получить массив необходимо преобразовать в JSON строку

// Тоже самое будет если работать с массивом ассициативным
const c = {
   hello: 5,
   k: 2,
   4: 'hi'
};
// localStorage.setItem('a', a); // даем ключ 'a' и имя массива a
localStorage.setItem('c', JSON.stringify(c)); 
let d = localStorage.getItem('c'); // получаем его в переменную b
d = JSON.parse(d);
console.log(d);
// Проверим тип полученных данных
console.log(typeof d); // Получаем string

//localStorage можно делать еорзину  интернет магазина. 
// Получаем возможность манипулировать данными с другой страницы.
// Подьзователь изменил корзину на одной странице а поменялось на всех
// Получаем возможность связывать страницы через такое взаемодействие localStorage
// Очистка remuve перезаписать localStorage.clear();




// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
}

// ваше событие здесь!!!