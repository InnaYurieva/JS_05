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


//остановилась на таком решении
const rgb = (r, g, b) => {
  let resultR = r.toString(16)  
  let resultG = g.toString(16)
  let resultB = b.toString(16)
  return ` #${resultR}${resultG}${resultB}` 
};
console.log(rgb(150, 205, 205));

//console.log((126).toString(16));
//===========================================================