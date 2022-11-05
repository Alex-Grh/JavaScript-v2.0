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

/*
String.prototype.trim()
Сводка
Метод trim() удаляет пробельные символы с начала и конца строки. Пробельными символами в этом 
контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный пробел 
   и прочие) и все символы конца строки (LF, CR и прочие).

Синтаксис
str.trim()
Описание
Метод trim() возвращает строку с вырезанными пробельными символами с её концов. Метод trim() не 
изменяет значение самой строки.
*/

   let user = {
      username: 'Djek',
      email: 'exampl@gmail.com',
      _password: '', //qwerty
      set password (pass) { 
         this._password = pass.trim();
       },
       get password () {
         return this._password;
       } 
   } 
   user.password = 'Hello';
console.log(user);
console.log(user.password);
console.log(user.password.length);


   let user2 = {};
   user2.__proto__ = user; // user2 наследуется от user
   user2.username = 'Privet';
   user2.password = '  123  345';
   console.log('---------------------------');
   console.log(user2.__proto__.username);
   console.log('---------------------------');
   console.log(user2);
   console.log(user2.password);
   console.log(user2.email);

// user2.photo = 'Djek.jpeg';
//    console.log(user);
   // console.log(user2);
//    console.log(user2.username);
 
 
 
 
 //!--------------------------------------------------------------------------------------------------------
 
 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его 
//  основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных 
//  файлах. Имена классов с большой буквы.

class Goods {
   constructor(name, amount, image, count) {
      this.name = name;
      this.amout = amount;
      this.image = image;
      this.count = count;
   }
   draw() {
		let div = document.createElement('div');
		let n = document.createElement('p');
		n.innerText = this.name;
		div.append(n);
		let img = document.createElement('img');
		img.src = this.image;
		div.append(img);
		let a = document.createElement('p');
		a.innerText = this.amount;
		div.append(a);
		let c = document.createElement('p');
		c.innerText = this.count;
		div.append(c);
		return div;
	}
}
let good = new Goods('Car', 50, 'https://dmrentalcar.ae/storage/catalogs/1-Lamborghini%20Urus%202021.jpg', 100);

document.querySelector('.out-3').append(good.draw());
// console.log(document.querySelector('.out-3').append(good.draw()));
 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

 
 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, 
//  ценой - в указанный элемент (дозапись).

 
 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для 
//  вывода товара на страницу в блок out-4.
let goods2 = new Goods('wear', 50, 'https://cdn3.iconfinder.com/data/icons/summer-117/128/summer-33-128.png', 300);
let g2 = goods2.draw();
document.querySelector('.out-4').append(g2);

 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное 
//  true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.
class Goods2 extends Goods {
	constructor(name, amount, image, count, sale) {
		super(name, amount, image, count);
		this.sale = sale;
	}
	draw() {
		let div = super.draw();
		if (this.sale) {
			let p = document.createElement('p');
			p.innerHTML = 'sale';
			div.append(p);
		}
		return div;
	}
}

 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.
 let goods3 = new Goods('wear1', 100, 'https://cdn3.iconfinder.com/data/icons/summer-117/128/summer-33-128.png', 300, true);
 let g3 = goods3.draw();
 document.querySelector('.out-6').append(g3);

 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.
 class Valid {
	constructor(email, password,) {
		this.email = email;
		this.password = password;
		this.isValid = false;
	}
	validate() {
		if (this.password.length >= 6) {
			this.isValid = true;
		}
		else {
			this.isValid = false;
		}
		return this.isValid;
	}
}
 
 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
 let valid = new Valid("Hello", '87454');
 valid.validate();
 console.log(valid.isValid)
 
 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
 let valid1 = new Valid("Hello", '7856124');
 valid1.validate();
 console.log(valid1.isValid);
 
 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
 class Valid2 extends Valid {
	constructor(email, password, emailError, passwordError) {
		super(email, password, emailError, passwordError);
		this.emailError = '';
		this.passwordError = '';
	}
	validate() {
		super.validate();
		if (this.isValid == false) {
			this.passwordError = 'min length 6';
			return false;
		}
		if (this.email == '') {
			this.isValid = false;
			this.emailError = 'email empty';
			return false;
		}
		return true;
	}
}
 
 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
 let valid2 = new Valid2("", '785612412');
 valid2.validate();
 console.log(valid2)
 
 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
 let valid3 = new Valid2("Yevhenii@gmail.com", '785612412');
 valid3.validate();
 console.log(valid3)