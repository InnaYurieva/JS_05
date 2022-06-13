/* Задание 1
Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].
Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
const logItems = function(array) {
  твой код
}; */

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

//РЕШЕНИЕ
/* const logItems = function(array) {
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        console.log((index+1) + ' ' + element);

    }
  };

  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);  */
//======================================================================

/* Задание 2
Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.
const calculateEngravingPrice = function(message, pricePerWord) {
  
};

Вызовы функции для проверки работоспособности твоей реализации. */

/* const calculateEngravingPrice = function(message, pricePerWord) {
    let arr = message.split(' ')
    return arr.length * pricePerWord

  };

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus', 10,
),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); */ // 120
//================================================================================
/* Задание 3
Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
const findLongestWord = function(string) {
  
}; */
//Вызовы функции для проверки работоспособности твоей реализации.

//РЕШЕНИЕ
/* const findLongestWord = function(string) {
    let arr = string.split(' ');
    let sort = arr.sort((a, b) => b.length - a.length);
    return arr[0]
  }  */

/*   const findLongestWord = function(string) {
    let arr = string.split(' ');
    let longestWord = arr.reduce((total, longest) => {
        if (longest.length > total.length) {
            return longest
        } else {
            return total
        }
    }, "")
    return longestWord
  }
 */

//console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
//console.log(findLongestWord("Google do a roll")); // 'Google'
//console.log(findLongestWord("May the force be with you")); // 'force'
//=================================================================================================================
/* Задание 4
Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
const formatString = function(string) {
твой код
};

Вызовы функции для проверки работоспособности твоей реализации. */

/* const formatString = function(string) {
if(string.length > 40) {
    return string.slice(0, 40) + '...'
} return string
}
 */
/* console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
); */
// вернется форматированная строка
//================================================================================
/* Задание 5
Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре. */

/* const checkForSpam = function(message) {
  let messageWiew = message.toLowerCase();
  console.log(messageWiew);
  if (messageWiew.includes('spam') || messageWiew.includes('sale')) {
    return true
  }
  return false
}; 
 */

//console.log(checkForSpam('Latest technology news')); // false
//console.log(checkForSpam('JavaScript weekly newsletter')); // false
//console.log(checkForSpam('Get best sale offers now!')); // true
//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
//=============================================================================
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

/* Задание 7 - дополнительное, выполнять не обязательно
Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:
проходить проверку на длину от 4 до 16-ти символов включительно
быть уникален, то есть отсутствовать в массиве logins
Разбей задачу на подзадачи с помощью функций.
Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.
Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.
Напиши функцию addLogin(allLogins, login) которая:
Принимает новый логин и массив всех логинов как параметры
Проверяет валидность логина используя вспомогательную функцию isLoginValid
Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!' */
/* Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.
Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
isLoginValid только проверяет валидный ли логин и возвращает true или false.
addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid. */
/* const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов'
  }
  else if (!isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!'
  } return 'Логин успешно добавлен!'
  }
; */

//console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
//console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
//console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
//console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
//=======================================================
/* Задание 8. Написати ф-ю capitalize яка буде приймати строку
 і буде вертати нову строку де кожне слово буде починатися з великої літери. */
//capitalize('the quick brown fox') // 'The Quick Brown Fox '
//РЕШЕНИЕ
/* let capitalize = (word) => {
  let arr = word.split(' ')
  let newArr = []
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    let result = element[0].toUpperCase() + element.slice(1, element.length);
    newArr.push(result)
  } return newArr.join(' ')
  

}
console.log(capitalize('the quick brown fox')); */
//=====================================================================
/* Задание 9.
 Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з голосними в англ алфавіті */
//countVowels('the quick brown fox') // 5
/*  let countVowels = (string) => {
let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let i of string) {
      if(vowels.includes(i)) {
        count += 1
      }
  } return count 

 } 
 console.log(countVowels('the quick brown fox')); */
//стащила из инэта
/*  function findVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(ltr => vowels.includes(ltr)).length;
}
console.log(findVowels('the quick brown fox')); 
//==================================================================
/* Задание 10. 
  Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і велечину базового шрифта ("20px") і вертає конвертований розмір в пікселях */

