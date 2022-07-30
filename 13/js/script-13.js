//13 JavaScript v. 2.0 Ассоциативные массивы
/* 
!В чем отличия Ассоциативных массивов от обычных
!В обычном массиве индекс выступает только число в ассоциативном как число 
!так и строка
*/
// Длину массива (length) ненадо искать чтобы вывести весь массив в замен появлчетсч такое пончтие как (ключ в) key in
//! Ключ повторяться неможет. При повторениии ключа затирается предыдущее значение
// Индексы (ключи) могут быть числовые 0, 1, 2, 3... как и в обычных массивах
// Ассоциативные массивы также могут быть двухмерными. (Массив в массиве)
// Ассоциативные массивы  могут быть в обычных массивах (в массивах с квадратными[] скобками)

const a = {
   'a': 5,
   'b': 'Hello',
   'z2': 'Hi',
   y43: 1999, // Ключи можно писать без кавычек только если слово цельное без пробелов. В случае пробела будет ошибка и надо брать ключ в кавычки
   'villa de': 3040,
}; // Вывод фигурными скобками. Сперва индекс потом значения
console.log(a);
console.log(a.z2); // вывод елемент массива через точку сперва переменная a потом точка индекс .z2

// или через [квадратные скобки] если название ключа лежит в другой переменной
let k = 'y43';
console.log(a[k]);

// присвоить элемент массива можно также
a.yyyy = 555;
console.log(a);

// как заменить значение массива
a.b = 'uuu';

// как вывести на страницу
// document.querySelector('.out-01').innerHTML = a; // такой способ выводит [object Object] он нам неподходит

//! Так выводим все индексы (ключ) массива
// let out01 = '';
// for (let key in a) {
//    out01 += key + ' ';
// }
// document.querySelector('.out-01').innerHTML = out01;

//! Выводим значения массива
// let out01 = '';
// for (let key in a) {
//    out01 += a[key] + ' '; //Получаем доступ к элементу (значению) через квадратные скобки
// }
// document.querySelector('.out-01').innerHTML = out01;

//! Если необходимо вывести и индекс (ключ) и значения массива

let out01 = '';
for (let key in a) {
   out01 += key + ' --- ' + a[key] + '<br>';
}
document.querySelector('.out-01').innerHTML = out01;

//! Как удалить значение элементеа в массиве
delete a.a; // удалим массив "а" и внем ключ "а"
delete a.y43; // удалим массив "а" и внем ключ "y43"  

// Обращение к несуществуещему элементу возвращает undefined но не ошибку
console.log(a.z22);


//----------------------------------------------------------------------------

// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 
// значение сохраненное под ключем two из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

function f1() {
   let a1 = {
      'one': 15,
      'two': 16,
      'five': 20
   };
   document.querySelector('.out-1').innerHTML = a1.two;
   return a1.two;
}
document.querySelector('.b-1').onclick = f1;

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 
// значение hi из массива a2. Возвратите это значение.
// Вывод, как и в предыдущем задании пишем "руками"

function f2() {
   let a2 = {
      'one': 'hello',
      'two': 'mahai',
      'five': 'hi'
   };
   return a2.five;
}
document.querySelector('.b-2').onclick = () => {
   document.querySelector('.out-2').innerHTML = f2();
}

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 
// значение hi из массива a3. Возвратите это значение. Вывод - через пробел.
// Вывод, как и в предыдущем задании пишем "руками"
function f3() {
   let a3 = {
      'one': 'hello',
      'two': 'mahai',
      'five': 'hi',
      'test': 21,
      'odd': 'hi',
      'mix': 'mix'
   };
   return a3.five + ' ' + a3.odd;
}
document.querySelector('.b-3').onclick = () => {
   document.querySelector('.out-3').innerHTML = f3();
}

// Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 
// при нажатии кнопки b-4. Формат вывода - ключ пробел значение перенос 
// строки +' <br>'. Функция должна возвращать строку в указанном формате вывода.
// Обратите внимание на пробел перед br!!!!!!!!!

let a4 = {
   "one": "hello",
   "two": "mahai",
   "five": "hi",
   "test": 21,
   "odd": "hi",
   "mix": "mix"
};

function f4() {
   let out = '';
   for (let key in a4) {
      out += key + ' ' + a4[key] + ' <br>';
   }
   return out;
   // return out;   
}

document.querySelector('.b-4').onclick = () => {
   document.querySelector('.out-4').innerHTML = f4();
}


// Task 5
// Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем 
// функцию f5, которая принимает массив как параметр и выводит его в формате 
// указанном в функции в указанный блок (как второй параметр).


function f5(arr, block) {
   let out = '';
   // цикл
   for (let key in arr) {
      // формат вывода `${key} : ${arr[key]} <br>`;
      out += `${key} : ${arr[key]} <br>`;
   }
   // тут вывод в блок block
   return document.querySelector(block).innerHTML = out;
}
// давайте протестируем f5
document.querySelector('.b-5').onclick = () => {
   let a5 = {
      "one": 1,
      "two": 2
   }
   f5(a5, '.out-5');
}

