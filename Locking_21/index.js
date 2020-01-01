/*
1.  Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
*/

function minus(num1 = 0) {
  return function(num2 = 0) {
    return num1 - num2;
  };
}

/*
2.  Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)
*/

function multiplyMaker(num1) {
  return function(num2) {
    return (num1 *= num2);
  };
}

const multiply = multiplyMaker(2);

/*
3.  Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5
*/

const module = (function() {
  let str = "";

  function setString(value = "") {
    str = String(value);
    return str;
  }

  function getString() {
    return str;
  }

  function getStringLength() {
    return str.length;
  }

  function reverseString() {
    return str
      .split("")
      .reverse()
      .join("");
  }

  return {
    setString,
    getString,
    getStringLength,
    reverseString
  };
})();
