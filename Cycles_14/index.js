/*
1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
будут в верхнем регистре. Использовать for или while.
*/

const str = "i am in the udemy"; // => I Am In The Udemy
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i - 1] === " " || i === 0) {
    newStr += str[i].toLocaleUpperCase();
  } else {
    newStr += str[i];
  }
}
console.log(newStr);

/*
2. Дан объект:
let list = {
     name: ‘denis’,
     work: ‘easycode’,
     age: 29
}

Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
*/

let list = {
  name: "Zhenya",
  work: "developer",
  age: 33
};

for (let key in list) {
  if (typeof list[key] === "string") {
    list[key] = list[key].toLocaleUpperCase();
    console.log(list[key]);
  }
}