/*
В .out-5 это div элемент. Должен показываться на браузере. – 
Asylbek
 16 ноя 2021 в 8:17
"Не выводит результат в .out-5. Почему?" --- потому что ты нигде не используешь методы для вывода в HTML? 
Вот что по-твоему должна значить запись return '.out-5'; ? – 
Алексей Шиманский
 16 ноя 2021 в 8:17
покажи в своем коде место, где ты получаешь этот элемент и выводишь в него какие-нибудь данные – 
Grundy
♦
 16 ноя 2021 в 8:17
Оно отсутствует. Не знаю как правильно написать вывод. – 
Asylbek
 16 ноя 2021 в 8:24
'.out-5' это просто строка. Я не вижу в коде как из неё получается div и как что-то в этот div выводится. – 
Alexey Ten
 16 ноя 2021 в 8:24
@Asylbek возвращай не строку, а элемент по этому классу и присваивай ему текст return document.querySelector(block).innerHTML=out; – 
Алексей
 16 ноя 2021 в 8:38
Спасибо сработало. Но до этого я сам догадался, но оно сработало. Оказывается нужно писать до return block; – 
Asylbek
 16 ноя 2021 в 8:40
*/

//! Task 6
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. 
// Функция должна получать из i-61 ключ, а из i-62 значение и добавлять 
// его в массив a6. После этого, с помощью функции f5 выводите массив a6 
// в out-6.

let a6 = {
   "b": 17,
   "e": 22
};

function f6() {

   let i61 = document.querySelector(".i-61").value; //ключ
   let i62 = document.querySelector(".i-62").value; //значение
   let out = '';

   a6[i61] = i62;
   console.log(a6);

   for (let key in a6) {
      out += key + ' ' + a6[key] + ' <br>';
   }
   document.querySelector('.out-6').innerHTML = out;

}

document.querySelector('.b-6').onclick = f6;

//! Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. 
// Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то 
// выводить 1 в out-7, если нет - 0.

// let a7 = {
//    "b": 17,
//    "e": 22
// };


// function f7() {
//    let i7 = document.querySelector(".i-7").value; //ключ
//    let out = '';
//       for (let key in a7) {
//       if (key === i7) {
//          out = 1;
//          break;
//       } else {
//          out = 0;
//       }
//    }

//    document.querySelector('.out-7').innerHTML = out
// }

// document.querySelector('.b-7').onclick = f7;


let a7 = {
   "b": 17,
   "e": 22
};


function f7() {
   let i7 = document.querySelector('.i-7').value;
   let out = '';

   if (a7[i7] !== undefined) {
      out = 1;
   } else {
      out = 0;
   }

   document.querySelector('.out-7').innerHTML = out;
}

document.querySelector('.b-7').onclick = f7;


/*
https://overcoder.net/q/2443/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D1%83%D0%B5%D1%82-%D0%BB%D0%B8-%D0%BA%D0%BB%D1%8E%D1%87-%D0%B2-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B5-javascript
Проверка, существует ли ключ в объекте JavaScript?
Как проверить, существует ли конкретный ключ в объекте или массиве JavaScript?

Если ключ не существует, и я пытаюсь получить к нему доступ, вернет ли он false? Или выбросить ошибку?
Проверка неопределенности не является точным способом проверки наличия ключа. Что делать, если ключ существует, но значение фактически undefined?

var obj = { key: undefined };
obj["key"] != undefined // false, but the key exists!
Вместо этого вы должны использовать оператор in:

"key" in obj // true, regardless of the actual value
Если вы хотите проверить, нет ли ключа, не забудьте использовать скобки:


!("key" in obj) // true if "key" doesn't exist in object
!"key" in obj   // ERROR!  Equivalent to "false in obj"
Или, если вы хотите особенно проверить свойства экземпляра объекта (и не наследуемые свойства), используйте hasOwnProperty:

obj.hasOwnProperty("key") // true
Для сравнения производительности между методами, которые находятся in, hasOwnProperty и ключ не undefined, см. Этот тест
*/

// Task 8
// Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. 
// Функция должна выводить значение в out-8, если ключ введенный в i-8 
// есть в массиве, если нет - 0.
let a8 = {
   'b': 17,
   'e': 22,
   'c': 34
};

function f8() {
   let i8 = document.querySelector('.i-8').value;
   let out = '';
   if (a8[i8] !== undefined) {
      for (let key in a8) {
         if (i8 == key) {
            out = a8[key];
         }
      }
   } else {
      out = 0;
   }
   document.querySelector('.out-8').innerHTML = out;
}
document.querySelector('.b-8').onclick = f8;

// Task 9
// Добавьте input .i-9. При нажатии b-9 выполняете функцию f9.
// Функция должна вывести в out-9 все ключи массива a9, которые содержат
// значение, равное значению в input.i-9. Вывод через пробел.
// Если значений - нет - то выводить пустую строку.
