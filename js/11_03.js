/* Задание 11.
 Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах */
const getTemperature = (celsius) => {
  let result = parseInt(celsius) * 1.8 + 32
  return result
}
console.log(getTemperature(2));
//===========================================================