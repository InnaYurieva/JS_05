/* Задание 10. 
  Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і велечину базового шрифта ("20px") і вертає конвертований розмір в пікселях */

const getPixels = (rem, pixel) => {
  let result = parseInt(pixel) * parseInt(rem)
  return result
}
console.log(getPixels('2rem', '20px'));