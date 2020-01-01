/*
1.  Создать объект с розничной ценой и количеством продуктов. Этот
объект должен содержать метод для получения общей стоимости
всех товаров (цена * количество продуктов)
*/

let prod1 = {
  price: 20,
  counts: 100,
  getTotalPrice(){
    return this.price * this.counts;
  }
}

/*
2.  Создать объект из предыдущей задачи. Создать второй объект,
который описывает количество деталей и цену за одну деталь. Для
второго объекта нужно узнать общую стоимость всех деталей, но
нельзя создавать новые функции и методы. Для этого
“позаимствуйте” метод из предыдущего объекта.
*/

let prod1 = {
  price: 20,
  counts: 100,
  getTotalPrice(){
    return this.price * this.counts;
  }
}

let prod2 = {
  price: 10,
  counts: 50,
}

prod1.getTotalPrice.call(prod2);

/*
3.  Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes
*/

let sizes = {
  width: 5, 
  height: 10,
getSquare = function(){
  return this.width * this.height;
}};

getSquare.call(sizes);

/*
4.  let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно
было вызвать getElementHeight() и получить 25.
*/

let element = {
  height: 25,
  getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // undefined
