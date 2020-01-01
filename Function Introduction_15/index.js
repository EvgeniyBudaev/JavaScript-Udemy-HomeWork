/*
1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

Если нет ни одного аргумента, вернуть ноль: multiply() // 0
*/

function multiply() {
  let res = 1;
  if (arguments.length === 0) return 0;

  for (let i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i])) {
      res *= arguments[i];
    }
  }
  return res;
}

const result1 = multiply(1, 2, 3);
console.log(result1);

/*
2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
*/

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

const result2 = reverseString("test");
console.log(result2);

/*
3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 

getCodeStringFromText(‘hello’) // “104 101 108 108 111” 

подсказка: для получения кода используйте специальный метод 
*/

function getCodeStringFromText(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    output += str.charCodeAt(i) + " ";
  }
  return output.trim();
}

const result3 = getCodeStringFromText("hello");
console.log(result3);

/*
4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
*/

function gameCheckNumber(num) {
  if (num < 1 || num > 10) {
    console.log("Функция принимает число от 1 до 10");
    return;
  }

  const random = Math.ceil(Math.random() * 10 + 1);
  console.log(random);
  if (random === num) {
    console.log("Winner");
  } else {
    console.log("Lost");
  }
}

gameCheckNumber(5);

/*
5. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый 
  элемент, а возвращает массив из оставшихся значений.
*/

function changeCollection() {
  let res = [];
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].shift();
    res.push(arguments[i]);
  }
  console.log(res);
  return res;
}

changeCollection([2, 3, 4], [5, 78, 9, 43], [23, 45, 74, 35]);

/*
6. Создать функцию, которая фильтрует пользователей.
*/

const users = [
  {
    id: 1,
    name: "Tom",
    age: 30,
    gender: "male"
  },
  {
    id: 2,
    name: "Julia",
    age: 20,
    gender: "female"
  },
  {
    id: 3,
    name: "Jerry",
    age: 40,
    gender: "male"
  },
  {
    id: 4,
    name: "Anna",
    age: 15,
    gender: "female"
  },
  {
    id: 5,
    name: "Mark",
    age: 35,
    gender: "male"
  },
  
];

function filterUsers(arr, key, value) {
  let res = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].gender === value) {
  //     res.push(arr[i]);
  //   }
  // }
  for (item of arr) {
    if (item[key] === value) {
      res.push(item);
    }
  }
  console.log(res);
  return res;
}

filterUsers(users, "gender", "male");
