/*
1.  На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
*/

const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(num => {
  return {
    digit: num,
    odd: num % 2 ? true : false
  };
});

console.log(newArr);

/*
2.  Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
*/

const stringArr = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 }
];

function getStringFromArray(arr) {
  // const copyArr = arr.slice();
  // const sortedArr = copyArr.sort((prev, next) => prev.index - next.index);
  // const strFromArr = sortedArr.reduce((acc, current) => {
  //   return (acc += current.char);
  // },'');
  // return strFromArr;
  if (!Array.isArray(arr)) {
    return;
  }

  return arr
    .slice()
    .sort((prev, next) => prev.index - next.index)
    .reduce((acc, current) => (acc += current.char), "");
}

const result = getStringFromArray(stringArr);
console.log(result);

/*
3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}].  
*/

let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 }
];

function filterCollection(arr, min, max) {
  let res = arr.slice().sort((prev, next) => prev.price - next.price);

  return res.filter(product => product.price >= min && product.price <= max);
}

const result3 = filterCollection(products, 15, 30);
console.log(result3);
