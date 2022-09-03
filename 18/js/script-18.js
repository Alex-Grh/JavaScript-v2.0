/*
!String.prototype.split()
Сводка
Метод split() разбивает объект String на массив строк путём разделения строки указанной 
подстрокой.

Синтаксис
str.split([separator[, limit]])
Параметры
separator
Необязательный параметр. Указывает символы, используемые в качестве разделителя внутри 
строки. Параметр separator может быть как строкой, так и регулярным выражением. 
Если параметр опущен, возвращённый массив будет содержать один элемент со всей строкой. 
Если параметр равен пустой строке, строка str будет преобразована в массив символов.
limit
Необязательный параметр. Целое число, определяющее ограничение на количество найденных 
подстрок. Метод split() всё равно разделяет строку на каждом сопоставлении с разделителем 
separator, но обрезает возвращаемый массив так, чтобы он содержал не более limit элементов.
Описание
Метод split() возвращает новый массив.

Если разделитель separator найден, он удаляется из строки, а подстроки возвращаются 
в массиве. Если разделитель опущен, массив будет содержать только один элемент, состоящий 
из всей строки. Если разделитель является пустой строкой, строка str будет преобразована 
в массив символов.
*/

// Строку можно разбить на массив с помощью метода split()

let a = 'hello, hi, mahai';
console.log(a);
console.log(a.split(',')); // это метод и необходимо указывать круглые скобки split()


/*
!Array.prototype.join()
Сводка
Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
Синтаксис
arr.join([separator])
Параметры
separator Необязательный
Определяет строку, разделяющую элементы массива. В случае необходимости тип разделителя 
приводится к типу Строка. Если он не задан, элементы массива разделяются запятой ','. 
Если разделитель - пустая строка, элементы массива ничем не разделяются в возвращаемой строке.
Возвращаемое значение
Строка, содержащая все элементы массива. Если arr.length == 0, то будет возвращена 
пустая строка.

Описание
Преобразует все элементы массива в строки и объединяет их в одну большую строку. 
Элемент массива с типом undefined или null преобразуется в пустую строку.
Примеры
Соединение массива четырьмя различными способами
В следующем примере создаётся массив a с тремя элементами, затем они четыре раза 
объединяются в строку: с использованием разделителя по умолчанию, запятой с пробелом, 
плюса, окружённого пробелами, и пустой строки.

var a = ['Ветер', 'Дождь', 'Огонь'];
var myVar1 = a.join();      // присвоит 'Ветер,Дождь,Огонь' переменной myVar1
var myVar2 = a.join(', ');  // присвоит 'Ветер, Дождь, Огонь' переменной myVar2
var myVar3 = a.join(' + '); // присвоит 'Ветер + Дождь + Огонь' переменной myVar3
var myVar4 = a.join('');    // присвоит 'ВетерДождьОгонь' переменной myVar4
*/

let b = [1, 2, 3];
console.log(b);
console.log(b.join('-'));

/*
!Array.prototype.forEach()
Интерактивный пример
Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

Синтаксис
arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);
Параметры
callback
Функция, которая будет вызвана для каждого элемента массива. Она принимает от 
одного до трёх аргументов:
currentValue
Текущий обрабатываемый элемент в массиве.
indexНеобязательный
Индекс текущего обрабатываемого элемента в массиве.
arrayНеобязательный
Массив, по которому осуществляется проход.
thisArg
Необязательный параметр. Значение, используемое в качестве this при вызове 
функции callback.
Возвращаемое значение
undefined.

Описание
Метод forEach() выполняет функцию callback один раз для каждого элемента, 
находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых 
или пропущенных элементов массива. Однако, она будет вызвана для элементов, 
которые присутствуют в массиве и имеют значение undefined.

Функция callback будет вызвана с тремя аргументами:

значение элемента (value)
индекс элемента (index)
массив, по которому осуществляется проход (array)
Примеры
Нет операции для неинициализированных значений (разреженные массивы)
const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach((element) => {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// комментарий: как вы видите пропущенное значение между 3 и 7 не вызывало функцию callback.
*/
// forEach невозвращает нового массива как map и filter он просто применяет функцию а как располагаете данные уже решаем сами
// forEach дает возможность перебора массива и преминения к нему функции
// forEach неизменяет предыдущий массив а просто манипулирует им и преминяем его к нужным нам элементам
let b01 = [8, 9, 7];
b01.forEach(function (elem, index) {
   console.log(index); // выводим индекс массива
   console.log(elem * 2); // выводим элемент массива
   console.log('--');
});
console.log(b01);