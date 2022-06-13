/* Задание 3
Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
const findLongestWord = function(string) {
  
}; */



 const findLongestWord = function(string) {
    let arr = string.split(' ');
    let sort = arr.sort((a, b) => b.length - a.length);
    return arr[0]
  } 

//это решение подсмотрела в интернете
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

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'
//=================================================================================================================