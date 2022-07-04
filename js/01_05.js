//Написати метод every який приймає масив і ф-ю callback (в якій ми будемо робити різні перевірки) Цей метод повертає true якщо кожен елемент масиву пройшов перевірку з callback. Якщо хоча б один елемент не проходить перевірку то повертає false, callback приймає елемент масиву

/* const every = (arr) => {
    return arr.every(elem => elem < 10)
}
console.log(every([1,2,3,4,5]))
console.log(every([2,45,67,34])) */

//  РЕШЕНИЕ 
const every = (arr, func) => func(arr)
const callback = (arr) => arr.every(elem => elem < 10)


console.log(every([1,2,3,4,5], callback));  // true (перевіряємо чи елементи < 10)
console.log(every([2,45,67,34], callback));  // false (перевіряємо чи елементи > 10)