/* const getPixels = (rem, pixel) => {
  let result = parseInt(pixel) * parseInt(rem)
  return result
}
console.log(getPixels('2rem', '20px')); */
//===========================================================
/* Задание 11.
 Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах */
/* const getTemperature = (celsius) => {
  let result = parseInt(celsius) * 1.8 + 32
  return result
}
console.log(getTemperature(2)); */
//===========================================================
/* Задание 12
 Написати ф-ю <strong>calculateDogAge</strong> яка приймає один  параметр - вік собачки. Результатом її роботи буде вік перевединий на людський (1 рік собаки це 7 років в людини) */
/* const calculateDogAge = (dogs) => {
  let agePeople = dogs / 7 * 365
  let a = agePeople / 365
  let b = Math.floor(a) * 365
  let c = (agePeople - b)/30.417

  return `собаке ${Math.floor(a)} лет и ${Math.floor(c)} месяцев`

}
console.log(calculateDogAge(60));  */

//искала вариант решения в инэте попался такой
/* function jarh(x) {
  var y = 365;
  var y2 = 31;
  var remainder = x % y;
  var casio = remainder % y2;
  year = (x - remainder) / y;
  month = (remainder - casio) / y2;
  var result ="--- Лет ---" + year + "--- Месяцев ---" + month + "--- Дней ---" + casio;
  console.log(remainder) ;
  console.log(result) ;
  }
  console.log(jarh(2085)); */
//===========================================================
/* Задание 13
Написати ф-ю <strong>rgbToHex</strong> яка приймає колір в форматі rgb і повертає колір в форматі hex */
//первое решение из инэта
/* const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')
console.log(rgbToHex(0, 51, 255));  */
//второе решение из инэта
/* function rgb2hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
console.log(rgb2hex(126, 192, 238)); */
//пыталась решить так
//const rgbToHex = (red, blue, green) => {};
/* const rgb = (a) => {
  let arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    let arr = arrNumbers.toString()
    console.log(arr);
    let division = a / 16;
    let multiplication = Math.floor(division) * 16
    let remainder = a % multiplication
    return `${division} ${remainder}`
} 
console.log(rgb(126)); */

/* const rgb = (r, g, b) => {
  let resultR = r.toString(16)  
  let resultG = g.toString(16)
  let resultB = b.toString(16)
  return ` #${resultR}${resultG}${resultB}` 
};
console.log(rgb(150, 205, 205));

console.log((126).toString(16)); */
//===========================================================
/* Задание 14
Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи */

//const nonUniqueElements = (arr) => {
//console.log(arr.indexOf(10));
//console.log(arr.lastIndexOf(10));
//let a = [...new Set(arr)]
/*  let a = arr.filter((item, index) => {
    return index !== arr.indexOf(item) 
  })
  return a */

//РЕШЕНИЕ
/*   const nonUniqueElements = (arr) => {
    //console.log(arr.indexOf(10));
    //console.log(arr.lastIndexOf(10));
  let a = arr.filter((elem, index, array) => {
    return index !== array.indexOf(elem) || index !== array.lastIndexOf(elem)
  })
  return a
} */

/* const nonUniqueElements = (arr) => {
  let uniq = new Set();
  let uniqSum = 0;
  let numSum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!uniq.has(element)) {
      uniq.add(element);
      uniqSum += element;
    }
    numSum += element;
  }
  return uniqSum * 2 - numSum;
}; */

//console.log(nonUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]
//console.log(nonUniqueElements([1, 2, 3, 4, 5])); // []
//console.log(nonUniqueElements([5, 5, 5, 5, 5])); // [5, 5, 5, 5, 5]
//console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])); // [10, 9, 10, 10,9]
//===========================================================
/* Задание 15
Написати ф-ю median яка приймає масив і знаходить його медіану Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини. У
відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. Для масиву з парним числом елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, які знаходяться в середині масиву. В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву. */
/* 
const median = (arr) => {
  let a = Math.floor(arr.length / 2)
  
  let b = arr[arr.length / 2]
  let c = arr[arr.length / 2 - 1]
  if(arr.length % 2) {
    return arr[a] 
  }  return (b + c) / 2
}
 */
//console.log(median([1, 2, 3, 4, 5]));  // 3
//console.log(median([3, 6, 10, 15, 20, 99])); // 12.5
