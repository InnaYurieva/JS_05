/* Задание 6
Напиши скрипт со следующим функционалом:  
При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt. */
/* let input = Number(prompt("Введите число"));

const numbers = [];
let total = 0;

while (input) {
  numbers.push(input);
  input = Number(prompt("Введите число"));
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  }
}

console.log(numbers);

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  total += element;
  console.log(total);

}
alert(`Общая сумма чисел равна ${total}`); */

//input = Number(prompt("Введите число"));

/* const checkValid = (input) =>
  typeof Number(input) === "number" && !Number.isNaN(Number(input));


//Решение Миши
let input;
const numbers = [];

while (typeof input !== "null") {
  input = prompt("Введите число");
  if (!input) break;
  if (checkValid(input)) {
    numbers.push(Number(input));
  } else {
    alert("Вы ввели не число!");
  }
}

if (numbers.length > 0) { */
// const result = numbers.reduce((acc, el) => (acc += el), 0);
// console.log(`Общая сумма чисел равна ${result}`);
/* 
  let tolal = 0;
  for (let i = 0; i < numbers.length; i++) {
    tolal += numbers[i];
  }
  console.log(`Общая сумма чисел равна ${tolal}`);
} else {
  console.log("Вы ничего не ввели!");
} */