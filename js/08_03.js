/* Задание 8. Написати ф-ю capitalize яка буде приймати строку
 і буде вертати нову строку де кожне слово буде починатися з великої літери. */
//capitalize('the quick brown fox') // 'The Quick Brown Fox '


let capitalize = (word) => {
  let arr = word.split(' ')
  let newArr = []
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    let result = element[0].toUpperCase() + element.slice(1, element.length);
    newArr.push(result)
  } return newArr.join(' ')
  

}
console.log(capitalize('the quick brown fox'));
//=====================================================================