 function myAlert(a,c,d) {
   
   let b = `<p class="${c}">${a}</p>`
   document.querySelector(d).innerHTML = b;
 }
 
 myAlert('Hi', 'red', '.test');
 myAlert('Hello', 'orange', '.test2');

 //Перепишем код на ООП

 /*
Определение классов
На самом деле классы — это "специальные функции", поэтому точно также, как вы определяете 
функции (function expressions и function declarations), вы можете определять и классы с 
помощью: class declarations и class expressions.

Объявление класса
Первый способ определения класса — class declaration (объявление класса). Для этого необходимо 
воспользоваться ключевым словом class и указать имя класса (в примере — «Rectangle»).

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

Что такое класс?
Итак, что же такое class? Это не полностью новая языковая сущность, как может показаться на первый взгляд.
Давайте развеем всю магию и посмотрим, что такое класс на самом деле. Это поможет в понимании многих сложных аспектов.

В JavaScript класс – это разновидность функции.

Взгляните:
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}
// доказательство: User - это функция
alert(typeof User); // function
 */
 
//!class пишутся с больщой буквы
/*
//! Вынесли этот class Alert  в отдельный файл
class Alert {
   constructor (a,c,d) {
      this.message = a;
      this.cssClass = c;
      this.out = d;
   }
   showAlert() {
      document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}
      ">${this.message}</p>`;
   }
   myAlert() {
      alert(this.message);
   }
}
*/

//! Наследников class Alert2 как можно вынести в отдельный файл так и оставить здесь в этом файле
/*
class Alert2 extends Alert {
   constructor(a,c,d,icon){
super(a,c,d);
this.icon = icon; //новое свойство
   }
   showIconAlert() {
      document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}
      "><span class="material-symbols-outlined">${this.icon}</span>${this.message}</p>`;
      
   }
   // Перезапишем myAlert
   myAlert() {
      alert('Hi'+ this.message);
   }
}
*/

let m = new Alert('My message', 'red', '.test');
console.log(m);
m.showAlert();
 let m2 = new Alert2('My message', 'red', '.test', 'settings');
 m2.showIconAlert();
 m2.myAlert(this.message);
 

//!--------------------------------------------------------------------------------------------------------
 //28 ООП часть 2. Прототипы.

/*
setter
Оператор set связывает свойство объекта с функцией, которая будет вызвана при попытке установить 
это свойство.

Синтаксис
{set prop(val) { . . . }}
{set [expression](val) { . . . }}

Описание
В JavaScript, сеттер можно использовать для выполнения функции, когда будет попытка изменения 
указанного свойства. Сеттеры используются чаще всего в сочетании с геттерами для создания одного 
из видов псевдо-свойства. Невозможно одновременно иметь сеттер для свойства, которое содержит 
фактическое значение.
*/

   let user = {
      username: 'Djek',
      _password: 'qwerty'
      set password (str) {
         this._password = pass.rtim();
       }
   }
   let user2 = {};
   user2.__proto__ = user; // user2 наследуется от user
user2.photo = 'Djek.jpeg';

   console.log(user);
   console.log(user2);
   console.log(user2.username);
 
 
 
 
 //!--------------------------------------------------------------------------------------------------------
 
 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его 
//  основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных 
//  файлах. Имена классов с большой буквы.
// function myGoods(name,amount) {
   
//    let b01 = `<p class="${name}">${amount}</p>`
//    document.querySelector(d).innerHTML = b01;
//  }
 
//  myGoods('.name', '.amount');
 
 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

 
 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, 
//  ценой - в указанный элемент (дозапись).

 
 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для 
//  вывода товара на страницу в блок out-4.


 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное 
//  true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.
  

 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.


 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.
  
 
 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
  
 
 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
  
 
 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
  
 
 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
  
 
 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
  