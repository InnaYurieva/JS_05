/* Написати метод some який приймає масив і ф-ю callback. Цей метод поверне true якщо хоча б один елемент масиву пройже перевірку з callback callback приймає елемент масиву */
const some = (arr, func) => func(arr)
const callback = (arr) => arr.some(elem => elem < 10)

console.log(some([1,2,3,23,5], callback)); // true (перевіряємо чи елементи > 10)
console.log(some([12,45,67,34], callback)); // false (перевіряємо чи елементи < 10)
