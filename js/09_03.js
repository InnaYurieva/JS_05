/* Задание 9.
 Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з голосними в англ алфавіті  */
//countVowels('the quick brown fox') // 5
 let countVowels = (string) => {
let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let i of string) {
      if(vowels.includes(i)) {
        count += 1
      }
  } return count 

 } 
 console.log(countVowels('the quick brown fox'));
//стащила из инэта
/*  function findVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(ltr => vowels.includes(ltr)).length;
}
console.log(findVowels('the quick brown fox'));  */
//==================================================================