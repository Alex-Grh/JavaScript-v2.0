let a = 'Dshon';
let b = '30';
let c = 'Lev';
//Массив это набор данных (объединенные данные)

//Создадим массив
// Чтобы обратиться к значению массива используетя индекс. Нумерация начинается с 0.
// В массиве могут содержаться разные типы данных
let d = ['Dshon', 30, 'lev'];
console.log(d[0]);
// Если наберем значение d[5] такого значения нет и выведется undefined
// Таким образом можем проверять есть такое значения или нет
console.log(d[5]);
// Выведем весь массив в консоль
console.log(d);
// Выведем свойство длина length массива. Длинна это количество данных введенных в масиве у нас 3 типа данных ['Dshon', 30, 'lev'];
console.log(d.length);

// Создадим пустой массив
// Массивы можно создавать константами но их содержимое можно легко менять
let e = [];

// Массивы часть 2
let a1 = 'Ivan'
let b67 = 43;
let iinNumber = 2324;
// Опишем знак зодиака
let zodiak = ['Kozerog', 1, 1, 19];
let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
console.log(zodiak);
console.log(man);
//Выводим длинну массива
console.log('Dlina massiva');
console.log(zodiak.length);
console.log(man.length);

// Обращаемся к переменной и элементу внутри массива
// Как вывести любой элемент массива указываем имя переменной и в квадратных скобках индекс 
console.log(man[4]);

// Если необходимо заменить какойто элемент массива
man[0] = 'Sergey';
console.log(man);

//Как поменять местами значения массива 1 и 4 (это элемент [0] и [3])
let a12 = [1, 2, 3, 4];
console.log(a12);
// Создаем временную переменную куда кладем значения 0-го элемента
let t = a12[0];// Хранится в элементе [0] значение 1.
// Теперь запишем 4-ку эл[3] на место 1-цы эл[0].
a12[0] = a12[3];
// Теперь перезапишем 4-ку эл[3]. Присвоем ему 1-цы эл[0].
a12[3] = t;
console.log(a12);

//Когда массив очень длинный и непонятно какой номер элемента то необходимо ставить длинну масива 
// Ставим -1 так как отсчет начинается с 0 и ненайдет последнийэлемент
let a13 = [1, 2, 3, 4];
console.log(a13);
a13[0] = a13[a13.length - 1];
a13[a13.length - 1] = t;
console.log(a13);

// Обращение к несуществующему элементу массива. Выводит undefined
console.log(a13[888]); // undefined 

// Выводим массив на страницу с помощью innerHTML
// Способ 1 с помощью циклов. Этот способ нагружает комп так как идет каждый раз обращение к элементу out-01
for (let i = 0; i < a12.length; i++) {
   document.querySelector('.out-01').innerHTML += a12[i] + ' ';
}

// Другой способ записи. Этот способ более производительный
let out = ''; //Строка куда будем складывать вывод
// Запускаем цикл
for (let i = 0; i < a13.length; i++) {
   out += a13[i] + '_';
}
// После цикла выводим out
document.querySelector('.out-02').innerHTML = out;


//Чаще всего ненужно выводить все элементы масива
//Выводим только четные числа
let out01 = ''; //Строка куда будем складывать вывод
// Запускаем цикл
for (let i = 0; i < a13.length; i++) {
   if (a13[i] % 2 == 0) {
      out01 += a13[i] + ' . ';
   }
}
// После цикла выводим out
document.querySelector('.out-03').innerHTML = out01;


// Как найти мимнимальный или максимальный элемент в массиве
//max Находим максимальное значение
let b01 = [4, 2, 5, 23, 43, 1, 2, 6, 12];
let max = b01[0]; // лежит значение 4
for (let i = 0; i < b01.length; i++) {
   if (b01[i] > max) {
      max = b01[i];
   }
}
console.log('max = ' + max);

//min находим минимальное значение
let b02 = [132, 155, 345, 563, 463, 323, 541, 643, 163, 121, 112,];
let min = b02[0]; // лежит первое значение 3
for (let i = 0; i < b02.length; i++) {
   if (b02[i] < min) {
      min = b02[i];
   }
}
console.log('min = ' + min);

//sum Нахождение суммы. Как найти сумму всех значений массива
let b03 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < b03.length; i++) {
   sum = sum + b03[i];
}
console.log('sum = ' + sum);