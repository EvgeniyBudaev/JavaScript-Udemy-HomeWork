/*
1.  Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
*/

function firstFunc(arr, handler) {
  let res = "New value: ";
  for (let i = 0; i < arr.length; i++) {
    res += handler(arr[i]);
  }
  return res;
}

const res1 = firstFunc(["hello", "my", "friend"], function(item) {
  return item[0].toUpperCase() + item.slice(1);
});

const res2 = firstFunc([10, 20, 30], function(item) {
  return item * 10 + " ";
});

console.log(res1);
console.log(res2);

/*
2.  Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 
*/

const isAllNumbers = [2, 3, 4, 5].every(function(num) {
  return typeof num === "number";
});

function every(arr, handler) {
  let res = true;

  for (let i = 0; i < arr.length; i++) {
    if (!handler(arr[i])) {
      return false;
    }
  }
  return true;
}

const isNum = every([2, 3, 4, 5], function(num) {
  return typeof num === "number";
});

console.log(isNum);
