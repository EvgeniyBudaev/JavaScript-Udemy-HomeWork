/*
1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
*/

let value = "hidden";

if (value === "hidden") {
  value = "visible";
} else {
  value = "hidden";
}

// value = value === 'hidden' ? 'visible' : 'hidden';

/*
2. Используя if, записать условие:
 если переменная равна нулю, присвоить ей 1;
если меньше нуля - строку “less then zero”;
если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
*/

let num = 1;

if (num === 0) {
  num = 1;
} else if (num < 0) {
  num = "less then zero";
} else if (num > 0) {
  num *= 10;
}

/*
3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false
*/

let car = { name: "Lexus", age: 10, create: 2008 };

if (car.age > 5) {
  console.log("Need Repair");
  car.needRepair = true;
} else {
  car.needRepair = false;
}

/*
4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
*/

let item = { name: "Intel Core i7", price: "100$", discount: "15%" };

let price = parseFloat(item.price);
let discount = parseFloat(item.discount);
let isValid = !isNaN(discount) && !isNaN(price);

if (isValid) {
  item.priceWithDiscount = (price * (100 - discount)) / 100;
  console.log(item.priceWithDiscount);
}
