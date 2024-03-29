// Замыкания это следствия работы функции в JavaScript
// Если мы говорим о замыканиях мы говорим о функциях

function one() {
   //переменные объявлены внутри блока называются локальными они доступны только внутри блока
   let a = 8;
   return a * 12;
}
// console.log(a); // неработает
console.log(one());

console.log("-------------------------------------------------------------------------");

// есть переменные глобальные это переменные объявлены за пределами блока по отнашению данного блока
let a1 = 8;
function one1() {
   return a1 * 12;
}
console.log(a1); // работает
console.log(one1());

console.log("-------------------------------------------------------------------------");

// Как сделать счетчик на странице
// Чтобы сделать замыкание и данную переменную больше никто не переопределил нужно обкрнуть еще раз в функцию
function t1 () {
   let a2 = 0;
   return function () {
      a2 = a2 + 1;
      return a2;
   }
}
let b = t1();
let c = t1();


console.log(b);
console.log("-------------------------------------------------------------------------");
console.log(b());
console.log(b());
console.log(b());
console.log("-------------------------------------------------------------------------");
console.log(c());
console.log(c());
console.log(c());




